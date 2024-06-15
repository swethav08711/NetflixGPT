import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./useSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSearch";
import configReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});
export default appStore;
