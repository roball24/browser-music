import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
	padding: 5px 10px;
	border-top: 2px solid ${props => props.theme.Primary3};
	color: ${props => props.theme.Background1};
`

const Text = styled.p`
	width: 20%;
	display: inline-block;
	margin: 15px;
`

const ItemImage = styled.div`
	margin-left: 5px;
    position: relative;
    width: 40px;
    height: 40px;
    vertical-align: middle;
    background-color: ${props => props.theme.Background2};
 	display: inline-block;
`

class SongListItem extends React.Component {
	render(){
		return (
			<Container index={this.props.index}>
				<ItemImage></ItemImage>
				<Text>{this.props.songData.Title}</Text>
				<Text>{this.props.songData.Artist}</Text>
				<Text>{this.props.songData.Album}</Text>
			</Container>
		)
	}
}

function select(/*state*/){
	return {

	}
}

export default connect(select)(SongListItem);