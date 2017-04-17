// @flow
import Axios from 'axios';
import {closeModal} from './uiActions';
import {fetchUser} from './userActions';
import {fetchRatio} from '../actions/ratioActions';
import {SERVER_URL} from '../globals';
import jwt from '../common/jwt';

/**
 *
 * @param username
 * @param password
 * @returns {Function}
 */
export function login(username:string, password:string):Function {
    return (dispatch:Function):void => {
        dispatch({type: 'AUTH_PROCESSING'});
        Axios.post(SERVER_URL + 'auth/login', {'username': username, 'password': password})
            .then((response:Object) => {
                localStorage.setItem('jwt', response.data);
                dispatch({type: 'AUTH_SUCCESS'});
                fetchUser()
                    .then((userDispatch) => {
                        dispatch(userDispatch);
                        dispatch(fetchRatio());
                        dispatch(closeModal())
                    }).catch((errDispatch) => dispatch(errDispatch));
            })
            .catch((err:Object) => {
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
export function register(email:string, username:string, password:string):Function {
    return (dispatch:Function):void => {
        Axios.post(SERVER_URL + 'auth/register', {'email': email, 'username': username, 'password': password})
            .then(():void => login(username, password))
            .catch((err:Object):void => {
                dispatch({type: 'AUTH_FAILED', payload: err})
            });
    }
}

/**
 *
 * @returns {Function}
 */
export function logout(dispatch:Function):void {
    localStorage.removeItem('jwt');
    dispatch({type: 'LOGOUT'});
    dispatch({type: 'REMOVE_USER'});
    dispatch({type: 'DROP_USER_MENU'});
}

/**
 *
 * @returns {{type: string, payload: null}}
 */
export function clearErrors():Object {
    return {
        type: 'CLEAR_AUTH_ERROR',
        payload: null
    }
}