import { combineReducers } from 'redux';
import user from './user';
import card from './card';
import profile from './profile';

export default combineReducers({user, card, profile});