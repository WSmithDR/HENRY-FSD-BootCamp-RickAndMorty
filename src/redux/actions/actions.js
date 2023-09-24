import { ADD_FAV, FILTER_FAVS, REMOVE_FAV } from "./actions-types";

export const addFav = (character)=> {
    return {
        type:ADD_FAV,
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const filterFavs = (gender) => {
    return {
        type: FILTER_FAVS,
        payload: gender
    }
}