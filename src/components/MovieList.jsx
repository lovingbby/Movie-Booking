import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/MovieList.css'
import MovieContent from './MovieContent';

export function MovieList({setSeasonCount}) {

  const [movieOne, setMovieOne] = useState('');

  useEffect(function () {
    movie();
  });

  const movie = () => {
    return axios
      .get(`http://www.omdbapi.com/?i=tt0944947&apikey=10bd6a4a`)
      .then(res => setMovieOne(res.data))
      .then( setSeasonCount(movieOne.totalSeasons))
      .catch(err => console.log(err));
  };



  return (
    
    <div className='movie-description'>
    <img src={movieOne.Poster} alt='Poster' width='250px'></img>
    <aside>
    <MovieContent movieOne={movieOne} />
    </aside>
    </div>
  );
}


export default MovieList;