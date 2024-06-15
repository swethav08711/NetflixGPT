import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
  name: "gptsearch",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearchView } = gptSearch.actions;
export default gptSearch.reducer;
