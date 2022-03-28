import { Component } from 'react';

export class SearchBar extends Component {
  SPOTIFY_API_KEY = process.env.REACT_APP_SPOTIFY_KEY;
  constructor() {
    this.state = {
      query: '',
      data: [],
    };
  }

  handleSearch = (e) => {};
  handleQuery = (e) => {};

  render() {
    return (
      <form>
        <input type="text" placeholder="Search" onChange={this.handleQuery} />
        <button type="submit" onClick={this.handleSearch}>
          {' '}
          Search{' '}
        </button>
      </form>
    );
  }
}
