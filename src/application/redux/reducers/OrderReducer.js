import * as types from '../types';

const initState = {
    products: []
}

const OrderReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_ORDER:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        default:
            return state;
    }
}

export default OrderReducer;