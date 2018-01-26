
import React, { Component } from 'react';
import MoviesList from './MoviesList';

class Movie extends Component {
  render () {
    return (
        <div>
            <img src={this.props.posterPath} />
            <div className="movie">
              <h2>{this.props.title}</h2>
              <p>{this.props.overview} </p>
            </div>
        </div>
    );
  }
}
export default Movie;
