import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { SongThunks, PlaylistThunks } from '../actions';
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

const Icon = styled.svg`
	position: relative;
	top: 2px;
	height: 20px;
	width: 20px;
	fill: ${props => props.theme.Background1};
	cursor: pointer;
`

class SongList extends React.Component {
	constructor(){
		super();
		this.state = {}
		this.handleDelete = this.handleDelete.bind(this);
	}

	componentWillReceiveProps(nextProps){
		if (this.props.currentPlaylist != nextProps.currentPlaylist){
			this.props.dispatch(SongThunks.getAllPlaylist(nextProps.currentPlaylist));
		}
	}

	componentWillMount(){
		this.props.dispatch(SongThunks.getAllPlaylist(this.props.currentPlaylist));
	}

	handleDelete(){
		this.props.dispatch(PlaylistThunks.delete(this.props.currentPlaylist));
	}

	render () {
		return (
			<Container>
				<H3>{this.props.currentPlaylist}</H3>
				{this.props.currentPlaylist != 'All Songs' && 
					<span>
					<Icon onClick={this.handleDelete}
						version="1.1" id="Layer_1" x="0px" y="0px" role="img" aria-label="delete playlist"
						viewBox="0 0 1792 1792" enableBackground="new 0 0 1792 1792">
						<path d="M1344,960V832c0-17.3-6.3-32.3-19-45s-27.7-19-45-19H512c-17.3,0-32.3,6.3-45,19s-19,27.7-19,45v128c0,17.3,6.3,32.3,19,45
						s27.7,19,45,19h768c17.3,0,32.3-6.3,45-19S1344,977.3,1344,960z M1664,896c0,139.3-34.3,267.8-103,385.5s-161.8,210.8-279.5,279.5
						s-246.2,103-385.5,103s-267.8-34.3-385.5-103S299.7,1399.2,231,1281.5S128,1035.3,128,896s34.3-267.8,103-385.5
						S392.8,299.7,510.5,231S756.7,128,896,128s267.8,34.3,385.5,103s210.8,161.8,279.5,279.5S1664,756.7,1664,896z"/>
					</Icon>
					<Icon>
						<svg 
							version="1.1" id="Layer_1" x="0px" y="0px" aria-label="add song to playlist"
							viewBox="0 0 1792 1792" enableBackground="new 0 0 1792 1792">
							<path d="M1344,960V832c0-17.3-6.3-32.3-19-45s-27.7-19-45-19h-256V512c0-17.3-6.3-32.3-19-45s-27.7-19-45-19H832
								c-17.3,0-32.3,6.3-45,19s-19,27.7-19,45v256H512c-17.3,0-32.3,6.3-45,19s-19,27.7-19,45v128c0,17.3,6.3,32.3,19,45s27.7,19,45,19
								h256v256c0,17.3,6.3,32.3,19,45s27.7,19,45,19h128c17.3,0,32.3-6.3,45-19s19-27.7,19-45v-256h256c17.3,0,32.3-6.3,45-19
								S1344,977.3,1344,960z M1664,896c0,139.3-34.3,267.8-103,385.5s-161.8,210.8-279.5,279.5s-246.2,103-385.5,103
								s-267.8-34.3-385.5-103S299.7,1399.2,231,1281.5S128,1035.3,128,896s34.3-267.8,103-385.5S392.8,299.7,510.5,231S756.7,128,896,128
								s267.8,34.3,385.5,103s210.8,161.8,279.5,279.5S1664,756.7,1664,896z"/>
						</svg>
					</Icon>
					</span>
				}

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
