import { configureStore } from "@reduxjs/toolkit";
import newsfeedReducer from "./newsfeedSlice";
import searchArticlesSlice from  "./searcharticleSlice"

export const store = configureStore({
  reducer: {
    newsfeed: newsfeedReducer,
    searcharticle: searchArticlesSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
