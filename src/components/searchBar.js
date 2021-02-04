import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" value={this.props.value} onChange={this.props.handleTyping} />
        <input type="Submit" defaultValue="Search" />
        <p className={`showing-results-for${this.props.submitButtonClicked ? '':' hide'}`}>Showing Results for: {this.props.lastSearch}</p>
        <button className={`clear-search${this.props.submitButtonClicked ? '':' hide'}`} variant="light" onClick={this.props.clearSearch}>Clear Search</button>
      </form>
    )
  }
}

export default SearchBar;