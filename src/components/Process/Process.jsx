import { useTranslation } from "react-i18next";

import {
  FaArrowRight,
  FaCheck,
  FaCode,
  FaComments,
  FaHeadset,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa6";

import processImage from "../../assets/images/process/rafaela-processo.png";

import "./Process.css";

function Process() {
  const { t } = useTranslation();

  const processSteps = [
    {
      number: "01",
      icon: <FaComments />,
      title: t("process.steps.meeting.title"),
      description: t("process.steps.meeting.description"),
    },
    {
      number: "02",
      icon: <FaLightbulb />,
      title: t("process.steps.planning.title"),
      description: t("process.steps.planning.description"),
    },
    {
      number: "03",
      icon: <FaCode />,
      title: t("process.steps.development.title"),
      description: t("process.steps.development.description"),
    },
    {
      number: "04",
      icon: <FaCheck />,
      title: t("process.steps.adjustments.title"),
      description: t("process.steps.adjustments.description"),
    },
    {
      number: "05",
      icon: <FaRocket />,
      title: t("process.steps.publication.title"),
      description: t("process.steps.publication.description"),
    },
    {
      number: "06",
      icon: <FaHeadset />,
      title: t("process.steps.support.title"),
      description: t("process.steps.support.description"),
    },
  ];

  return (
    <section className="process">
      <div
        className="process__glow process__glow--left"
        aria-hidden="true"
      />

      <div
        className="process__glow process__glow--right"
        aria-hidden="true"
      />

      <div className="container process__container">
        <div className="process__presentation">
          <div className="process__content">
            <span className="process__eyebrow">
              {t("process.eyebrow")}
            </span>

            <h2 className="process__title">
              {t("process.title.first")}{" "}
              <span>{t("process.title.highlight")}</span>
            </h2>

            <div className="process__introduction">
              <p>{t("process.introduction.first")}</p>

              <p>{t("process.introduction.second")}</p>
            </div>

            <div className="process__promise">
              <div
                className="process__promise-icon"
                aria-hidden="true"
              >
                <FaComments />
              </div>

              <div>
                <strong>{t("process.promise.title")}</strong>

                <span>{t("process.promise.description")}</span>
              </div>
            </div>
          </div>

          <div className="process__visual">
            <div
              className="process__visual-glow"
              aria-hidden="true"
            />

            <div
              className="process__visual-line"
              aria-hidden="true"
            />

            <div className="process__image-frame">
              <img
                src={processImage}
                alt={t("process.imageAlt")}
                className="process__image"
              />
            </div>

            <div className="process__image-card">
              <span>Rodrigues Digital</span>

              <strong>{t("process.imageCard")}</strong>
            </div>
          </div>
        </div>

        <div className="process__timeline">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="process__step"
            >
              <div className="process__step-header">
                <span
                  className="process__number"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <div
                  className="process__icon"
                  aria-hidden="true"
                >
                  {step.icon}
                </div>
              </div>

              <div className="process__step-content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              <div
                className="process__step-arrow"
                aria-hidden="true"
              >
                <FaArrowRight />
              </div>
            </article>
          ))}
        </div>

        <div className="process__message">
          <div
            className="process__message-icon"
            aria-hidden="true"
          >
            <FaCheck />
          </div>

          <div className="process__message-content">
            <span className="process__message-label">
              {t("process.message.label")}
            </span>

            <strong>{t("process.message.title")}</strong>

            <p>{t("process.message.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;