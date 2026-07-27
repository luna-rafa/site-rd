import { useTranslation } from "react-i18next";

import solutionsHelpImage from "../../../assets/images/rafaela-solutions-help.png";

import "./SolutionsHelp.css";

function SolutionsHelp() {
  const { t } = useTranslation();

  const items = t("solutions.help.items", {
    returnObjects: true,
  });

  return (
    <section
      className="solutions-help"
      id="como-posso-ajudar"
      aria-labelledby="solutions-help-title"
    >
      <div className="solutions-help__container">
        <header className="solutions-help__header">
          <span className="solutions-help__eyebrow">
            {t("solutions.help.eyebrow")}
          </span>

          <h2
            className="solutions-help__title"
            id="solutions-help-title"
          >
            {t("solutions.help.title")}
          </h2>

          <p className="solutions-help__description">
            {t("solutions.help.description")}
          </p>
        </header>

        <div className="solutions-help__content">
          <div className="solutions-help__list">
            {Array.isArray(items) &&
              items.map((item, index) => (
                <article
                  className="solutions-help__card"
                  key={`${item.solution}-${index}`}
                >
                  <div className="solutions-help__card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="solutions-help__card-content">
                    <h3 className="solutions-help__card-question">
                      {item.question}
                    </h3>

                    <p className="solutions-help__card-text">
                      {item.description}
                    </p>

                    <div className="solutions-help__solution">
                      <span className="solutions-help__solution-label">
                        {t("solutions.help.solutionLabel")}
                      </span>

                      <strong className="solutions-help__solution-name">
                        {item.solution}
                      </strong>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          <div className="solutions-help__visual">
            <div className="solutions-help__image-wrapper">
              <img
                className="solutions-help__image"
                src={solutionsHelpImage}
                alt={t("solutions.help.imageAlt")}
                loading="lazy"
              />

              <div className="solutions-help__image-overlay" />

              <div className="solutions-help__image-card">
                <span className="solutions-help__image-card-label">
                  {t("solutions.help.imageCard.label")}
                </span>

                <strong className="solutions-help__image-card-title">
                  {t("solutions.help.imageCard.title")}
                </strong>

                <p className="solutions-help__image-card-text">
                  {t("solutions.help.imageCard.text")}
                </p>
              </div>
            </div>

            <blockquote className="solutions-help__quote">
              <span aria-hidden="true">“</span>

              <p>{t("solutions.help.quote")}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsHelp;