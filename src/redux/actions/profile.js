import * as ProfileActionTypes from '../actiontypes/profile';
import * as CardActionTypes from '../actiontypes/card';

export const getUserProfile = value => {
    return (dispatch, getState) => {
            dispatch({type: ProfileActionTypes.USERPROFILE, value});
            // dispatch({type: CardActionTypes.GET, value});
    }
}

