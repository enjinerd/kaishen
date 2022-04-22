import React, { useEffect, useState } from 'react';
import styles from '../../components/landing/Hero.module.css';
import Hero from '../../components/landing/Hero';
import Header from '../../components/landing/Header';
import Features from '../../components/landing/Features';
import Footer from '../../components/landing/Footer';
import { useDispatch } from 'react-redux';
import { fetchUserProfile } from '../../utils/spotifyHandler';
import { setAccessToken, setUserData } from '../../redux/spotifySlice';
import { Redirect } from 'react-router-dom';

const HomePage = () => {
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

        dispatch(setAccessToken({ access_token }));
        setLogin(true);
      });
    }
  }, []);

  if (isLogin) {
    return <Redirect to="/create-playlist" />;
  }
  return (
    <>
      <div
        className={`shadow-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 background-animate ${styles.hero}`}>
        <div className="bg-gray-900 bg-opacity-50 font-primary">
          <Header />
          <Hero />
        </div>
      </div>
      <Features />
      <Footer />
    </>
  );
};

export default HomePage;
