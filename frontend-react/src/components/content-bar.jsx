import React from 'react';
import Measure from 'react-measure';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import styled, { keyframes } from 'styled-components';
import { routes } from '../constants';

const scrollLeft = keyframes`
	0% { transform: translateX(100%) }
	100% {  transform: translateX(-100%) }
` 

const Container = styled.div`
	display: block;
	min-width: 100%;
	width: content-max;
	height: 35px;
	background-color: ${props => props.theme.Secondary3};
	padding: 0px 10px;
`

const H6 = styled.h6`
	color: ${props => props.theme.Background1};
	margin: 0;
	line-height: 35px;
	margin-left: 5px;
`

const SongInfo = styled.div`
	display: inline-block;
	position: relative;
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

const Icon = styled.svg`
	height: 20px;
	position: absolute;
	top: 7.5px;
	right: 10px;
	fill: ${props => props.theme.Background1};
`

class ContentBar extends React.Component {
	constructor(){
		super();
		this.state = {}
	}

	render () {
		return (
			<Container>
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
				<Link to={routes.SETTINGS}>
					<Icon version="1.1" id="Layer_1" x="0px" y="0px"
						viewBox="0 0 1792 1792" enable-background="new 0 0 1792 1792">
					<path d="M1152,896c0-70.7-25-131-75-181s-110.3-75-181-75s-131,25-181,75s-75,110.3-75,181s25,131,75,181s110.3,75,181,75
						s131-25,181-75S1152,966.7,1152,896z M1664,787v222c0,8-2.7,15.7-8,23s-12,11.7-20,13l-185,28c-12.7,36-25.7,66.3-39,91
						c23.3,33.3,59,79.3,107,138c6.7,8,10,16.3,10,25s-3,16.3-9,23c-18,24.7-51,60.7-99,108s-79.3,71-94,71c-8,0-16.7-3-26-9l-138-108
						c-29.3,15.3-59.7,28-91,38c-10.7,90.7-20.3,152.7-29,186c-4.7,18.7-16.7,28-36,28H785c-9.3,0-17.5-2.8-24.5-8.5
						s-10.8-12.8-11.5-21.5l-28-184c-32.7-10.7-62.7-23-90-37l-141,107c-6.7,6-15,9-25,9c-9.3,0-17.7-3.7-25-11c-84-76-139-132-165-168
						c-4.7-6.7-7-14.3-7-23c0-8,2.7-15.7,8-23c10-14,27-36.2,51-66.5s42-53.8,54-70.5c-18-33.3-31.7-66.3-41-99l-183-27
						c-8.7-1.3-15.7-5.5-21-12.5s-8-14.8-8-23.5V783c0-8,2.7-15.7,8-23s11.7-11.7,19-13l186-28c9.3-30.7,22.3-61.3,39-92
						c-26.7-38-62.3-84-107-138c-6.7-8-10-16-10-24c0-6.7,3-14.3,9-23c17.3-24,50.2-59.8,98.5-107.5S450.3,263,465,263
						c8.7,0,17.3,3.3,26,10l138,107c29.3-15.3,59.7-28,91-38c10.7-90.7,20.3-152.7,29-186c4.7-18.7,16.7-28,36-28h222
						c9.3,0,17.5,2.8,24.5,8.5s10.8,12.8,11.5,21.5l28,184c32.7,10.7,62.7,23,90,37l142-107c6-6,14-9,24-9c8.7,0,17,3.3,25,10
						c86,79.3,141,136,165,170c4.7,5.3,7,12.7,7,22c0,8-2.7,15.7-8,23c-10,14-27,36.2-51,66.5s-42,53.8-54,70.5c17.3,33.3,31,66,41,98
						l183,28c8.7,1.3,15.7,5.5,21,12.5S1664,778.3,1664,787z"/>
					</Icon>
				</Link>
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
