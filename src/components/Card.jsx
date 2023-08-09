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
      <div key={id}>
         <button onClick={onClose}>X</button>
         <p><strong>Name: </strong>{name}</p>
         <p><strong>Status: </strong>{status}</p>
         <p><strong>Species: </strong>{species}</p>
         <p><strong>Gender: </strong>{gender}</p>
         <p><strong>Origin: </strong>{origin}</p>
         <img src={image} alt={name} />
      </div>
   );
}
