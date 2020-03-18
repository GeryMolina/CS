
import { ADD_ITEM } from '../actions/actionsType';

const initialState = {
    items: []
}


function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_ITEM:
            return { items: { ...state, payload } }
            
        default:
            return { ...state }
    }

}


export default rootReducer;