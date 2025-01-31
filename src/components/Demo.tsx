import { useMemo, useState } from "react";

const Demo = () => {
   const [value, setValue] = useState(1);
   const [toggle, setToggle] = useState(false);
   console.log("Rendering...");
   const prime = useMemo(() => getNthPrime(value), [value]);
   // const prime = getNthPrime(value);
   return (
      <div
         className={`flex flex-col gap-4 p-3 items-start w-full h-screen ${
            toggle ? "bg-black" : ""
         }`}
      >
         <input
            value={value}
            type="number"
            className="px-2 rounded-lg outline-none py-1 border-gray-200 border-2"
            onChange={(e) => setValue(Number(e.target.value || "1"))}
         />
         <h1 className={`mt-2 text-2xl ${toggle ? "text-white" : ""}`}>
            nth prime number: {prime}
         </h1>
         <button
            onClick={() => setToggle((prev) => !prev)}
            className="flex bg-slate-100  py-2 px-4 rounded-lg"
         >
            Toggle
         </button>
      </div>
   );
};

export default Demo;

function isPrime(num: number) {
   if (num < 2) return false;
   if (num === 2 || num === 3) return true;
   if (num % 2 === 0 || num % 3 === 0) return false;

   for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
   }
   return true;
}

function getNthPrime(n: number) {
   // console.time("calc");
   console.log("Calculating prime");
   if (n < 1) return null; // No such prime
   let count = 0,
      num = 1;

   while (count < n) {
      num++;
      if (isPrime(num)) {
         count++;
      }
   }
   // console.timeEnd("calc");

   return num;
}
