import { createSlice } from '@reduxjs/toolkit';

const spotifySlice = createSlice({
  name: 'spotify',
  initialState: {
    access_token: '',
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.access_token = action.payload.access_token;
    },
  },
});

export const { setAccessToken } = spotifySlice.actions;
export default spotifySlice.reducer;
