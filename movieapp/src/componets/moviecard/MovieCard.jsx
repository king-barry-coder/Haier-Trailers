import React from 'react';
import { Link } from 'react-router-dom';
import './moviecard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="movie-img"
        />
        {/* <p className="movie-title">{movie.title}</p> */}
      </Link>
    </div>
  );
};

export default MovieCard;
