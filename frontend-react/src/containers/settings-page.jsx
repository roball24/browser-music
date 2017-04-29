import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';

import { routes } from '../constants';

class SettingsPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(push(routes.SETTINGS));
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
