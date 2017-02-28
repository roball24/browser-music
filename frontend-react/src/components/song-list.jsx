import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
	display: block;
	flex: 1;
	min-width: 100%;
	width: content-max;
	height: 35px;
	background-color: ${props => props.theme.Secondary3};
	padding: 0px 10px;
`

const H3 = styled.h3`
	color: ${props => props.theme.Background1};
	margin: 0;
	margin-left: 5px;
	line-height: 35px;
	min-width: max-content;
	display: inline;
`

class SongList extends React.Component {
	constructor(){
		super();
		this.state = {}
	}

	render () {
		return (
			<Container>
				<H3>{this.props.currentPlaylist}</H3>
				
			</Container>
		);
	}
}

function select(state){
	return {
		currentPlaylist: state.currentPlaylist
	}
}

export default connect(select)(SongList);
