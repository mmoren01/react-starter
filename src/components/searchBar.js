import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarInput: '',
      lastSearchValue: '',
      submitButtonClicked: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleChange(event) {
    this.props.searchTermUpdate(event.target.value);
    this.setState({
      searchBarInput: event.target.value,
      submitButtonClicked: false
    })
  }

  handleSubmit(event) {
    let lastSearchString = this.state.searchBarInput;
    console.log(lastSearchString);
    this.setState({
      searchBarInput: '',
      submitButtonClicked: true,
      lastSearchValue: lastSearchString
    })
    event.preventDefault();
  }

  clearSearch(event) {
    this.setState({
      submitButtonClicked: false
    })
    this.props.searchTermUpdate('');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.searchBarInput} onChange={this.handleChange} />
        <input type="Submit" defaultValue="Search" />
        <p className={`showing-results-for${this.state.submitButtonClicked ? '':' hide'}`}>Showing Results for: {this.state.lastSearchValue}</p>
        <button className={`clear-search${this.state.submitButtonClicked ? '':' hide'}`} variant="light" onClick={this.clearSearch}>Clear Search</button>
      </form>
    )
  }
}

export default SearchBar;