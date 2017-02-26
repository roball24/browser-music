import { endpoints } from '../../constants';

export default class ThemeRequests {
	static getTheme(){
		return fetch(
			endpoints.THEME, 
			{ method: 'get' }
		)
	}
}