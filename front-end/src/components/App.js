import React, { Component } from 'react';
import '../App.css';
import MoviesList from './MoviesList';

class App extends Component {
  constructor(props) {
     super(props)
     this.state = {
       moviesList: [],
      }
  }

   componentDidMount() {
   let self=this;

   window.fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=121486b23802e0b6735125ff1892f340&language=en-US&page=1")
     .then(function(results) {
       return results.json();
     })
     .then(function(data){

          console.log(data.results)
         self.setState({
           moviesList: data.results
         })
     })
     .catch(function(error) {
       console.log(error)
     });
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dream team Movies App</h1>
        </header>
        <div>
          <Movielist movies={this.state.moviesList}/>
          console.log(this.state.moviesList)
        </div>
      </div>
    );
  }
}

export default App;
