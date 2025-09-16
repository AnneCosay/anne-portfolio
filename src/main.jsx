import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; 
import "./index.css";
import App from "./App.jsx";
import HSubtitle from "./components/HSubtitle.jsx";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);