import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { SongThunks } from '../actions';

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

const Image = styled.img`
	height: 100%;
	width: 100%;
`

class SongListItem extends React.Component {
	constructor(){
		super();
		this.state = { imgUrl: '' };
	}

	componentWillMount(){
		console.log(this.props.songData)
		if (!this.props.songData.Artwork && !this.props.songData.fetchingArtwork 
			&& !this.props.songData.fetchedArtwork && !this.props.songData.artworkError){
			this.props.dispatch(
				SongThunks.getArtwork(this.props.currentPlaylist, this.props.songData.Path)
			);
		}
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