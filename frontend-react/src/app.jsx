import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { App } from './containers';

render((
		<Provider store={store}>
			<App />
		</Provider>
), document.getElementById('app'))
