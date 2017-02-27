import { reduxActions } from '../constants';
import { arrayState } from './initial-states.js';

export function playlists(state = arrayState, action) {
	switch (action.type){
		case reduxActions.GET_ALL_PLAYLISTS_REQUEST:
			return {...state, fetching: true, fetched: false, error: null}
		case reduxActions.GET_ALL_PLAYLISTS_ERROR:
			return {...state, fetching: false, fetched: false, error: action.error.status}
		case reduxActions.RETURN_ALL_PLAYLISTS:
			return {...state, fetching: false, fetched: true, data: action.data}
		case reduxActions.GET_PLAYLIST_ARTWORK_REQUEST:
			return {...state, 
					data: state.data.map(d => {
						if (d.Name == action.playlist) {
							d.fetchingArtwork = true;
							d.fetchedArtwork = false;
						}
						return d
					})
				}	
		case reduxActions.GET_PLAYLIST_ARTWORK_ERROR:
			return {...state, 
					data: state.data.map(d => {
						if (d.Name == action.playlist) {
							d.fetchingArtwork = false;
							d.fetchedArtwork = false;
						}
						return d
					})
				}
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
				}
		default:
			return state;
	}
}