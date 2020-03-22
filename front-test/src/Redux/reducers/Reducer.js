
import { ADD_ITEM, DELETE_ITEM, INCREMENT, DECREMENT } from '../actions/actionsType';

const initialState = {
    items: [],
    total: 0
}


function rootReducer(state = initialState, { type, payload }) {
    switch (type) {

        case ADD_ITEM:
            return { ...state, items: [...state.items, payload] }

        case DELETE_ITEM:
            const deleteItem = state.items.filter(i => i.id !== payload);
            const countDelete = state.items.find(i => i.id === payload);
            const totalDelete = state.total;
            const totals = totalDelete - countDelete.count;
            return { ...state, items: deleteItem, total: totals };

        case INCREMENT:
            const addedItem = state.items.find(i => i.id === payload);
            addedItem.count += 1;
            let totalAdd = state.total;
            totalAdd += 1;
            return { ...state, items: [...state.items], total: totalAdd };

        case DECREMENT:
            let minusItem = state.items.find(i => i.id === payload);
            let del;
            if (minusItem.count >= 1) {
                del = minusItem.count -= 1
            } else {
                del = 0
            }
            const totalMinus = state.total;
            let total;
            if (totalMinus >= 1) {
                total = totalMinus -= 1
            } else {
                total = 0
            }

            return { ...state, items: [...state.items], del, total: total };
        default:
            return { ...state }


    }

}


export default rootReducer;