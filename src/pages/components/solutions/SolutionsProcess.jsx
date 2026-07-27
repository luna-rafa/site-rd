import { useTranslation } from "react-i18next";

import "./SolutionsProcess.css";

function SolutionsProcess() {
  const { t } = useTranslation();

  const steps = t("solutions.projectProcess.steps", {
    returnObjects: true,
  });

  return (
    <section
      className="solutions-process"
      id="processo-do-projeto"
      aria-labelledby="solutions-process-title"
    >
      <div className="solutions-process__container">
        <header className="solutions-process__header">
          <div className="solutions-process__heading">
            <span className="solutions-process__eyebrow">
              {t("solutions.projectProcess.eyebrow")}
            </span>

            <h2
              className="solutions-process__title"
              id="solutions-process-title"
            >
              {t("solutions.projectProcess.titlePrefix")}{" "}
              <span>
                {t("solutions.projectProcess.titleHighlight")}
              </span>
            </h2>
          </div>

          <div className="solutions-process__introduction">
            <p>{t("solutions.projectProcess.description")}</p>

            <div className="solutions-process__promise">
              <span
                className="solutions-process__promise-icon"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12.5L9 17.5L20 6.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <p>{t("solutions.projectProcess.promise")}</p>
            </div>
          </div>
        </header>

        <div className="solutions-process__timeline">
          <div
            className="solutions-process__timeline-line"
            aria-hidden="true"
          />

          {Array.isArray(steps) &&
            steps.map((step, index) => (
              <article
                className="solutions-process__step"
                key={`${step.title}-${index}`}
              >
                <div className="solutions-process__step-marker">
                  <span className="solutions-process__step-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="solutions-process__step-content">
                  <span className="solutions-process__step-label">
                    {step.label}
                  </span>

                  <h3 className="solutions-process__step-title">
                    {step.title}
                  </h3>

                  <p className="solutions-process__step-description">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
        </div>

        <div className="solutions-process__closing">
          <div className="solutions-process__closing-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 8H17M7 12H14M7 16H11"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />

              <path
                d="M5 4H19C20.1 4 21 4.9 21 6V18C21 19.1 20.1 20 19 20H9L4 22V6C4 4.9 4.9 4 6 4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="solutions-process__closing-content">
            <span className="solutions-process__closing-label">
              {t("solutions.projectProcess.closing.label")}
            </span>

            <h3>{t("solutions.projectProcess.closing.title")}</h3>

            <p>{t("solutions.projectProcess.closing.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsProcess;