import React from 'react';
import Measure from 'react-measure';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const scrollLeft = keyframes`
	0% { transform: translateX(100%) }
	100% {  transform: translateX(-100%) }
` 

const Container = styled.div`
	display: flex;
	min-width: 100%;
	width: content-max;
	height: 35px;
	background-color: ${props => props.theme.Secondary3};
	padding: 0px 10px;
`

const H4 = styled.h4`
	color: ${props => props.theme.Background1};
	margin: 0;
	line-height: 35px;
	min-width: max-content;
	display: inline;
`

const H6 = styled.h6`
	color: ${props => props.theme.Background1};
	margin: 0;
	line-height: 35px;
	margin-left: 5px;
`

const SongInfo = styled.div`
	display: inline-block;
	margin-left: 10px;
	position: relative;
	min-width: 100%;
`

const Scrolling = styled.div`
	display: inline-block;
	width: 200px;
	position: absolute;
	left: 50px;
	top: 0;
	overflow: hidden;

	h6 {
		display: inline-block;
		${ props => props.width > 200
			? `animation: ${scrollLeft} 7s linear infinite;
				text-align: center;`
			: '' }
		color: ${props => props.theme.Primary1};
		line-height: 35px;
		white-space:nowrap;
		margin: 0;
	}
`

class ContentBar extends React.Component {
	constructor(){
		super();
		this.state = {}
	}

	render () {
		return (
			<Container>
				<H4>{this.props.currentPlaylist}</H4>
				<SongInfo>
					<H6>Playing:</H6>
						<Scrolling width={this.state.width}>
						<Measure 
							whitelist={['width']}
							onMeasure={(dimensions) => {
								this.setState({width: dimensions.width});
							}}
						>
							<h6>Welcome to the Black Parade - My Chemical Romance</h6>
						</Measure>
						</Scrolling>
				</SongInfo>
			</Container>
		);
	}
}

function select(state){
	return {
		currentPlaylist: state.currentPlaylist
	}
}

export default connect(select)(ContentBar);
