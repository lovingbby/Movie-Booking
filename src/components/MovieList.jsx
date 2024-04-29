import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/MovieList.css'
import MovieContent from './MovieContent';

export function MovieList({handleCount}) {

  const [movieOne, setMovieOne] = useState('');

  useEffect(function () {
    movie();
  },[]);

  const movie = () => {
    return axios
      .get(`http://www.omdbapi.com/?i=tt0944947&apikey=10bd6a4a`)
      .then(res => setMovieOne(res.data))
      .catch(err => console.log(err));
  };



  return (
    
    <div className='movie-description'>
    <img src={movieOne.Poster} alt='Poster' width='250px'></img>
    <aside>
    <MovieContent movieOne={movieOne} handleCount={handleCount}/>
    </aside>
    </div>
  );
}


export default MovieList;