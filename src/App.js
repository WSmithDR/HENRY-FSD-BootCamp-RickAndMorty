import axios from 'axios';
import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import {useState, useEffect} from "react"
import {Route, Routes, useLocation, useNavigate} from "react-router-dom"
import About from './components/About/About';
import Detail from "./components/Detail/Detail"
import Form from './components/Form/Form';

const EMAIL = "wagnersmith123@gotmail.com"
const PASSWORD = "@BOLUDO_2001"

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

   const location = useLocation()

   let [access, setAccess] = useState(false)

   const navigate = useNavigate()

   const login = (userData)=> {
      if(userData.email===EMAIL && userData.password===PASSWORD){
         setAccess(true)
         navigate("/home")
      }
   }

   useEffect(()=>{
      !access && navigate("/")
   }, [access])

   return (
      <div className='App'>
         {location.pathname!=="/" && <NavBar onSearch={onSearch}/>}
         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
