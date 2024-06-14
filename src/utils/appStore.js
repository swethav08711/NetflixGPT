import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./useSlice";
import movieReducer from "./movieSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});
export default appStore;
