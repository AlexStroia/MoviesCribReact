import React from 'react';
import './card-container.styles.css'

const tmdbLogo = 'https://image.tmdb.org/t/p/original/';

export const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="logo"
        className="movie-image"
        src={`${tmdbLogo}/${props.movie.poster_path}`}
      />
      <h1>{props.movie.title}</h1>

    </div>
  );
};
