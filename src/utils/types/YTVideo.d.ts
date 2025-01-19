type YouTubeVideo = {
   kind: string; // Type of resource
   etag: string; // ETag for the resource
   id: string; // Unique video ID
   snippet: {
      publishedAt: string; // ISO 8601 date string for when the video was published
      channelId: string; // ID of the channel that uploaded the video
      title: string; // Video title
      description: string; // Video description
      thumbnails: {
         default: Thumbnail; // Default thumbnail
         medium: Thumbnail; // Medium-sized thumbnail
         high: Thumbnail; // High-resolution thumbnail
         standard?: Thumbnail; // Standard-sized thumbnail (optional)
         maxres?: Thumbnail; // Maximum-resolution thumbnail (optional)
      };
      channelTitle: string; // Channel name
      tags?: string[]; // List of tags (optional)
      categoryId: string; // Video category ID
      liveBroadcastContent: string; // Whether the content is live, upcoming, or none
      localized: {
         title: string; // Localized title
         description: string; // Localized description
      };
      defaultAudioLanguage?: string; // Default audio language (optional)
   };
   statistics: {
      viewCount: string; // Total views
      likeCount: string; // Total likes
      favoriteCount: string; // Total favorites (always 0)
      commentCount: string; // Total comments
   };
};

type Thumbnail = {
   url: string; // URL of the thumbnail
   width: number; // Width of the thumbnail
   height: number; // Height of the thumbnail
};

export default YouTubeVideo;
