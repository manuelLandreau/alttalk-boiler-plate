// @flow
import axios from 'axios';
import {SERVER_URL} from '../globals';

/**
 *
 * @returns {Function}
 */
export function fetchRatio():Function {
    return (dispatch:Function):void => {
        axios.get(SERVER_URL + 'users/me/ratio')
            .then((response:Object):void => {
                dispatch({type: 'FETCH_RATIO_FULFILLED', payload: response.data})
            })
            .catch((err:Object):void => {
                dispatch({type: 'FETCH_RATIO_ERR', payload: err})
            })
    }
}

/**
 *
 * @returns {Function}
 */
export function incRatio():Function {
    return (dispatch:Function):void => {
        axios.post('http://127.0.0.1:3000/inc')
            .then(():void => {
                dispatch(fetchRatio())
            })
            .catch((err:Object):void => {
                dispatch({type: 'INC_RATIO_ERR', payload: err})
            })
    }
}

/**
 *
 * @returns {Function}
 */
export function decRatio():Function {
    return (dispatch:Function):void => {
        axios.post('http://127.0.0.1:3001/dec')
            .then((response:Object):void => {
                dispatch({type: 'DEC_RATIO', payload: response.data})
            })
            .catch((err:Object):void => {
                dispatch({type: 'DEC_RATIO_ERR', payload: err})
            })
    }
}