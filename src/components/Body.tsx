import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Body = () => {
   return (
      <div>
         <Header />
         <div className="flex">
            <Sidebar />
            <Outlet />
         </div>
      </div>
   );
};

export default Body;
