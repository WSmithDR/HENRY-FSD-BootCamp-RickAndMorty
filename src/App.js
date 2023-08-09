import axios from 'axios';
import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import {useState} from "react"
import {Route, Routes, useLocation} from "react-router-dom"
import About from './components/About/About';
import Detail from "./components/Detail/Detail"
import Form from './components/Form/Form';

function App() {
   const location = useLocation()
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
         {location.pathname !== "/" && <NavBar onSearch={onSearch}/>}
         <Routes>
            <Route path="/" element={<Form/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
