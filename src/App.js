import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import characters, { Rick } from './data.js';
import NavBar from './components/NavBar';

function App() {
   return (
      <div className='App'>
         <NavBar/>
         <Cards characters={characters} />
         <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      </div>
   );
}

export default App;
