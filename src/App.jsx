import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Owner from "./components/Owner";


const router = createBrowserRouter([{
  path:"/",
  element:<Home/>,
},{
  path:"/owner",
  element:<Owner/>,
}])



export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
