import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  FaArrowRight,
  FaCheck,
  FaExternalLinkAlt,
  FaLayerGroup,
  FaUserTie,
} from "react-icons/fa";

import marcelaBragaImage from "../../assets/images/portfolio/marcela-braga.png";
import rafaelaPortfolioImage from "../../assets/images/portfolio/rafaela-portfolio.png";

import "./Portfolio.css";

function Portfolio() {
  const { t } = useTranslation();

  const projects = [
    {
      number: "01",
      category: t("portfolio.projects.marcela.category"),
      title: t("portfolio.projects.marcela.title"),
      description: t("portfolio.projects.marcela.description"),
      image: marcelaBragaImage,
      imageAlt: t("portfolio.projects.marcela.imageAlt"),
      icon: <FaLayerGroup />,
      tags: [
        t("portfolio.tags.react"),
        t("portfolio.tags.responsive"),
        t("portfolio.tags.strategy"),
        t("portfolio.tags.positioning"),
      ],
      url: "https://braga-marcela.com.br/",
      theme: "portfolio__showcase--marcela",
    },
    {
      number: "02",
      category: t("portfolio.projects.rafaela.category"),
      title: t("portfolio.projects.rafaela.title"),
      description: t("portfolio.projects.rafaela.description"),
      image: rafaelaPortfolioImage,
      imageAlt: t("portfolio.projects.rafaela.imageAlt"),
      icon: <FaUserTie />,
      tags: [
        t("portfolio.tags.react"),
        t("portfolio.tags.personalBrand"),
        t("portfolio.tags.technology"),
        t("portfolio.tags.responsive"),
      ],
      url: "https://rafaelarodrigues.vercel.app/",
      theme: "portfolio__showcase--rafaela",
    },
  ];

  return (
    <section className="portfolio">
      <div
        className="portfolio__glow portfolio__glow--left"
        aria-hidden="true"
      />

      <div
        className="portfolio__glow portfolio__glow--right"
        aria-hidden="true"
      />

      <div className="container portfolio__container">
        <div className="portfolio__header">
          <div className="portfolio__heading">
            <span className="portfolio__eyebrow">
              {t("portfolio.eyebrow")}
            </span>

            <h2 className="portfolio__title">
              {t("portfolio.title.first")}{" "}
              <span>{t("portfolio.title.highlight")}</span>
            </h2>
          </div>

          <div className="portfolio__introduction">
            <p>{t("portfolio.introduction.first")}</p>

            <p>{t("portfolio.introduction.second")}</p>
          </div>
        </div>

        <div className="portfolio__projects">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className={`portfolio__showcase ${project.theme} ${
                index % 2 !== 0 ? "portfolio__showcase--reverse" : ""
              }`}
            >
              <div className="portfolio__visual">
                <div
                  className="portfolio__visual-glow"
                  aria-hidden="true"
                />

                <span
                  className="portfolio__project-number"
                  aria-hidden="true"
                >
                  {project.number}
                </span>

                <div className="portfolio__browser">
                  <div className="portfolio__browser-top">
                    <div
                      className="portfolio__browser-dots"
                      aria-hidden="true"
                    >
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="portfolio__browser-address">
                      <span
                        className="portfolio__browser-lock"
                        aria-hidden="true"
                      >
                        <FaCheck />
                      </span>

                      <span>
                        {project.url.replace("https://", "")}
                      </span>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio__browser-open"
                      aria-label={t("portfolio.openProject", {
                        project: project.title,
                      })}
                    >
                      <FaExternalLinkAlt aria-hidden="true" />
                    </a>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio__image-link"
                    aria-label={t("portfolio.accessProject", {
                      project: project.title,
                    })}
                  >
                    <div className="portfolio__image-viewport">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="portfolio__image"
                      />
                    </div>

                    <span className="portfolio__image-overlay">
                      <span>{t("portfolio.access")}</span>

                      <FaExternalLinkAlt aria-hidden="true" />
                    </span>
                  </a>
                </div>

                <div className="portfolio__published-badge">
                  <span
                    className="portfolio__published-icon"
                    aria-hidden="true"
                  >
                    <FaCheck />
                  </span>

                  <div>
                    <strong>{t("portfolio.published")}</strong>

                    <span>{t("portfolio.available")}</span>
                  </div>
                </div>
              </div>

              <div className="portfolio__content">
                <div className="portfolio__category">
                  <span
                    className="portfolio__category-icon"
                    aria-hidden="true"
                  >
                    {project.icon}
                  </span>

                  <span>{project.category}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="portfolio__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="portfolio__actions">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio__access-button"
                    aria-label={t("portfolio.accessProject", {
                      project: project.title,
                    })}
                  >
                    <span>{t("portfolio.access")}</span>

                    <FaExternalLinkAlt aria-hidden="true" />
                  </a>

                  <span className="portfolio__live-status">
                    <span
                      className="portfolio__live-dot"
                      aria-hidden="true"
                    />

                    {t("portfolio.online")}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio__footer">
          <div className="portfolio__footer-text">
            <strong>{t("portfolio.footer.title")}</strong>

            <p>{t("portfolio.footer.description")}</p>
          </div>

          <Link
            to="/portfolio"
            className="portfolio__button"
          >
            {t("portfolio.footer.button")}

            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;