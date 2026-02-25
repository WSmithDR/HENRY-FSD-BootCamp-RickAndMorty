import { connect, useDispatch } from "react-redux"
import Card from "../Card"
import { filterCards, orderCards, removeFav } from "../../redux/actions/actions"

const Favorites = ({myFavorites, onClose, removeFav})=>{
    const closeFavorite = (id)=>{
        onClose(id)
        removeFav(id)
    }

    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return(
        <div>
            <div>
                <select name="order" defaultValue="orderChar" placeholder="Order..." onChange={handleOrder}>
                    <option value="Ascendent">Ascendent</option>
                    <option value="Descendent">Descendent</option>
                </select>
            </div>
            <div>
                <select name="filter" defaultValue="filterChar" placeholder="filter..." onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
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
        removeFav: id=>dispatch(removeFav(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites)