import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import DefaultTheme from '../styles';
import { ThemeThunks } from '../actions';

class Navigator extends React.Component {
	
	componentWillMount(){
		this.props.dispatch(ThemeThunks.getTheme());
	}

	render () {
		return (
			<ThemeProvider theme={this.props.theme || DefaultTheme}>
				{this.props.children}
			</ThemeProvider>
		);
	}
}

function select(state){
	return {
		currentRoute: state.currentRoute,
		theme: state.theme.data
	}
}

export default connect(select)(Navigator);
