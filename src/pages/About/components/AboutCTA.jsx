import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import rafaelaCtaImage from "../../../assets/images/about/rafaela-cta.png";
import "./AboutCTA.css";

function AboutCTA() {
  const { t, i18n } = useTranslation();
  const language = (i18n.resolvedLanguage || i18n.language || "pt").slice(0, 2);
  const localizedPath = (path) =>
    language === "pt" ? path : `/${language}${path}`;

  return (
    <section className="about-cta-section">
      <div
        className="about-cta-glow about-cta-glow-one"
        aria-hidden="true"
      />

      <div
        className="about-cta-glow about-cta-glow-two"
        aria-hidden="true"
      />

      <div
        className="about-cta-shape about-cta-shape-one"
        aria-hidden="true"
      />

      <div
        className="about-cta-shape about-cta-shape-two"
        aria-hidden="true"
      />

      <div className="container about-cta-container">
        <div className="about-cta-image-area">
          <div
            className="about-cta-image-decoration"
            aria-hidden="true"
          />

          <div className="about-cta-image-frame">
            <img
              src={rafaelaCtaImage}
              alt={t("aboutPage.cta.imageAlt")}
              className="about-cta-image"
            />

            <div
              className="about-cta-image-overlay"
              aria-hidden="true"
            />
          </div>

          <div className="about-cta-image-badge">
            <span className="about-cta-image-badge-dot" />

            <div>
              <strong>{t("aboutPage.cta.badgeTitle")}</strong>

              <small>
                {t("aboutPage.cta.badgeText")}
              </small>
            </div>
          </div>
        </div>

        <div className="about-cta-content">
          <span className="about-cta-tag">
            {t("aboutPage.cta.eyebrow")}
          </span>

          <h2 className="about-cta-title">
            {t("aboutPage.cta.titlePrefix")}
            <strong> {t("aboutPage.cta.titleHighlight")}</strong>
          </h2>

          <div className="about-cta-line" />

          <p className="about-cta-description">
            {t("aboutPage.cta.description")}
          </p>

          <div className="about-cta-actions">
            <Link
              to={localizedPath("/contato")}
              className="about-cta-primary"
            >
              <span>{t("aboutPage.cta.meetingButton")}</span>

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="about-cta-button-icon"
              >
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

            <Link
              to={localizedPath("/portfolio")}
              className="about-cta-secondary"
            >
              <span>{t("aboutPage.cta.portfolioButton")}</span>

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="about-cta-link-icon"
              >
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
          </div>

          <div className="about-cta-signature">
            <span className="about-cta-signature-line" />

            <p>
              {t("aboutPage.cta.signature")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;
