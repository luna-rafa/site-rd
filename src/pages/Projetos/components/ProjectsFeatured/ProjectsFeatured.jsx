import { ArrowUpRight, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

import "./ProjectsFeatured.css";

function ProjectsFeatured() {
  const { t } = useTranslation();

  const projects = [
    {
      id: "rodrigues-digital",
      number: "01",
      category: t("projects.featured.items.rodrigues.category"),
      title: t("projects.featured.items.rodrigues.title"),
      description: t("projects.featured.items.rodrigues.description"),
      image: "/projects/rodrigues-digital.png",
      imageAlt: t("projects.featured.items.rodrigues.imageAlt"),
      link: "https://rodriguesdigital.tec.br/",
      tags: [
        t("projects.featured.tags.institutional"),
        t("projects.featured.tags.multilingual"),
        t("projects.featured.tags.responsive"),
      ],
    },
    {
      id: "marcela-braga",
      number: "02",
      category: t("projects.featured.items.marcela.category"),
      title: t("projects.featured.items.marcela.title"),
      description: t("projects.featured.items.marcela.description"),
      image: "/projects/marcela-braga.png",
      imageAlt: t("projects.featured.items.marcela.imageAlt"),
      link: "#",
      tags: [
        t("projects.featured.tags.landingPage"),
        t("projects.featured.tags.positioning"),
        t("projects.featured.tags.personalBrand"),
      ],
    },
    {
      id: "nr1-empresas",
      number: "03",
      category: t("projects.featured.items.nr1.category"),
      title: t("projects.featured.items.nr1.title"),
      description: t("projects.featured.items.nr1.description"),
      image: "/projects/nr1-empresas.png",
      imageAlt: t("projects.featured.items.nr1.imageAlt"),
      link: "#",
      tags: [
        t("projects.featured.tags.landingPage"),
        t("projects.featured.tags.strategy"),
        t("projects.featured.tags.conversion"),
      ],
    },
  ];

  return (
    <section
      id="projects-gallery"
      className="projects-featured"
      aria-labelledby="projects-featured-title"
    >
      <div className="projects-featured__container">
        <header className="projects-featured__header">
          <span className="projects-featured__eyebrow">
            {t("projects.featured.eyebrow")}
          </span>

          <h2
            id="projects-featured-title"
            className="projects-featured__title"
          >
            {t("projects.featured.titlePrefix")}{" "}
            <span>{t("projects.featured.titleHighlight")}</span>
          </h2>

          <p className="projects-featured__description">
            {t("projects.featured.description")}
          </p>
        </header>

        <div className="projects-featured__list">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`projects-featured__project ${
                index % 2 !== 0
                  ? "projects-featured__project--reverse"
                  : ""
              }`}
            >
              <div className="projects-featured__content">
                <div className="projects-featured__meta">
                  <span className="projects-featured__number">
                    {project.number}
                  </span>

                  <span className="projects-featured__category">
                    {project.category}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <ul className="projects-featured__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Check aria-hidden="true" />
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  className="projects-featured__link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${t(
                    "projects.featured.accessProject"
                  )} ${project.title}`}
                >
                  {t("projects.featured.button")}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </div>

              <div className="projects-featured__visual">
                <div className="projects-featured__image-frame">
                  <div className="projects-featured__browser-bar">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="projects-featured__image">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                    />
                  </div>
                </div>

                <span className="projects-featured__decorative-glow" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsFeatured;