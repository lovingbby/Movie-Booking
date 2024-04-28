
import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import { MovieList } from './components/MovieList';
import Seasons from './components/Seasons';
function App() {

  const [seasonCount,setSeasonCount] = useState(0);

function handleCount(val){
  setSeasonCount(val);
}

  return (
    <div>
      <Header/>
      <MovieList setSeasonCount={handleCount}/>
      <Seasons seasonCount={seasonCount}/>
    </div>
  );
}


export default App
