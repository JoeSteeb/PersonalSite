import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LayoutProvider } from "./LayoutContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <LayoutProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </LayoutProvider>
);
