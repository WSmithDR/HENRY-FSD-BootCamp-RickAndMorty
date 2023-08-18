import { ADD_FAV, REMOVE_FAV } from "./actions/actions-types"

const initialState = {
    myFavorites:[]
}

const reducer = (state = initialState, action)=> {
    switch(action.type){
        
        case ADD_FAV:
            return {...state, 
                myFavorites:[...state.myFavorites, 
                    action.payload]}
        
        case REMOVE_FAV:
            const filteredCharacters = state.myFavorites
            .filter(character => character
                .id !== Number(action.payload))
            return {
                ...state,
                myFavorites: filteredCharacters
            }
        
        default:
            return {...state}
    }
}

export default reducer