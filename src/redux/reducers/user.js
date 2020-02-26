import * as UserTypes from '../actiontypes/user';

const initialState = {
    form : '',
    user: {},
    loggedIn: false,
    userProfile: {},
    isProfile: false
}

export default function User(state=initialState, action) {
    switch(action.type) {
        
    case UserTypes.TOGGLEFORM:
        return {...state, form: state.form = action.form}
    
    case UserTypes.AUTHENTICATE:
        return {
                ...state, user: state.user = action.value,
                ...state, form: state.form = '',
                ...state, loggedIn: state.loggedIn = true
               }
    
    case UserTypes.DEAUTHENTICATE:
        return {
                ...state, user: state.user = {},
                ...state, loggedIn: state.loggedIn = false
               }

    case UserTypes.CREATE:
        return {
            ...state, user: state.user = action.value
        }
    
    case UserTypes.USERPROFILE:
        return {
            ...state, isProfile: state.isProfile = true,
            ...state, userProfile: state.userProfile = action.value
        }
        
    default:
        return state;
    }

}