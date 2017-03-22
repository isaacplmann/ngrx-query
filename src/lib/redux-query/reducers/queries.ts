import * as actionTypes from '../action-types';

const initialState = {};

const queries = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RESET: {
            return {};
        }
        case actionTypes.MUTATE_START:
        case actionTypes.REQUEST_START: {
            const { queryKey } = action;

            return Object.assign({}, state, {
                [queryKey]: {
                    url: action.url,
                    isFinished: false,
                    isPending: true,
                    request: action.request,
                    isMutation: action.type === actionTypes.MUTATE_START,
                    queryCount: state[queryKey] ? state[queryKey].queryCount + 1 : 1,
                },
            });
        }
        case actionTypes.REQUEST_SUCCESS:
        case actionTypes.MUTATE_FAILURE:
        case actionTypes.MUTATE_SUCCESS:
        case actionTypes.REQUEST_FAILURE: {
            const { queryKey } = action;

            return Object.assign({}, state, {
                [queryKey]: Object.assign({}, state[queryKey], {
                    isFinished: true,
                    isPending: false,
                    lastUpdated: action.time,
                    status: action.status,
                }),
            });
        }
        case actionTypes.CANCEL_QUERY: {
            const { queryKey } = action;

            if (state[queryKey].isPending) {
                // Make sure request is actually pending

                return Object.assign({}, state, {
                    [queryKey]: Object.assign({}, state[queryKey], {
                        isFinished: true,
                        isPending: false,
                        status: 0,
                    }),
                });
            }

            return state;
        }
        default: {
            return state;
        }
    }
};

export default queries;
