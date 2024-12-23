import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Global styles
import { RouterProvider } from "react-router-dom"; // Correct import for RouterProvider
import router from "./routes/routes.jsx"; // Import your routes

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provides the router configuration */}
  </StrictMode>
);
