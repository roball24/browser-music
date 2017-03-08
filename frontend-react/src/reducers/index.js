import { combineReducers } from 'redux';
import { reduxActions } from '../constants';
import { theme } from './theme-reducer.js';
import { currentPlaylist, playlists, addPlaylistState, deletePlaylistState } from './playlist-reducer.js';
import { songs, deletePlaylistSongState } from './song-reducer.js';

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
	theme,
	currentPlaylist,
    playlists,
	addPlaylistState,
    songs,
    deletePlaylistState,
    deletePlaylistSongState
});

export default rootReducer;
