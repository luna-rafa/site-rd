import {
  ArrowUpRight,
  Check,
  HeartHandshake,
  Building2,
  UserRound,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import "./JaquelineLeal.css";

function JaquelineLeal() {
  const { t } = useTranslation();

  const features = [
    "landingPage",
    "responsive",
    "personalBrand",
    "visitorJourney",
    "services",
    "customIdentity",
  ];

  return (
    <section
      className="jaqueline-case"
      aria-labelledby="jaqueline-case-title"
    >
      <div className="jaqueline-case__container">
        {/* CABEÇALHO */}
        <header className="jaqueline-case__header">
          <span className="jaqueline-case__eyebrow">
            {t("projectsPage.jaqueline.case")}
          </span>

          <div className="jaqueline-case__heading">
            <span className="jaqueline-case__category">
              {t("projectsPage.jaqueline.category")}
            </span>

            <h2 id="jaqueline-case-title">
              Jaqueline Leal
            </h2>

            <p>
              {t("projectsPage.jaqueline.introduction")}
            </p>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="jaqueline-case__layout">
          {/* CONTEÚDO */}
          <div className="jaqueline-case__content">
            <div className="jaqueline-case__block">
              <span className="jaqueline-case__label">
                {t(
                  "projectsPage.jaqueline.challenge.label"
                )}
              </span>

              <h3>
                {t(
                  "projectsPage.jaqueline.challenge.title"
                )}
              </h3>

              <p>
                {t(
                  "projectsPage.jaqueline.challenge.description"
                )}
              </p>
            </div>

            <div className="jaqueline-case__block">
              <span className="jaqueline-case__label">
                {t(
                  "projectsPage.jaqueline.solution.label"
                )}
              </span>

              <h3>
                {t(
                  "projectsPage.jaqueline.solution.title"
                )}
              </h3>

              <p>
                {t(
                  "projectsPage.jaqueline.solution.description"
                )}
              </p>
            </div>

            {/* PILARES */}
            <div className="jaqueline-case__pillars">
              <div>
                <UserRound aria-hidden="true" />

                <span>
                  <strong>
                    {t(
                      "projectsPage.jaqueline.pillars.personalBrand.title"
                    )}
                  </strong>

                  {t(
                    "projectsPage.jaqueline.pillars.personalBrand.description"
                  )}
                </span>
              </div>

              <div>
                <HeartHandshake aria-hidden="true" />

                <span>
                  <strong>
                    {t(
                      "projectsPage.jaqueline.pillars.welcoming.title"
                    )}
                  </strong>

                  {t(
                    "projectsPage.jaqueline.pillars.welcoming.description"
                  )}
                </span>
              </div>

              <div>
                <Building2 aria-hidden="true" />

                <span>
                  <strong>
                    {t(
                      "projectsPage.jaqueline.pillars.companies.title"
                    )}
                  </strong>

                  {t(
                    "projectsPage.jaqueline.pillars.companies.description"
                  )}
                </span>
              </div>
            </div>

            {/* RECURSOS */}
            <div className="jaqueline-case__features">
              {features.map((feature) => (
                <div key={feature}>
                  <Check aria-hidden="true" />

                  <span>
                    {t(
                      `projectsPage.jaqueline.features.${feature}`
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* RESULTADO */}
            <div className="jaqueline-case__result">
              <span className="jaqueline-case__label">
                {t(
                  "projectsPage.jaqueline.result.label"
                )}
              </span>

              <strong>
                {t(
                  "projectsPage.jaqueline.result.title"
                )}
              </strong>

              <p>
                {t(
                  "projectsPage.jaqueline.result.description"
                )}
              </p>
            </div>

            <a
              href="https://site-jaqueline-leal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="jaqueline-case__button"
              aria-label={t(
                "projectsPage.jaqueline.buttonAria"
              )}
            >
              {t("projectsPage.jaqueline.button")}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          {/* VISUAL */}
          <div className="jaqueline-case__visual">
            <div
              className="jaqueline-case__glow"
              aria-hidden="true"
            />

            <div className="jaqueline-case__visual-header">
              <span className="jaqueline-case__status">
                <span />
                {t("projectsPage.jaqueline.status")}
              </span>

              <span className="jaqueline-case__type">
                {t("projectsPage.jaqueline.type")}
              </span>
            </div>

            <div className="jaqueline-case__image-frame">
              <img
                src="/projects/jaqueline-leal.png"
                alt={t(
                  "projectsPage.jaqueline.imageAlt"
                )}
                loading="lazy"
              />
            </div>

            <div className="jaqueline-case__floating-card">
              <span>
                {t(
                  "projectsPage.jaqueline.floating.label"
                )}
              </span>

              <strong>
                {t(
                  "projectsPage.jaqueline.floating.title"
                )}
              </strong>

              <small>
                {t(
                  "projectsPage.jaqueline.floating.description"
                )}
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JaquelineLeal;