import {
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useTranslation } from "react-i18next";

import logoRd from "../../assets/logos/logo-rd.png";
import siteConfig from "../../config/site";

import "./Navbar.css";

const languages = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

function Navbar() {
  const { t, i18n } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  const currentLanguage = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "pt"
  ).slice(0, 2);

  function removeLanguagePrefix(pathname) {
    const cleanPath = pathname
      .replace(/^\/en(?=\/|$)/, "")
      .replace(/^\/es(?=\/|$)/, "");

    return cleanPath || "/";
  }

  function getLocalizedPath(path) {
    const cleanPath = removeLanguagePrefix(path);

    if (currentLanguage === "en") {
      return cleanPath === "/" ? "/en" : `/en${cleanPath}`;
    }

    if (currentLanguage === "es") {
      return cleanPath === "/" ? "/es" : `/es${cleanPath}`;
    }

    return cleanPath;
  }

  async function handleLanguageChange(language) {
    await i18n.changeLanguage(language);

    localStorage.setItem("rd-language", language);

    document.documentElement.lang =
      language === "pt"
        ? "pt-BR"
        : language === "en"
          ? "en"
          : "es";

    const cleanPath = removeLanguagePrefix(location.pathname);

    let localizedPath = cleanPath;

    if (language === "en") {
      localizedPath =
        cleanPath === "/" ? "/en" : `/en${cleanPath}`;
    }

    if (language === "es") {
      localizedPath =
        cleanPath === "/" ? "/es" : `/es${cleanPath}`;
    }

    navigate(`${localizedPath}${location.search}${location.hash}`);
  }

  function getLinkClass({ isActive }) {
    return `navbar__link ${
      isActive ? "navbar__link--active" : ""
    }`;
  }

  return (
    <header className="navbar">
      <div className="container navbar__container">
        <NavLink
          to={getLocalizedPath("/")}
          end
          className="navbar__brand"
          aria-label={t("navbar.homeAria")}
        >
          <img
            src={logoRd}
            alt="Rodrigues Digital"
            className="navbar__logo"
          />
        </NavLink>

        <nav
          className="navbar__menu"
          aria-label={t("navbar.navigationAria")}
        >
          <NavLink
            to={getLocalizedPath("/")}
            end
            className={getLinkClass}
          >
            {t("navbar.home")}
          </NavLink>

          <NavLink
            to={getLocalizedPath("/sobre")}
            className={getLinkClass}
          >
            {t("navbar.about")}
          </NavLink>

          <NavLink
            to={getLocalizedPath("/solucoes")}
            className={getLinkClass}
          >
            {t("navbar.solutions")}
          </NavLink>

          <NavLink
            to={getLocalizedPath("/portfolio")}
            className={getLinkClass}
          >
            {t("navbar.projects")}
          </NavLink>

          <NavLink
            to={getLocalizedPath("/blog")}
            className={getLinkClass}
          >
            {t("navbar.blog")}
          </NavLink>

          <NavLink
            to={getLocalizedPath("/contato")}
            className={getLinkClass}
          >
            {t("navbar.contact")}
          </NavLink>
        </nav>

        <div className="navbar__actions">
          <div
            className="navbar__languages"
            aria-label={t("navbar.languageSelector")}
          >
            {languages.map((language, index) => {
              const isActive =
                currentLanguage === language.code;

              return (
                <div
                  key={language.code}
                  className="navbar__language-group"
                >
                  <button
                    type="button"
                    className={`navbar__language ${
                      isActive
                        ? "navbar__language--active"
                        : ""
                    }`}
                    onClick={() =>
                      handleLanguageChange(language.code)
                    }
                    aria-pressed={isActive}
                    aria-label={t(
                      `navbar.languages.${language.code}`,
                    )}
                  >
                    {language.label}
                  </button>

                  {index < languages.length - 1 && (
                    <span aria-hidden="true">/</span>
                  )}
                </div>
              );
            })}
          </div>

          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
          >
            {t("navbar.meeting")}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;