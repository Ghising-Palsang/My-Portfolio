import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";

const routerPath = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      
    ],
  },
]);

const RouterConfig = () => {
  return (
    <>
      <RouterProvider router={routerPath} />
    </>
  );
};

export default RouterConfig;
