import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './features/playerSlice';
import { shazamApi } from './services/shazamApi';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    [shazamApi.reducerPath]: shazamApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(shazamApi.middleware),
});
