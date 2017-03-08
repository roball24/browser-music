import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { SongThunks, PlaylistThunks } from '../actions';

const Container = styled.div`
	padding: 5px 10px;
	border-top: 2px solid ${props => props.theme.Primary3};
	color: ${props => props.theme.Background1};
`

const Text = styled.p`
	width: 20%;
	display: inline-block;
	margin: 15px;
	vertical-align: middle;
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

const Image = styled.img`
	height: 100%;
	width: 100%;
`

const IconSection = styled.span`
	margin-left: 20px;
	margin-right: 30px;
`

const Icon = styled.svg`
	position: relative;
	top: 2px;
	height: 20px;
	width: 20px;
	fill: ${props => props.theme.Background1};
	cursor: pointer;
`

class SongListItem extends React.Component {
	constructor(){
		super();
		this.state = { imgUrl: '' };
		this.handleDelete = this.handleDelete.bind(this);
	}

	componentWillMount(){
		if (!this.props.songData.Artwork && !this.props.songData.fetchingArtwork 
			&& !this.props.songData.fetchedArtwork && !this.props.songData.artworkError){
			this.props.dispatch(
				SongThunks.getArtwork(this.props.currentPlaylist, this.props.songData.Path)
			);
		}
	}

	handleDelete(){
		this.props.dispatch(
			PlaylistThunks.deleteSong(this.props.currentPlaylist, this.props.songData.Path)
		);
	}

	render(){
		if (this.props.songData.Artwork && this.props.songData.Artwork.size){
			this.state.imgUrl = URL.createObjectURL(this.props.songData.Artwork);
		}
		return (
			<Container index={this.props.index}>
				<ItemImage>
					{this.state.imgUrl &&
						<Image src={this.state.imgUrl}/>
					}
				</ItemImage>
				<IconSection>
					{this.props.currentPlaylist != 'All Songs' && 
					<Icon onClick={this.handleDelete}
						version="1.1" id="Layer_1" x="0px" y="0px" role="img" aria-label="delete song from playlist"
						viewBox="0 0 1792 1792" enableBackground="new 0 0 1792 1792">
						<path d="M1344,960V832c0-17.3-6.3-32.3-19-45s-27.7-19-45-19H512c-17.3,0-32.3,6.3-45,19s-19,27.7-19,45v128c0,17.3,6.3,32.3,19,45
						s27.7,19,45,19h768c17.3,0,32.3-6.3,45-19S1344,977.3,1344,960z M1664,896c0,139.3-34.3,267.8-103,385.5s-161.8,210.8-279.5,279.5
						s-246.2,103-385.5,103s-267.8-34.3-385.5-103S299.7,1399.2,231,1281.5S128,1035.3,128,896s34.3-267.8,103-385.5
						S392.8,299.7,510.5,231S756.7,128,896,128s267.8,34.3,385.5,103s210.8,161.8,279.5,279.5S1664,756.7,1664,896z"/>
					</Icon>
					}
				</IconSection>
				<Text>{this.props.songData.Title}</Text>
				<Text>{this.props.songData.Artist}</Text>
				<Text>{this.props.songData.Album}</Text>
			</Container>
		)
	}
}

function select(state){
	return {
		currentPlaylist: state.currentPlaylist,
		songs: state.songs
	}
}

export default connect(select)(SongListItem);