import {
  ArrowUpRight,
  Check,
  Mic2,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import "./LuezesVenturin.css";

function LuezesVenturin() {
  const { t } = useTranslation();

  const features = [
    "landingPage",
    "responsive",
    "personalBrand",
    "positioning",
    "presentationJourney",
    "customIdentity",
  ];

  return (
    <section
      className="luezes-case"
      aria-labelledby="luezes-case-title"
    >
      <div className="luezes-case__container">
        {/* CABEÇALHO */}
        <header className="luezes-case__header">
          <span className="luezes-case__eyebrow">
            {t("projectsPage.luezes.case")}
          </span>

          <div className="luezes-case__heading">
            <span className="luezes-case__category">
              {t("projectsPage.luezes.category")}
            </span>

            <h2 id="luezes-case-title">
              Luezes Venturin
            </h2>

            <p>
              {t("projectsPage.luezes.introduction")}
            </p>
          </div>
        </header>

        {/* LAYOUT */}
        <div className="luezes-case__layout">
          {/* CONTEÚDO */}
          <div className="luezes-case__content">
            <div className="luezes-case__block">
              <span className="luezes-case__label">
                {t(
                  "projectsPage.luezes.challenge.label"
                )}
              </span>

              <h3>
                {t(
                  "projectsPage.luezes.challenge.title"
                )}
              </h3>

              <p>
                {t(
                  "projectsPage.luezes.challenge.description"
                )}
              </p>
            </div>

            <div className="luezes-case__block">
              <span className="luezes-case__label">
                {t(
                  "projectsPage.luezes.solution.label"
                )}
              </span>

              <h3>
                {t(
                  "projectsPage.luezes.solution.title"
                )}
              </h3>

              <p>
                {t(
                  "projectsPage.luezes.solution.description"
                )}
              </p>
            </div>

            {/* PILARES */}
            <div className="luezes-case__pillars">
              <div>
                <Mic2 aria-hidden="true" />

                <span>
                  <strong>
                    {t(
                      "projectsPage.luezes.pillars.communication.title"
                    )}
                  </strong>

                  {t(
                    "projectsPage.luezes.pillars.communication.description"
                  )}
                </span>
              </div>

              <div>
                <Sparkles aria-hidden="true" />

                <span>
                  <strong>
                    {t(
                      "projectsPage.luezes.pillars.personalBrand.title"
                    )}
                  </strong>

                  {t(
                    "projectsPage.luezes.pillars.personalBrand.description"
                  )}
                </span>
              </div>

              <div>
                <UsersRound aria-hidden="true" />

                <span>
                  <strong>
                    {t(
                      "projectsPage.luezes.pillars.connection.title"
                    )}
                  </strong>

                  {t(
                    "projectsPage.luezes.pillars.connection.description"
                  )}
                </span>
              </div>
            </div>

            {/* RECURSOS */}
            <div className="luezes-case__features">
              {features.map((feature) => (
                <div key={feature}>
                  <Check aria-hidden="true" />

                  <span>
                    {t(
                      `projectsPage.luezes.features.${feature}`
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* RESULTADO */}
            <div className="luezes-case__result">
              <span className="luezes-case__label">
                {t(
                  "projectsPage.luezes.result.label"
                )}
              </span>

              <strong>
                {t(
                  "projectsPage.luezes.result.title"
                )}
              </strong>

              <p>
                {t(
                  "projectsPage.luezes.result.description"
                )}
              </p>
            </div>

            {/* BOTÃO */}
            <a
              href="https://luezes-venturin.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="luezes-case__button"
              aria-label={t(
                "projectsPage.luezes.buttonAria"
              )}
            >
              {t("projectsPage.luezes.button")}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          {/* VISUAL */}
          <div className="luezes-case__visual">
            <div
              className="luezes-case__glow"
              aria-hidden="true"
            />

            <div
              className="luezes-case__orbit luezes-case__orbit--one"
              aria-hidden="true"
            />

            <div
              className="luezes-case__orbit luezes-case__orbit--two"
              aria-hidden="true"
            />

            <div className="luezes-case__visual-top">
              <span className="luezes-case__status">
                <span />

                {t("projectsPage.luezes.status")}
              </span>

              <span className="luezes-case__type">
                {t("projectsPage.luezes.type")}
              </span>
            </div>

            <div className="luezes-case__image-frame">
              <img
                src="/projects/luezes-venturin.png"
                alt={t("projectsPage.luezes.imageAlt")}
                loading="lazy"
              />
            </div>

            <div className="luezes-case__floating-card">
              <span>
                {t(
                  "projectsPage.luezes.floating.label"
                )}
              </span>

              <strong>
                {t(
                  "projectsPage.luezes.floating.title"
                )}
              </strong>

              <small>
                {t(
                  "projectsPage.luezes.floating.description"
                )}
              </small>
            </div>

            <span
              className="luezes-case__decorative-number"
              aria-hidden="true"
            >
              05
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LuezesVenturin;