import {
  ArrowRight,
  Check,
  MessageCircle,
} from "lucide-react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./ProjectsCTA.css";

function ProjectsCTA() {
  const { t, i18n } = useTranslation();

  const benefits = [
    "strategy",
    "identity",
    "responsive",
  ];

  const getSolutionsPath = () => {
    const language = i18n.language;

    if (language === "en") {
      return "/en#solucoes";
    }

    if (language === "es") {
      return "/es#solucoes";
    }

    return "/#solucoes";
  };

  return (
    <section
      className="projects-cta"
      aria-labelledby="projects-cta-title"
    >
      <div
        className="projects-cta__glow projects-cta__glow--one"
        aria-hidden="true"
      />

      <div
        className="projects-cta__glow projects-cta__glow--two"
        aria-hidden="true"
      />

      <div
        className="projects-cta__circle projects-cta__circle--one"
        aria-hidden="true"
      />

      <div
        className="projects-cta__circle projects-cta__circle--two"
        aria-hidden="true"
      />

      <div className="projects-cta__container">
        {/* ==========================================
            CONTEÚDO PRINCIPAL
        ========================================== */}
        <div className="projects-cta__content">
          <span className="projects-cta__eyebrow">
            <span />

            {t("projectsPage.cta.eyebrow")}
          </span>

          <h2 id="projects-cta-title">
            {t("projectsPage.cta.title.first")}

            <span>
              {" "}
              {t("projectsPage.cta.title.highlight")}
            </span>
          </h2>

          <p className="projects-cta__description">
            {t("projectsPage.cta.description")}
          </p>

          <div className="projects-cta__benefits">
            {benefits.map((benefit) => (
              <div key={benefit}>
                <Check aria-hidden="true" />

                <span>
                  {t(
                    `projectsPage.cta.benefits.${benefit}`
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="projects-cta__actions">
            <a
              href="https://wa.me/5527995749915"
              target="_blank"
              rel="noopener noreferrer"
              className="projects-cta__button projects-cta__button--primary"
              aria-label={t(
                "projectsPage.cta.buttons.meetingAria"
              )}
            >
              <MessageCircle aria-hidden="true" />

              {t("projectsPage.cta.buttons.meeting")}

              <ArrowRight aria-hidden="true" />
            </a>

            <Link
              to={getSolutionsPath()}
              className="projects-cta__button projects-cta__button--secondary"
            >
              {t("projectsPage.cta.buttons.solutions")}

              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* ==========================================
            PAINEL LATERAL
        ========================================== */}
        <aside
          className="projects-cta__panel"
          aria-label={t(
            "projectsPage.cta.panel.aria"
          )}
        >
          <div className="projects-cta__panel-top">
            <span>
              Rodrigues Digital
            </span>

            <span className="projects-cta__panel-status">
              <i />

              {t(
                "projectsPage.cta.panel.status"
              )}
            </span>
          </div>

          <div className="projects-cta__panel-main">
            <span className="projects-cta__number">
              05
            </span>

            <div>
              <strong>
                {t(
                  "projectsPage.cta.panel.selected"
                )}
              </strong>

              <p>
                {t(
                  "projectsPage.cta.panel.description"
                )}
              </p>
            </div>
          </div>

          <div className="projects-cta__panel-divider" />

          <div className="projects-cta__pillars">
            <div>
              <span>01</span>

              <strong>
                {t(
                  "projectsPage.cta.panel.pillars.strategy"
                )}
              </strong>
            </div>

            <div>
              <span>02</span>

              <strong>
                {t(
                  "projectsPage.cta.panel.pillars.design"
                )}
              </strong>
            </div>

            <div>
              <span>03</span>

              <strong>
                {t(
                  "projectsPage.cta.panel.pillars.technology"
                )}
              </strong>
            </div>
          </div>

          <div className="projects-cta__panel-footer">
            <span>
              {t(
                "projectsPage.cta.panel.footer"
              )}
            </span>

            <ArrowRight aria-hidden="true" />
          </div>
        </aside>
      </div>
    </section>
  );
}

export default ProjectsCTA;