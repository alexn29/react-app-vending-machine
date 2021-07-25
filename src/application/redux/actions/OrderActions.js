import * as types from '../types';
import uuid from 'react-uuid';

export const createOrder = (product) => async (dispatch, getState) => {
    
    let data = {
        ...product,
        orderId: uuid(),
        status: 'Pending',
        createdAt: new Date().toLocaleString(),
    }

    dispatch({
        type: types.ADD_ORDER,
        payload: data
    });
}

export const updatePreparationTime = () => async (dispatch, getState) => {
    const { order } = getState();
    const products = [...order.products];

    products.length > 0 && products.map(product => {
        product.preparation_time = product.preparation_time > 0 ? product.preparation_time - 1 : 0;
        return product;
    })
    
    dispatch({
        type: types.UPDATE_PREPARATION_TIME_ORDER,
        payload: products
    })
}

export const deleteOrders = () => async (dispatch, getState) => {
    dispatch({
        type: types.DELETE_ORDERS,
    })
}