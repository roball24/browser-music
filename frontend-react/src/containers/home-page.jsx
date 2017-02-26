import React from 'react';
import { connect } from 'react-redux';
import { RouteActions } from '../actions';
import { routes } from '../constants';

class HomePage extends React.Component {

    componentWillMount(){
        this.props.dispatch(RouteActions.setAppRoute(routes.HOME));
    }

    render () {
        return (
            <div>Home</div>
        );
    }
}

function select(state){
    return {
        currentRoute: state.currentRoute
    }
}

export default connect(select)(HomePage);
