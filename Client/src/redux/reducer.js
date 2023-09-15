import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions/actions-types"

const initialState = {
    myFavorites:[],
    allCharacters:[]
}

const reducer = (state = initialState, action)=> {
    switch(action.type){
        case ADD_FAV:
            return {...state,
            myFavorites:action.payload,
            allCharacters:action.payload
        }
        
        case REMOVE_FAV:
            return {...state,
            myFavorites: action.payload
        }

        case FILTER:
            const filtered = state.allCharacters.filter
            (character => character.gender === action.payload)
            return {
                ...state,
                myFavorites: filtered
            }

        case ORDER:
            const orderedChars = state.allCharacters
            .sort((a,b)=>{
                if(action.payload === "Ascendent") return a.id - b.id
                return b.id - a.id
            })

            return {...state,
            myFavorites:[...orderedChars]}

        default:
            return {...state}
    }
}

export default reducer