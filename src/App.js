import axios from 'axios';
import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import {useState} from "react"
import {Route, Routes} from "react-router-dom"
import About from './components/About/About';
import Detail from './components/Detail/Detail';

function App() {
   const [characters, setCharacters] = useState([])
   const onSearch = (id)=>{
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({data})=>{
         if(data.id){
            setCharacters([...characters, data])
         }else window.alert("¡No hay personaje con este Id!")
      })
   }
   const onClose = (id)=>{
      const filteredCharacters = characters.filter(character => character.id!==Number(id))
      setCharacters(filteredCharacters)
   }
   
   return (
      <div className='App'>
         <NavBar onSearch={onSearch}/>
         <Routes>
            <Route path="/home" element={<Cards 
            characters={characters} 
            onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
