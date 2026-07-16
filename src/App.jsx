import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Blog from "./pages/Blog";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Home em português */}
        <Route path="/" element={<Home />} />

        {/* Home em inglês */}
        <Route path="/en" element={<Home />} />

        {/* Home em espanhol */}
        <Route path="/es" element={<Home />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/en/blog" element={<Blog />} />
        <Route path="/es/blog" element={<Blog />} />

        {/* Contato */}
        <Route path="/contato" element={<Contato />} />
        <Route path="/en/contato" element={<Contato />} />
        <Route path="/es/contato" element={<Contato />} />

        {/* Página não encontrada */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;