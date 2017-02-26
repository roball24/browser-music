import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Routing } from './containers';

render((
	<Provider store={store}>
		<Routing />
	</Provider>
), document.getElementById('app'))
