import { combineReducers } from 'redux';
import { reduxActions } from '../constants';
import { getTheme } from './theme-reducer.js';
import { currentPlaylist, playlists, addPlaylistState } from './playlist-reducer.js';
import { songs } from './song-reducer.js';

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
	currentPlaylist,
    playlists,
	addPlaylistState,
    songs
});

export default rootReducer;
