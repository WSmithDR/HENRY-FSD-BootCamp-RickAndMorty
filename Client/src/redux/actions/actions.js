
import api from '../../services/api'
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




export const logoutAction = () => ({
    type: LOGOUT
})

export const addFavSuccess = (favorites) => ({
    type: ADD_FAV,
    payload: favorites
})

export const removeFavSuccess = (id) => ({
    type: REMOVE_FAV,
    payload: id
})

// Actions con side effects (thunks)
// En actions.js:


export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        dispatch(logoutAction())
    }
}

export const addFav = (character) => {
    return async (dispatch) => {
        try {
            const { data } = await api.post('/fav', character)
            dispatch(addFavSuccess(data))
        } catch (error) {
            console.error('Error adding favorite:', error)
        }
    }
}

export const removeFav = (id) => {
    return async (dispatch) => {
        try {
            await api.delete(`/fav/${id}`)
            dispatch(removeFavSuccess(id))
        } catch (error) {
            console.error('Error removing favorite:', error)
        }
    }
}

// Action de rehidratación
export const rehydrateAuth = () => {
    return (dispatch) => {
        try {
            const token = localStorage.getItem('token')
            const savedUser = JSON.parse(localStorage.getItem('user'))

            if (!token || !savedUser) {
                return { hasSession: false }
            }

            // Usar el action creator
            dispatch(loginSuccess(true, token, savedUser))

            return { hasSession: true, user: savedUser }
        } catch (error) {
            // Limpiar localStorage si está corrupto
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            return { hasSession: false }
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