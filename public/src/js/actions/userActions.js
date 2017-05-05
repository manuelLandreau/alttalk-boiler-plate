// @flow
import Axios from 'axios';
import {SERVER_URL} from '../globals';
import jwt from '../common/jwt';

/**
 *
 * @returns {Promise.<T>}
 */
export function fetchUser() {
    return new Promise((resolve, reject) => {
        localStorage.getItem('jwt') ?
            Axios.get(SERVER_URL + 'users/me')
                .then((response) => resolve(setUserName(response.data)))
                .catch((error) => reject(fetchUserRejected(error))) :
            reject(fetchUserRejected('no jwt'));
    });
}

export function setUserName(username:string) {
    return {
        type: 'FETCH_USER_FULFILLED',
        payload: username,
    }
}

export function fetchUserRejected(error) {
    return {
        type: 'FETCH_USER_REJECTED',
        payload: error,
    }
}
