import * as types from '../types';
import uuid from 'react-uuid';

export const createOrder = (product) => async (dispatch, getState) => {
    
    let data = {
        ...product,
        orderId: uuid(),
        status: 'Pending'
    }

    dispatch({
        type: types.ADD_ORDER,
        payload: data
    });
}