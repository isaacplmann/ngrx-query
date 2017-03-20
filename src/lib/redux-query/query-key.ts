import { BaseParams } from './../helpers/actions';

export const getQueryKey = (url, body) => {
    return JSON.stringify({ url, body });
};

export const reconcileQueryKey: (params: BaseParams) => string = ({ url, body, queryKey }) => {
    if (queryKey !== null && queryKey !== undefined) {
        return queryKey;
    } else {
        return getQueryKey(url, body);
    }
};
