import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { SongDetails } from "../../components";
import styles from "./Home.module.css";

export default function Home() {
  /* ENV and API */
  const SPOTIFY_API_KEY = process.env.REACT_APP_SPOTIFY_KEY;
  const redirect_uri = "http://localhost:3000/";
  const scopes = "playlist-modify-private";

  /* STATE */
  const [token, setToken] = useState("");
  const [query, setQuery] = useState("");
  const [songData, setSongData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedData, setSelected] = useState([]);
  const [requestCount, setRequestCount] = useState(0);

  /* METHODS */
  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.spotify.com/v1/search?type=track&q=${query}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const songList = res.data.tracks.items.map((data) => ({
          ...data,
          isSelected: false,
        }));

        setSongData(songList);
        setRequestCount(requestCount + 1);
      })
      .catch((err) => {
        setIsError(true);
      });
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  /**
   * It takes in an event and a song data array. It then loops through the song data array and checks if
   * the song data's uri matches the uri of the song data that was clicked. If it does, it sets the song
   * data's isSelected property to the opposite of what it currently is
   */
  const handleSelected = (e) => {
    const data_id = e.target.getAttribute("data_id");
    const newData = songData.map((data) => {
      if (data.uri === data_id) {
        return {
          ...data,
          isSelected: !data.isSelected,
        };
      }
      return data;
    });
    setSongData(newData);
    setSelected(newData);
  };

  /* EFFECTS */
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

  /* It's merging the selectedData to songData when user request new search. */
  useEffect(() => {
    if (requestCount > 1) {
      let newData = [...songData, ...selectedData];
      newData = newData.sort((a, b) => {
        if (a.isSelected && !b.isSelected) {
          return -1;
        }
        if (!a.isSelected && b.isSelected) {
          return 1;
        }
        return 0;
      });
      setSongData(newData);
    }
  }, [requestCount]);

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
                data_id={data.uri}
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
