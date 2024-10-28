import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home.page";
import PageTemplate from "./components/templates/page/Page.template";
import NoticePage from "./pages/notice/NoticePage";
import CreatePost from "./pages/createPost/CreatePost.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageTemplate mainContent={<HomePage />} />} />
        <Route path="/noticia/:id" element={<PageTemplate mainContent={<NoticePage />} />} />
        <Route path="/criar/post" element={<PageTemplate mainContent={<CreatePost />} />} />
      </Routes>
    </Router>
  );
}

export default App;
