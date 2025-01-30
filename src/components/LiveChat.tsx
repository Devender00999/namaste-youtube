import ChatMessage from "./ChatMessage";

const LiveChat = () => {
   
   return (
      <div className="w-full h-[600px] px-2 py-1 border-black bg-slate-100">
         <ChatMessage name="Rajkumar" message="Hello" />
         <ChatMessage name="Rajkumar" message="Hello" />
         <ChatMessage name="Rajkumar" message="Hello" />
         <ChatMessage name="Rajkumar" message="Hello" />
         <ChatMessage name="Rajkumar" message="Hello" />
         <ChatMessage name="Rajkumar" message="Hello" />
      </div>
   );
};

export default LiveChat;
