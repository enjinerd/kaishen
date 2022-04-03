import axios from 'axios';

export const fetchUserProfile = (access_token) => {
  return axios.get(`https://api.spotify.com/v1/me`, {
    headers: {
      Authorization: 'Bearer ' + access_token,
    },
  });
};

export const createPlaylist = (access_token, user_id, { name, desc }) => {
  const url = `https://api.spotify.com/v1/users/${user_id}/playlists`;
  const headers = {
    Authorization: `Bearer ${access_token}`,
    'Content-Type': 'application/json',
  };
  const data = {
    name,
    description: desc,
    public: false,
  };
  return axios.post(url, data, { headers });
};

export const getUserPlaylists = (access_token) => {
  const url = 'https://api.spotify.com/v1/users/spotify/playlists';
  const headers = {
    Authorization: `Bearer ${access_token}`,
    'Content-Type': 'application/json',
  };
  return axios.get(url, { headers });
};

export const addTracksToPlaylist = (access_token, playlist_id, tracks) => {
  const url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`;
  const headers = {
    Authorization: `Bearer ${access_token}`,
    'Content-Type': 'application/json',
  };
  const data = {
    uris: tracks,
  };
  return axios.post(url, data, { headers });
};
