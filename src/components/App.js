import React from 'react';
import MovieList from './movieList.js';
import SearchBar from './searchBar.js';
import AddMovieBar from './addMovie.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchTerm: ''
    };
    this.searchTermUpdate = this.searchTermUpdate.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatchedProp = this.toggleWatchedProp.bind(this);
  }

  searchTermUpdate(input) {
    this.setState({searchTerm: input});
  }

  addMovie(input) {
    let moviesCopy = this.state.movies.slice();
    moviesCopy.push({title: input, watched: false});
    this.setState({movies: moviesCopy});
  }

  toggleWatchedProp() {
    let moviesCopy = this.state.movies.slice();
    for (let movie of moviesCopy) {
      if (movie.title === event.target.previousSibling.innerHTML) {
        movie.watched = !movie.watched;
        break;
      }
    }
    this.setState({movies: moviesCopy})
  }

  render(){
    return (
      <div>
        <AddMovieBar addMovie={this.addMovie} />
        <SearchBar searchTermUpdate={this.searchTermUpdate}/>
        <MovieList movies={this.state.movies} searchTerm={this.state.searchTerm} toggleWatchedProp={this.toggleWatchedProp}/>
      </div>
  )}
}

export default App;
