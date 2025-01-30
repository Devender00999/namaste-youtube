import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import { Icon } from "@iconify/react/dist/iconify.js";

const LiveChat = () => {
   const dispatch = useDispatch();

   const chatMessages = useSelector((store: any) => store?.chat?.messages);

   useEffect(() => {
      const interval = setInterval(() => {
         // API polling
         dispatch(
            addMessage({
               name: generateRandomName(),
               message: generateRandomMessage(20),
            })
         );
         console.log("API Polling");
      }, 10000);

      return () => {
         clearInterval(interval);
      };
   }, []);

   const [message, setMessage] = useState("");

   return (
      <div className="w-full h-[600px] overflow-y-scroll flex flex-col gap-2 px-2 py-1 border-black  bg-slate-100">
         <div className="flex flex-col-reverse h-[calc(100%-50px)] overflow-y-scroll">
            {chatMessages.map((chat: any, i: number) => (
               <ChatMessage
                  key={chat.name + i}
                  name={chat.name}
                  message={chat.message}
               />
            ))}
         </div>
         <form
            onSubmit={(e) => {
               e.preventDefault();
               dispatch(addMessage({ name: "Raj Kumar", message }));
               setMessage("");
            }}
            className="w-full rounded-lg relative overflow-hidden"
         >
            <input
               className="w-full outline-none p-2 px-3 placeholder:font-light"
               placeholder="Chat here"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
            />
            <Icon
               type="submit"
               onClick={() => {
                  dispatch(addMessage({ name: "Raj Kumar", message }));
                  setMessage("");
               }}
               className="absolute bg-red bottom-3 text-xl right-3"
               icon="fluent:send-48-filled"
            ></Icon>
         </form>
      </div>
   );
};

export default LiveChat;
