import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=ed54cea63b99ab9822ad2510c09d1c0c&language=en-US&page=1'
    )
      .then(response => response.json())
      .then(jsonResponse => this.setState({ movies: jsonResponse.results }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div   style={{
        backgroundColor: 'black',
      }} className="App">
        <CardList movies={movies} />
      </div>
    );
  }
}
export default App;
