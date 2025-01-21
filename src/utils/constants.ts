const YOUTUBE_API = import.meta.env.VITE_YOUTUBE_API;
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const YOUTUBE_VIDEO_LIST_API = `${YOUTUBE_API}?chart=mostPopular&regionCode=IN&maxResults=20&part=contentDetails,id,liveStreamingDetails,localizations,paidProductPlacementDetails,player,recordingDetails,snippet,statistics,status,topicDetails&key=${YOUTUBE_API_KEY}`;

export { YOUTUBE_VIDEO_LIST_API };
