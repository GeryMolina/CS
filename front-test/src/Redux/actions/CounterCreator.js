import { ADD_ITEM } from './actionsType'

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
});