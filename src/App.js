import axios from 'axios';
import './App.css';
import {useState, useEffect} from "react"
import {Route, Routes, useLocation, useNavigate} from "react-router-dom"
import NavBar from './components/NavBar';
import Form from './components/Form';
import Cards from './components/Cards';
import About from './components/About';
import Detail from './components/Detail';
import Favorites from './components/Favorites';


//Data
const EMAIL = "wagnersmith123@hotmail.com"
const PASSWORD = "@BOLUDO_123"


function App() {
   //Hooks
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const location = useLocation()
   const navigate = useNavigate()
   useEffect(()=>{!access && navigate("/")},[access])

   //Handlers
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
   const login =(userData)=>{
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true)
         navigate("/home")
      }
   }

   return (
      <div className='App'>
         {
         location.pathname !=="/" ? <NavBar onSearch={onSearch}/>:null
         }
         <Routes>
            <Route path="/" element={<Form  login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/favorites" element={<Favorites onClose={onClose}/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
