import { configureStore } from "@reduxjs/toolkit";
import article from "./article";

export const store = configureStore({
  reducer: {
    article: article,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
