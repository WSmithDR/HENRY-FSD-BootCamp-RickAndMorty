import './App.css';
import Cards from './components/Cards.jsx';
import characters from './data.js';
import NavBar from './components/NavBar';

function App() {
   return (
      <div className='App'>
         <NavBar/>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
