import { endpoints } from '../../constants';
import fetch from 'isomorphic-fetch';

export default class SongRequests {
	static getAllPlaylist(params){
		var paramString = Object.keys(params).map(k => k + '=' + params[k]).join('&');
		return fetch(
			endpoints.PLAYLIST + '/songs?' + paramString, 
			{ method: 'get' }
		)
	}

	// static getArtwork(params){
	// 	var paramString = Object.keys(params).map(k => k + '=' + params[k]).join('&');
	// 	return fetch(
	// 		endpoints.SONG + '/artwork?' + paramString, 
	// 		{ method: 'get' }
	// 	)
	// }
}