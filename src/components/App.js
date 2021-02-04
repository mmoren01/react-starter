import React from 'react';
import MovieList from './movieList.js';
import SearchBar from './searchBar.js';
import AddMovieBar from './addMovie.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
      searchBarInput: '',
      submitButtonClicked: false,
      lastSearchValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    }

  handleChange(event) {
    let searchResult = this.props.movies.filter((movie) =>  movie.title.toLowerCase().includes(event.target.value.toLowerCase()))
    this.setState({
      searchBarInput: event.target.value,
      movies: searchResult,
      submitButtonClicked: false
    })
  }

  handleSubmit(event) {
    let lastSearchString = this.state.searchBarInput;
    this.setState({
      searchBarInput: '',
      submitButtonClicked: true,
      lastSearchValue: lastSearchString
    })
    event.preventDefault();
  }

  clearSearch(event) {
    this.setState({
      movies: this.props.movies,
      submitButtonClicked: false
    })
    event.preventDefault();
  }

  render(){
    return (
      <div>
        <AddMovieBar />
        <SearchBar value={this.state.searchBarInput} handleTyping={this.handleChange} handleSubmit={this.handleSubmit} submitButtonClicked={this.state.submitButtonClicked} lastSearch={this.state.lastSearchValue} clearSearch={this.clearSearch} />
        <MovieList movies={this.state.movies} />
      </div>
  )}
}

export default App;
