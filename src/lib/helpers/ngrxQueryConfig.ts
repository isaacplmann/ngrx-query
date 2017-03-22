export type Selector = (state: any) => any;
export interface BackoffConfig {
  maxAttempts: number;
  maxDuration: number;
  minDuration: number;
};
export interface NgrxQueryConfig {
  queriesSelector?: Selector;
  entitiesSelector?: Selector;
  backoff: BackoffConfig;
  retryableStatusCodes: number[];
};
