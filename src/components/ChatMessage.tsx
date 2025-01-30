const ChatMessage = ({ name, message }: { name: string; message: string }) => {
   return (
      <div className="flex items-center px-2 ">
         <img
            src="https://yt3.ggpht.com/yti/ANjgQV85ddbj-bUO-0mbvVSXVrsO3zDmeltBLxWx-N-Zn1zDzrw=s88-c-k-c0x00ffffff-no-rj"
            className="w-6 h-6 rounded-full"
         />
         <span className="font-medium px-2 py-2">{name}</span>
         <span className="">{message}</span>
      </div>
   );
};

export default ChatMessage;
