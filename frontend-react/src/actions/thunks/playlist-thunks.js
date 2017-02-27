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
}