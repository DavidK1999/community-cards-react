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

export const getUserProfileCards = value => {
    console.log('Hi');
    return async (dispatch, getState) => {
        try {
            const filteredCards = await fetch(`http://localhost:8000/card/profile/${value._id}`);
            const parsedAllCards = await filteredCards.json();
            console.log(parsedAllCards);
            dispatch({type: CardActionTypes.FILTERCARDS, value: parsedAllCards});

        } catch (error) {
            console.log ("ERROR :", error);
        }
    }
}
