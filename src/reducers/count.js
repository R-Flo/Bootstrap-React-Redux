import * as types from '../constants/actionTypes'

let initialState = {
    count: 0
};

export default function count(state = initialState, action) {

    switch (action.type) {
        case types.ADD:
            return {
                ...state,
                count: state.count + action.quantity
            };
        default:
            return state
    }
}