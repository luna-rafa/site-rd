import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <h1>Página não encontrada</h1>

      <p>A página que você tentou acessar não existe.</p>

      <Link to="/">Voltar para o início</Link>
    </main>
  );
}

export default NotFound;