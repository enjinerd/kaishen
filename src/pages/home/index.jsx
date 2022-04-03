import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { SongList, PlaylistForm } from "../../components";
import styles from "./Home.module.css";
import {
  fetchUserProfile,
  createPlaylist,
  addTracksToPlaylist,
} from "../../utils/spotifyHandler";
import { Header } from "../../components/ui";
import { Button } from "../../components/ui";

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
  const [playlistData, setPlaylistData] = useState({
    name: "",
    description: "",
    public: false,
  });
  const [userProfile, setUserProfile] = useState({
    display_name: "",
    user_id: "",
    profile_img: "",
  });
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

  const handleSubmitPlaylist = async (e) => {
    e.preventDefault();
    if (!playlistData.name || !playlistData.name.length < 10) {
      alert("Playlist name must be at least 10 characters");
      return;
    } else {
      await createPlaylist(token, userProfile.user_id, playlistData)
        .then(async (res) => {
          const playlistId = res.data.id;
          const tracks = selectedData.map((data) => data.uri);
          await addTracksToPlaylist(token, playlistId, tracks);
          alert("Playlist Created, check your spotify account");
        })
        .catch((err) => {
          console.log(err);
          setIsError(true);
        });
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setPlaylistData({ ...playlistData, [name]: value });
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
    const selectedSong = newData.filter(
      (data) => data.isSelected && data.uri === data_id
    );
    setSongData(newData);
    // remove deselected song from selectedData
    if (selectedSong.length === 0) {
      setSelected(selectedData.filter((data) => data.uri !== data_id));
    } else {
      setSelected([...selectedData, selectedSong[0]]);
    }
    console.log(selectedData);
  };

  /* EFFECTS */
  useEffect(() => {
    /* This is getting the token from the url. */
    const token_param = window.location.hash
      .substr(1)
      .split("&")[0]
      .split("=")[1];

    if (token_param) {
      fetchUserProfile(token_param).then((res) => {
        const user = {
          name: res.data.display_name,
          profile_img: res.data.images[0].url,
          user_id: res.data.id,
        };
        console.log(res.data.id);
        setUserProfile(user);
      });
      setToken(token_param);
      setIsLogin(true);
    }
  }, []);

  /* It's merging the selectedData to songData when user request new search. */
  useEffect(() => {
    if (requestCount > 1) {
      // remove song data that is has same uri with selectedData
      const newSongData = songData.filter((data) => {
        return !selectedData.some((selected) => selected.uri === data.uri);
      });
      let newData = [...newSongData, ...selectedData];
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
      <Header {...userProfile} />

      {isLogin ? (
        <>
          <div className={styles.container}>
            <div className={styles.form_container}>
              {selectedData.length > 0 && (
                <div>
                  <PlaylistForm
                    data={playlistData}
                    handleChange={handleFormChange}
                    handleSubmit={handleSubmitPlaylist}
                  />
                </div>
              )}
              <form>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleQuery}
                />
                <Button type="submit" onClick={handleSearch}>
                  Search
                </Button>
              </form>
            </div>
            {selectedData.length > 0 && (
              <p className={styles.selected_info}>
                {selectedData.length} songs selected
              </p>
            )}
            {songData.length > 0 && (
              <SongList data={songData} handleSelected={handleSelected} />
            )}
          </div>
        </>
      ) : (
        <form>
          <a
            className={styles.btn_href}
            href={`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_API_KEY}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}`}
          >
            Login With Spotify
          </a>
        </form>
      )}
    </Fragment>
  );
}
