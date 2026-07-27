import { useTranslation } from "react-i18next";

import "./SolutionsIntro.css";

function SolutionsIntro() {
  const { t } = useTranslation();

  return (
    <section
      id="introducao-solucoes"
      className="solutions-intro"
    >
      <div className="container solutions-intro__container">
        <div className="solutions-intro__heading">
          <span className="solutions-intro__eyebrow">
            {t("solutions.intro.eyebrow")}
          </span>

          <h2 className="solutions-intro__title">
            {t("solutions.intro.title")}
          </h2>
        </div>

        <div className="solutions-intro__content">
          <p>{t("solutions.intro.text1")}</p>

          <p>{t("solutions.intro.text2")}</p>

          <div className="solutions-intro__highlight">
            <span className="solutions-intro__highlight-icon">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M5 12.5 9.2 17 19 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <p>{t("solutions.intro.highlight")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsIntro;