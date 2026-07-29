import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./ProjectsHero.css";

function ProjectsHero() {
  const { t, i18n } = useTranslation();

  const getContactPath = () => {
    if (i18n.language.startsWith("en")) {
      return "/en/contact";
    }

    if (i18n.language.startsWith("es")) {
      return "/es/contacto";
    }

    return "/contato";
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-gallery");

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="projects-hero">
      <div className="projects-hero__background" aria-hidden="true">
        <span className="projects-hero__glow projects-hero__glow--one" />
        <span className="projects-hero__glow projects-hero__glow--two" />
        <span className="projects-hero__grid" />
      </div>

      <div className="projects-hero__container">
        <div className="projects-hero__content">
          <div className="projects-hero__badge">
            <span className="projects-hero__badge-dot" />

            <span>{t("projects.hero.badge")}</span>
          </div>

          <h1 className="projects-hero__title">
            {t("projects.hero.titleStart")}

            <span className="projects-hero__title-highlight">
              {t("projects.hero.titleHighlight")}
            </span>
          </h1>

          <p className="projects-hero__description">
            {t("projects.hero.description")}
          </p>

          <div className="projects-hero__actions">
            <button
              type="button"
              className="projects-hero__button projects-hero__button--primary"
              onClick={scrollToProjects}
            >
              <span>{t("projects.hero.primaryButton")}</span>

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="projects-hero__button-icon"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <Link
              to={getContactPath()}
              className="projects-hero__button projects-hero__button--secondary"
            >
              {t("projects.hero.secondaryButton")}
            </Link>
          </div>

          <div className="projects-hero__details">
            <div className="projects-hero__detail">
              <strong>{t("projects.hero.detailOneValue")}</strong>
              <span>{t("projects.hero.detailOneLabel")}</span>
            </div>

            <span className="projects-hero__detail-divider" />

            <div className="projects-hero__detail">
              <strong>{t("projects.hero.detailTwoValue")}</strong>
              <span>{t("projects.hero.detailTwoLabel")}</span>
            </div>

            <span className="projects-hero__detail-divider" />

            <div className="projects-hero__detail">
              <strong>{t("projects.hero.detailThreeValue")}</strong>
              <span>{t("projects.hero.detailThreeLabel")}</span>
            </div>
          </div>
        </div>

        <div className="projects-hero__visual" aria-label={t("projects.hero.visualLabel")}>
          <div className="projects-hero__visual-glow" />

          <div className="projects-hero__browser">
            <div className="projects-hero__browser-top">
              <div className="projects-hero__browser-controls">
                <span />
                <span />
                <span />
              </div>

              <div className="projects-hero__browser-address">
                rodriguesdigital.tec.br
              </div>
            </div>

            <div className="projects-hero__browser-screen">
              <img
                src="/projects/rodrigues-digital.png"
                alt={t("projects.hero.mainImageAlt")}
              />
            </div>

            <span className="projects-hero__browser-shadow" />
          </div>

          <div className="projects-hero__mobile projects-hero__mobile--left">
            <div className="projects-hero__mobile-speaker" />

            <div className="projects-hero__mobile-screen">
              <img
                src="/projects/marcela-braga.png"
                alt={t("projects.hero.secondaryImageAlt")}
              />
            </div>
          </div>

          <div className="projects-hero__mobile projects-hero__mobile--right">
            <div className="projects-hero__mobile-speaker" />

            <div className="projects-hero__mobile-screen">
              <img
                src="/projects/nr1-empresas.png"
                alt={t("projects.hero.tertiaryImageAlt")}
              />
            </div>
          </div>

          <div className="projects-hero__floating-card">
            <span className="projects-hero__floating-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12.5 9.5 17 19 7.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <div>
              <strong>{t("projects.hero.floatingTitle")}</strong>
              <span>{t("projects.hero.floatingText")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsHero;