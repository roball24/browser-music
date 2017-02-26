import { endpoints } from '../../constants';
import fetch from 'isomorphic-fetch';

export default class ThemeRequests {
	static getTheme(){
		return fetch(
			endpoints.THEME, 
			{ method: 'get' }
		)
	}
}