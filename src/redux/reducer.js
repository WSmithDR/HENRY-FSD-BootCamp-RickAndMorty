import { ADD_FAV, FILTER_FAVS, REMOVE_FAV } from "./actions/actions-types"

const initialState = {
    myFavorites:[],
    allCharacters:[]
}

const reducer = (state = initialState, action)=> {
    switch(action.type){
        case ADD_FAV:
            return {...state,
            myFavorites:[...state.allCharacters, action.payload],
            allCharacters:[...state.allCharacters, action.payload]
        }
        
        case REMOVE_FAV:
            return {...state,
            myFavorites: state.myFavorites
            .filter(character=> character.id !== action.payload)
        }

        case FILTER_FAVS:
            const filtered = state.allCharacters.filter(favChar => favChar.gender === action.payload)
            return {...state,
            myFavorites:filtered
        }

        default:
            return {...state}
    }
}

export default reducer