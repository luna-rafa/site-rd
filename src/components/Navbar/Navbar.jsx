import { NavLink } from "react-router-dom";
import logoRd from "../../assets/logos/logo-rd.png";
import siteConfig from "../../config/site";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__container">
        {/* Logo */}
        <NavLink
          to="/"
          className="navbar__brand"
          aria-label="Ir para a página inicial"
        >
          <img
            src={logoRd}
            alt="Rodrigues Digital"
            className="navbar__logo"
          />
        </NavLink>

        {/* Menu */}
        <nav className="navbar__menu" aria-label="Navegação principal">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navbar__link ${isActive ? "navbar__link--active" : ""}`
            }
          >
            Início
          </NavLink>

          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `navbar__link ${isActive ? "navbar__link--active" : ""}`
            }
          >
            Sobre
          </NavLink>

          <NavLink
            to="/solucoes"
            className={({ isActive }) =>
              `navbar__link ${isActive ? "navbar__link--active" : ""}`
            }
          >
            Soluções
          </NavLink>

          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `navbar__link ${isActive ? "navbar__link--active" : ""}`
            }
          >
            Projetos
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `navbar__link ${isActive ? "navbar__link--active" : ""}`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/contato"
            className={({ isActive }) =>
              `navbar__link ${isActive ? "navbar__link--active" : ""}`
            }
          >
            Contato
          </NavLink>
        </nav>

        {/* Ações */}
        <div className="navbar__actions">
          <div className="navbar__languages">
            <button
              type="button"
              className="navbar__language navbar__language--active"
            >
              PT
            </button>

            <span>/</span>

            <button type="button" className="navbar__language">
              EN
            </button>

            <span>/</span>

            <button type="button" className="navbar__language">
              ES
            </button>
          </div>

          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
          >
            Solicitar reunião
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;