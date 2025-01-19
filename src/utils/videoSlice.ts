import { createSlice } from "@reduxjs/toolkit";

// type VideoSliceProps = {
//    videos: null | any[];
// };

const videoSlice = createSlice({
   initialState: {
      ytVideos: null,
   },
   reducers: {
      addYTVideos: (state, action) => {
         state.ytVideos = action.payload;
      },
   },
   name: "ytVideos",
});

export const { addYTVideos } = videoSlice.actions;
export default videoSlice.reducer;
