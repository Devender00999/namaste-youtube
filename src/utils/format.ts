export function formatNumberYouTubeStyle(num: number | string) {
   const tempNum = Number(num || "0");
   if (tempNum >= 1_000_000_000) {
      return (tempNum / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B"; // Billions
   } else if (tempNum >= 1_000_000) {
      return (tempNum / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M"; // Millions
   } else if (tempNum >= 1_000) {
      return (tempNum / 1_000).toFixed(1).replace(/\.0$/, "") + "K"; // Thousands
   }
   return tempNum.toString(); // Less than 1,000
}
