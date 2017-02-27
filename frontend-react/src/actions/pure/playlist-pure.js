import { reduxActions } from '../../constants';

export default class PlaylistPureActions {
	// GET theme
	static getAllRequest(){
		return {
			type: reduxActions.GET_ALL_PLAYLISTS_REQUEST
		}
	}

	static getAllFailure(error) {
		return {
			type: reduxActions.GET_ALL_PLAYLISTS_ERROR,
			error
		}
	}

	static returnAll(data) {
		return {
			type: reduxActions.RETURN_ALL_PLAYLISTS,
			data
		}
	}

	// GET artwork
	static getArtworkRequest(playlist){
		return {
			type: reduxActions.GET_PLAYLIST_ARTWORK_REQUEST,
			playlist
		}
	}

	static getArtworkFailure(playlist, error) {
		return {
			type: reduxActions.GET_PLAYLIST_ARTWORK_ERROR,
			error,
			playlist
		}
	}

	static returnArtwork(playlist, data) {
		return {
			type: reduxActions.RETURN_PLAYLIST_ARTWORK,
			data,
			playlist
		}
	}
}