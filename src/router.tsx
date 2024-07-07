import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RecoverPass from "./pages/RecoverPass";
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
    path: "*",
    element: <div>404</div>,
  },
]);

export default Router;
