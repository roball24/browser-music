import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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

const ItemContent = styled.div`
	text-align: center;
	margin-left: -10px;
    position: relative;
    top: 22px;
    font-size: 20px;
`

class AddPlaylistItem extends React.Component {

	render () {
		return (
			<Item>
				<ItemContent>
					Add Playlist
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

export default connect(select)(AddPlaylistItem);
