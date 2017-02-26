import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { routes } from '../constants';
import { Navigator, HomePage, SettingsPage } from './';
import DefaultTheme from '../styles';
import { ThemeThunks } from '../actions';

class App extends React.Component {

	componentWillMount(){
		this.props.dispatch(ThemeThunks.getTheme());
	}

	render(){
		return (
			<ThemeProvider theme={this.props.theme || DefaultTheme}>
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