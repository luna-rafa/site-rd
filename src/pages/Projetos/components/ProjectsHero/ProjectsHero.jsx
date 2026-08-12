<<<<<<< HEAD
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
=======
import {
  ArrowDown,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";
>>>>>>> 73b80bd (feat: adiciona pagina de projetos multilíngue e melhorias de SEO)

import "./ProjectsHero.css";

function ProjectsHero() {
<<<<<<< HEAD
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
=======
  const { t } = useTranslation();

  const projects = [
    {
      id: "rodrigues",
      name: "Rodrigues Digital",
      type: t("projectsPage.hero.projects.rodrigues.type"),
      image: "/projects/rodrigues-digital.png",
      modifier: "main",
    },
    {
      id: "marcela",
      name: "Marcela Braga",
      type: t("projectsPage.hero.projects.marcela.type"),
      image: "/projects/marcela-braga.png",
      modifier: "marcela",
    },
    {
      id: "luezes",
      name: "Luezes Venturin",
      type: t("projectsPage.hero.projects.luezes.type"),
      image: "/projects/luezes-venturin.png",
      modifier: "luezes",
    },
    {
      id: "jaqueline",
      name: "Jaqueline Leal",
      type: t("projectsPage.hero.projects.jaqueline.type"),
      image: "/projects/jaqueline-leal.png",
      modifier: "jaqueline",
    },
    {
      id: "eslayne",
      name: "Eslayne Lima",
      type: t("projectsPage.hero.projects.eslayne.type"),
      image: "/projects/eslayne-lima.png",
      modifier: "eslayne",
    },
  ];

  const scrollToProjects = () => {
    document
      .getElementById("projects-cases")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      className="projects-new-hero"
      aria-labelledby="projects-hero-title"
    >
      <div
        className="projects-new-hero__ambient"
        aria-hidden="true"
      >
        <span className="projects-new-hero__grid" />

        <span className="projects-new-hero__glow projects-new-hero__glow--blue" />

        <span className="projects-new-hero__glow projects-new-hero__glow--gold" />

        <span className="projects-new-hero__orb projects-new-hero__orb--one" />

        <span className="projects-new-hero__orb projects-new-hero__orb--two" />
      </div>

      <div className="projects-new-hero__container">
        {/* =================================================
            CONTEÚDO
        ================================================= */}

        <div className="projects-new-hero__content">
          <div className="projects-new-hero__eyebrow">
            <span
              className="projects-new-hero__eyebrow-dot"
              aria-hidden="true"
            />

            {t("projectsPage.hero.eyebrow")}
          </div>

          <h1
            id="projects-hero-title"
            className="projects-new-hero__title"
          >
            {t("projectsPage.hero.title.first")}

            <span>
              {t("projectsPage.hero.title.highlight")}
            </span>
          </h1>

          <p className="projects-new-hero__description">
            {t("projectsPage.hero.description")}
          </p>

          <div className="projects-new-hero__actions">
            <button
              type="button"
              className="projects-new-hero__button projects-new-hero__button--primary"
              onClick={scrollToProjects}
            >
              {t("projectsPage.hero.buttons.projects")}

              <ArrowRight aria-hidden="true" />
            </button>

            <a
              href="https://wa.me/5527995749915"
              target="_blank"
              rel="noopener noreferrer"
              className="projects-new-hero__button projects-new-hero__button--secondary"
              aria-label={t(
                "projectsPage.hero.buttons.meetingAria"
              )}
            >
              <MessageCircle aria-hidden="true" />

              {t("projectsPage.hero.buttons.meeting")}
            </a>
          </div>

          <div className="projects-new-hero__pillars">
            <div>
              <span>01</span>

              <strong>
                {t(
                  "projectsPage.hero.pillars.strategy"
                )}
              </strong>
            </div>

            <div>
              <span>02</span>

              <strong>
                {t(
                  "projectsPage.hero.pillars.design"
                )}
              </strong>
            </div>

            <div>
              <span>03</span>

              <strong>
                {t(
                  "projectsPage.hero.pillars.technology"
                )}
              </strong>
>>>>>>> 73b80bd (feat: adiciona pagina de projetos multilíngue e melhorias de SEO)
            </div>
          </div>
        </div>

<<<<<<< HEAD
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
=======
        {/* =================================================
            COMPOSIÇÃO VISUAL
        ================================================= */}

        <div
          className="projects-new-hero__visual"
          aria-label={t(
            "projectsPage.hero.visualAria"
          )}
        >
          <div
            className="projects-new-hero__visual-glow"
            aria-hidden="true"
          />

          <div
            className="projects-new-hero__visual-ring projects-new-hero__visual-ring--one"
            aria-hidden="true"
          />

          <div
            className="projects-new-hero__visual-ring projects-new-hero__visual-ring--two"
            aria-hidden="true"
          />

          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`projects-new-hero__project-card projects-new-hero__project-card--${project.modifier}`}
              style={{
                "--project-index": index,
              }}
            >
              <div className="projects-new-hero__project-image">
                <img
                  src={project.image}
                  alt={`${project.name} — ${project.type}`}
                  loading={
                    project.modifier === "main"
                      ? "eager"
                      : "lazy"
                  }
                />

                <span
                  className="projects-new-hero__image-shine"
                  aria-hidden="true"
                />
              </div>

              <div className="projects-new-hero__project-info">
                <div>
                  <strong>
                    {project.name}
                  </strong>

                  <span>
                    {project.type}
                  </span>
                </div>

                <ArrowRight aria-hidden="true" />
              </div>
            </article>
          ))}

          <div className="projects-new-hero__counter">
            <span className="projects-new-hero__counter-number">
              5
            </span>

            <div>
              <strong>
                {t(
                  "projectsPage.hero.counter.title"
                )}
              </strong>

              <span>
                {t(
                  "projectsPage.hero.counter.text"
                )}
              </span>
            </div>
          </div>

          <div
            className="projects-new-hero__floating-tag"
            aria-hidden="true"
          >
            <span />

            {t(
              "projectsPage.hero.floatingTag"
            )}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="projects-new-hero__scroll"
        onClick={scrollToProjects}
        aria-label={t(
          "projectsPage.hero.scrollAria"
        )}
      >
        <span>
          {t("projectsPage.hero.scroll")}
        </span>

        <ArrowDown aria-hidden="true" />
      </button>
>>>>>>> 73b80bd (feat: adiciona pagina de projetos multilíngue e melhorias de SEO)
    </section>
  );
}

export default ProjectsHero;