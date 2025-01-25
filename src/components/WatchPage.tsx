import "./styles.css";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
   const [searchParams] = useSearchParams();

   const videoId = searchParams.get("v");

   return (
      <div className="mx-6 py-2 pt-3 flex w-full h-[calc(100vh-56px)] flex-col lg:flex-row 2xl:px-16 gap-[26px]">
         <div className="w-full 2xl:px-[19px] flex flex-col flex-1 h-full ">
            <div className="max-h-[720px]  mt-3 min-w-[calc(360px*(16/9))] max-w-[calc((100vh-56px-24px-136px)*(16/9))] ">
               <iframe
                  className="w-full h-full rounded-xl aspect-video"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=`}
                  title="Therapy | Stand Up Comedy by Urooj Ashfaq"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
               />
            </div>
            <div className="pt-3">
               <span className=" font-bold text-xl">
                  Full video: Mere Dholna (Arijit Version) | Bhool Bhulaiyaa 2
                  Kartik Kiara Tabu Pritam Bhushan K
               </span>
            </div>
            <CommentsContainer />
         </div>
         <div className="lg:w-[400px] min-w-[332px] max-w-[402px]">
            <div className="w-full overflow-auto">{/* <ButtonList /> */}</div>
         </div>
      </div>
   );
};

export default WatchPage;
