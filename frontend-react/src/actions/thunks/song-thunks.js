import { SongPureActions } from '../pure';
import { SongRequests } from '../requests';

export default class SongThunks {
	static getAllPlaylist(playlist){
		return dispatch => {
			dispatch(SongPureActions.getAllPlaylistRequest(playlist));
			return SongRequests.getAllPlaylist({playlist}).then(response => {
				if (response.status == 200) {
					response.json().then(json => 
						dispatch(SongPureActions.returnAllPlaylist(playlist, json))
					);
				} else {
					dispatch(SongPureActions.getAllPlaylistFailure(playlist, response));
				}
			})
		}
	}

	static getArtwork(playlist, song){
		return dispatch => {
			dispatch(SongPureActions.getArtworkRequest(playlist, song));
			return SongRequests.getArtwork({song}).then(response => {
				if (response.status == 200) {
					response.blob().then(blob =>
						dispatch(SongPureActions.returnArtwork(playlist, song, blob))
					);
				} else {
					dispatch(SongPureActions.getArtworkFailure(playlist, song, response))
				}
			})
		}
	}

}