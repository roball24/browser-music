import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {

	render(){
		return (
			<div>App</div>
		)
	}
}

function select(/*state*/){
    return {}
}

export default connect(select)(App);