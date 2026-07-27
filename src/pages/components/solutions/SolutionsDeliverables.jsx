import { useTranslation } from "react-i18next";

import "./SolutionsDeliverables.css";

function SolutionsDeliverables() {
  const { t } = useTranslation();

  const items = t("solutions.deliverables.items", {
    returnObjects: true,
  });

  const safeItems = Array.isArray(items) ? items : [];

  return (
    <section
      className="solutions-deliverables"
      aria-labelledby="solutions-deliverables-title"
    >
      <div className="solutions-deliverables__container">
        <header className="solutions-deliverables__header">
          <span className="solutions-deliverables__eyebrow">
            {t("solutions.deliverables.eyebrow")}
          </span>

          <h2
            id="solutions-deliverables-title"
            className="solutions-deliverables__title"
          >
            {t("solutions.deliverables.titlePrefix")}{" "}
            <span>{t("solutions.deliverables.titleHighlight")}</span>
          </h2>

          <p className="solutions-deliverables__description">
            {t("solutions.deliverables.description")}
          </p>
        </header>

        <div className="solutions-deliverables__grid">
          {safeItems.map((item, index) => (
            <article
              className="solutions-deliverables__card"
              key={`${item.title}-${index}`}
            >
              <div className="solutions-deliverables__card-top">
                <span className="solutions-deliverables__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="solutions-deliverables__check"
                  aria-hidden="true"
                >
                  ✓
                </span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="solutions-deliverables__closing">
          <div className="solutions-deliverables__closing-content">
            <span>{t("solutions.deliverables.closing.label")}</span>

            <h3>{t("solutions.deliverables.closing.title")}</h3>

            <p>{t("solutions.deliverables.closing.description")}</p>
          </div>

          <a
            className="solutions-deliverables__button"
            href="https://wa.me/5527995749915"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("solutions.deliverables.closing.buttonAria")}
          >
            {t("solutions.deliverables.closing.button")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default SolutionsDeliverables;