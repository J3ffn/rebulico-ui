import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home.page";
import PageTemplate from "./components/templates/page/Page.template";
import NoticePage from "./pages/notice/NoticePage";
import CreatePostPage from "./pages/createPost/CreatePost.page";
import LoginPage from "./pages/auth/login/Login.page";
import RegistryPage from "./pages/auth/registry/Registry.page";
import AuthTemplate from "./components/templates/auth/Auth.template";

function App() {
  return (
    <Router>
      <Routes>
        {/* AUTH */}
        <Route path="/auth/login" element={<AuthTemplate mainContent={<LoginPage />} />} />
        <Route path="/auth/cadastro" element={<AuthTemplate mainContent={<RegistryPage />} />} />
        
        {/* FLUXOS */}
        <Route path="/" element={<PageTemplate mainContent={<HomePage />} />} />
        <Route path="/noticia/:id" element={<PageTemplate mainContent={<NoticePage />} />} />
        <Route path="/criar/post" element={<PageTemplate mainContent={<CreatePostPage />} />} />
      </Routes>
    </Router>
  );
}

export default App;
