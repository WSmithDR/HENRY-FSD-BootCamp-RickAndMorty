import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevtools} from "redux-devtools-extension"

const store = createStore(
    reducer,
    composeWithDevtools(applyMiddleware(thunk))
)

export default store