import { useTranslation } from "react-i18next";

import ProjectSection from "./ProjectSection";
import "./ProjectsShowcase.css";

function ProjectsShowcase() {
  const { t } = useTranslation();

  const projects = [
    {
      id: "rodrigues-digital",
      number: "01",

      category: t(
        "projects.showcase.items.rodrigues.category"
      ),

      title: t(
        "projects.showcase.items.rodrigues.title"
      ),

      description: t(
        "projects.showcase.items.rodrigues.description"
      ),

      desktopImage:
        "/projects/rodrigues-digital-desktop.jpg",

      mobileImage:
        "/projects/rodrigues-digital-mobile.jpg",

      imageAlt: t(
        "projects.showcase.items.rodrigues.imageAlt"
      ),

      mobileImageAlt: t(
        "projects.showcase.items.rodrigues.mobileImageAlt"
      ),

      desktopAddress: "rodriguesdigital.tec.br",

      link: "https://rodriguesdigital.tec.br/",

      status: {
        label: t("projects.showcase.status.online"),
        text: t("projects.showcase.status.published"),
      },

      technologies: [
        "React",
        "Vite",
        "React Router",
        "i18next",
        "SEO",
        t("projects.showcase.technologies.responsive"),
      ],

      result: {
        label: t("projects.showcase.result.label"),

        title: t(
          "projects.showcase.items.rodrigues.resultTitle"
        ),

        description: t(
          "projects.showcase.items.rodrigues.resultDescription"
        ),
      },
    },

    {
      id: "marcela-braga",
      number: "02",

      category: t(
        "projects.showcase.items.marcela.category"
      ),

      title: t(
        "projects.showcase.items.marcela.title"
      ),

      description: t(
        "projects.showcase.items.marcela.description"
      ),

      desktopImage:
        "/projects/marcela-braga-desktop.jpg",

      mobileImage:
        "/projects/marcela-braga-mobile.jpg",

      imageAlt: t(
        "projects.showcase.items.marcela.imageAlt"
      ),

      mobileImageAlt: t(
        "projects.showcase.items.marcela.mobileImageAlt"
      ),

      desktopAddress: "marcela-braga",

      /*
        Quando o site estiver publicado, substitua null
        pelo endereço completo do projeto.
      */
      link: null,

      status: {
        label: t("projects.showcase.status.completed"),
        text: t("projects.showcase.status.portfolio"),
      },

      technologies: [
        "React",
        "Vite",
        t("projects.showcase.technologies.landingPage"),
        t("projects.showcase.technologies.positioning"),
        t("projects.showcase.technologies.multilingual"),
        t("projects.showcase.technologies.responsive"),
      ],

      result: {
        label: t("projects.showcase.result.label"),

        title: t(
          "projects.showcase.items.marcela.resultTitle"
        ),

        description: t(
          "projects.showcase.items.marcela.resultDescription"
        ),
      },
    },
  ];

  return (
    <section
      id="projects-gallery"
      className="projects-showcase"
      aria-labelledby="projects-showcase-title"
    >
      <div
        className="projects-showcase__background"
        aria-hidden="true"
      >
        <span className="projects-showcase__glow projects-showcase__glow--one" />
        <span className="projects-showcase__glow projects-showcase__glow--two" />
      </div>

      <div className="projects-showcase__container">
        <header className="projects-showcase__header">
          <span className="projects-showcase__eyebrow">
            <span aria-hidden="true" />
            {t("projects.showcase.eyebrow")}
          </span>

          <h2
            id="projects-showcase-title"
            className="projects-showcase__title"
          >
            {t("projects.showcase.titlePrefix")}{" "}
            <span>
              {t("projects.showcase.titleHighlight")}
            </span>
          </h2>

          <p className="projects-showcase__description">
            {t("projects.showcase.description")}
          </p>
        </header>

        <div className="projects-showcase__list">
          {projects.map((project, index) => (
            <ProjectSection
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsShowcase;