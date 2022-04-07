import { createSlice } from '@reduxjs/toolkit';

const spotifySlice = createSlice({
  name: 'spotify',
  initialState: {
    access_token: '',
    user_data: {},
  },
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
