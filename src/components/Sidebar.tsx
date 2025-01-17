import { Icon } from "@iconify/react/dist/iconify.js";

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
      <div className="w-60 h-[calc(100%-56px)] p-3">
         {menu?.map((menuItem) => {
            return (
               <div className="border-b-[1px] border-[#0000001a] py-2">
                  {menuItem.heading && (
                     <span className="inline-block font-medium px-3 w-full pt-[6px] pb-1 p-[6px 12px 4px]">
                        Explore
                     </span>
                  )}
                  <ul className="">
                     {menuItem.subMenu?.map((subMenuItem) => {
                        return (
                           <li
                              className={`flex h-10 items-center gap-6 w-full px-3 ${
                                 subMenuItem.name === "Home"
                                    ? "bg-[#f2f2f2]"
                                    : ""
                              } rounded-lg hover:bg-[#f2f2f2] cursor-pointer `}
                           >
                              <Icon
                                 icon={subMenuItem.icon || ""}
                                 className="text-2xl"
                              />
                              <span className="text-sm">
                                 {subMenuItem.name}
                              </span>
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
