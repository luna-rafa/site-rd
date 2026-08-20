import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import About from "./pages/About/About";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato/Contato";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projetos from "./pages/Projetos/Projetos";
import Solucoes from "./pages/Solucoes";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* =========================
            HOME
        ========================== */}
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<Home />} />
        <Route path="/es" element={<Home />} />

        {/* =========================
            SOBRE
        ========================== */}
        <Route path="/sobre" element={<About />} />

        {/* Inglês */}
        <Route path="/en/about" element={<About />} />
        <Route path="/en/sobre" element={<About />} />

        {/* Espanhol */}
        <Route path="/es/sobre" element={<About />} />
        <Route path="/es/about" element={<About />} />

        {/* =========================
            SOLUÇÕES
        ========================== */}
        <Route path="/solucoes" element={<Solucoes />} />

        {/* Inglês */}
        <Route path="/en/solutions" element={<Solucoes />} />
        <Route path="/en/solucoes" element={<Solucoes />} />

        {/* Espanhol */}
        <Route path="/es/soluciones" element={<Solucoes />} />
        <Route path="/es/solucoes" element={<Solucoes />} />

        {/* =========================
            PROJETOS
        ========================== */}
        <Route path="/projetos" element={<Projetos />} />

        {/* Inglês */}
        <Route path="/en/projetos" element={<Projetos />} />
        <Route path="/en/projetos" element={<Projetos />} />

        {/* Espanhol */}
        <Route path="/es/proyectos" element={<Projetos />} />
        <Route path="/es/projetos" element={<Projetos />} />

        {/* =========================
            BLOG
        ========================== */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/en/blog" element={<Blog />} />
        <Route path="/es/blog" element={<Blog />} />

        {/* =========================
            CONTATO
        ========================== */}
        <Route path="/contato" element={<Contato />} />

        {/* Inglês */}
        <Route path="/en/contato" element={<Contato />} />
        <Route path="/en/contact" element={<Contato />} />

        {/* Espanhol */}
        <Route path="/es/contato" element={<Contato />} />
        <Route path="/es/contacto" element={<Contato />} />

        {/* =========================
            404
        ========================== */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;