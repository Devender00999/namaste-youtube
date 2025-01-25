import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
   name: "search",
   initialState: {
      suggestions: {},
   },
   reducers: {
      cacheSuggestions: (state, action) => {
         state.suggestions = { ...state.suggestions, ...action.payload };
      },
   },
});

export default searchSlice.reducer;

export const { cacheSuggestions } = searchSlice.actions;
