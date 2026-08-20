import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Solucoes from "./pages/Solucoes";
import Projetos from "./pages/Projetos";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;