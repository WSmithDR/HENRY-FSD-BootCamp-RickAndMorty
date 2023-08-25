import { connect } from "react-redux"
import Card from "../Card"
import { removeFav } from "../../redux/actions/actions"

const Favorites = ({myFavorites, onClose, removeFav})=>{
    const closeFavorite = (id)=>{
        onClose(id)
        removeFav(id)
    }

    return(
        <div>
            {myFavorites && myFavorites.map(favChar => <Card
            id={favChar.id}
            name={favChar.name}
            status={favChar.status}
            species={favChar.species}
            gender={favChar.gender}
            origin={favChar.origin.name}
            image={favChar.image}
            onClose={()=>closeFavorite(favChar.id)}
         />)}
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        removeFav: id=>dispatch(removeFav(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites)