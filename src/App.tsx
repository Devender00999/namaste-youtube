import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
   const router = createBrowserRouter([
      {
         path: "",
         Component: Body,
         children: [
            {
               path: "/",
               Component: MainContainer,
            },
            {
               path: "watch",
               element: <WatchPage />,
            },
         ],
      },
   ]);
   return <RouterProvider router={router}></RouterProvider>;
}

export default App;
