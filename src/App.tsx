import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home.page";
import PageTemplate from "./components/templates/page/Page.template";
import NoticePage from "./pages/notice/NoticePage";
import CreatePostPage from "./pages/createPost/CreatePost.page";
import LoginPage from "./pages/auth/login/Login.page";
import RegistryPage from "./pages/auth/registry/Registry.page";
import AuthTemplate from "./components/templates/auth/Auth.template";
import { AuthContextStorage } from "./context/auth/auth.context";
import { RequireAuth } from "./utiils/RequireAuth";
import { ToastStorage } from "./context/toast/Toast.context";
import About from "./pages/about/About";

function App() {
  return (
    <AuthContextStorage>
        <ToastStorage>
          <Router>
            <Routes>
              {/* AUTH */}
              <Route
                path="/auth/login"
                element={<AuthTemplate mainContent={<LoginPage />} />}
              />
              <Route
                path="/auth/cadastro"
                element={<AuthTemplate mainContent={<RegistryPage />} />}
              />

              {/* FLUXOS */}
              <Route
                path="/"
                element={<PageTemplate mainContent={<HomePage />} />}
              />
              <Route
                path="/noticia/:id"
                element={<PageTemplate mainContent={<NoticePage />} />}
              />
              <Route 
                path="/quem-somos"
                element={<PageTemplate mainContent={<About />} />}
              />

              {/* CREATE POSTS */}
              <Route
                path="/criar/post"
                element={
                  <PageTemplate
                    mainContent={
                      <RequireAuth allowedRoles={["admin", "author", "user"]}>
                        <CreatePostPage />
                      </RequireAuth>
                    }
                  />
                }
              />
            </Routes>
          </Router>
        </ToastStorage>
    </AuthContextStorage>
  );
}

export default App;
