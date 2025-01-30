const Avatar = ({ name }: { name: string }) => {
   const COLORS = [
      "#F44336",
      "#E91E63",
      "#9C27B0",
      "#673AB7",
      "#3F51B5",
      "#2196F3",
      "#03A9F4",
      "#00BCD4",
      "#009688",
      "#4CAF50",
      "#8BC34A",
      "#CDDC39",
      "#FFC107",
      "#FF9800",
      "#FF5722",
   ];
   const color = getColorForName(name);
   function getColorForName(name: string) {
      let hash = 0;
      for (let i = 0; i < name.length; i++) {
         hash = name.charCodeAt(i) + ((hash << 5) - hash);
      }
      const index = Math.abs(hash) % COLORS.length;
      return COLORS[index];
   }

   return (
      <div
         style={{ backgroundColor: color }}
         className="w-7 my-2 h-7 rounded-full flex items-center justify-center font-medium text-white text-sm"
      >
         {name.charAt(0).toUpperCase()}
      </div>
   );
};
export default Avatar;
