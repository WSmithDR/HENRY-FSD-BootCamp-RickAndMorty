
import api from '../../services/api'
import initialState from '../initialState'
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    ADD_FAV,
    REMOVE_FAV,
    FILTER_CARDS,
    ORDER_CARDS
} from './actions-types'

// Action creators simples
export const loginSuccess = (loginSuccessRes) => ({
    type: LOGIN_SUCCESS,
    payload: loginSuccessRes
})

export const loginFailure = (errorRes) => ({
    type: LOGIN_FAILURE,
    payload: errorRes
})

export const logoutAction = () => ({
    type: LOGOUT,
    payload: initialState
})

export const addFavSuccess = (favorites) => ({
    type: ADD_FAV,
    payload: favorites
})

export const removeFavSuccess = (favorites) => ({
    type: REMOVE_FAV,
    payload: favorites
})

// Actions con side effects (thunks)
// En actions.js:
export const login = (userData) => {
    return async (dispatch) => {
        try {
            console.log('Login action called with:', userData)
            const { data } = await api.post('/login', userData)
            console.log('Response from server:', data)
            localStorage.setItem("token", data.token)
            dispatch(loginSuccess(data))

        } catch (error) {
            console.log('Login error:', error)
            const errorMessage = error.response?.data?.error || 'Login failed'
            dispatch(loginFailure(errorMessage))
        }
    }
}

export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem("reduxState")
        dispatch(logoutAction())
    }
}

export const addFav = (character) => {
    return async (dispatch) => {
        try {
            const { data } = await api.post('/fav', character)
            dispatch(addFavSuccess(data.favorites))
        } catch (error) {
            console.error('Error adding favorite:', error)
        }
    }
}

export const removeFav = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await api.delete(`/fav/${id}`)
            dispatch(removeFavSuccess(data.favorites))
        } catch (error) {
            console.error('Error removing favorite:', error)
        }
    }
}

export const filterCards = (gender) => ({
    type: FILTER_CARDS,
    payload: gender
})

export const orderCards = (order) => ({
    type: ORDER_CARDS,
    payload: order
})