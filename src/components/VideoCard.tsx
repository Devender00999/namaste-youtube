import { Icon } from "@iconify/react/dist/iconify.js";
import YouTubeVideo from "../utils/types/YTVideo";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
dayjs.extend(relativeTime);

const VideoCard = ({ info }: { info: YouTubeVideo }) => {
   console.log({ info });
   return (
      <Link to="/browse" className="flex flex-col gap-2 max-w-80 pt-3">
         <div className=" overflow-hidden rounded-xl">
            <img
               className="rounded-xl"
               src={info?.snippet?.thumbnails?.high?.url}
            />
         </div>
         <div className="flex gap-3 ">
            <div className="w-8 h-8 bg-red-200 flex items-center justify-center rounded-full">
               {info?.snippet?.title?.charAt(0)}
            </div>
            <div className="flex-1">
               <div className="flex gap-3 font-medium text-[#0f0f0f]">
                  <span className="flex-1 text-ellipsis overflow-hidden line-clamp-2">
                     {info?.snippet?.title}
                  </span>
                  <Icon
                     icon="prime:ellipsis-v"
                     className="cursor-pointer w-5 h-5 mt-1"
                  />
               </div>
               <div className="flex gap flex-col text-sm text-[#606060]">
                  <div>{info.snippet.channelTitle}</div>
                  <div className="flex gap-1 ">
                     <span>{info.statistics.viewCount}</span>
                     <span>•</span>
                     {dayjs(info?.snippet?.publishedAt).fromNow()}
                  </div>
               </div>
            </div>
         </div>
      </Link>
   );
};

export default VideoCard;
