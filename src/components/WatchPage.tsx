import { Icon } from "@iconify/react/dist/iconify.js";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useYTChannel from "../hooks/useYTChannel";
import useYTVideo from "../hooks/useYTVideo";
import { formatNumberYouTubeStyle } from "../utils/format";
import YouTubeChannel from "../utils/types/YTChannel";
import YouTubeVideo from "../utils/types/YTVideo";
import CommentsContainer from "./CommentsContainer";
import "./styles.css";
import LiveChat from "./LiveChat";
import { useState } from "react";

const WatchPage = () => {
   const [searchParams] = useSearchParams();
   const videoId = searchParams.get("v");
   const currentVideo: YouTubeVideo = useSelector(
      (state: any) => state?.ytVideos?.currentVideo
   );

   const channelInfo: YouTubeChannel = useSelector(
      (state: any) => state?.ytVideos?.channelInfo
   );

   const [showFull, setShowFull] = useState(false);

   useYTVideo(videoId || "");
   useYTChannel(currentVideo?.snippet?.channelId);
   return (
      <div className="mx-6 py-2 pt-3 flex w-full h-[calc(100vh-56px)] flex-col lg:flex-row 2xl:px-16 gap-[26px]">
         <div className="w-full 2xl:px-[19px] flex flex-col flex-1 h-full ">
            <div className="max-h-[720px]  mt-3 min-w-[calc(360px*(16/9))] max-w-[calc((100vh-56px-24px-136px)*(16/9))] ">
               <iframe
                  className="w-full h-full rounded-xl aspect-video"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
                  title="Therapy | Stand Up Comedy by Urooj Ashfaq"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
               />
            </div>
            <div className="pt-3 flex gap-2 flex-col">
               <span className=" font-bold text-xl">
                  {currentVideo?.snippet?.title}
               </span>
               <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                     <div className="flex gap-3">
                        <img
                           className="w-10 h-10 rounded-full"
                           src={channelInfo?.snippet?.thumbnails?.default?.url}
                           alt={currentVideo?.snippet?.channelTitle}
                        />
                        <div className="flex gap-6">
                           <div className="flex flex-col">
                              <span className="font-medium">
                                 {currentVideo?.snippet?.channelTitle}
                              </span>
                              <span className="text-xs">
                                 {formatNumberYouTubeStyle(
                                    Number(
                                       channelInfo?.statistics
                                          ?.subscriberCount || "0"
                                    )
                                 )}
                                 subscribes
                              </span>
                           </div>
                           <div className="bg-black px-4 h-9 flex items-center py-1 rounded-full text-sm text-white font-medium">
                              Subscribe
                           </div>
                        </div>
                     </div>
                     <div className="flex rounded-full bg-[#0000000d] items-center h-9 gap-2">
                        <button className="flex ml-4 hover:bg-[rgba(0,0,0,0.1)]  items-center gap-2">
                           <Icon icon="mdi:like" fontSize={18} />
                           {formatNumberYouTubeStyle(
                              currentVideo?.statistics?.likeCount
                           )}
                        </button>
                        <div className="h-4 border-l-[1px] border-l-[#0000001a]"></div>
                        <div className="flex w-57t44s hover:bg-[rgba(0,0,0,0.1)] items-center">
                           <Icon
                              className="hover:bg-[rgba(0,0,0,0.1)] "
                              icon="mdi:dislike"
                           />
                        </div>
                     </div>
                  </div>
                  <pre
                     className={`text-sm ${
                        showFull ? "h-max pb-8" : `h-[6.1rem] overflow-hidden`
                     } relative bg-[#0000000d] p-3 rounded-xl`}
                  >
                     <p className="font-medium">
                        {currentVideo?.statistics?.viewCount} views{" "}
                        {dayjs(currentVideo?.snippet?.publishedAt).format(
                           "MMM DD"
                        )}
                        ,
                     </p>
                     {currentVideo?.snippet?.description}
                     <p className="cursor-pointer h-7 flex items-center text-black font-medium bg-[#f2f2f2] w-full absolute bottom-[0px]">
                        <span onClick={() => setShowFull((prev) => !prev)}>
                           {showFull ? "Show less" : "...more"}
                        </span>
                     </p>
                  </pre>
               </div>
            </div>
            <CommentsContainer />
         </div>
         <div className="lg:w-[400px] md:hidden  min-w-[332px] max-w-[402px] mt-3">
            {/* <div className="w-full overflow-auto"><ButtonList /></div> */}
            <LiveChat />
         </div>
      </div>
   );
};

export default WatchPage;
