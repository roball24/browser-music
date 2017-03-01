import { reduxActions } from '../constants';
import { objectState } from './initial-states.js';

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

		default:
			return state;
	}
}