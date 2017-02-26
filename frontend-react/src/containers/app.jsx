import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { routes } from '../constants';
import { Navigator, HomePage, SettingsPage } from './';
import DefaultTheme from '../styles';

class App extends React.Component {
	render(){
		return (
			<ThemeProvider theme={DefaultTheme}>
				<Router history={browserHistory}>
					<Route path={routes.HOME} component={Navigator}>
						<IndexRoute component={HomePage} />
						<Route path={routes.SETTINGS} component={SettingsPage} />
					</Route>
				</Router>
			</ThemeProvider>
		)
	}
}

function select(/*state*/){
    return {}
}

export default connect(select)(App);