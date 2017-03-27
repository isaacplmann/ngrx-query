# ngrx-query

`ngrx-query` is a library for querying and managing network state in [Angular (2+)](https://angular.io) applications that use [ngrx](https://github.com/ngrx/store).  It is a port of the [redux-query](https://github.com/amplitude/redux-query) library - many thanks to `redux-query` for coming up with a very useful library.  For an in-depth explanation of what problems `redux-query` (and, by extension, `ngrx-query`) solve, read [Introducing redux-query](https://amplitude.engineering/introducing-redux-query-7734e7215b3b).

Check out the [demo](https://isaacplmann.github.io/ngrx-query/) to see the final outcome, but the real power of this library is the reduction of boilerplate code.

With `ngrx-query` you can:

- Declare your network dependencies right next to your Angular components. Data is requested automatically when components mount. When components update and unmount, ~in-flight requests are automatically cancelled~ the subscription is automatically unsubscribed. TODO: check if in-flight requests really are cancelled.
- Trigger server-side changes (mutations) by dispatching regular Redux actions.
- Have a consistent, minimal-boilerplate interface for all network-related state.
- Transform and normalize data to avoid duplicate state.
- Perform optimistic updates.
- Use with other ngrx libraries like [@ngrx/effects](https://github.com/ngrx/effects).
- Debug network state and actions with Redux dev tools like [ngrx-store-logger](https://github.com/btroncone/ngrx-store-logger) or the [Redux Devtools browser extension](https://github.com/zalmoxisus/redux-devtools-extension).

## Getting Started

Install `ngrx-query` via npm:

```
$ npm install --save ngrx-query
```

Add the `entitiesReducer` and `queriesReducer` to your combined reducer.

Import the `NgrxQueryModule.forRoot()` in your root `AppModule`.

For example:

```ts
@NgModule({
  // ...
  imports: [
    // ...
    StoreModule.provideStore({
      entities: entitiesReducer,
      queries: queriesReducer,
    }),
    NgrxQueryModule.forRoot(),
  ],
})
export class AppModule {}
```

## Dependencies

All dependencies are listed in [`package.json`](./package.json). @angular/core, @angular/http, @ngrx/store and @ngrx/effects are peer dependencies. HTTP requests are made using `@angular/http`'s Http service.

## Global config

`NgrxQueryModule.forRoot()` optionally accepts an `NgrxQueryConfig` object.

```ts
// functions must be exported and named in order build with AoT
export function queriesSelector(state) {
  return state.my.path.to.queries;
}
export function entitiesSelector(state) {
  return state.my.path.to.entities;
}

@NgModule({
  // ...
  imports: [
    // ...
    NgrxQueryModule.forRoot({
      // Determines where to locate the queries in the store
      // Must match the location of the queriesReducer
      // default: (state) => state.queries
      queriesSelector: queriesSelector,

      // Determines where to locate the entities in the store
      // Must match the location of the entitiesReducer
      // default: (state) => state.entities
      entitiesSelector: entitiesSelector,

      // Determines how much to delay between retry attempts
      // default: { maxAttemps: 5, maxDuration: 5000, minDuration: 300 }
      backoff: {
        maxAttempts: 3, // number of attempts
        maxDuration: 1000, // ms
        minDuration: 300, // ms
      },

      // Determines which status codes on a GET response will trigger a retry
      // default: [
      //   UNKNOWN = 0, // normally means a failed connection
      //   REQUEST_TIMEOUT = 408, // client took too long
      //   TOO_MANY_REQUESTS = 429, // hopefully backoff stops this getting worse
      //   SERVICE_UNAVAILABLE = 503,
      //   GATEWAY_TIMEOUT = 504,
      // ]
      retryableStatusCodes: [ 408 ],
    }),
  ],
})
export class AppModule {}
```

## Usage and API

### Requests and mutations

There are two types of queries with `ngrx-query`: "requests" and "mutations". Requests are for reading values from HTTP endpoints. Mutations are for HTTP endpoints that change network state – the "C", "U", and "D" in "CRUD".

Requests can be triggered from the `nqConnect` attribute directive, the `ConnectService` or a `requestAsync` action. Mutations are triggered by the `ConnectService` or by dispatching a `mutateAsync` action.

By default, requests are GETs and mutations are POSTS.

### Query configs

Query configs are objects used to describe how ngrx-query should handle the request or mutation. Query config options differ slightly between requests and mutations

#### Request query config options

| Name | Type | Required? | Description |
|:---|:---|:---:|:---|
| `url` | string | yes | The URL for the HTTP request. |
| `transform` | function |  | Function that transforms the response data to an entities object where keys are entity IDs and values are entity data. Can be used to normalize data. |
| `update` | object | yes | Object where keys are entity IDs and values are update functions. |
| `body` | object |  | The request body. |
| `force` | boolean |  | Perform the request even if we've already successfully requested it. |
| `queryKey` | string |  | The identifier used to identify the query metadata in the `queries` reducer. If unprovided, the `url` and `body` fields are serialized to generate the query key. |
| `meta` | object |  | Various metadata for the query. Can be used to update other reducers when queries succeed or fail. |
| `options` | object |  | Options for the request. Set `options.method` to change the HTTP method, `options.headers` to set any headers and `options.credentials = 'include'` for CORS. |

#### Mutation query config options

| Name | Type | Required? | Description |
|:---|:---|:---:|:---|
| `url` | string | yes | The URL for the HTTP request. |
| `transform` | function |  | Function that transforms the response data to an entities object where keys are entity IDs and values are entity data. Can be used to normalize data. |
| `update` | object | yes | Object where keys are entity IDs and values are update functions. |
| `optimisticUpdate` | object |  | Object where keys are entity IDs and values are functions that provide the current entity value. The return values are used to update the `entities` store until the mutation finishes. |
| `body` | object |  | The HTTP request body. |
| `queryKey` | string |  | The identifier used to identify the query metadata in the `queries` reducer. If unprovided, the `url` and `body` fields are serialized to generate the query key. |
| `options` | object |  | Options for the request. Set `options.method` to change the HTTP method, `options.headers` to set any headers and `options.credentials = 'include'` for CORS. |

### `transform` functions

`transform` functions let you process and normalize response data before it is passed to the `update` step. They have the following signature:

```javascript
(responseJson: ?Object, responseText: string) => { [key: string]: any }
```

If your data is normalized on the server, you may not need to use this function.

### `update` functions

`update` functions are responsible for reconciling response data with the existing `entities` reducer data for the given entity ID. They have the following signature:

```javascript
(prevValue: any, transformedValue: any) => any
```

The `prevValue` is whatever value is selected from the `entities` reducer for the respective entity ID. The returned value from this function will become the new value for the entity ID in the `entities` reducer.

### `optimisticUpdate` functions

`optimisticUpdate` functions are just like update functions except they only pass the `prevValue`:

```javascript
(prevValue: any) => any
```

### `ngConnect`

Use the `nqConnect` attribute directive to declare network dependencies for an Angular component. `nqConnect` takes a request query config object. Example usage:

```ts
// TODO
```

`connectRequest` passes an extra prop to the child component: `forceRequest`. Calling this function will cause the request(s) to be made again. This may be useful for polling or creating an interface to trigger refreshes.

### `mutateAsync`

Dispatch `mutateAsync` Redux actions to trigger mutations. `mutateAsync` takes a mutation query config as its only argument. Example usage with an Angular component:

```ts
// TODO
```

### `requestAsync`

Similarly to how mutations are triggered by dispatching `mutateAsync` actions, you can trigger requests by dispatching `requestAsync` actions with a request query config.

## Example

A simple example is included. To run it, simply:

```sh
$ npm install
$ npm run start
```
