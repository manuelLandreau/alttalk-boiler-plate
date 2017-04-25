// @flow
import Axios from 'axios';
import {closeModal} from './uiActions';
import {fetchUser} from './userActions';
import {fetchRatio} from '../actions/ratioActions';
import {SERVER_URL} from '../globals';

/**
 *
 * @param username
 * @param password
 * @returns {Function}
 */
export function login(username, password) {
    return (dispatch) => {
        dispatch({type: 'AUTH_PROCESSING'});
        Axios.post(SERVER_URL + 'auth/login', {'username': username, 'password': password})
            .then((response) => {
                localStorage.setItem('jwt', response.data);
                Axios.defaults.headers.common['Authorization'] = response.data;
                fetchUser()
                    .then((userDispatch) => {
                        dispatch(userDispatch);
                        dispatch(fetchRatio());
                        dispatch(closeModal())
                    }).catch((errDispatch) => dispatch(errDispatch));
                dispatch({type: 'AUTH_SUCCESS'});
            })
            .catch((err) => {
                dispatch({type: 'AUTH_FAILED', payload: err})
            });
    }
}

/**
 *
 * @param email
 * @param username
 * @param password
 * @returns {Function}
 */
export function register(email, username, password) {
    return (dispatch) => {
        Axios.post(SERVER_URL + 'auth/register', {'email': email, 'username': username, 'password': password})
            .then(() => dispatch(login(username, password)))
            .catch((err) => {
                dispatch({type: 'AUTH_FAILED', payload: err})
            });
    }
}

/**
 *
 * @returns {Function}
 */
export function logout(dispatch) {
    localStorage.removeItem('jwt');
    Axios.defaults.headers.common['Authorization'] = null;
    dispatch({type: 'LOGOUT'});
    dispatch({type: 'REMOVE_USER'});
    dispatch({type: 'DROP_USER_MENU'});
}

/**
 *
 * @returns {{type: string, payload: null}}
 */
export function clearErrors() {
    return {
        type: 'CLEAR_AUTH_ERROR',
        payload: null
    }
}