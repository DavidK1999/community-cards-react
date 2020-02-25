import * as ProfileActionTypes from '../actiontypes/profile';


const initialState = {
    userProfile: {}
}

export default function Profile(state=initialState, action) {
    switch(action.type) {
        
        case ProfileActionTypes.USERPROFILE:
            return {
            ...state, userProfile: state.userProfile = action.value
        }
        
        default:
            return state;
    }
}