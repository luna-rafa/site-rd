import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  FaArrowRight,
  FaCheck,
  FaWhatsapp,
} from "react-icons/fa6";

import siteConfig from "../../config/site";

import "./CTA.css";

function CTA() {
  const { t } = useTranslation();

  const benefits = [
    t("cta.benefits.first"),
    t("cta.benefits.second"),
    t("cta.benefits.third"),
  ];

  return (
    <section className="cta">
      <div
        className="cta__glow cta__glow--left"
        aria-hidden="true"
      />

      <div
        className="cta__glow cta__glow--right"
        aria-hidden="true"
      />

      <div className="container cta__container">
        <div className="cta__content">
          <span className="cta__eyebrow">
            {t("cta.eyebrow")}
          </span>

          <h2 className="cta__title">
            {t("cta.title.first")}{" "}
            <span>{t("cta.title.highlight")}</span>
          </h2>

          <p className="cta__description">
            {t("cta.description")}
          </p>

          <div className="cta__benefits">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="cta__benefit"
              >
                <span
                  className="cta__benefit-icon"
                  aria-hidden="true"
                >
                  <FaCheck />
                </span>

                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="cta__actions">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="cta__button cta__button--primary"
              aria-label={t("cta.buttons.meetingAria")}
            >
              <FaWhatsapp aria-hidden="true" />

              <span>{t("cta.buttons.meeting")}</span>

              <FaArrowRight
                className="cta__button-arrow"
                aria-hidden="true"
              />
            </a>

            <Link
              to="/solucoes"
              className="cta__button cta__button--secondary"
            >
              <span>{t("cta.buttons.solutions")}</span>

              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="cta__visual">
          <div
            className="cta__orbit cta__orbit--large"
            aria-hidden="true"
          />

          <div
            className="cta__orbit cta__orbit--small"
            aria-hidden="true"
          />

          <div className="cta__brand-card">
            <span className="cta__brand-label">
              Rodrigues Digital
            </span>

            <strong>
              {t("cta.brand.title")}
            </strong>

            <div className="cta__brand-line">
              <span />
            </div>

            <div className="cta__brand-footer">
              <span>
                {t("cta.brand.footer")}
              </span>

              <FaArrowRight aria-hidden="true" />
            </div>
          </div>

          <div className="cta__floating-card">
            <span
              className="cta__floating-dot"
              aria-hidden="true"
            />

            <div>
              <strong>
                {t("cta.floating.title")}
              </strong>

              <span>
                {t("cta.floating.description")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;