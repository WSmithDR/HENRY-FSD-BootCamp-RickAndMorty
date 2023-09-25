import axios from 'axios';
import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import {useState, useEffect} from "react"
import {Route, Routes, useLocation, useNavigate} from "react-router-dom"
import About from './components/About/About';
import Detail from "./components/Detail/Detail"
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


function App() {
   //Hooks
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const location = useLocation()
   const navigate = useNavigate()
   useEffect(()=>{!access && navigate("/")},[access])

   //Handlers
   const onSearch = (id)=>{
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
      const {email, password} = userData
      const URL = "http://localhost:3001/rickandmorty/login"
      axios(URL+`?email=${email}&password=${password}`)
      .then(response => response.data)
      .then(data => {
         const {access} = data
         setAccess(access)
         access && navigate("/home")
      })
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
