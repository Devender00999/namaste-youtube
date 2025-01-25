import { Icon } from "@iconify/react";
import LightLogo from "../assets/logo-light.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheSuggestions } from "../utils/searchSlice";

const Header = () => {
   const dispatch = useDispatch();

   const [searchQuery, setSearchQuery] = useState("");
   const [suggestions, setSuggestions] = useState([]);
   const [showSuggestions, setShowSuggestions] = useState(false);
   const cachedResults = useSelector(
      (state: any) => state?.search?.suggestions
   );

   const handleToggleMenu = () => {
      dispatch(toggleMenu());
   };

   useEffect(() => {
      // make an api call after every key press
      // if difference is < 200 between 2 API calls
      // decline the API call

      let timer = 0;

      timer = setTimeout(() => {
         if (cachedResults[searchQuery]) {
            setSuggestions(cachedResults[searchQuery]);
         } else {
            getSearchSuggestions();
         }
      }, 200);

      return () => {
         clearTimeout(timer);
      };
   }, [searchQuery]);

   const getSearchSuggestions = async () => {
      const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const data = await res.json();
      setSuggestions(data[1]);
      if (searchQuery.length > 0)
         dispatch(cacheSuggestions({ [searchQuery]: data[1] }));
   };

   return (
      <div className="flex p-3 items-center h-14  justify-between gap-5">
         <div className="flex items-center  gap-3 min-w-52">
            <Icon
               onClick={handleToggleMenu}
               className="hover:bg-[#f2f2f2]  w-10 h-10 p-2 cursor-pointer rounded-full"
               fontSize={28}
               icon="ion:menu-outline"
            />
            <Link to="/">
               <img className="w-[90px] h-auto object-cover" src={LightLogo} />
            </Link>
         </div>
         <div
            className="flex-1 flex justify-center"
            style={{ flex: "0 1 732px" }}
         >
            <div className="flex-1 relative max-w-[650px] flex flex-col gap-4 justify-center">
               <div className="flex w-full gap-6">
                  <div className="flex  w-full relative h-10">
                     <div className="flex w-full ">
                        <div className="flex w-full relative">
                           <input
                              placeholder="Search"
                              style={{ boxShadow: "inset 0 1px 2px #eee" }}
                              className="flex-1 outline-none rounded-l-3xl border-[1px] border-[#c6c6c6] px-4 placeholder:font-light"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              onFocus={() => setShowSuggestions(true)}
                              onBlur={() =>
                                 setTimeout(
                                    () => setShowSuggestions(false),
                                    200
                                 )
                              }
                           />
                           {showSuggestions && (
                              <div className="absolute top-10 bg-white p-2 rounded-xl w-full">
                                 <ul>
                                    {suggestions?.map((suggestion) => (
                                       <li
                                          onClick={() => {
                                             console.log({
                                                suggetion: suggestion,
                                             });
                                             setSearchQuery(suggestion);
                                             setShowSuggestions(false);
                                          }}
                                          className="flex hover:bg-yellow-100 items-center p-2 gap-3"
                                       >
                                          <Icon
                                             className="text-xl"
                                             icon="gridicons:search"
                                          />
                                          {suggestion}
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           )}
                        </div>
                        <div className="bg-[#f2f2f2] cursor-pointer border-[1px] border-[#c6c6c6] rounded-r-3xl w-[4.2rem] -left-[1px] flex justify-center items-center relative">
                           <Icon icon="iconamoon:search-thin" fontSize={26} />
                        </div>
                     </div>
                  </div>
                  <Icon
                     fontSize={22}
                     icon="material-symbols:mic-outline"
                     className="bg-[#f2f2f2] w-10 h-10 p-2 cursor-pointer rounded-full"
                  />
               </div>
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
