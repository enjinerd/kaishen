import { Component, Fragment } from 'react';
import axios from 'axios';
import { SongDetails } from '../../components';
import styles from './Home.module.css';

export default class Home extends Component {
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

  handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.spotify.com/v1/search?type=track&q=${this.state.query}`, {
        headers: {
          Authorization: `Bearer ${this.state.acces_token}`,
        },
      })
      .then((res) => {
        this.setState({
          data: res.data.tracks.items,
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        this.state.isError = true;
      });
  };
  handleQuery = (e) => {
    this.setState((prevState) => ({ ...prevState, query: e.target.value }));
  };

  token_param = window.location.hash.substr(1).split('&')[0].split('=')[1];

  render() {
    if (this.token_param?.length > 0) {
      this.state.acces_token = window.location.hash.substr(1).split('&')[0].split('=')[1];
      this.state.isLogin = true;
      this.state.isError = false;
    }

    return (
      <Fragment>
        {this.state.isLogin ? (
          <div className={styles.container}>
            <form>
              <input type="text" placeholder="Search" onChange={this.handleQuery} />
              <button type="submit" onClick={this.handleSearch}>
                Search
              </button>
            </form>
            <section className={styles.song_list}>
              {this.state.data?.map((data) => (
                <SongDetails data={data} key={data.id} />
              ))}
              {this.state.isError && <p>Something went wrong</p>}
            </section>
          </div>
        ) : (
          <form>
            <button>
              <a className="btn_href" href={`https://accounts.spotify.com/authorize?client_id=${this.SPOTIFY_API_KEY}&response_type=token&redirect_uri=${this.redirect_uri}&scope=${this.scopes}`}>
                Login With Spotify
              </a>
            </button>
          </form>
        )}
      </Fragment>
    );
  }
}
