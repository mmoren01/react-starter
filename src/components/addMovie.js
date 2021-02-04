import React from 'react';

class AddMovieBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addMovieValue: ''
    }
    this.onAddMovieChange = this.onAddMovieChange.bind(this);
    this.onAddMovieSubmit = this.onAddMovieSubmit.bind(this);
  }

  onAddMovieChange(event) {
    this.setState({
      addMovieValue: event.target.value
    },()=>{ console.log(this.state.addMovieValue)})
  }

  onAddMovieSubmit(event) {
    console.log('Add Movie!');
  }

  render() {
    return (
      <form onSubmit={this.onAddMovieSubmit}>
        <input type="text" value={this.state.addMovieValue} onChange={this.onAddMovieChange} />
        <input type="Submit" defaultValue="Add Movie"/>
      </form>

    )
  }
}

export default AddMovieBar;