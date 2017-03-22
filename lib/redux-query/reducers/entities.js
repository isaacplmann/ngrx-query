import { MUTATE_FAILURE, MUTATE_START, MUTATE_SUCCESS, REQUEST_SUCCESS, RESET, REMOVE_ENTITIES, REMOVE_ENTITY, } from '../action-types';
export var initialState = {};
export var withoutPath = function (state, path) {
    var key = path[0], restPath = path.slice(1);
    if (restPath.length) {
        return Object.assign({}, state, (_a = {},
            _a[key] = withoutPath(state[key], restPath),
            _a));
    }
    else {
        var newState = Object.assign({}, state);
        delete newState[key];
        return newState;
    }
    var _a;
};
export var entities = function (state, action) {
    if (state === void 0) { state = initialState; }
    if (action.type === RESET) {
        return 'entities' in action ? action.entities : initialState;
    }
    else if (action.type === MUTATE_START && action.optimisticEntities) {
        return Object.assign({}, state, action.optimisticEntities);
    }
    else if (action.type === MUTATE_FAILURE && action.originalEntities) {
        return Object.assign({}, state, action.originalEntities);
    }
    else if (action.type === REQUEST_SUCCESS || action.type === MUTATE_SUCCESS) {
        return Object.assign({}, state, action.entities);
    }
    else if (action.type === REMOVE_ENTITIES) {
        return action.paths.reduce(function (accum, path) {
            return withoutPath(accum, path);
        }, state);
    }
    else if (action.type === REMOVE_ENTITY) {
        return withoutPath(state, action.path);
    }
    else {
        return state;
    }
};
export default entities;
//# sourceMappingURL=entities.js.map