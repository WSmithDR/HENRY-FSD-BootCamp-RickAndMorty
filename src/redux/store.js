import {createStore, applyMiddleware} from "redux"
import { composeWithDevtools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const store = createStore(
    reducer,
    composeWithDevtools(applyMiddleware(thunk))
)

export default store
