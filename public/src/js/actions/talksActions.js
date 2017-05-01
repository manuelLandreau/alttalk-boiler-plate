// @flow
import axios from 'axios';
import {reset} from 'redux-form';
import {SERVER_URL} from '../globals';

/**
 *
 * @returns {Function}
 */
export function fetchTalks() {
    return (dispatch) => {
        dispatch({type: 'FETCHING_TALKS'});
        axios.get(SERVER_URL + 'talks/all')
            .then((response) => {
                dispatch({type: 'FETCH_TALKS_FULFILLED', payload: response.data})
            })
            .catch((err) => {
                dispatch({type: 'FETCH_TALKS_REJECTED', payload: err})
            })
    }
}

/**
 *
 * @param talk
 * @returns {{type: string, payload: *}}
 */
export function getTalk(talk) {
    return {
        type: 'FETCH_TALK_FULFILLED',
        payload: talk
    }
}

/**
 *
 * @param userId
 * @param talk
 * @returns {Function}
 */
export function addTalk(userId, talk) {
    return (dispatch) => {
        axios.post(SERVER_URL + 'talks/add', {userId, talk})
            .then(() => dispatch(reset('newtalk')))
            .catch((err) => {
                dispatch({type: 'ADD_TALK_REJECTED', payload: err})
            })
    }
}

/**
 *
 * @param id
 * @param text
 * @returns {{type: string, payload: {id: string, text: string}}}
 */
export function replyTalk(id, text) {
    return {
        type: 'REPLY_TALK',
        payload: {
            id,
            text,
        },
    }
}

