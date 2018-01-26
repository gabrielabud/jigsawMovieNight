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
              poster={movie.poster_path}
            />
          </div>
        ))
       }
      </div>
    );
};
export default MoviesList;
