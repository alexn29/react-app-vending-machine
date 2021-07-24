import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import OrderReducer from './OrderReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['order']
}

const RootReducer = combineReducers({
    order: OrderReducer
});

export default persistReducer(persistConfig, RootReducer)