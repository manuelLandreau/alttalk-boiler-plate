export default function reducer(state = {
    talk: {
        user: {},
        answers: {}
    },
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case 'FETCHING_TALK': {
            return {...state, fetching: true}
        }
        case 'FETCH_TALK_REJECTED': {
            return {...state, fetching: false, error: action.payload}
        }
        case 'FETCH_TALK_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                talk: action.payload,
            }
        }
    }

    return state
}
