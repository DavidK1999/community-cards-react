import * as UserActionTypes from '../actiontypes/user';

export const toggleForm = form => {
    return {
        type: UserActionTypes.TOGGLEFORM,
        form
    }
}

export const authenticate = (value, inputs) => {
    console.log(value);
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`http://localhost:8000/auth/${value}`, {
                method: 'POST',
                body: JSON.stringify(inputs),
                headers: {'Content-Type' : 'application/json'}
            });
            const parsedResponse = await response.json();
            dispatch({type: UserActionTypes.AUTHENTICATE, value: parsedResponse.User});
            window.sessionStorage.token = parsedResponse.Token;
        } catch (error) {
            console.log('error', error);
        }
    }
} 

export const deauthenticate = () => {
    return {
        type: UserActionTypes.DEAUTHENTICATE
    }
}


export const createCard = inputs => {
    return async (dispatch, getState) => {
        try {
            const userID = getState().user.user._id;
            const createdCard = await fetch(`http://localhost:8000/card/create/${userID}`, {
                method: 'POST',
                body: JSON.stringify(inputs),
                headers: {'Content-Type' : 'application/json'}
            });
            const updatedCreatedCount = await createdCard.json();
            dispatch({type: UserActionTypes.CREATE, value: updatedCreatedCount});
        } catch (error) {
            console.log ("ERROR :", error);
        }
    }
}

export const storeUpvote = card => {
    return async (dispatch, getState) => {
        try {
            const user = getState().user.user;
            console.log(user);
            const upvotedCard = await fetch(`http://localhost:8000/user/upvote/${user._id}`, {
                method: 'PUT',
                body: JSON.stringify(card),
                headers: {'Content-Type' : 'application/json'}
            });
            const updatedUpvotedCount = await upvotedCard.json();
            dispatch({type: UserActionTypes.CREATE, value: updatedUpvotedCount});
        } catch (error) {
            console.log ("ERROR :", error);
        }
    }
}




export const followUser = user => {
    return async (dispatch, getState) => {
        const currentUser = getState().user.user;
        const following = await fetch(`http://localhost:8000/user/follow/${user._id}`, {
            method: 'PUT',
            body: JSON.stringify(currentUser),
            headers: {'Content-Type' : 'application/json'}
        });
        const parsedFollowing = await following.json();
        dispatch({type: UserActionTypes.CREATE, value: parsedFollowing});
    }
}

export const followedUser = user => {
    return async (dispatch, getState) => {
        const currentUser = getState().user.user;
        const followed = await fetch(`http://localhost:8000/user/followedBy/${currentUser._id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {'Content-Type' : 'application/json'}
        });
        const parsedFollowed = await followed.json();
        console.log(parsedFollowed);
        // dispatch({type: UserActionTypes.USERPROFILE, value: parsedFollowed});
        // console.log(parsedFollowed);

    }
}

export const getUserProfile = user => {
    return async (dispatch, getState) => {
        try {
            const userProfile = await fetch(`http://localhost:8000/user/profile/${user._id}`);
            const parsedUserProfile = await userProfile.json();
            console.log(parsedUserProfile);
            dispatch({type: UserActionTypes.USERPROFILE, value: parsedUserProfile});
            
        } catch (error) {
            console.log("ERROR", error);
        }
    }
}



