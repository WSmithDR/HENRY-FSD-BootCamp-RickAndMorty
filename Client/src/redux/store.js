import { createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'
import initialState from './initialState'
import {composeWithDevTools} from "redux-devtools-extension"


// Restaurar desde localStorage si existe
const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : initialState

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

// Guardar estado en localStorage cuando cambie
store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store