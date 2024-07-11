import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RecoverPass from "./pages/RecoverPass";
import ValidateRegisterPage from "./pages/ValidateRegisterPage";
import HomePage from "./pages/HomePage";
import Events from "./pages/EventsPage";
import EventDetails from "./pages/EventDetails"; 
import MapPage from "./pages/MapPage";
import CreatePostmobile from "./pages/CreatePostmobile";
import CreateEvent from "./pages/CreateEvent";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/account/recover",
    element: <RecoverPass />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/account/validate",
    element: <ValidateRegisterPage />,
  },
  {
      path:"/map",
      element:<MapPage/>
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/events/:id",
    element: <EventDetails />,
  },
  {
    path: "/createEvent",
    element: <CreateEvent />,
  },
  {
    path:"/createPost",
    element:<CreatePostmobile/>
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default Router;
