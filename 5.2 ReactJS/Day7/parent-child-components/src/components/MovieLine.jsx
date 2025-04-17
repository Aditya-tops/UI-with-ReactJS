import React from 'react'
import Movie from './Movie'

const MovieLine = ({ movies }) => {
  return (
    <div className='MovieLine' style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {movies.map((movie, i) => (
        <Movie key={i} title={movie.title} poster={movie.poster} url={movie.url} />
      ))}
    </div>
  )
}

export default MovieLine
