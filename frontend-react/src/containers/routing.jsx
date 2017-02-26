import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { routes } from '../constants';
import { Navigator, HomePage, SettingsPage } from './';


class Routing extends React.Component {
	render(){
		return (
			<Router history={browserHistory}>
				<Route path={routes.HOME} component={Navigator}>
					<IndexRoute component={HomePage} />
					<Route path={routes.SETTINGS} component={SettingsPage} />
				</Route>
			</Router>
		)
	}
}

function select(/*state*/){
	return {}
}

export default connect(select)(Routing);