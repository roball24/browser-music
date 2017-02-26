import React from 'react';
import { connect } from 'react-redux';

class Navigator extends React.Component {
    render () {
        return (
            <div>{this.props.children}</div>
        );
    }
}

function select(state){
    return {
        currentRoute: state.currentRoute
    }
}

export default connect(select)(Navigator);
