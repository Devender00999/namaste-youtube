import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import mostPopularVideos from "../utils/mostPopular.json";
import { addYTVideos } from "../utils/videoSlice";
import { YOUTUBE_VIDEO_LIST_API } from "../utils/constants";
// import { YOUTUBE_VIDEO_LIST_API } from "../utils/constants";

const useYTVideos = () => {
   const dispatch = useDispatch();
   const fetchData = async () => {
      const res = await fetch(YOUTUBE_VIDEO_LIST_API);
      const mostPopularVideos = await res.json();
      dispatch(addYTVideos(mostPopularVideos.items));
   };

   useEffect(() => {
      fetchData();
   }, []);
};

export default useYTVideos;
