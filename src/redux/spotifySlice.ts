import { createSlice } from '@reduxjs/toolkit';

type SpotifyState = {
  access_token: string;
  user_data: Spotify.UserProfile;
};

const initialState: SpotifyState = {
  access_token: '',
  user_data: {
    name: '',
    profile_img: '',
    user_id: '',
  },
};

const spotifySlice = createSlice({
  name: 'spotify',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.access_token = action.payload.access_token;
    },
    setUserData: (state, action) => {
      state.user_data = action.payload.user_data;
    },
  },
});

export const { setAccessToken, setUserData } = spotifySlice.actions;
export default spotifySlice.reducer;
export type SpotifyRootState = ReturnType<typeof spotifySlice.reducer>;
