import React from 'react';

let MovieList = (props) => {
  return (
  <div className="movie-list">
    {props.movies.map((movie, key) => (<div className="movie-list-entry container1" key={key}>{movie.title}</div>))}
  </div>
  )
}

export default MovieList;