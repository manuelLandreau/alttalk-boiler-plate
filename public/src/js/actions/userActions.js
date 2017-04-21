// @flow
import Axios from 'axios';
import {SERVER_URL} from '../globals';
import jwt from '../common/jwt';

/**
 *
 * @returns {Promise.<T>|Promise<R>}
 */
export function fetchUser() {
    if (jwt)
        return new Promise((resolve, reject) => {
        Axios.get(SERVER_URL + 'users/me')
            .then((response:Object):Function => resolve(setUserName(response.data)))
            .catch((error:Object):Function => reject(fetchUserRejected(error)));
    });
    return new Promise((resolve, reject) => {
        reject(fetchUserRejected('no jwt'));
    });
}

export function setUserName(username:string):Object {
    return {
        type: 'FETCH_USER_FULFILLED',
        payload: username,
    }
}

export function fetchUserRejected(error:Object):Object {
    return {
        type: 'FETCH_USER_REJECTED',
        payload: error,
    }
}
