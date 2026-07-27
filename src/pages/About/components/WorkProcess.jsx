import processImage from "../../../assets/images/about/rafaela-process.png";
import { useTranslation } from "react-i18next";

import "./WorkProcess.css";

function WorkProcess() {
  const { t } = useTranslation();
  const processSteps = t("aboutPage.workProcess.steps", {
    returnObjects: true,
  });
  return (
    <section className="work-process-section">
      <div
        className="work-process-decoration work-process-decoration-left"
        aria-hidden="true"
      />

      <div
        className="work-process-decoration work-process-decoration-right"
        aria-hidden="true"
      />

      <div className="container work-process-container">
        <div className="work-process-presentation">
          <div className="work-process-content">
            <span className="work-process-tag">
              {t("aboutPage.workProcess.eyebrow")}
            </span>

            <h2 className="work-process-title">
              {t("aboutPage.workProcess.titlePrefix")}
              <strong>{t("aboutPage.workProcess.titleHighlight")}</strong>
            </h2>

            <div className="work-process-title-line" />

            <p className="work-process-description">
              {t("aboutPage.workProcess.description")}
            </p>

            <blockquote className="work-process-quote">
              <span
                className="work-process-quote-mark"
                aria-hidden="true"
              >
                “
              </span>

              <p>
                {t("aboutPage.workProcess.quotePrefix")}{" "}
                <strong>{t("aboutPage.workProcess.quoteHighlight")}</strong>{" "}
                {t("aboutPage.workProcess.quoteSuffix")}
              </p>
            </blockquote>
          </div>

          <div className="work-process-visual">
            <div
              className="work-process-visual-glow"
              aria-hidden="true"
            />

            <div className="work-process-photo-frame">
              <div
                className="work-process-photo-background"
                aria-hidden="true"
              />

              <div
                className="work-process-photo-gold-line"
                aria-hidden="true"
              />

              <img
                src={processImage}
                alt={t("aboutPage.workProcess.imageAlt")}
                className="work-process-photo"
              />
            </div>
          </div>
        </div>

        <div className="work-process-steps-wrapper">
          <div
            className="work-process-connection-line"
            aria-hidden="true"
          />

          <div className="work-process-steps">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="work-process-card"
              >
                <span className="work-process-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;
