import * as CardActionTypes from '../actiontypes/card';

const initialState = {
    cards: [],
    filteredCards: []
}

export default function Card(state=initialState, action) {
    switch(action.type) {
        
    case CardActionTypes.GET:
        return {...state, cards: state.cards = action.value}
    
    case CardActionTypes.FILTERCARDS:
        return {...state, filteredCards: state.filteredCards = action.value}
        
        default:
            return state;
    }
}