import { ADD_ITEM, DELETE_ITEM, INCREMENT, DECREMENT } from './actionsType';

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
});


export const deleteItem = id => ({
    type: DELETE_ITEM,
    payload: id
})

export const increment = id => ({
    type: INCREMENT,
    payload: id
})

export const decrement =  id => ({
    type: DECREMENT,
    payload: id
})