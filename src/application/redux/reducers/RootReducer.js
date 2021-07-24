import { combineReducers } from 'redux';

import OrderReducer from './OrderReducer';

const RootReducer = combineReducers({
    order: OrderReducer
});

export default RootReducer