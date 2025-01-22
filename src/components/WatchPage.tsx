import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
   const [searchParams] = useSearchParams();

   const videoId = searchParams.get("v");

   return (
      <iframe
         width="640"
         height="360"
         src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
         title="Therapy | Stand Up Comedy by Urooj Ashfaq"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerPolicy="strict-origin-when-cross-origin"
         allowFullScreen
      />
   );
};

export default WatchPage;
