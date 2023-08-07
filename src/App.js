import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import {useState} from "react"

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
}

function App() {
   const [characters, setCharacters] = useState([])
   const onSearch = ()=>{
      setCharacters([...characters, example])
   }
   
   return (
      <div className='App'>
         <NavBar onSearch={onSearch}/>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
