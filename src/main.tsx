import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  import.meta.env.MODE !== "production" ? <StrictMode children={<App />} /> : <App />
);
