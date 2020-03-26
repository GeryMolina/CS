
import { ADD_ITEM, DELETE_ITEM, INCREMENT, DECREMENT, ORDER_TITLE, ORDER_COUNT, SEARCH_ITEM, LESS_COUNT } from '../actions/actionsType';

const initialState = {
    items: [],
    total: 0
}


function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_ITEM:
            console.log(payload)
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
            let totalMinus = state.total;
            let total;
            if (totalMinus >= 1) {
                total = totalMinus -= 1
            } else {
                total = 0
            }
            return { ...state, items: [...state.items], del, total: total };

        case ORDER_TITLE:
            const order = state.items;
            function compare(a, b) {
                const titleA = a.title.toUpperCase();
                const titleB = b.title.toUpperCase();
                let comparison = 0;
                if (titleA > titleB) {
                    comparison = 1;
                } else if (titleA < titleB) {
                    comparison = -1;
                }
                return comparison;
            }
            order.sort(compare);
            return { ...state, items: [...state.items], payload };

        case ORDER_COUNT:
            const sorting = state.items;
            function compar(a, b) {
                const countA = a.count;
                const countB = b.count;
                let comparison = 0;
                if (countA > countB) {
                    comparison = -1;
                } else if (countA < countB) {
                    comparison = 1;
                }
                return comparison;
            }
            sorting.sort(compar);
            return { ...state, items: [...state.items], payload }

        case SEARCH_ITEM:
            const findItem = state.items.filter((i) => i.title.toLowerCase().includes(payload.toLowerCase()))
            const notification = alert('Producto no encontrado')
            if (findItem.length === 0) {

                return { ...state, items: [...state.items], notification }
            }
            return { ...state, items: findItem }

        case LESS_COUNT:
            const findLess = state.items.filter((i) => i.count.includes(payload))
            
            if (findLess.length === 0) {

                return { ...state, items: [...state.items] }
            }
            return { ...state, items: findLess }


        default:
            return { ...state }


    }

}

export default rootReducer;