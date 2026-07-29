import {
  ArrowUpRight,
  Check,
  ExternalLink,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useTranslation } from "react-i18next";

import "./ProjectSection.css";

function ProjectSection({
  project,
  reverse = false,
}) {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return undefined;
    }

    if (
      typeof IntersectionObserver === "undefined"
    ) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const projectClassName = [
    "project-section",
    reverse
      ? "project-section--reverse"
      : "",
    isVisible
      ? "project-section--visible"
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  const accessLabel = `${t(
    "projects.showcase.accessProject"
  )} ${project.title}`;

  const desktopMockup = (
    <div className="project-section__desktop">
      <div className="project-section__browser-bar">
        <div className="project-section__browser-controls">
          <span />
          <span />
          <span />
        </div>

        <span className="project-section__browser-address">
          {project.desktopAddress}
        </span>

        {project.link ? (
          <ExternalLink
            className="project-section__browser-icon"
            aria-hidden="true"
          />
        ) : (
          <span aria-hidden="true" />
        )}
      </div>

      <div className="project-section__desktop-screen">
        <img
          src={project.desktopImage}
          alt={project.imageAlt}
          loading="lazy"
        />
      </div>
    </div>
  );

  const mobileMockup = (
    <div className="project-section__mobile">
      <div
        className="project-section__mobile-speaker"
        aria-hidden="true"
      />

      <div className="project-section__mobile-screen">
        <img
          src={project.mobileImage}
          alt={project.mobileImageAlt}
          loading="lazy"
        />
      </div>

      <div
        className="project-section__mobile-home"
        aria-hidden="true"
      />
    </div>
  );

  return (
    <article
      ref={sectionRef}
      className={projectClassName}
    >
      <div className="project-section__content">
        <div className="project-section__meta">
          <span className="project-section__number">
            {project.number}
          </span>

          <span className="project-section__category">
            {project.category}
          </span>
        </div>

        {project.status && (
          <div className="project-section__status">
            <span
              className="project-section__status-indicator"
              aria-hidden="true"
            />

            <div>
              <strong>
                {project.status.label}
              </strong>

              <span>
                {project.status.text}
              </span>
            </div>
          </div>
        )}

        <h3 className="project-section__title">
          {project.title}
        </h3>

        <p className="project-section__description">
          {project.description}
        </p>

        <div className="project-section__technologies">
          {project.technologies.map(
            (technology) => (
              <span key={technology}>
                {technology}
              </span>
            )
          )}
        </div>

        <div className="project-section__result">
          <div
            className="project-section__result-icon"
            aria-hidden="true"
          >
            <Check />
          </div>

          <div className="project-section__result-content">
            <span className="project-section__result-label">
              {project.result.label}
            </span>

            <strong>
              {project.result.title}
            </strong>

            <p>
              {project.result.description}
            </p>
          </div>
        </div>

        {project.link ? (
          <a
            className="project-section__link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={accessLabel}
          >
            <span>
              {t("projects.showcase.button")}
            </span>

            <ArrowUpRight aria-hidden="true" />
          </a>
        ) : (
          <span className="project-section__link project-section__link--disabled">
            <span>
              {t("projects.showcase.buttonUnavailable")}
            </span>
          </span>
        )}
      </div>

      <div className="project-section__visual">
        <div
          className="project-section__visual-background"
          aria-hidden="true"
        />

        <span className="project-section__visual-label">
          {project.status?.text}
        </span>

        {project.link ? (
          <a
            className="project-section__desktop-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={accessLabel}
          >
            {desktopMockup}
          </a>
        ) : (
          <div className="project-section__desktop-link">
            {desktopMockup}
          </div>
        )}

        {project.link ? (
          <a
            className="project-section__mobile-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={accessLabel}
          >
            {mobileMockup}
          </a>
        ) : (
          <div className="project-section__mobile-link">
            {mobileMockup}
          </div>
        )}

        <div className="project-section__responsive-card">
          <span
            className="project-section__responsive-icon"
            aria-hidden="true"
          >
            <Check />
          </span>

          <div>
            <strong>
              {t(
                "projects.hero.floatingTitle"
              )}
            </strong>

            <span>
              {t(
                "projects.hero.floatingText"
              )}
            </span>
          </div>
        </div>

        <span
          className="project-section__visual-glow"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}

export default ProjectSection;