import { createSlice } from "@reduxjs/toolkit";

// type VideoSliceProps = {
//    videos: null | any[];
// };

const videoSlice = createSlice({
   initialState: {
      ytVideos: null,
      currentVideo: null,
      channelInfo: null,
   },
   reducers: {
      addYTVideos: (state, action) => {
         state.ytVideos = action.payload;
      },
      addCurrentVideo: (state, action) => {
         state.currentVideo = action.payload;
      },
      addChannelInfo: (state, action) => {
         state.channelInfo = action.payload;
      },
   },
   name: "ytVideos",
});

export const { addYTVideos, addCurrentVideo, addChannelInfo } =
   videoSlice.actions;
export default videoSlice.reducer;
