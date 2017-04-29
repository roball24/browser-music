import { reduxActions } from '../../constants';

export default class ThemePureActions {
    // GET theme
    static getThemeRequest() {
        return {
            type: reduxActions.GET_THEME_REQUEST
        };
    }

    static getThemeFailure(error) {
        return {
            type: reduxActions.GET_THEME_ERROR,
            error
        };
    }

    static returnTheme(data) {
        return {
            type: reduxActions.RETURN_THEME,
            data
        };
    }
}
