import { connect } from "react-redux"
import Card from "../Card"
import { removeFav } from "../../redux/actions/actions"
import { filterFavs } from './../../redux/actions/actions';

const Favorites = ({myFavorites, onClose, removeFav, filterFavs})=>{
    const closeFavorite = (id)=>{
        onClose(id)
        removeFav(id)
    }

    const handleChange = event => {
        filterFavs(event.target.value)
    }

    return(
        <div>
            <select defaultValue="All" name="filter" onChange={handleChange}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
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
        removeFav: id=>dispatch(removeFav(id)),
        filterFavs: gender => dispatch(filterFavs(gender))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites)