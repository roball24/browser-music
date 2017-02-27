import { combineReducers } from 'redux';
import { reduxActions } from '../constants';
import { getTheme } from './theme-reducer.js';
import { playlists, addPlaylistState } from './playlist-reducer.js';

function currentRoute(state = '', action) {
    switch (action.type) {
        case reduxActions.SET_APP_ROUTE:
            return action.route;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
	currentRoute,
	getTheme,
	playlists,
	addPlaylistState
});

export default rootReducer;
