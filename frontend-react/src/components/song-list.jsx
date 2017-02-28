import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { SongThunks } from '../actions';
import { SongListItem } from '../components';

const Container = styled.div`
	background-color: ${props => props.theme.Secondary2};
	overflow-y: auto;
	flex: 1;

	&::-webkit-scrollbar {
        width: 8px;
        background-color: inherit;
        padding-right: 1px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: ${props => props.theme.Primary1};
    }
`

const H3 = styled.h3`
	color: ${props => props.theme.Background1};
	margin: 0;
	margin: 15px;
	line-height: 70px;
	min-width: max-content;
	display: inline;
`

class SongList extends React.Component {
	constructor(){
		super();
		this.state = {}
	}

	componentWillReceiveProps(nextProps){
		if (this.props.currentPlaylist != nextProps.currentPlaylist){
			this.props.dispatch(SongThunks.getAllPlaylist(nextProps.currentPlaylist));
		}
	}

	componentWillMount(){
		this.props.dispatch(SongThunks.getAllPlaylist(this.props.currentPlaylist));
	}

	render () {
		return (
			<Container>
				<H3>{this.props.currentPlaylist}</H3>
				{this.props.songs.data[this.props.currentPlaylist]
					&& this.props.songs.data[this.props.currentPlaylist].map((song, idx) => {
					return (<SongListItem key={idx} index={idx} songData={song}/>)
				})}
			</Container>
		);
	}
}

function select(state){
	return {
		currentPlaylist: state.currentPlaylist,
		songs: state.songs
	}
}

export default connect(select)(SongList);
