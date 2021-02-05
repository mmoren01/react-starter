import React from 'react';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watchedButtonToggled: false
    }
    this.onToggleWatchedList = this.onToggleWatchedList.bind(this);
    this.onToggleToWatchList = this.onToggleToWatchList.bind(this);
  }

  onToggleWatchedList(event) {
    this.setState({watchedButtonToggled: true});
    event.preventDefault();
  }

  onToggleToWatchList(event) {
    this.setState({watchedButtonToggled: false});
    event.preventDefault();
  }

  render() {
    return (
      <div className="movie-list">
        <button className="watched-list-toggle-btn" variant="light" onClick={this.onToggleWatchedList}>WATCHED</button>
        <button className="watched-list-toggle-btn" variant="light" onClick={this.onToggleToWatchList}>TO WATCH</button>
        {(this.props.movies.filter((movie) => ( movie.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()) && movie.watched === this.state.watchedButtonToggled ))).map((movie, key) => (
          <div className="movie-list-entry container1" key={key}>
            <div className="movie-title">{movie.title}</div>
            <button className="watched-movie-toggle-btn" variant="light" onClick={this.props.toggleWatchedProp}>WATCHED</button>
          </div>
        ))}
    </div>
    )
  }
}

export default MovieList;