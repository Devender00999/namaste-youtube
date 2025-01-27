import { useEffect } from "react";
import { useDispatch } from "react-redux";
import mostPopularVideos from "../utils/mostPopular.json";
import { addYTVideos } from "../utils/videoSlice";

const useYTVideos = () => {
   const dispatch = useDispatch();
   const fetchData = async () => {
      // const res = await fetch(`${YOUTUBE_VIDEO_API}&chart=mostPopular`);
      // const mostPopularVideos = await res.json();
      dispatch(addYTVideos(mostPopularVideos.items));
   };

   useEffect(() => {
      fetchData();
   }, []);
};

export default useYTVideos;
