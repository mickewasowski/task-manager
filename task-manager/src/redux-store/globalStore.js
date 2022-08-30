import {createStore, combineReducers, compose} from 'redux';
import todoReducer from './reducers/TodoReducer';

import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import {configureStore} from '@reduxjs/toolkit';


// let allReducers = combineReducers({
//     todo: todoReducer,
// })

// export const store = createStore(
//     allReducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const persistConfig = {
    key: 'todo',
    storage,
};
const reducers = combineReducers({ todo: todoReducer });
const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});