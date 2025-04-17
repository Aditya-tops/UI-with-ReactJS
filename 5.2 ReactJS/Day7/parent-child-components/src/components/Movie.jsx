import React from 'react'

const Movie = ({ title, poster, url }) => {
  return (
    <div className="movie-card" style={{ textAlign: 'center' }}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={poster} alt={title} style={{ width: '150px', borderRadius: '10px' }} />
        <p>{title}</p>
      </a>
    </div>
  );
};

export default Movie;
