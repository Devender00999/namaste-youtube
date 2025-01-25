import React from "react";

const Comment = ({ name, text, replies, username }: any) => {
   return (
      <div className="flex gap-4">
         <img
            className="w-12 h-12 rounded-full"
            alt="user"
            src="https://yt3.ggpht.com/yti/ANjgQV85ddbj-bUO-0mbvVSXVrsO3zDmeltBLxWx-N-Zn1zDzrw=s88-c-k-c0x00ffffff-no-rj"
         />
         <div className="flex flex-col">
            <span className="font-medium text-[13px]">@{username}</span>
            <span className="text-sm">{text}</span>
         </div>
      </div>
   );
};

export default Comment;
