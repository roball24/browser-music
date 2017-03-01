import { reduxActions } from '../constants';
import { arrayState, defaultState } from './initial-states.js';

export function currentPlaylist(state = 'All Songs', action){
	switch (action.type){
		case reduxActions.SELECTED_PLAYLIST:
			return action.playlist;
		default:
			return state;
	}
}

export function playlists(state = arrayState, action) {
	switch (action.type){
		// get all playlists
		case reduxActions.GET_ALL_PLAYLISTS_REQUEST:
			return {
				...state,
				fetching: true,
				fetched: false,
				error: null
			};

		case reduxActions.GET_ALL_PLAYLISTS_ERROR:
			return {
				...state,
				fetching: false,
				fetched: false,
				error: action.error.status
			};

		case reduxActions.RETURN_ALL_PLAYLISTS:
			return {
				...state,
				fetching: false,
				fetched: true,
				data: action.data
			};

		// get playlist artwork
		case reduxActions.GET_PLAYLIST_ARTWORK_REQUEST:
			return {...state, 
					data: state.data.map(d => {
						if (d.Name == action.playlist) {
							d.fetchingArtwork = true;
							d.fetchedArtwork = false;
							d.artError = null;
						}
						return d
					})
				};

		case reduxActions.GET_PLAYLIST_ARTWORK_ERROR:
			return {...state, 
					data: state.data.map(d => {
						if (d.Name == action.playlist) {
							d.fetchingArtwork = false;
							d.fetchedArtwork = false;
							d.artError = action.error.status;
						}
						return d
					})
				};

		case reduxActions.RETURN_PLAYLIST_ARTWORK:
			return {...state, 
					data: state.data.map(d => {
						if (d.Name == action.playlist) {
							d.fetchingArtwork = false;
							d.fetchedArtwork = true;
							d.Artwork = action.data;
						}
						return d
					})
				};

		// add playlist
		case reduxActions.ADD_PLAYLIST_SUCCESS:
			return {...state,
				data: state.data.concat({
					Name: action.playlist,
					fetchingArtwork: false,
					fetchedArtwork: false
				})
			};

		default:
			return state;
	}
}

// add playlist
export function addPlaylistState(state = defaultState, action){
	switch (action.type){
		case reduxActions.ADD_PLAYLIST_REQUEST:
			return {
				...state,
				fetching: true,
				fetched: false,
				playlist: action.playlist,
				error: null
			};

		case reduxActions.ADD_PLAYLIST_ERROR:
			return {
				...state,
				fetching: false,
				fetched: false,
				playlist: action.playlist,
				error: action.error.status
			};

		case reduxActions.ADD_PLAYLIST_SUCCESS:
			return {
				...state,
				fetching: false,
				fetched: true,
				playlist: action.playlist
			};

		default:
			return state;
	}
}
