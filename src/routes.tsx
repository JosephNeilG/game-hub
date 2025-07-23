import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";

/** Routing structure of the app */
const router = createBrowserRouter([
  {
    path: "/", // base path
    element: <Layout />, // layout with navbar and <Outlet/>
    errorElement: <ErrorPage />, // Catches navigation/rendering errors
    children: [
      {
        index: true, // root page
        element: <HomePage />, // show homepage when at "/"
      },
      {
        path: "games/:slug", // dynamic, shows game slug
        element: <GameDetailPage />, // component for each game detail
      },
    ],
  },
]);

export default router;
