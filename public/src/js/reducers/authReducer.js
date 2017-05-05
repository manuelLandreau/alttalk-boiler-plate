export default function reducer(state = {
    authorizing: false,
    authorized: false,
    error: { message: null },
}, action) {
    switch (action.type) {
        case 'AUTH_PROCESSING': {
            return {...state, authorizing: true}
        }
        case 'AUTH_FAILED': {
            return {
                ...state,
                authorizing: false,
                error: action.payload
            }
        }
        case 'AUTH_SUCCESS': {
            return {
                ...state,
                authorizing: false,
                authorized: true,
                error: { message: null }
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                authorizing: false,
                authorized: false,
                error: { message: null }
            }
        }
    }
    return state
}
