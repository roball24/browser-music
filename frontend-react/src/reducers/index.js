import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { theme } from './theme-reducer.js';
import {
    currentPlaylist,
    playlists,
    addPlaylistState,
    deletePlaylistState
} from './playlist-reducer.js';
import { songs, deletePlaylistSongState } from './song-reducer.js';

const rootReducer = combineReducers({
    router: routerReducer,
    theme,
    currentPlaylist,
    playlists,
    addPlaylistState,
    songs,
    deletePlaylistState,
    deletePlaylistSongState
});

export default rootReducer;
