import { Fragment, useState, useEffect } from 'react';
import styles from './styles.module.css';
import { fetchUserProfile } from '../../utils/spotifyHandler';
import { Header } from '../../components/ui';
import { useDispatch } from 'react-redux';
import { setAccessToken, setUserData } from '../../redux/spotifySlice';
import { Redirect } from 'react-router-dom';

const LoginPage = () => {
  /* ENV and API */
  const SPOTIFY_API_KEY = process.env.REACT_APP_SPOTIFY_KEY;
  const redirect_uri = process.env.REACT_APP_SPOTIFY_CALLBACK_URL;
  const scopes = 'playlist-modify-private';

  const dispatch = useDispatch();
  const [isLogin, setLogin] = useState(false);

  /* EFFECTS */
  useEffect(() => {
    /* This is getting the token from the url. */
    const access_token = window.location.hash.substr(1).split('&')[0].split('=')[1];

    if (access_token) {
      fetchUserProfile(access_token).then((res) => {
        const user_data = {
          name: res.data.display_name,
          profile_img: res.data.images[0].url,
          user_id: res.data.id,
        };
        dispatch(setUserData({ user_data }));
        console.log(user_data);
        dispatch(setAccessToken({ access_token }));
        setLogin(true);
      });
    }
  }, []);

  if (isLogin) {
    return <Redirect to="/create-playlist" />;
  }

  return (
    <Fragment>
      <Header />
      <form>
        <a
          className={styles.btn_href}
          href={`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_API_KEY}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}`}>
          Login With Spotify
        </a>
      </form>
    </Fragment>
  );
};

export default LoginPage;
