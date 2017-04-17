export default function reducer(state = {
    isOpen: false,
    tabSwitch: true,
    isUserMenuDropped: false
}, action) {

    switch (action.type) {
        case 'OPEN_MODAL': {
            return {...state, isOpen: true}
        }
        case 'CLOSE_MODAL': {
            return {...state, isOpen: false}
        }
        case 'LOGIN_TAB': {
            return {...state, tabSwitch: true}
        }
        case 'REGISTER_TAB': {
            return {...state, tabSwitch: false}
        }
        case 'DROP_USER_MENU': {
            return {...state, isUserMenuDropped: !state.isUserMenuDropped}
        }
    }

    return state
}
