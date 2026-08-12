import {
  ArrowUpRight,
  Check,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import "./RodriguesDigital.css";

function RodriguesDigital() {
  const { t } = useTranslation();

  const features = [
    "website",
    "responsive",
    "multilingual",
    "seo",
    "scalable",
    "custom",
  ];

  return (
    <section
      id="projects-cases"
      className="project-case"
      aria-labelledby="project-case-title"
    >
      <div className="project-case__container">
        <header className="project-case__header">
          <span className="project-case__eyebrow">
            {t("projectsPage.rodrigues.case")}
          </span>

          <div className="project-case__header-content">
            <h2 id="project-case-title">
              Rodrigues Digital
            </h2>

            <p>
              {t("projectsPage.rodrigues.introduction")}
            </p>
          </div>
        </header>

        <div className="project-case__layout">
          <div className="project-case__content">
            <div className="project-case__block">
              <span className="project-case__label">
                {t(
                  "projectsPage.rodrigues.challenge.label"
                )}
              </span>

              <h3>
                {t(
                  "projectsPage.rodrigues.challenge.title"
                )}
              </h3>

              <p>
                {t(
                  "projectsPage.rodrigues.challenge.description"
                )}
              </p>
            </div>

            <div className="project-case__block">
              <span className="project-case__label">
                {t(
                  "projectsPage.rodrigues.solution.label"
                )}
              </span>

              <h3>
                {t(
                  "projectsPage.rodrigues.solution.title"
                )}
              </h3>

              <p>
                {t(
                  "projectsPage.rodrigues.solution.description"
                )}
              </p>
            </div>

            <div className="project-case__features">
              {features.map((feature) => (
                <div key={feature}>
                  <Check aria-hidden="true" />

                  <span>
                    {t(
                      `projectsPage.rodrigues.features.${feature}`
                    )}
                  </span>
                </div>
              ))}
            </div>

            <div className="project-case__result">
              <span className="project-case__label">
                {t(
                  "projectsPage.rodrigues.result.label"
                )}
              </span>

              <strong>
                {t(
                  "projectsPage.rodrigues.result.title"
                )}
              </strong>
            </div>

            <a
              href="https://rodriguesdigital.tec.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-case__button"
              aria-label={t(
                "projectsPage.rodrigues.buttonAria"
              )}
            >
              {t("projectsPage.rodrigues.button")}

              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="project-case__visual">
            <div
              className="project-case__glow"
              aria-hidden="true"
            />

            <div className="project-case__visual-tag">
              <span />

              {t("projectsPage.rodrigues.status")}
            </div>

            <div className="project-case__image-frame">
              <img
                src="/projects/rodrigues-digital.png"
                alt={t(
                  "projectsPage.rodrigues.imageAlt"
                )}
                loading="lazy"
              />
            </div>

            <div className="project-case__floating-card">
              <span>
                {t(
                  "projectsPage.rodrigues.floating.label"
                )}
              </span>

              <strong>
                {t(
                  "projectsPage.rodrigues.floating.title"
                )}
              </strong>

              <small>
                {t(
                  "projectsPage.rodrigues.floating.description"
                )}
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RodriguesDigital;