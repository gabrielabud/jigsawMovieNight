import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
     super(props)
     this.state = {
       movieslist: [],
      }
  }

   componentDidMount() {
   let self=this;

   fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=121486b23802e0b6735125ff1892f340&language=en-US&page=1")
     .then(function(results) {
       return results.json();
     })
     .then(function(data){

          console.log(data.results)
         self.setState({
           movieslist: data
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movies App</h1>
        </header>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
