import React from 'react';
import { connect } from 'react-redux';
import { Item, ItemImage, ItemContent } from './sidebar-styles.jsx';
import { PlaylistThunks } from '../actions';
import styled from 'styled-components';

const Image = styled.img`
	height: 100%;
	width: 100%;
`

class SidebarItem extends React.Component {
	componentWillMount(){
		if (!this.props.plst.fetchingArtwork && !this.props.plst.fetchedArtwork){
			this.props.dispatch(PlaylistThunks.getArtwork(this.props.plst.Name));
		}
	}

	render () {
		var imgUrl = '';
		if (this.props.plst.Artwork.size){
			imgUrl = URL.createObjectURL(this.props.plst.Artwork);
		}
		return (
			<Item>
				<ItemImage>
					{imgUrl &&
						<Image src={imgUrl}/>
					}
				</ItemImage>
				<ItemContent>
					{this.props.plst.Name}
				</ItemContent>
			</Item>
		);
	}
}

function select(state){
	return {
		playlists: state.playlists.data
	}
}

export default connect(select)(SidebarItem);
