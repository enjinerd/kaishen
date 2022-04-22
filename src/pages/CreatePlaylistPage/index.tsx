import { useState, useEffect } from 'react';
import axios from 'axios';
import { SongList, PlaylistForm, SongSearch } from '../../components/dashboard';
import styles from './CreatePlaylist.module.css';
import { createPlaylist, addTracksToPlaylist } from '../../utils/spotifyHandler';
import { Header } from '../../components/ui';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Redirect } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      toast.error('Playlist name must be at least 10 characters long');
    } else {
      setIsSubmitting(true);
      if (isSubmitting) {
        toast.loading('Creating playlist...');
      }
      await createPlaylist(access_token, user_id, playlistData)
        .then(async (res) => {
          const playlistId = res.data.id;
          const tracks = selectedData.map((data: Spotify) => data.uri);
          await addTracksToPlaylist(access_token, playlistId, tracks);
          setIsSubmitting(false);
          setSongData([]);
          setSelected([]);
          setRequestCount(0);
          toast.success('Playlist created successfully');
        })
        .catch((err) => {
          setIsSubmitting(false);
          toast.error(`Error creating playlist, msg : ${err}`);
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
    <div className="min-h-screen flex flex-col justify-start gap-2 bg-gradient-to-tl from-slate-700 via-rose-600 to-indigo-500">
      <Toaster />
      <Header
        name={spotify?.user_data.name}
        profile_img={spotify?.user_data.profile_img}
      />
      <div className="flex flex-col items-center justify-center font-primary gap-3">
        <SongSearch handleQuery={handleQuery} handleSearch={handleSearch} />
        {selectedData.length > 0 && (
          <div className="flex flex-row gap-5 justify-center items-center">
            <p className={styles.selected_info}>{selectedData.length} songs Selected.</p>
            <PlaylistForm
              handleChange={handleFormChange}
              handleSubmit={handleSubmitPlaylist}
            />
          </div>
        )}
        {songData.length === 0 && requestCount > 0 && (
          <div className="flex flex-col items-center justify-center text-lg text-white font-semibold">
            <p className={styles.no_result}>No result found.</p>
            <p className={styles.no_result}>Change your search query and try again</p>
          </div>
        )}
        {songData.length > 0 && (
          <SongList data={songData} handleSelected={handleSelected} />
        )}
      </div>
    </div>
  );
};

export default CreatePlaylistPage;
