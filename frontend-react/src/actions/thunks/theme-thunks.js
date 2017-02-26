import { ThemePureActions } from '../pure';
import { ThemeRequests } from '../requests';

export default class ThemeThunks {
	static getTheme(){
		return dispatch => {
			dispatch(ThemePureActions.getThemeRequest());
			return ThemeRequests.getTheme().then(response => {
				if (response.status == 200) {
					response.json().then(json => dispatch(ThemePureActions.returnTheme(json)))
				} else {
					dispatch(ThemePureActions.getThemeFailure(response))
				}
			})
		}
	}
}