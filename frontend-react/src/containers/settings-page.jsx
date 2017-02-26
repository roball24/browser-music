import React from 'react';
import { connect } from 'react-redux';
import { RouteActions } from '../actions';
import { routes } from '../constants';

class SettingsPage extends React.Component {

    componentWillMount(){
        this.props.dispatch(RouteActions.setAppRoute(routes.SETTINGS));
    }

    render () {
        return (
            <div>Settings</div>
        );
    }
}

function select(state){
    return {
        currentRoute: state.currentRoute
    }
}

export default connect(select)(SettingsPage);
