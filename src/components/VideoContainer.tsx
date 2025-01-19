import { useSelector } from "react-redux";
import useYTVideos from "../hooks/useYTVideos";
import VideoCard from "./VideoCard";
import YouTubeVideo from "../utils/types/YTVideo";

const VideoContainer = () => {
   useYTVideos();
   const ytVideoList: YouTubeVideo[] = useSelector(
      (state: any) => state.ytVideos.ytVideos
   );

   if (!ytVideoList) return null;

   console.log({ ytVideoList });
   return (
      <div>
         <VideoCard info={ytVideoList?.[0]} />
      </div>
   );
};

export default VideoContainer;
