
import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import { MovieList } from './components/MovieList';
import Seasons from './components/Seasons';
function App() {

  const [seasonCount,setSeasonCount] = useState(0);

function handleCount(val){
  setSeasonCount( val);
  console.log(seasonCount)
}

  return (
    <div>
      <Header/>
      <MovieList handleCount={handleCount}/>
      <Seasons seasonCount={seasonCount}/>
    </div>
  );
}


export default App
