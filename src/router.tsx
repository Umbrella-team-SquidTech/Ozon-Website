import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RecoverPass from "./pages/RecoverPass";
import ValidateRegisterPage from "./pages/ValidateRegisterPage";
import HomePage from "./pages/HomePage";
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
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default Router;
