import { connect } from "react-redux"
import Card from "../Card"

const Favorites = ({myFavorites, onClose})=>{
    return <div>
        {
         myFavorites.map(favChar => <Card
            id={favChar.id}
            name={favChar.name}
            status={favChar.status}
            species={favChar.species}
            gender={favChar.gender}
            origin={favChar.origin.name}
            image={favChar.image}
         />)
      }
    </div>
}

export const mapStateToProps=(state)=>{
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites)