import * as actionTypes from '../action-types';
var initialState = {};
var queries = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes.RESET: {
            return {};
        }
        case actionTypes.MUTATE_START:
        case actionTypes.REQUEST_START: {
            var queryKey = action.queryKey;
            return Object.assign({}, state, (_a = {},
                _a[queryKey] = {
                    url: action.url,
                    isFinished: false,
                    isPending: true,
                    request: action.request,
                    isMutation: action.type === actionTypes.MUTATE_START,
                    queryCount: state[queryKey] ? state[queryKey].queryCount + 1 : 1,
                },
                _a));
        }
        case actionTypes.REQUEST_SUCCESS:
        case actionTypes.MUTATE_FAILURE:
        case actionTypes.MUTATE_SUCCESS:
        case actionTypes.REQUEST_FAILURE: {
            var queryKey = action.queryKey;
            return Object.assign({}, state, (_b = {},
                _b[queryKey] = Object.assign({}, state[queryKey], {
                    isFinished: true,
                    isPending: false,
                    lastUpdated: action.time,
                    status: action.status,
                }),
                _b));
        }
        case actionTypes.CANCEL_QUERY: {
            var queryKey = action.queryKey;
            if (state[queryKey].isPending) {
                // Make sure request is actually pending
                return Object.assign({}, state, (_c = {},
                    _c[queryKey] = Object.assign({}, state[queryKey], {
                        isFinished: true,
                        isPending: false,
                        status: 0,
                    }),
                    _c));
            }
            return state;
        }
        default: {
            return state;
        }
    }
    var _a, _b, _c;
};
export default queries;
//# sourceMappingURL=queries.js.map