import React from "react";
import Home from "./pages/Home.js";
import "./style.css";
import Navbar from "./components/home_components/Navbar.js";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}
