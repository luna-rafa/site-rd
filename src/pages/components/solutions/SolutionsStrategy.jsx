import { useTranslation } from "react-i18next";

import "./SolutionsStrategy.css";

function SolutionsStrategy() {
  const { t } = useTranslation();

  const criteria = t("solutions.strategy.criteria", {
    returnObjects: true,
  });

  return (
    <section
      className="solutions-strategy"
      id="solucao-ideal"
      aria-labelledby="solutions-strategy-title"
    >
      <div className="solutions-strategy__container">
        <header className="solutions-strategy__header">
          <div className="solutions-strategy__heading">
            <span className="solutions-strategy__eyebrow">
              {t("solutions.strategy.eyebrow")}
            </span>

            <h2
              className="solutions-strategy__title"
              id="solutions-strategy-title"
            >
              {t("solutions.strategy.titlePrefix")}{" "}
              <span>
                {t("solutions.strategy.titleHighlight")}
              </span>
            </h2>
          </div>

          <div className="solutions-strategy__introduction">
            <p>{t("solutions.strategy.description")}</p>

            <div className="solutions-strategy__principle">
              <span className="solutions-strategy__principle-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3L19 7V12C19 16.4 16.1 20.3 12 21.5C7.9 20.3 5 16.4 5 12V7L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M9 12L11 14L15.5 9.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <p>{t("solutions.strategy.principle")}</p>
            </div>
          </div>
        </header>

        <div className="solutions-strategy__content">
          <div
            className="solutions-strategy__line"
            aria-hidden="true"
          />

          <div className="solutions-strategy__grid">
            {Array.isArray(criteria) &&
              criteria.map((criterion, index) => (
                <article
                  className="solutions-strategy__card"
                  key={`${criterion.title}-${index}`}
                >
                  <div className="solutions-strategy__card-top">
                    <span className="solutions-strategy__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="solutions-strategy__marker"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="solutions-strategy__card-title">
                    {criterion.title}
                  </h3>

                  <p className="solutions-strategy__card-text">
                    {criterion.description}
                  </p>

                  <span
                    className="solutions-strategy__card-detail"
                    aria-hidden="true"
                  />
                </article>
              ))}
          </div>
        </div>

        <div className="solutions-strategy__closing">
          <div className="solutions-strategy__closing-decoration">
            <span />
            <span />
            <span />
          </div>

          <blockquote className="solutions-strategy__quote">
            <span
              className="solutions-strategy__quote-mark"
              aria-hidden="true"
            >
              “
            </span>

            <p>
              {t("solutions.strategy.quotePrefix")}{" "}
              <strong>
                {t("solutions.strategy.quoteHighlight")}
              </strong>
              {t("solutions.strategy.quoteSuffix")}
            </p>
          </blockquote>

          <p className="solutions-strategy__closing-text">
            {t("solutions.strategy.closing")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default SolutionsStrategy;