// import get from 'lodash.get';

import { reconcileQueryKey } from './query-key';

export const isFinished = (urlOrConfig, body) => (queriesState) => {
    let queryKey;

    if (typeof urlOrConfig === 'string') {
        queryKey = reconcileQueryKey({ url: urlOrConfig, body });
    } else {
        queryKey = reconcileQueryKey(urlOrConfig);
    }

    return queriesState[queryKey].isFinished;
};

export const isPending = (urlOrConfig, body) => (queriesState) => {
    let queryKey;

    if (typeof urlOrConfig === 'string') {
        queryKey = reconcileQueryKey({ url: urlOrConfig, body });
    } else {
        queryKey = reconcileQueryKey(urlOrConfig);
    }

    return queriesState[queryKey].isPending;
};

export const status = (urlOrConfig, body) => (queriesState) => {
    let queryKey;

    if (typeof urlOrConfig === 'string') {
        queryKey = reconcileQueryKey({ url: urlOrConfig, body });
    } else {
        queryKey = reconcileQueryKey(urlOrConfig);
    }

    return queriesState[queryKey].status;
};

export const lastUpdated = (urlOrConfig, body) => (queriesState) => {
    let queryKey;

    if (typeof urlOrConfig === 'string') {
        queryKey = reconcileQueryKey({ url: urlOrConfig, body });
    } else {
        queryKey = reconcileQueryKey(urlOrConfig);
    }

    return queriesState[queryKey].lastUpdated;
};

export const queryCount = (urlOrConfig, body) => (queriesState) => {
    let queryKey;

    if (typeof urlOrConfig === 'string') {
        queryKey = reconcileQueryKey({ url: urlOrConfig, body });
    } else {
        queryKey = reconcileQueryKey(urlOrConfig);
    }

    return queriesState[queryKey].queryCount;
};
