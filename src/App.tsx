import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

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
            {
               path: "demo",
               element: <Demo />,
            },
            {
               path: "demo2",
               element: <Demo2 />,
            },
         ],
      },
   ]);
   return <RouterProvider router={router}></RouterProvider>;
}

export default App;
