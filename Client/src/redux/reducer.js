import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    ADD_FAV,
    REMOVE_FAV,
    FILTER_CARDS,
    ORDER_CARDS
} from './actions/actions-types'
import initialState from './initialState'



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case LOGIN_FAILURE:
        case LOGOUT:
            return {
                ...state,
                ...action.payload
            }
        
        case ADD_FAV:
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: [...action.payload],
                allFavoriteCharacters: [...action.payload]
            }

        case FILTER_CARDS:
            const filtered = state.allCharacters.filter(
                character => character.gender === action.payload
            )
            return {
                ...state,
                myFavorites: filtered
            }

        case ORDER_CARDS:
            const orderedChars = state.allCharacters
                .sort((a, b) => {
                    if (action.payload === "Ascendent") return a.id - b.id
                    if (action.payload === "Descendent") return b.id - a.id
                    return 0
                })
            return {
                ...state,
                myFavorites: orderedChars
            }
        
        default:
            return {...state}
    }
}

export default reducer