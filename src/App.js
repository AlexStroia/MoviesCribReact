import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { SearchBar } from './components/search-bar/search-bar-component';

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

  handleSearch = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { movies, searchField } = this.state;
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div style={{
        backgroundColor: 'black',
      }} className="App">
        <SearchBar placeholder="Enter a movie name"
          handleChange={this.handleSearch} />
        <CardList movies={filteredMovies} />
      </div>
    );
  }
}
export default App;
