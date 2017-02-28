import { SongPureActions } from '../pure';
import { SongRequests } from '../requests';

export default class SongThunks {
	static getAllPlaylist(playlist){
		return dispatch => {
			dispatch(SongPureActions.getAllPlaylistRequest(playlist));
			return SongRequests.getAllPlaylist({playlist}).then(response => {
				if (response.status == 200) {
					response.json().then(json => dispatch(SongPureActions.returnAllPlaylist(playlist, json)));
				} else {
					dispatch(SongPureActions.getAllPlaylistFailure(playlist, response));
				}
			})
		}
	}

	// static getArtwork(Song){
	// 	return dispatch => {
	// 		dispatch(SongPureActions.getArtworkRequest(Song));
	// 		return SongRequests.getArtwork({Song}).then(response => {
	// 			if (response.status == 200) {
	// 				response.blob().then(blob => {
	// 					dispatch(SongPureActions.returnArtwork(Song, blob));
	// 				});
	// 			} else {
	// 				dispatch(SongPureActions.getArtworkFailure(Song, response))
	// 			}
	// 		})
	// 	}
	// }

}