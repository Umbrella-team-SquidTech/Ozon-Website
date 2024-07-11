import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router.tsx";
import { Toaster } from "@/components/ui/toaster";

import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={Router} />
    <Toaster />
  </>
);
