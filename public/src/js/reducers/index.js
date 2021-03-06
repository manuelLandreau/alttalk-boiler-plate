import {combineReducers} from 'redux';
import { reducer as form } from 'redux-form';
import talk from './talkReducer';
import auth from './authReducer';
import user from './userReducer';
import ui from './uiReducer';
import {routerReducer} from 'react-router-redux';

export default combineReducers({talk, auth, user, ui, form, router: routerReducer});
