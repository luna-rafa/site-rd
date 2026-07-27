import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: t("footer.navigation.home"), to: "/" },
    { label: t("footer.navigation.about"), to: "/sobre" },
    { label: t("footer.navigation.solutions"), to: "/solucoes" },
    { label: t("footer.navigation.projects"), to: "/portfolio" },
    { label: t("footer.navigation.blog"), to: "/blog" },
    { label: t("footer.navigation.contact"), to: "/contato" },
  ];

  const solutionLinks = [
    t("footer.solutions.website"),
    t("footer.solutions.landing"),
    t("footer.solutions.portfolio"),
    t("footer.solutions.mediaKit"),
    t("footer.solutions.seo"),
    t("footer.solutions.maintenance"),
  ];

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
              aria-label={t("footer.homeAria")}
            >
              <img
                src={logoFooter}
                alt="Rodrigues Digital"
                className="footer__logo"
              />
            </Link>

            <p className="footer__description">
              {t("footer.description")}
            </p>

            <span className="footer__location-label">
              ES • Brasil
            </span>

            <div className="footer__social">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.whatsappAria")}
              >
                <FaWhatsapp />
              </a>

              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.instagramAria")}
              >
                <FaInstagram />
              </a>

              <a
                href={siteConfig.emailLink}
                aria-label={t("footer.emailAria")}
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h2>{t("footer.navigation.title")}</h2>

            <nav className="footer__links">
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
            <h2>{t("footer.solutions.title")}</h2>

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
            <h2>{t("footer.contact.title")}</h2>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__contact-item"
            >
              <span className="footer__contact-icon">
                <FaWhatsapp />
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
                <FaEnvelope />
              </span>

              <span>
                <strong>{t("footer.contact.email")}</strong>
                <small>{siteConfig.email}</small>
              </span>
            </a>

            <div className="footer__contact-item">
              <span className="footer__contact-icon">
                <FaLocationDot />
              </span>

              <span>
                <strong>{t("footer.contact.service")}</strong>
                <small>{siteConfig.location}</small>
              </span>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p>
            © {currentYear} Rodrigues Digital. {t("footer.rights")}
          </p>

          <div className="footer__legal">
            <Link to="/politica-de-privacidade">
              {t("footer.privacy")}
            </Link>

            <span>•</span>

            <button
              type="button"
              className="footer__top-button"
              onClick={scrollToTop}
            >
              {t("footer.backTop")}
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;