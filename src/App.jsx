import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import About from "./pages/About/About";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Solucoes from "./pages/Solucoes";
import Projetos from "./pages/Projetos/Projetos";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<Home />} />
        <Route path="/es" element={<Home />} />

        {/* Sobre */}
        <Route path="/sobre" element={<About />} />

        {/* Inglês: rota principal e rota alternativa */}
        <Route path="/en/about" element={<About />} />
        <Route path="/en/sobre" element={<About />} />

        {/* Espanhol */}
        <Route path="/es/sobre" element={<About />} />
        <Route path="/es/about" element={<About />} />

        {/* Soluções */}
        <Route path="/solucoes" element={<Solucoes />} />

        {/* Inglês */}
        <Route path="/en/solutions" element={<Solucoes />} />
        <Route path="/en/solucoes" element={<Solucoes />} />

        {/* Espanhol */}
        <Route path="/es/soluciones" element={<Solucoes />} />
        <Route path="/es/solucoes" element={<Solucoes />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/en/blog" element={<Blog />} />
        <Route path="/es/blog" element={<Blog />} />

        {/* Contato */}
        <Route path="/contato" element={<Contato />} />

        {/* Inglês */}
        <Route path="/en/contato" element={<Contato />} />
        <Route path="/en/contact" element={<Contato />} />

        {/* Espanhol */}
        <Route path="/es/contato" element={<Contato />} />
        <Route path="/es/contacto" element={<Contato />} />

        {/* Projetos */}
<Route path="/projetos" element={<Projetos />} />

{/* Inglês */}
<Route path="/en/projects" element={<Projetos />} />
<Route path="/en/projetos" element={<Projetos />} />

{/* Espanhol */}
<Route path="/es/proyectos" element={<Projetos />} />
<Route path="/es/projetos" element={<Projetos />} />

        {/* Página não encontrada */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;