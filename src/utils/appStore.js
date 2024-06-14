import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./useSlice";

const appStore = configureStore({
  reducer: {
    user: useReducer,
  },
});
export default appStore;
