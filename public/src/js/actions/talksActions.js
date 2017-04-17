// @flow
import axios from 'axios';
import {fetchRatio} from './ratioActions'
import {SERVER_URL} from '../globals';

/**
 *
 * @returns {Function}
 */
export function fetchTalk():Function {
    return (dispatch:Function) => {
        dispatch({type: 'FETCHING_TALK'});
        axios.get(SERVER_URL + 'talks/best')
            .then((response:Object):void => {
                dispatch({type: 'FETCH_TALK_FULFILLED', payload: response.data})
            })
            .catch((err:Object):void => {
                dispatch({type: 'FETCH_TALK_REJECTED', payload: err})
            })
    }
}

/**
 *
 * @param talk
 * @returns {{type: string, payload: *}}
 */
export function getTalk(talk:string):Object {
    return {
        type: 'FETCH_TALK_FULFILLED',
        payload: talk
    }
}

/**
 *
 * @param userId
 * @param text
 * @returns {Function}
 */
export function addTalk(userId:string, text:string):Function {
    return (dispatch:Function):void => {
        axios.post(SERVER_URL + 'talks/add', {userId, talk: text})
            .then(():void => {
                dispatch(fetchRatio())
            })
            .catch((err:Object):void => {
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
export function replyTalk(id:string, text:string):Object {
    return {
        type: 'REPLY_TALK',
        payload: {
            id,
            text,
        },
    }
}

