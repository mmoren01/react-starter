import React from 'react';
import axios from 'axios';

class AddMovieBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addMovieValue: '',
      storage: []
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.sendQuery = this.sendQuery.bind(this);
  }

  onChange(event) {
    this.setState({
      addMovieValue: event.target.value
    })
  }

  onSubmit(event) {
    this.sendQuery(this.state.addMovieValue);
    this.setState({addMovieValue: ''})
    event.preventDefault();
  }

  sendQuery(input) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`)
  .then((data) => {
    this.state.storage.push(data)
    console.log('Request Successful');
  })
  .catch(() => {
    console.log('ERROR: Request Unsuccessful')
  })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.addMovieValue} onChange={this.onChange} />
        <input type="Submit" defaultValue="Add Movie"/>
      </form>

    )
  }
}

export default AddMovieBar;