import React from 'react';
import { connect } from 'react-redux';
import { PlaylistThunks } from '../actions';
import styled from 'styled-components';

const Image = styled.img`
	height: 100%;
	width: 100%;
`

const Item = styled.div`
    background-color: ${props => props.theme.Background1};
    width: 100%;
    height: 70px;
    margin: 3px 0px;
    vertical-align: middle;
    position: relative;

    &:hover {
        filter: brightness(150%);
    }
`

const ItemImage = styled.div`
    position: relative;
    left: 5px;
    top: 5px;
    width: 60px;
    height: 60px;
    background-color: ${props => props.theme.Secondary3};
    display: inline-block;
`

const ItemContent = styled.div`
    display: inline-block;
    position: relative;
    top: -22px;
    padding-left: 20px;
    font-size: 20px;
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
					{this.props.plst.Name.replace("_", " ")}
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
