import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

type MenuItem = {
   name: string;
   icon?: string; // Optional because not all items have icons
   link: string;
};

type Menu = {
   heading?: string; // Optional because not all menus have headings
   subMenu: MenuItem[];
};

const Sidebar = () => {
   const isMenuOpen = useSelector((store: any) => store.app.isMenuOpen);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(closeMenu());
   }, []);

   const menu: Menu[] = [
      {
         subMenu: [
            { name: "Home", icon: "ic:outline-home", link: "/" },
            { name: "Shorts", icon: "proicons:youtube-shorts", link: "/" },
            {
               name: "Subscriptions",
               icon: "ic:outline-subscriptions",
               link: "/",
            },
            {
               name: "Youtube Music",
               icon: "arcticons:youtube-music",
               link: "/",
            },
         ],
      },
      {
         subMenu: [
            { name: "You", icon: "solar:user-circle-linear", link: "/" },
            { name: "History", icon: "material-symbols:history", link: "/" },
         ],
      },
      {
         heading: "Explore",
         subMenu: [
            {
               name: "Trending",
               icon: "streamline:trending-content",
               link: "/trending",
            },
            {
               name: "Shopping",
               icon: "mdi:shopping-outline",
               link: "/shopping",
            },
            { name: "Music", icon: "iconamoon:music-2-thin", link: "/music" },
            { name: "Films", icon: "mdi:movie-open-outline", link: "/films" },
            { name: "Live", icon: "fluent:live-24-regular", link: "/live" },
         ],
      },
      {
         subMenu: [
            {
               name: "Settings",
               icon: "material-symbols:settings-outline-rounded",
               link: "/settings",
            },
            {
               name: "Report history",
               icon: "material-symbols:flag",
               link: "/reporthistory",
            },
            {
               name: "Help",
               icon: "material-symbols-light:help-outline",
               link: "/hel[",
            },
            {
               name: "Send feedback",
               icon: "material-symbols:feedback-outline",
               link: "/feedback",
            },
         ],
      },
   ];
   return (
      <div
         className={`${
            isMenuOpen ? "w-60  p-3" : "w-16 p-1"
         } h-[calc(100%-56px)]`}
      >
         {menu?.slice(0, !isMenuOpen ? 2 : undefined)?.map((menuItem, idx) => {
            return (
               <div
                  key={menuItem?.heading || "" + idx}
                  className="border-b-[1px] border-[#0000001a] py-2 first:pt-0"
               >
                  {menuItem.heading && (
                     <span className="inline-block font-medium px-3 w-full pt-[6px] pb-1 p-[6px 12px 4px]">
                        Explore
                     </span>
                  )}
                  <ul className="">
                     {menuItem.subMenu?.map((subMenuItem) => {
                        return (
                           <li key={subMenuItem.name}>
                              <Link
                                 className={`flex cursor-pointer ${
                                    isMenuOpen
                                       ? "h-10  px-3  gap-6   w-full"
                                       : "w-16 flex-col px-0 gap-[5px] pt-4 pb-[14px]"
                                 } items-center ${
                                    subMenuItem.name === "Home" && isMenuOpen
                                       ? "bg-[#f2f2f2]"
                                       : ""
                                 } rounded-lg hover:bg-[#f2f2f2] cursor-pointer `}
                                 to={subMenuItem.link}
                              >
                                 <Icon
                                    icon={subMenuItem.icon || ""}
                                    className="text-2xl"
                                 />
                                 <span
                                    className={`text-ellipsis overflow-hidden text-nowrap ${
                                       isMenuOpen ? "text-sm" : "text-[10px]"
                                    }`}
                                 >
                                    {subMenuItem.name}
                                 </span>
                              </Link>
                           </li>
                        );
                     })}
                  </ul>
               </div>
            );
         })}
      </div>
   );
};

export default Sidebar;
