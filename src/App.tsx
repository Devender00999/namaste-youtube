import {
   BrowserRouter,
   createBrowserRouter,
   RouterProvider,
} from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

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
               path: "/browse",
               element: <div>Hello</div>,
            },
         ],
      },
   ]);
   return <RouterProvider router={router}></RouterProvider>;
}

export default App;
