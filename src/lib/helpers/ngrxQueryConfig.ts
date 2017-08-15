export type Selector = (state: any) => any;
export interface BackoffConfig {
  maxAttempts: number;
  maxDuration: number;
  minDuration: number;
};
export enum MockMode {
  None,
  Record,
  Mock,
}
export interface MockConfig {
  mode: MockMode;
  saveMockData: (queryKey: string, mockResponseActions: any[]) => void;
  getMockData: (queryKey: string) => any[];
}
export interface NgrxQueryConfig {
  queriesSelector?: Selector;
  entitiesSelector?: Selector;
  backoff?: BackoffConfig;
  retryableStatusCodes?: number[];
  mock?: MockConfig;
};
