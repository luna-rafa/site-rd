import { Link, NavLink } from "react-router-dom";
import {
  FaArrowUp,
  FaEnvelope,
  FaInstagram,
  FaLocationDot,
  FaWhatsapp,
} from "react-icons/fa6";

import logoFooter from "../../assets/logos/logo-footer.png";
import siteConfig from "../../config/site";

import "./Footer.css";

const navigationLinks = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Soluções", to: "/solucoes" },
  { label: "Projetos", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contato", to: "/contato" },
];

const solutionLinks = [
  "Site Institucional",
  "Landing Page",
  "Portfólio Profissional",
  "Mídia Kit",
  "SEO Inicial",
  "Manutenção de Sites",
];

function Footer() {
  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <Link
              to="/"
              className="footer__logo-link"
              aria-label="Ir para a página inicial"
            >
              <img
                src={logoFooter}
                alt="Rodrigues Digital"
                className="footer__logo"
              />
            </Link>

            <p className="footer__description">
              Transformando ideias em presenças digitais profissionais.
            </p>

            <span className="footer__location-label">
              ES • Brasil
            </span>

            <div className="footer__social">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a Rodrigues Digital pelo WhatsApp"
              >
                <FaWhatsapp aria-hidden="true" />
              </a>

              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Acessar o Instagram da Rodrigues Digital"
              >
                <FaInstagram aria-hidden="true" />
              </a>

              <a
                href={siteConfig.emailLink}
                aria-label="Enviar e-mail para a Rodrigues Digital"
              >
                <FaEnvelope aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h2>Navegação</h2>

            <nav
              className="footer__links"
              aria-label="Navegação do rodapé"
            >
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="footer__column">
            <h2>Soluções</h2>

            <div className="footer__links">
              {solutionLinks.map((solution) => (
                <Link
                  key={solution}
                  to="/solucoes"
                >
                  {solution}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer__column footer__column--contact">
            <h2>Contato</h2>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-item"
            >
              <span className="footer__contact-icon">
                <FaWhatsapp aria-hidden="true" />
              </span>

              <span>
                <strong>WhatsApp</strong>
                <small>(27) 99574-9915</small>
              </span>
            </a>

            <a
              href={siteConfig.emailLink}
              className="footer__contact-item"
            >
              <span className="footer__contact-icon">
                <FaEnvelope aria-hidden="true" />
              </span>

              <span>
                <strong>E-mail</strong>
                <small>{siteConfig.email}</small>
              </span>
            </a>

            <div className="footer__contact-item">
              <span className="footer__contact-icon">
                <FaLocationDot aria-hidden="true" />
              </span>

              <span>
                <strong>Atendimento</strong>
                <small>{siteConfig.location}</small>
              </span>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p>
            © {currentYear} Rodrigues Digital. Todos os direitos reservados.
          </p>

          <div className="footer__legal">
            <Link to="/politica-de-privacidade">
              Política de privacidade
            </Link>

            <span aria-hidden="true">•</span>

            <button
              type="button"
              className="footer__top-button"
              onClick={scrollToTop}
            >
              Voltar ao topo
              <FaArrowUp aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;