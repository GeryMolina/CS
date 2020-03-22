
import { ADD_ITEM, DELETE_ITEM, INCREMENT, DECREMENT } from '../actions/actionsType';

const initialState = {
    items: [
       
    ]
}


function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_ITEM:
            return { ...state, items: [ ...state.items, payload ] } 
        case DELETE_ITEM: 
            return '';
        case INCREMENT: 
            const addedItem = state.items.find(i => i.id === payload);
            addedItem.count += 1;
            return {...state, items:[...state.items]};
        case DECREMENT: 
            const minusItem = state.items.find(i => i.id === payload);
            const del = minusItem.count >= 1 ? (minusItem.count -= 1) : 0;
            return {...state, items:[...state.items]};
        default:
            return { ...state }
        
        
    }

}


export default rootReducer;