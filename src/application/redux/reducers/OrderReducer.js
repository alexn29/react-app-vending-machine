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
        
        case types.UPDATE_PREPARATION_TIME_ORDER:
            
            action.payload.length > 0 && action.payload.map(product => {
                if (product.preparation_time === 0 && product.status === 'Pending') {
                    product.status = 'Dispatched'
                }
                return product;
            })

            return {
                ...state,
                products: action.payload
            }
        
        case types.DELETE_ORDERS:
            return {
                products: []
            }

        default:
            return state;
    }
}

export default OrderReducer;