export default function reducer(state = {
    ratio: null,
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "FETCH_RATIO": {
            return {...state, fetching: true}
        }
        case "FETCH_RATIO_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_RATIO_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                ratio: action.payload,
            }
        }
    }

    return state
}
