import * as ngrxQueryActionTypes from './actionTypes';
import * as actions from 'redux-query/dist/commonjs/actions';
;
;
export var requestAsync = function (params) { return Object.assign({}, actions.requestAsync(params), { type: ngrxQueryActionTypes.REQUEST_ASYNC }); };
export var mutateAsync = function (params) { return Object.assign({}, actions.mutateAsync(params), { type: ngrxQueryActionTypes.MUTATE_ASYNC }); };
//# sourceMappingURL=actions.js.map