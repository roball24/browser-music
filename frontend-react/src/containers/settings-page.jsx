import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { RouteActions } from '../actions';
import { routes } from '../constants';

class SettingsPage extends React.Component {

    componentWillMount(){
        this.props.dispatch(RouteActions.setAppRoute(routes.SETTINGS));

    }

    render () {
        return (
            <Link to={routes.HOME}>
            <div>Settings</div>
            </Link>
        );
    }
}

function select(state){
    return {
        currentRoute: state.currentRoute
    }
}

export default connect(select)(SettingsPage);
