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



		// // get playlist artwork
		// case reduxActions.GET_PLAYLIST_ARTWORK_REQUEST:
		// 	return {...state, 
		// 			data: state.data.map(d => {
		// 				if (d.Name == action.playlist) {
		// 					d.fetchingArtwork = true;
		// 					d.fetchedArtwork = false;
		// 				}
		// 				return d
		// 			})
		// 		};

		// case reduxActions.GET_PLAYLIST_ARTWORK_ERROR:
		// 	return {...state, 
		// 			data: state.data.map(d => {
		// 				if (d.Name == action.playlist) {
		// 					d.fetchingArtwork = false;
		// 					d.fetchedArtwork = false;
		// 				}
		// 				return d
		// 			})
		// 		};

		// case reduxActions.RETURN_PLAYLIST_ARTWORK:
		// 	return {...state, 
		// 			data: state.data.map(d => {
		// 				if (d.Name == action.playlist) {
		// 					d.fetchingArtwork = false;
		// 					d.fetchedArtwork = true;
		// 					d.Artwork = action.data;
		// 				}
		// 				return d
		// 			})
		// 		};

		default:
			return state;
	}
}