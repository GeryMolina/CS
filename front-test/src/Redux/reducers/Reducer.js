
import { ADD_ITEM, PRINT_LIST, DELETE_ITEM } from '../actions/actionsType';

const initialState = {
    items: []
}


function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_ITEM:
            return { items: { ...state.items, payload } }
        
        case PRINT_LIST:
            return '';
        
        case DELETE_ITEM:
            return '';

        default:
            return { ...state }
        
        
    }

}


export default rootReducer;