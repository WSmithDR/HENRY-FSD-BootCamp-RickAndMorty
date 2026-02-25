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


function App() {
   //Hooks
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const location = useLocation()
   const navigate = useNavigate()
   useEffect(()=>{!access && navigate("/")},[access])

   //Handlers
   const onSearch = async (id)=>{
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         
         if(data.name) setCharacters([...characters, data])

   } catch (error) {
      alert("¡No hay personaje con este Id!")
      
      }
   }

   const onClose = (id)=>{
      const filteredCharacters = characters.filter(character => character.id!==Number(id))
      setCharacters(filteredCharacters)
   }

   const login = async (userData)=>{
      const URL = "http://localhost:3001/rickandmorty/login"
      try {
         const {email, password} = userData
         const {data} = await axios(URL+`?email=${email}&password=${password}`)
         const {access} = data
         setAccess(access)
         access && navigate("/home")
      } catch (error) {
         console.log(error.message)
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
