import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("")
   const handleInputChange = (event) => {
      setId(event.target.value)
   }
   return (
      <div>
         <input type='search' onChange={handleInputChange} value={id}/>
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
