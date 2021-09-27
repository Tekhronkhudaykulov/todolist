import {combineReducers, createStore} from "redux";
import counter from "./reducers/counter";
import {composeWithDevTools} from "redux-devtools-extension";
import todo from "./reducers/todo";


const rootReducer = combineReducers({
    counter,
    todo

})

const store = createStore(rootReducer,composeWithDevTools())

export default store;