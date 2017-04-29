import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';

import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { routes } from './constants';
import reducers from './reducers';
import { Navigator, HomePage, SettingsPage } from './containers';

// import createLogger from 'redux-logger';
// const logger = createLogger();

const history = createHistory();
const routeMiddleware = routerMiddleware(history);
let store = applyMiddleware(thunkMiddleware, routeMiddleware)(createStore)(
    reducers
);

window.s = store;

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Navigator>
                <Route exact path={routes.HOME} component={HomePage} />
                <Route path={routes.SETTINGS} component={SettingsPage} />
            </Navigator>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
