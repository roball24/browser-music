import { reduxActions } from '../constants';

class RouteActions {
    static setAppRoute(route) {
        return {
            type: reduxActions.SET_APP_ROUTE,
            route: route
        }
    }
}

// redux-actions
export {
	RouteActions
};