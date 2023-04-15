import React from 'react'
import MovieCard from './MovieCard'
import Movies from '../Movies'

function MovieList({byname, byrate}) {
  return (
    <div className='movies-list'>
      {Movies.filter(el=>el.caption.toLowerCase().includes(byname) && el.rating>=byrate)
      .map((el)=> (
      <MovieCard movie={el}/>
      ))}


    </div>
  )
}

export default MovieList