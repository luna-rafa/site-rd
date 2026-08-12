import {
  ArrowUpRight,
  Check,
  Globe2,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import "./MarcelaBraga.css";

function MarcelaBraga() {
  const { t } = useTranslation();

  const features = [
    "professionalSite",
    "responsive",
    "positioning",
    "journey",
    "commercial",
    "customIdentity",
  ];

  return (
    <section
      className="marcela-case"
      aria-labelledby="marcela-case-title"
    >
      <div className="marcela-case__container">
        <header className="marcela-case__header">
          <span className="marcela-case__eyebrow">
            {t("projectsPage.marcela.case")}
          </span>

          <div>
            <span className="marcela-case__category">
              {t("projectsPage.marcela.category")}
            </span>

            <h2 id="marcela-case-title">
              Marcela Braga
            </h2>

            <p>
              {t("projectsPage.marcela.introduction")}
            </p>
          </div>
        </header>

        <div className="marcela-case__layout">
          {/* VISUAL */}
          <div className="marcela-case__visual">
            <div
              className="marcela-case__visual-glow"
              aria-hidden="true"
            />

            <span className="marcela-case__status">
              <span />
              {t("projectsPage.marcela.status")}
            </span>

            <div className="marcela-case__image-frame">
              <img
                src="/projects/marcela-braga.png"
                alt={t("projectsPage.marcela.imageAlt")}
                loading="lazy"
              />
            </div>

            <div className="marcela-case__floating-card">
              <Globe2 aria-hidden="true" />

              <div>
                <span>
                  {t(
                    "projectsPage.marcela.floating.label"
                  )}
                </span>

                <strong>
                  {t(
                    "projectsPage.marcela.floating.title"
                  )}
                </strong>
              </div>
            </div>
          </div>

          {/* CONTEÚDO */}
          <div className="marcela-case__content">
            <div className="marcela-case__section">
              <span className="marcela-case__label">
                {t(
                  "projectsPage.marcela.challenge.label"
                )}
              </span>

              <h3>
                {t(
                  "projectsPage.marcela.challenge.title"
                )}
              </h3>

              <p>
                {t(
                  "projectsPage.marcela.challenge.description"
                )}
              </p>
            </div>

            <div className="marcela-case__section">
              <span className="marcela-case__label">
                {t(
                  "projectsPage.marcela.solution.label"
                )}
              </span>

              <h3>
                {t(
                  "projectsPage.marcela.solution.title"
                )}
              </h3>

              <p>
                {t(
                  "projectsPage.marcela.solution.description"
                )}
              </p>
            </div>

            <div className="marcela-case__highlights">
              <div>
                <BriefcaseBusiness aria-hidden="true" />

                <span>
                  <strong>
                    {t(
                      "projectsPage.marcela.highlights.experience.value"
                    )}
                  </strong>

                  {t(
                    "projectsPage.marcela.highlights.experience.label"
                  )}
                </span>
              </div>

              <div>
                <Globe2 aria-hidden="true" />

                <span>
                  <strong>
                    {t(
                      "projectsPage.marcela.highlights.international.value"
                    )}
                  </strong>

                  {t(
                    "projectsPage.marcela.highlights.international.label"
                  )}
                </span>
              </div>

              <div>
                <TrendingUp aria-hidden="true" />

                <span>
                  <strong>
                    {t(
                      "projectsPage.marcela.highlights.business.value"
                    )}
                  </strong>

                  {t(
                    "projectsPage.marcela.highlights.business.label"
                  )}
                </span>
              </div>
            </div>

            <div className="marcela-case__features">
              {features.map((feature) => (
                <div key={feature}>
                  <Check aria-hidden="true" />

                  <span>
                    {t(
                      `projectsPage.marcela.features.${feature}`
                    )}
                  </span>
                </div>
              ))}
            </div>

            <div className="marcela-case__result">
              <span className="marcela-case__label">
                {t(
                  "projectsPage.marcela.result.label"
                )}
              </span>

              <strong>
                {t(
                  "projectsPage.marcela.result.title"
                )}
              </strong>

              <p>
                {t(
                  "projectsPage.marcela.result.description"
                )}
              </p>
            </div>

            <a
              href="https://braga-marcela.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="marcela-case__button"
              aria-label={t(
                "projectsPage.marcela.buttonAria"
              )}
            >
              {t("projectsPage.marcela.button")}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarcelaBraga;