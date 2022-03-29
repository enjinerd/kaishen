import { Component, Fragment } from 'react';
import axios from 'axios';

export class SearchBar extends Component {
  SPOTIFY_API_KEY = process.env.REACT_APP_SPOTIFY_KEY;
  redirect_uri = 'http://localhost:3000/';
  scopes = 'playlist-modify-private';
  state = {
    query: '',
    data: [],
    acces_token: '',
    isLogin: false,
    isError: false,
  };

  handleSearch = (e) => {};
  handleQuery = (e) => {
    this.setState((prevState) => ({ ...prevState, query: e.target.value }));
  };
  handleAuth = () => {
    window.open(
      `https://accounts.spotify.com/authorize?client_id=${this.SPOTIFY_API_KEY}&response_type=token&redirect_uri=${this.redirect_uri}&scope=${this.scopes}&show_dialog=true`,
      'Login with Spotify',
      'width=800,height=600'
    );
  };

  render() {
    if (window.location.hash.substr(1).split('&')[0].split('=')[1]?.length > 0) {
      this.state.acces_token = window.location.hash.substr(1).split('&')[0].split('=')[1];
      this.state.isLogin = true;
      this.state.isError = false;
    }
    return (
      <Fragment>
        {this.state.isLogin ? (
          <form>
            <input type="text" placeholder="Search" onChange={this.handleQuery} />
            <button type="submit" onClick={this.handleSearch}>
              Search
            </button>
          </form>
        ) : (
          <form>
            <button type="submit" onClick={this.handleAuth}>
              Login with Spotify
            </button>
          </form>
        )}
      </Fragment>
    );
  }
}
