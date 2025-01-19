import YouTubeVideo from "../utils/types/YTVideo";

const VideoCard = ({ info }: { info: YouTubeVideo }) => {
   console.log({ info });
   return <div>{info?.snippet?.title}</div>;
};

export default VideoCard;
