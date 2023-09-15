import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";
import axios from 'axios';

export const addFav = (character)=> {
    const endpoint = "http://localhost:3001/rickandmorty/fav"
    return dispatch => {
        axios.post(endpoint, character)
        .then(response => response.data)
        .then(data => dispatch(
            {
                type:ADD_FAV,
                payload: data
            }
        ))
    }

}

export const removeFav = (id) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id
    return dispatch => {
        axios.delete(endpoint)
        .then(response => response.data)
        .then(data => dispatch({
            type: REMOVE_FAV,
            payload: data
        }))
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (payload)=>{
   return {
    type: ORDER,
    payload
   }
}