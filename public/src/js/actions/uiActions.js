// @flow

/**
 *
 * @returns {{type: string}}
 */
export function openModal():Object {
    return {
        type: 'OPEN_MODAL'
    }
}

/**
 *
 * @returns {{type: string}}
 */
export function closeModal():Object {
    return {
        type: 'CLOSE_MODAL'
    }
}

/**
 *
 * @returns {{type: string}}
 */
export function switchToLogin():Object {
    return {
        type: 'LOGIN_TAB'
    }
}

/**
 *
 * @returns {{type: string}}
 */
export function switchToRegister():Object {
    return {
        type: 'REGISTER_TAB'
    }
}