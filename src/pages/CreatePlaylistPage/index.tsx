import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { SongList, PlaylistForm } from '../../components';
import styles from './CreatePlaylist.module.css';
import { createPlaylist, addTracksToPlaylist } from '../../utils/spotifyHandler';
import { Header } from '../../components/ui';
import { Button } from '../../components/ui';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { RootState } from '../../redux/store';
import { Redirect } from 'react-router-dom';

interface Spotify {
  name: string;
  external_urls: Spotify.RootObject['external_urls'];
  isSelected: boolean;
  album: Spotify.RootObject['album'];
  artists: Spotify.RootObject['artists'];
  uri: string;
}

const CreatePlaylistPage = () => {
  /* STATE */
  const [query, setQuery] = useState('');
  const [songData, setSongData] = useState([] as Spotify[]);
  const [selectedData, setSelected] = useState([] as Spotify[]);
  const [requestCount, setRequestCount] = useState(0);
  const [playlistData, setPlaylistData] = useState({
    name: '',
    description: '',
    public: false,
  });
  const [isError, setError] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  /* REDUX */
  const spotify = useSelector((state: RootState) => state.spotify);
  const access_token = spotify?.access_token;
  const user_id: string = spotify?.user_data.user_id;

  /* METHODS */
  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(spotify);
    axios
      .get(`https://api.spotify.com/v1/search?type=track&q=${query}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        const songList = res.data.tracks.items.map((data: Spotify) => ({
          ...data,
          isSelected: false,
        }));
        console.log(songList);
        setSongData(songList);
        setRequestCount(requestCount + 1);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSubmitPlaylist = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user_id);

    if (playlistData.name.length < 10) {
      setError(true);
    } else {
      await createPlaylist(access_token, user_id, playlistData)
        .then(async (res) => {
          const playlistId = res.data.id;
          const tracks = selectedData.map((data: Spotify) => data.uri);
          await addTracksToPlaylist(access_token, playlistId, tracks);
          setSubmitted(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPlaylistData({ ...playlistData, [name]: value });
  };

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  /**
   * It takes in an event and a song data array. It then loops through the song data array and checks if
   * the song data's uri matches the uri of the song data that was clicked. If it does, it sets the song
   * data's isSelected property to the opposite of what it currently is
   */
  const handleSelected = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.target as HTMLButtonElement;
    const data_id = btn.getAttribute('data-id');
    const newData: Spotify[] = songData.map((data: Spotify) => {
      if (data.uri === data_id) {
        return {
          ...data,
          isSelected: !data.isSelected,
        };
      }
      return data;
    });
    const selectedSong: Spotify[] = newData.filter(
      (data: Spotify) => data.isSelected && data.uri === data_id,
    );
    setSongData(newData);
    // remove deselected song from selectedData
    if (selectedSong.length === 0) {
      setSelected(selectedData.filter((data) => data.uri !== data_id));
    } else {
      setSelected([...selectedData, selectedSong[0]]);
    }
  };

  if (access_token.length === 0) {
    return <Redirect to="/" />;
  }

  /* EFFECTS */
  /* It's merging the selectedData to songData when user request new search. */
  useEffect(() => {
    if (requestCount > 1) {
      // remove song data that is has same uri with selectedData
      const newSongData = songData.filter((data) => {
        return !selectedData.some((selected) => selected.uri === data.uri);
      });
      let newData: Spotify[] = [...newSongData, ...selectedData];
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
      {isError && (
        <Box sx={{ width: '100%' }}>
          <Collapse in={isError}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setError(false);
                  }}>
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              variant="filled"
              severity="error"
              sx={{ mb: 2 }}>
              Playlist title must be 10 words or more.
            </Alert>
          </Collapse>
        </Box>
      )}
      {isSubmitted && (
        <Box sx={{ width: '100%' }}>
          <Collapse in={isError}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setError(false);
                  }}>
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              variant="filled"
              severity="success"
              sx={{ mb: 2 }}>
              Playlist created, check your spotify account.
            </Alert>
          </Collapse>
        </Box>
      )}
      <Header
        name={spotify?.user_data.name}
        profile_img={spotify?.user_data.profile_img}
      />
      <div className={styles.container}>
        <div className={styles.form_container}>
          {selectedData.length > 0 && (
            <div>
              <PlaylistForm
                handleChange={handleFormChange}
                handleSubmit={handleSubmitPlaylist}
              />
            </div>
          )}
          <form>
            <input type="text" placeholder="Search" onChange={handleQuery} />
            <Button type="submit" onClick={handleSearch}>
              Search
            </Button>
          </form>
        </div>
        {selectedData.length > 0 && (
          <p className={styles.selected_info}>{selectedData.length} songs Selected.</p>
        )}
        {songData.length > 0 && (
          <SongList data={songData} handleSelected={handleSelected} />
        )}
      </div>
    </Fragment>
  );
};

export default CreatePlaylistPage;
