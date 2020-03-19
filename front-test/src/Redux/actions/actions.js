import { ADD_ITEM, PRINT_LIST, DELETE_ITEM,INCREMENT, DECREMENT } from './actionsType';

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
});

export const printList= (id) =>({
    type: PRINT_LIST,
    payload: id
})

export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    payload: id
})

export const incremet= (count) =>({
    type: INCREMENT,
    payload: count
})

export const decrement = (count) => ({
    type: DECREMENT,
    payload: count
})