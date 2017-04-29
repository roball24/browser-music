import { endpoints } from '../../constants';
import fetch from 'isomorphic-fetch';

export default class PlaylistRequests {
    static getAll() {
        return fetch(endpoints.PLAYLIST, { method: 'get' });
    }

    static getArtwork(params) {
        var paramString = Object.keys(params)
            .map(k => k + '=' + params[k])
            .join('&');
        return fetch(endpoints.PLAYLIST + '/artwork?' + paramString, {
            method: 'get'
        });
    }

    static add(params) {
        var paramString = Object.keys(params)
            .map(k => k + '=' + params[k])
            .join('&');
        return fetch(endpoints.PLAYLIST + '?' + paramString, {
            method: 'post'
        });
    }

    static delete(params) {
        var paramString = Object.keys(params)
            .map(k => k + '=' + params[k])
            .join('&');
        return fetch(endpoints.PLAYLIST + '?' + paramString, {
            method: 'delete'
        });
    }

    static deleteSong(params) {
        var paramString = Object.keys(params)
            .map(k => k + '=' + params[k])
            .join('&');
        return fetch(endpoints.PLAYLIST + '/songs?' + paramString, {
            method: 'delete'
        });
    }

    static addSong(params) {
        var paramString = Object.keys(params)
            .map(k => k + '=' + params[k])
            .join('&');
        return fetch(endpoints.PLAYLIST + '/songs?' + paramString, {
            method: 'post'
        });
    }
}
