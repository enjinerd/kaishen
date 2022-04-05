import { createSlice } from '@reduxjs/toolkit';

const spotifySlcice = createSlice({
  name: 'spotify',
  initialState: {
    access_token: '',
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.access_token = action.payload.access_token;
      console.log('🚀 ~ file: spotifySlice.js ~ line 11 ~ state.access_token', state.access_token);
    },
  },
});

export const { setAccessToken } = spotifySlcice.actions;
export default spotifySlcice.reducer;
