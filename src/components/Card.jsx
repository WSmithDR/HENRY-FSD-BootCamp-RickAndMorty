import { Link } from "react-router-dom";

export default function Card({
   id,
   name,
   status,
   species,
   gender,
   origin,
   image,
   onClose
}) {
   return (
      <div>
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
