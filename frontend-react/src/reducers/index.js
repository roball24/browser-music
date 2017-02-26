import { combineReducers } from 'redux';
import { reduxActions } from '../constants';

function currentRoute(state = '', action) {
    switch (action.type) {
        case reduxActions.SET_APP_ROUTE:
            return action.route;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
	currentRoute
});

export default rootReducer;