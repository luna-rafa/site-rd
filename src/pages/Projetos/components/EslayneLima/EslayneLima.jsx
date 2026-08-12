import {
  ArrowUpRight,
  Check,
  BriefcaseBusiness,
  Sparkles,
  Users,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import "./EslayneLima.css";

function EslayneLima() {
  const { t } = useTranslation();

  const features = [
    "landingPage",
    "responsive",
    "personalBrand",
    "positioning",
    "customIdentity",
    "presentationJourney",
  ];

  return (
    <section
      className="eslayne-case"
      aria-labelledby="eslayne-case-title"
    >
      <div className="eslayne-case__container">
        {/* CABEÇALHO */}
        <header className="eslayne-case__header">
          <span className="eslayne-case__eyebrow">
            {t("projectsPage.eslayne.case")}
          </span>

          <div className="eslayne-case__heading">
            <span className="eslayne-case__category">
              {t("projectsPage.eslayne.category")}
            </span>

            <h2 id="eslayne-case-title">
              Eslayne Lima
            </h2>

            <p>
              {t("projectsPage.eslayne.introduction")}
            </p>
          </div>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="eslayne-case__layout">
          {/* VISUAL */}
          <div className="eslayne-case__visual">
            <div
              className="eslayne-case__glow"
              aria-hidden="true"
            />

            <div className="eslayne-case__visual-top">
              <span className="eslayne-case__status">
                <span />
                {t("projectsPage.eslayne.status")}
              </span>

              <span className="eslayne-case__type">
                {t("projectsPage.eslayne.type")}
              </span>
            </div>

            <div className="eslayne-case__image-frame">
              <img
                src="/projects/eslayne-lima.png"
                alt={t("projectsPage.eslayne.imageAlt")}
                loading="lazy"
              />
            </div>

            <div className="eslayne-case__floating-card">
              <span>
                {t(
                  "projectsPage.eslayne.floating.label"
                )}
              </span>

              <strong>
                {t(
                  "projectsPage.eslayne.floating.title"
                )}
              </strong>

              <small>
                {t(
                  "projectsPage.eslayne.floating.description"
                )}
              </small>
            </div>

            <div
              className="eslayne-case__number"
              aria-hidden="true"
            >
              04
            </div>
          </div>

          {/* CONTEÚDO */}
          <div className="eslayne-case__content">
            {/* DESAFIO */}
            <div className="eslayne-case__block">
              <span className="eslayne-case__label">
                {t(
                  "projectsPage.eslayne.challenge.label"
                )}
              </span>

              <h3>
                {t(
                  "projectsPage.eslayne.challenge.title"
                )}
              </h3>

              <p>
                {t(
                  "projectsPage.eslayne.challenge.description"
                )}
              </p>
            </div>

            {/* SOLUÇÃO */}
            <div className="eslayne-case__block">
              <span className="eslayne-case__label">
                {t(
                  "projectsPage.eslayne.solution.label"
                )}
              </span>

              <h3>
                {t(
                  "projectsPage.eslayne.solution.title"
                )}
              </h3>

              <p>
                {t(
                  "projectsPage.eslayne.solution.description"
                )}
              </p>
            </div>

            {/* DESTAQUES */}
            <div className="eslayne-case__highlights">
              <div>
                <BriefcaseBusiness aria-hidden="true" />

                <span>
                  <strong>
                    {t(
                      "projectsPage.eslayne.highlights.businesswoman.title"
                    )}
                  </strong>

                  {t(
                    "projectsPage.eslayne.highlights.businesswoman.description"
                  )}
                </span>
              </div>

              <div>
                <Users aria-hidden="true" />

                <span>
                  <strong>
                    {t(
                      "projectsPage.eslayne.highlights.connection.title"
                    )}
                  </strong>

                  {t(
                    "projectsPage.eslayne.highlights.connection.description"
                  )}
                </span>
              </div>

              <div>
                <Sparkles aria-hidden="true" />

                <span>
                  <strong>
                    {t(
                      "projectsPage.eslayne.highlights.personalBrand.title"
                    )}
                  </strong>

                  {t(
                    "projectsPage.eslayne.highlights.personalBrand.description"
                  )}
                </span>
              </div>
            </div>

            {/* RECURSOS */}
            <div className="eslayne-case__features">
              {features.map((feature) => (
                <div key={feature}>
                  <Check aria-hidden="true" />

                  <span>
                    {t(
                      `projectsPage.eslayne.features.${feature}`
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* RESULTADO */}
            <div className="eslayne-case__result">
              <span className="eslayne-case__label">
                {t(
                  "projectsPage.eslayne.result.label"
                )}
              </span>

              <strong>
                {t(
                  "projectsPage.eslayne.result.title"
                )}
              </strong>

              <p>
                {t(
                  "projectsPage.eslayne.result.description"
                )}
              </p>
            </div>

            {/* BOTÃO */}
            <a
              href="https://eslayne-lima.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="eslayne-case__button"
              aria-label={t(
                "projectsPage.eslayne.buttonAria"
              )}
            >
              {t("projectsPage.eslayne.button")}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EslayneLima;