import * as CardActionTypes from '../actiontypes/card';


export const getCards = () => {
    return async (dispatch, getState) => {
        try {
            const allCards = await fetch(`http://localhost:8000/card/all`)
            const parsedAllCards = await allCards.json();
            dispatch({type: CardActionTypes.GET, value: parsedAllCards});

        } catch (error) {
            console.log ("ERROR :", error);
        }
    }
}

export const getFeedCards = () => {
    return async (dispatch, getState) => {
        const currentUser = getState().user.user;
        const feedCards = await fetch(`http://localhost:8000/card/feed/${currentUser._id}`, {
            method: 'POST',
            body: JSON.stringify(currentUser),
            headers: {'Content-Type' : 'application/json'}
        });
        const parsedFeedCards = await feedCards.json();
        dispatch({type: CardActionTypes.GET, value: parsedFeedCards});
    }
}

export const getUserProfileCards = value => {
    console.log(value);
    return async (dispatch, getState) => {
        try {
            console.log("HELLO");
            const filteredCards = await fetch(`http://localhost:8000/card/profile/${value._id}`);
            const parsedAllCards = await filteredCards.json();
            dispatch({type: CardActionTypes.FILTERCARDS, value: parsedAllCards});

        } catch (error) {
            console.log ("ERROR :", error);
        }
    }
}


export const upvotePost = card => {
    return async (dispatch, getState) => {
        try {
            const user = getState().user.user;
            console.log(user);
            await fetch(`http://localhost:8000/card/upvote/${card._id}`, {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {'Content-Type' : 'application/json'}
            });
            // const updatedUpvotedCount = await upvotedCard.json();
            // console.log(updatedUpvotedCount)
            // dispatch({type: CardActionTypes.CREATE, value: updatedUpvotedCount});
        } catch (error) {
            console.log ("ERROR :", error);
        }
    }
}


export const clearCards = () => {
    return {
        type: CardActionTypes.GET,
        value: []
    }
}

export const taggedCards = tag => {
    console.log(tag.substring(1));
    return async (dispatch, getState) => {
        try {
           const taggedCards =  await fetch(`http://localhost:8000/card/tagged/${tag.substring(1)}`);
           const parsedTaggedCards = await taggedCards.json();
           dispatch({type: CardActionTypes.GET, value: parsedTaggedCards});

        } catch (error) {
            console.log('Error');
        }
    }
}
