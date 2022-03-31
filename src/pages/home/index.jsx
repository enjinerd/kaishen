import { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
import { SongDetails } from "../../components";
import styles from "./Home.module.css";

export default function Home() {
  /* Setting up the Spotify API key, redirect uri, and scopes. */
  const SPOTIFY_API_KEY = process.env.REACT_APP_SPOTIFY_KEY;
  const redirect_uri = "http://localhost:3000/";
  const scopes = "playlist-modify-private";
  const [token, setToken] = useState("");
  const [query, setQuery] = useState("");
  const [songData, setSongData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedData, setSelected] = useState([]);

  /**
   * It takes in an event, and then uses the event to get the value of the input field, and then uses
   * that value to make a request to the Spotify API
   */
  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.spotify.com/v1/search?type=track&q=${query}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setSongData(res.data.tracks.items);
        console.log(res.data.tracks.items[0]);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleSelected = (e) => {
    const dataId = e.target.getAttribute("dataId");
    const data = songData.find((song) => song.id === dataId);
    setSelected([...selectedData, data]);
    console.log(dataId);
  };

  useEffect(() => {
    /* This is getting the token from the url. */
    const token_param = window.location.hash
      .substr(1)
      .split("&")[0]
      .split("=")[1];

    if (token_param) {
      setToken(token_param);
      setIsLogin(true);
    }
  }, []);

  return (
    <Fragment>
      {isLogin ? (
        <div className={styles.container}>
          <form>
            <input type="text" placeholder="Search" onChange={handleQuery} />
            <button type="submit" onClick={handleSearch}>
              Search
            </button>
          </form>
          <section className="selected_songs"></section>
          <section className={styles.song_list}>
            {songData?.map((data) => (
              <SongDetails
                data={data}
                key={data.id}
                dataId={data.uri}
                handleSelected={handleSelected}
              />
            ))}
            {isError && <p>Something went wrong</p>}
          </section>
        </div>
      ) : (
        <form>
          <button>
            <a
              className="btn_href"
              href={`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_API_KEY}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}`}
            >
              Login With Spotify
            </a>
          </button>
        </form>
      )}
    </Fragment>
  );
}
