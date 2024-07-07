import {
    createBrowserRouter,
  } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
const Router = createBrowserRouter(
    [
        {
            path: "/",
            element :<div>Home</div>
        },
        {
            path: "/login",
            element : <LoginPage />
        },
        {
            path: "/register",
            element : <RegisterPage />
        },
        {
            path:"*",
            element : <div>404</div>
        }
    ]
);

export default Router;
  