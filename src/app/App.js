import './App.css';
import AllCharacters from '../features/allCharacters/allCharacters';
import SearchBar from '../features/searchTerm/searchTerm';
import { store } from './store';

function App() {  
  return (
    <div className="content">
      <div className="text-center text-warning logo">StarWars Redux</div>
      <SearchBar />
      <AllCharacters />
    </div>
  );
}

export default App;
