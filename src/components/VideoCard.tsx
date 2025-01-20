import YouTubeVideo from "../utils/types/YTVideo";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const VideoCard = ({ info }: { info: YouTubeVideo }) => {
   console.log({ info });
   return (
      <div className="flex flex-col">
         <div className="">
            <img
               className="rounded-xl"
               src={info?.snippet?.thumbnails?.high?.url}
            />
         </div>
         <div className="">
            <div>{info?.snippet?.title}</div>
            <div className="flex gap-2">
               <span>{info.statistics.viewCount}</span>
               {dayjs(info?.snippet?.publishedAt).fromNow()}
            </div>
         </div>
      </div>
   );
};

export default VideoCard;
