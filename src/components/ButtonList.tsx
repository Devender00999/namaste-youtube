import Button from "./Button";

const ButtonList = () => {
   const buttons = [
      "All",
      "Music",
      "Marvel Cinematic Universe",
      "Science Fiction",
      "Gaming",
      "Trailers",
      "Comedy",
      "Tech Reviews",
      "Travel",
      "Food & Cooking",
      // "Fitness",
      // "Pop Music",
      // "ASMR",
      // "Esports",
      // "Documentaries",
      // "Horror",
      // "DIY Projects",
      // "Space Exploration",
      // "History",
      // "Sports",
      // "Fan Theories",
      // "Book Reviews",
      // "Retro Gaming",
      // "Memes",
      // "Art Tutorials",
      // "Mental Health",
      // "Motivation",
      // "Movie Reviews",
      // "Social Media Trends",
      // "Celebrity Gossip",
   ];
   return (
      <div className="flex w-full overflow-scroll gap-3 h-14 items-center px-6">
         {buttons.map((button) => (
            <Button title={button} selected={button === "All"} />
         ))}
      </div>
   );
};

export default ButtonList;
