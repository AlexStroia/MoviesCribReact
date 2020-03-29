import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './component/card-list-component';



class App extends Component {
    constructor() {
      super()
      this.state = {
        movies : {
          results: []
        },
        searchField: '' 
      }
    }

    componentDidMount() {
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=ed54cea63b99ab9822ad2510c09d1c0c&language=en-US&page=1")
      .then(response => response.json())
      .then(jsonResponse => this.setState({movies: jsonResponse}));
    }

  render() {
    const movies = this.state.movies
    return (
      <div className="App">
        <CardList movies = {movies}/>
      </div>
    );
  }
}
export default App;
