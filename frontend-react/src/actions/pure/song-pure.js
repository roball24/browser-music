import { reduxActions } from '../../constants';

export default class SongPureActions {
    // GET all songs
    static getAllPlaylistRequest(playlist) {
        return {
            type: reduxActions.GET_ALL_PLAYLIST_SONGS_REQUEST,
            playlist
        };
    }

    static getAllPlaylistFailure(playlist, error) {
        return {
            type: reduxActions.GET_ALL_PLAYLIST_SONGS_ERROR,
            playlist,
            error
        };
    }

    static returnAllPlaylist(playlist, data) {
        return {
            type: reduxActions.RETURN_ALL_PLAYLIST_SONGS,
            playlist,
            data
        };
    }

    // GET artwork
    static getArtworkRequest(playlist, song) {
        return {
            type: reduxActions.GET_SONG_ARTWORK_REQUEST,
            playlist,
            song
        };
    }

    static getArtworkFailure(playlist, song, error) {
        return {
            type: reduxActions.GET_SONG_ARTWORK_ERROR,
            playlist,
            song,
            error
        };
    }

    static returnArtwork(playlist, song, data) {
        return {
            type: reduxActions.RETURN_SONG_ARTWORK,
            playlist,
            song,
            data
        };
    }
}
