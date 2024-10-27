import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home.page";
import PageTemplate from "./components/templates/page/Page.template";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageTemplate mainContent={<HomePage />} />} />
      </Routes>
    </Router>
  );
}

export default App;
