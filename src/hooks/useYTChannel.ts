import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { YOUTUBE_CHANNEL_API } from "../utils/constants";
import { addChannelInfo } from "../utils/videoSlice";

const useYTChannel = (id: string) => {
   console.log({ id });
   const dispatch = useDispatch();

   // const currentVideo = ;
   const fetchData = async () => {
      if (id) {
         const res = await fetch(`${YOUTUBE_CHANNEL_API}&id=${id}`);
         const videoDetails = await res.json();
         dispatch(addChannelInfo(videoDetails?.items?.at(0)));
      }
   };

   useEffect(() => {
      fetchData();
   }, [id]);
};

export default useYTChannel;
