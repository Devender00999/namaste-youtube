import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import YouTubeVideo from "../utils/types/YTVideo";
import { addCurrentVideo } from "../utils/videoSlice";
// import { YOUTUBE_VIDEO_LIST_API } from "../utils/constants";

const useYTVideo = (id: string) => {
   const dispatch = useDispatch();
   const currentVideo: YouTubeVideo = useSelector(
      (state: any) => state?.ytVideos?.currentVideo
   );

   // const currentVideo = ;
   const fetchData = async () => {
      if (currentVideo?.id !== id) {
         const res = await fetch(`${YOUTUBE_VIDEO_API}&id=${id}`);
         const videoDetails = await res.json();
         dispatch(addCurrentVideo(videoDetails?.items?.at(0)));
      }
   };

   useEffect(() => {
      fetchData();
   }, []);
};

export default useYTVideo;
