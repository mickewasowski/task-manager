import {createStore, combineReducers} from 'redux';
import todoReducer from './reducers/TodoReducer';

let allReducers = combineReducers({
    todo: todoReducer,
})


export const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

