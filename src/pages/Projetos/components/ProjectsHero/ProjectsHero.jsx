import {
  ArrowDown,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import "./ProjectsHero.css";

function ProjectsHero() {
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
                {t("projectsPage.hero.pillars.strategy")}
              </strong>
            </div>

            <div>
              <span>02</span>

              <strong>
                {t("projectsPage.hero.pillars.design")}
              </strong>
            </div>

            <div>
              <span>03</span>

              <strong>
                {t("projectsPage.hero.pillars.technology")}
              </strong>
            </div>
          </div>
        </div>

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
    </section>
  );
}

export default ProjectsHero;