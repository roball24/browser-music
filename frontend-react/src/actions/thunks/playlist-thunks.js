import { PlaylistPureActions } from '../pure';
import { PlaylistRequests } from '../requests';

export default class PlaylistThunks {
	static getAll(){
		return dispatch => {
			dispatch(PlaylistPureActions.getAllRequest());
			return PlaylistRequests.getAll().then(response => {
				if (response.status == 200) {
					response.json().then(json => dispatch(PlaylistPureActions.returnAll(json)));
				} else {
					dispatch(PlaylistPureActions.getAllFailure(response));
				}
			})
		}
	}

	static getArtwork(playlist){
		return dispatch => {
			dispatch(PlaylistPureActions.getArtworkRequest(playlist));
			return PlaylistRequests.getArtwork({playlist}).then(response => {
				if (response.status == 200) {
					response.blob().then(blob => {
						dispatch(PlaylistPureActions.returnArtwork(playlist, blob));
					});
				} else {
					dispatch(PlaylistPureActions.getArtworkFailure(playlist, response))
				}
			})
		}
	}

	static add(playlist){
		return dispatch => {
			dispatch(PlaylistPureActions.addRequest(playlist));
			return PlaylistRequests.add({playlist}).then(response => {
				if (response.status == 200) {
					dispatch(PlaylistPureActions.addSuccess(playlist));
				} else {
					dispatch(PlaylistPureActions.addFailure(playlist, response))
				}
			})
		}
	}

	static delete(playlist){
		return dispatch => {
			dispatch(PlaylistPureActions.deleteRequest(playlist));
			return PlaylistRequests.delete({playlist}).then(response => {
				if (response.status == 200){
					dispatch(PlaylistPureActions.selectPlaylist('All Songs'));
					dispatch(PlaylistPureActions.deleteSuccess(playlist));
				} else {
					dispatch(PlaylistPureActions.deleteFailure(playlist, response));
				}
			})
		}
	}

	static deleteSong(playlist, song){
		return dispatch => {
			dispatch(PlaylistPureActions.deleteSongRequest(playlist, song));
			return PlaylistRequests.deleteSong({playlist, song}).then(response => {
				if (response.status == 200){
					dispatch(PlaylistPureActions.deleteSongSuccess(playlist, song));
				} else {
					dispatch(PlaylistPureActions.deleteSongFailure(playlist, song, response));
				}
			})
		}
	}
}