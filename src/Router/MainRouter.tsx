import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/Screens/LandingPage";
import HomePage from "../Pages/Screens/HomePage";

const MainRouter = createBrowserRouter([
  {
    index: true,
    element: <LandingPage />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
]);

export default MainRouter;
