export default function reducer(state = {
    talks: {},
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case 'FETCHING_TALKS': {
            return {...state, fetching: true}
        }
        case 'FETCH_TALKS_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }
        case 'FETCH_TALKS_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                talks: action.payload,
            }
        }
    }

    return state
}
