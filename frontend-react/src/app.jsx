import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

import { Routing } from './containers';


// import createLogger from 'redux-logger';
// const logger = createLogger();

let store = applyMiddleware(thunkMiddleware)(createStore)(reducers);
window.s = store;

render((
	<Provider store={store}>
		<Routing />
	</Provider>
), document.getElementById('app'))
