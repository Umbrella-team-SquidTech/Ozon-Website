import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router.tsx";
import { Toaster } from "@/components/ui/toaster"
import 'mapbox-gl/dist/mapbox-gl.css';

import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
    <Toaster />
  </React.StrictMode>
);
