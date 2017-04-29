import { reduxActions } from '../../constants';

export default class PlaylistPureActions {
    // set current song
    static selectPlaylist(playlist) {
        return {
            type: reduxActions.SELECTED_PLAYLIST,
            playlist
        };
    }

    // GET all playlists
    static getAllRequest() {
        return {
            type: reduxActions.GET_ALL_PLAYLISTS_REQUEST
        };
    }

    static getAllFailure(error) {
        return {
            type: reduxActions.GET_ALL_PLAYLISTS_ERROR,
            error
        };
    }

    static returnAll(data) {
        return {
            type: reduxActions.RETURN_ALL_PLAYLISTS,
            data
        };
    }

    // GET artwork
    static getArtworkRequest(playlist) {
        return {
            type: reduxActions.GET_PLAYLIST_ARTWORK_REQUEST,
            playlist
        };
    }

    static getArtworkFailure(playlist, error) {
        return {
            type: reduxActions.GET_PLAYLIST_ARTWORK_ERROR,
            error,
            playlist
        };
    }

    static returnArtwork(playlist, data) {
        return {
            type: reduxActions.RETURN_PLAYLIST_ARTWORK,
            data,
            playlist
        };
    }

    // POST playlist
    static addRequest(playlist) {
        return {
            type: reduxActions.ADD_PLAYLIST_REQUEST,
            playlist
        };
    }

    static addFailure(playlist, error) {
        return {
            type: reduxActions.ADD_PLAYLIST_ERROR,
            playlist,
            error
        };
    }

    static addSuccess(playlist) {
        return {
            type: reduxActions.ADD_PLAYLIST_SUCCESS,
            playlist
        };
    }

    // DELETE playlist
    static deleteRequest(playlist) {
        return {
            type: reduxActions.DELETE_PLAYLIST_REQUEST,
            playlist
        };
    }

    static deleteFailure(playlist, error) {
        return {
            type: reduxActions.DELETE_PLAYLIST_ERROR,
            playlist,
            error
        };
    }

    static deleteSuccess(playlist) {
        return {
            type: reduxActions.DELETE_PLAYLIST_SUCCESS,
            playlist
        };
    }

    // DELETE song to playlist
    static deleteSongRequest(playlist, song) {
        return {
            type: reduxActions.DELETE_PLAYLIST_SONG_REQUEST,
            playlist,
            song
        };
    }

    static deleteSongFailure(playlist, song, error) {
        return {
            type: reduxActions.DELETE_PLAYLIST_SONG_ERROR,
            playlist,
            song,
            error
        };
    }

    static deleteSongSuccess(playlist, song) {
        return {
            type: reduxActions.DELETE_PLAYLIST_SONG_SUCCESS,
            playlist,
            song
        };
    }

    // POST song to playlist
    static addSongRequest(playlist, song) {
        return {
            type: reduxActions.ADD_PLAYLIST_SONG_REQUEST,
            playlist,
            song
        };
    }

    static addSongFailure(playlist, song, error) {
        return {
            type: reduxActions.ADD_PLAYLIST_SONG_ERROR,
            playlist,
            song,
            error
        };
    }

    static addSongSuccess(playlist, song) {
        return {
            type: reduxActions.ADD_PLAYLIST_SONG_SUCCESS,
            playlist,
            song
        };
    }
}
