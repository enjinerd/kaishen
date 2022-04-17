import axios from 'axios';

export const fetchUserProfile = (access_token: string) => {
  return axios.get(`https://api.spotify.com/v1/me`, {
    headers: {
      Authorization: 'Bearer ' + access_token,
    },
  });
};

export const createPlaylist = (
  access_token: string,
  user_id: string,
  { name, desc }: { name: string; desc?: string },
) => {
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

export const getUserPlaylists = (access_token: string) => {
  const url = 'https://api.spotify.com/v1/users/spotify/playlists';
  const headers = {
    Authorization: `Bearer ${access_token}`,
    'Content-Type': 'application/json',
  };
  return axios.get(url, { headers });
};

export const addTracksToPlaylist = (
  access_token: string,
  playlist_id: string,
  tracks: string[],
) => {
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
