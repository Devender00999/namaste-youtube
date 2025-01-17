import { Icon } from "@iconify/react";
import LightLogo from "../assets/logo-light.png";

const Header = () => {
   return (
      <div className="flex p-3 items-center h-14 overflow-hidden justify-between gap-5">
         <div className="flex items-center  gap-6 min-w-52">
            <div className="p-1 rounded-full hover:bg-gray-100 cursor-pointer">
               <Icon fontSize={28} icon="ion:menu-outline" className="" />
            </div>
            <img className="w-28" src={LightLogo} />
         </div>
         <div
            className="flex-1 flex justify-center"
            style={{ flex: "0 1 732px" }}
         >
            <div className="flex-1 max-w-[650px] flex gap-4">
               <div className="flex w-full relative h-10">
                  <input
                     placeholder="Search"
                     style={{ boxShadow: "inset 0 1px 2px #eee" }}
                     className="flex-1 outline-none rounded-l-3xl border-[1px] border-[#c6c6c6] px-4 placeholder:font-light"
                  />
                  <div className="bg-[#f2f2f2] cursor-pointer border-[1px] border-[#c6c6c6] rounded-r-3xl w-[4.2rem] -left-[1px] flex justify-center items-center relative">
                     <Icon icon="iconamoon:search-thin" fontSize={26} />
                  </div>
               </div>
               <Icon
                  fontSize={22}
                  icon="material-symbols:mic-outline"
                  className="bg-[#f2f2f2] w-10 h-10 p-2 cursor-pointer rounded-full"
               />
            </div>
         </div>
         <div className="flex min-w-36 items-center gap-5">
            <div className="flex py-[6px] gap-1 cursor-pointer px-2 bg-[#f2f2f2]  rounded-3xl">
               <Icon fontSize={24} icon="material-symbols-light:add" />
               <span className="font-medium">Create</span>
            </div>
            <div>
               <Icon fontSize={24} icon="clarity:notification-line" />
            </div>
            <img
               src="https://yt3.ggpht.com/yti/ANjgQV85ddbj-bUO-0mbvVSXVrsO3zDmeltBLxWx-N-Zn1zDzrw=s88-c-k-c0x00ffffff-no-rj"
               className="w-8 h-8 rounded-full"
            />
         </div>
      </div>
   );
};

export default Header;
