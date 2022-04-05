import { configureStore } from '@reduxjs/toolkit';
import spotifySlice from './spotifySlice';

const store = configureStore({
  reducer: {
    spotify: spotifySlice,
  },
});
export default store;
