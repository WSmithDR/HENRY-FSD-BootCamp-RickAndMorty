import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const Card = ({
   id,
   name,
   status,
   species,
   gender,
   origin,
   image,
   onClose,
   addFav,
   removeFav,
   myFavorites
}) =>{
   const [isFav, setIsFav] = useState(false)

   const favoriteHandler = ()=>{
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }else{
         setIsFav(true)
         addFav({
            id,
            name,
            status,
            species,
            gender,
            origin,
            image,
         })
      }
   }

   useEffect(()=>{
      myFavorites.forEach(favChar => {
         favChar.id === id && setIsFav(true)
      })
   },[myFavorites])

   return (
      <div>
         {isFav? (
         <button onClick={favoriteHandler}>❤️</button>
         ):(
         <button onClick={favoriteHandler}>🤍</button>
         )}
         <button onClick={()=>onClose(id)}>X</button>
         <p><Link to={`/detail/${id}`}><strong>Name: </strong>{name}</Link></p>
         <p><strong>Status: </strong>{status}</p>
         <p><strong>Species: </strong>{species}</p>
         <p><strong>Gender: </strong>{gender}</p>
         <p><strong>Origin: </strong>{origin}</p>
         <img src={image} alt={name} />
      </div>
   );
}

export const mapDispatchToProps=(dispatch)=>{
   return {
      addFav:character => dispatch(addFav(character)),
      removeFav:id => dispatch(removeFav(id))
   }
}

export const mapStateToProps = (state)=>{
   return {
      myFavorites:state.myFavorites
   }
}

export default connect(
   mapStateToProps, 
   mapDispatchToProps)(Card)