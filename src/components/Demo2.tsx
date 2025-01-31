import { useRef, useState } from "react";

const Demo2 = () => {
   console.log("Rendering...");
   let x = 10;
   const ref = useRef(0);
   const [y, setY] = useState(10);

   return (
      <div className={`flex flex-col gap-4 p-3 items-start w-full h-screen `}>
         <div>
            <button
               onClick={() => {
                  // x += 1;
                  x += 1;
                  console.log(x);
               }}
               className="bg-slate-100 px-2 py-1 rounded-lg mr-3"
            >
               Increase x
            </button>
            {/* Let x = {x.current} */}
         </div>
         <div>
            <button
               onClick={() => setY((prev) => prev + 1)}
               className="bg-slate-100 px-2 py-1 rounded-lg mr-3"
            >
               Increase y :
            </button>
            Let y = {y}
         </div>
         <div>
            <button
               onClick={() => {
                  // x += 1;
                  ref.current += 1;
                  console.log("ref = ", ref.current);
               }}
               className="bg-slate-100 px-2 py-1 rounded-lg mr-3"
            >
               Increase ref
            </button>
            Let ref = {ref.current}
         </div>
      </div>
   );
};

export default Demo2;
