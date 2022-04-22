import { SpotifyLogo } from '../ui';
import React from 'react';

const Hero = () => {
  const SPOTIFY_API_KEY = process.env.REACT_APP_SPOTIFY_KEY;
  const redirect_uri = process.env.REACT_APP_SPOTIFY_CALLBACK_URL;
  const scopes = 'playlist-modify-private';

  return (
    <div className={`bg-center bg-cover w-full`}>
      <div className="flex justify-center w-full h-full py-12 bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <div className="container flex flex-col items-center gap-12 justify-evenly md:flex-row">
            <div className="w-2/3 mx-auto text-center md:w-1/3">
              <h2 className="mb-6 text-2xl font-bold text-gray-100 lg:text-5xl">
                Create your own playlist, share it with your friends and have fun!
              </h2>
              <p className="max-w-xl mx-auto mb-10 text-base text-gray-300 bg-orange-600 bg-opacity-75 rounded-lg md:text-lg">
                We do not store any of your data, we just use it to generate a playlist.
              </p>
              <a
                href={`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_API_KEY}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}`}
                className="flex flex-row items-center justify-center w-2/3 gap-3 px-8 py-3
                mb-4 text-sm font-bold text-gray-800 uppercase transition duration-200
                bg-gray-200 border-2 border-transparent border-green-700 rounded shadow-lg
                md:w-full md:mr-6 hover:bg-green-800 hover:scale-95 hover:text-white">
                <SpotifyLogo className="w-auto h-8" /> <p>Login with Spotify</p>
              </a>
            </div>
            <img
              src="Playlist.png"
              alt="Playlist"
              className="w-2/4 h-auto shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
