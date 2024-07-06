import {
    createBrowserRouter,
  } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
const Router = createBrowserRouter(
    [
        {
            path: "/",
            element :<div>Home</div>
        },
        {
            path: "/login",
            element : <LoginPage />
        }
    ]
);

export default Router;
  