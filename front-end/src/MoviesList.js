import React, { Component } from 'react';
import App from './App';
import Movie from './Movie';
import PropTypes from 'prop-types';

const MoviesList = props => {
    return (
      <div className="moviesList">
        {
        props.movies.map(movie => (
          <div className="thumb" key={movie.id}>
            <Movie
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              posterPath={"https://image.tmdb.org/t/p/w150"+ movie.poster_path}
            />
          </div>
        ))
       }
      </div>
    );
};
export default MoviesList;
