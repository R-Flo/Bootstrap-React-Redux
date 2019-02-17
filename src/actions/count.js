import * as types from '../constants/actionTypes'

export const add = (quantity) => {
    return { type: types.ADD, quantity}
};