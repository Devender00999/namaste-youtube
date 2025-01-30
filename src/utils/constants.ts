const YOUTUBE_API = import.meta.env.VITE_YOUTUBE_VIDEO_API;
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const YOUTUBE_VIDEO_API = `${YOUTUBE_API}?regionCode=IN&maxResults=20&part=contentDetails,id,liveStreamingDetails,localizations,paidProductPlacementDetails,player,recordingDetails,snippet,statistics,status,topicDetails&key=${YOUTUBE_API_KEY}`;
const YOUTUBE_SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;
const YOUTUBE_CHANNEL_API = `${
   import.meta.env.VITE_YOUTUBE_CHANNEL_API
}?part=snippet,statistics,brandingSettings&key=${YOUTUBE_API_KEY}`;

export { YOUTUBE_CHANNEL_API, YOUTUBE_SEARCH_API, YOUTUBE_VIDEO_API };

export const LIVE_CHAT_COUNT = 25;
