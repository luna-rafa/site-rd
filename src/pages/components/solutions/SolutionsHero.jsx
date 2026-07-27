import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import solutionsHeroImage from "../../../assets/images/solutions/solutions-hero.png";

import "./SolutionsHero.css";

function SolutionsHero() {
  const { t } = useTranslation();
  const location = useLocation();

  const getContactRoute = () => {
    if (location.pathname.startsWith("/en")) {
      return "/en/contact";
    }

    if (location.pathname.startsWith("/es")) {
      return "/es/contacto";
    }

    return "/contato";
  };

  return (
    <section className="solutions-hero">
      <div className="container solutions-hero__container">
        <div className="solutions-hero__content">
          <span className="solutions-hero__eyebrow">
            {t("solutions.hero.eyebrow")}
          </span>

          <h1 className="solutions-hero__title">
            {t("solutions.hero.title")}
          </h1>

          <p className="solutions-hero__description">
            {t("solutions.hero.description")}
          </p>

          <div className="solutions-hero__actions">
            <Link
              to={getContactRoute()}
              className="solutions-hero__button solutions-hero__button--primary"
            >
              {t("solutions.hero.cta")}

              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <a
              href="#introducao-solucoes"
              className="solutions-hero__button solutions-hero__button--secondary"
            >
              {t("solutions.hero.more")}

              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 5v14M6 13l6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="solutions-hero__note">
            <span aria-hidden="true" />

            <p>{t("solutions.hero.note")}</p>
          </div>
        </div>

        <div className="solutions-hero__visual">
          <div
            className="solutions-hero__glow"
            aria-hidden="true"
          />

          <div className="solutions-hero__image-card">
            <img
              src={solutionsHeroImage}
              alt={t("solutions.hero.imageAlt")}
              className="solutions-hero__image"
            />

            <div
              className="solutions-hero__image-overlay"
              aria-hidden="true"
            />
          </div>

          <div className="solutions-hero__floating-card">
            <span className="solutions-hero__floating-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8 6h8M6 10h12M8 14h8M10 18h4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <div>
              <strong>{t("solutions.hero.cardTitle")}</strong>
              <p>{t("solutions.hero.cardText")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsHero;