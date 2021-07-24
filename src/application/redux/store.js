import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import RootReducer from './reducers/RootReducer';

const middlewares = [thunk];

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    RootReducer,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
)

const persistor = persistStore(store);

export { store, persistor };