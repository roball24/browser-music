import { reduxActions } from '../constants';
import { objectState, defaultState } from './initial-states.js';

export function songs(state = objectState, action) {
	switch (action.type){
		// get all playlists
		case reduxActions.GET_ALL_PLAYLIST_SONGS_REQUEST:
			return {
				...state,
				fetching: true,
				fetched: false,
				error: null
			};

		case reduxActions.GET_ALL_PLAYLIST_SONGS_ERROR:
			return {
				...state,
				fetching: false,
				fetched: false,
				error: action.error.status
			};

		case reduxActions.RETURN_ALL_PLAYLIST_SONGS:
			var songState = {
				...state,
				fetching: false,
				fetched: true
			};
			songState.data[action.playlist] = action.data;
			return songState;

		// get playlist artwork
		case reduxActions.GET_SONG_ARTWORK_REQUEST:
			var artworkRState = {...state };
			artworkRState.data[action.playlist].map(s => {
				if (s.Path == action.song){
					s.fetchingArtwork = true;
					s.fetchedArtwork = false;
					s.artError = null;
				}
				return s;
			});
			return artworkRState;

		case reduxActions.GET_SONG_ARTWORK_ERROR:
			var artworkEState = {...state };
			artworkEState.data[action.playlist].map(s => {
				if (s.Path == action.song){
					s.fetchingArtwork = false;
					s.fetchedArtwork = false;
					s.artError = action.error.status;
				}
				return s;
			});
			return artworkEState;

		case reduxActions.RETURN_SONG_ARTWORK:
			var retArtworkState = {...state };
			retArtworkState.data[action.playlist].map(s => {
				if (s.Path == action.song){
					s.fetchingArtwork = false;
					s.fetchedArtwork = true;
					s.Artwork = action.data;
				}
				return s;
			});
			return retArtworkState;

		// delete song from playlist
		case reduxActions.DELETE_PLAYLIST_SONG_SUCCESS:
			var deleteSongState = { ...state };
			deleteSongState.data[action.playlist] = state.data[action.playlist].filter(s => { 
				return s.Path !== action.song; 
			});
			return deleteSongState;

		// add song to playlist
		case reduxActions.ADD_PLAYLIST_SONG_SUCCESS:
			var addSongState = { ...state };
			addSongState.data[action.playlist] = state.data[action.playlist].concat(
				state.data['All Songs'].find(s => { return s.Path == action.song })
			)
			return addSongState;

		default:
			return state;
	}
}

// delete song from playlist
export function deletePlaylistSongState(state = defaultState, action){
	switch (action.type){
		case reduxActions.DELETE_PLAYLIST_SONG_REQUEST:
			return {
				...state,
				fetching: true,
				fetched: false,
				playlist: action.playlist,
				song: action.song,
				error: null
			};

		case reduxActions.DELETE_PLAYLIST_SONG_ERROR:
			return {
				...state,
				fetching: false,
				fetched: false,
				playlist: action.playlist,
				song: action.song,
				error: action.error.status
			};

		case reduxActions.DELETE_PLAYLIST_SONG_SUCCESS:
			return {
				...state,
				fetching: false,
				fetched: true,
				playlist: action.playlist,
				song: action.song
			};

		default:
			return state;
	}
}
