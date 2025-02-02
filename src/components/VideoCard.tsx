import { Icon } from "@iconify/react/dist/iconify.js";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { formatNumberYouTubeStyle } from "../utils/format";
import YouTubeVideo from "../utils/types/YTVideo";
import { addCurrentVideo } from "../utils/videoSlice";
dayjs.extend(relativeTime);

const VideoCard = ({ info }: { info: YouTubeVideo }) => {
   const dispatch = useDispatch();

   return (
      <Link
         to={`/watch?v=${info.id}`}
         className="flex flex-col gap-2 max-w-72 pt-3"
         state={info}
         onClick={() => dispatch(addCurrentVideo(info))}
      >
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
                     <span>
                        {formatNumberYouTubeStyle(
                           Number(info?.statistics?.viewCount) || 0
                        )}{" "}
                        views
                     </span>
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
