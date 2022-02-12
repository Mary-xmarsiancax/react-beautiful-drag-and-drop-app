import {combineReducers, createStore} from "redux";
import itemsReducer from "./itemsReducer";
import {composeWithDevTools} from "redux-devtools-extension";

let reducers = combineReducers({
    storeItems:itemsReducer
})
let store = createStore(reducers, composeWithDevTools())
export default store;