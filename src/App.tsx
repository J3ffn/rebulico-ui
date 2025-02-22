import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home.page";
// import PageTemplate from "./components/templates/page/Page.template";
// import AuthTemplate from "./components/templates/auth/Auth.template";
import { lazy } from "react";

const AuthTemplate = lazy(() => import("./components/templates/auth/Auth.template"));
const LoginPage = lazy(() => import("./pages/auth/login/Login.page"));

const PageTemplate = lazy(() => import("./components/templates/page/Page.template"));
const RegistryPage = lazy(() => import("./pages/auth/registry/Registry.page"));
const CreatePostPage = lazy(() => import("./pages/createPost/CreatePost.page"));
const NoticePage = lazy(() => import("./pages/notice/NoticePage"));

function App() {
  return (
    <Router>
      {/* <Suspense> */}
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
            path="/criar/post"
            element={<PageTemplate mainContent={<CreatePostPage />} />}
          />
        </Routes>
      {/* </Suspense> */}
    </Router>
  );
}

export default App;
