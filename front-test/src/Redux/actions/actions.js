import { ADD_ITEM, DELETE_ITEM, INCREMENT, DECREMENT, ORDER_COUNT, ORDER_TITLE, SEARCH_ITEM, LESS_COUNT, GREATER_COUNT } from './actionsType';

export const addItem = title => ({
    type: ADD_ITEM,
    payload: title
});


export const deleteItem = id => ({
    type: DELETE_ITEM,
    payload: id
})

export const increment = id => ({
    type: INCREMENT,
    payload: id
})

export const decrement = id => ({
    type: DECREMENT,
    payload: id
})

export const orderTitle = title => ({
    type: ORDER_TITLE,
    payload: title
})

export const orderCount = count => ({
    type: ORDER_COUNT,
    payload: count
})

export const searchItem = title => ({
    type: SEARCH_ITEM,
    payload: title
})

export const lessCount = count => ({
    type: LESS_COUNT,
    payload: count
})

export const greaterCount = count => ({
    type: GREATER_COUNT,
    payload: count
})