import "./Technologies.css";
import { useTranslation } from "react-i18next";

function Technologies() {
  const { t } = useTranslation();
  const technologyGroups = t("aboutPage.technologies.groups", {
    returnObjects: true,
  });
  return (
    <section className="technologies-section">
      <div
        className="technologies-decoration technologies-decoration-left"
        aria-hidden="true"
      />

      <div
        className="technologies-decoration technologies-decoration-right"
        aria-hidden="true"
      />

      <div className="container technologies-container">
        <header className="technologies-header">
          <span className="technologies-tag">
            {t("aboutPage.technologies.eyebrow")}
          </span>

          <h2 className="technologies-title">
            {t("aboutPage.technologies.titlePrefix")}
            <strong> {t("aboutPage.technologies.titleHighlight")}</strong>
          </h2>

          <div className="technologies-line" />

          <p className="technologies-description">
            {t("aboutPage.technologies.description")}
          </p>
        </header>

        <div className="technologies-groups">
          {technologyGroups.map((group) => (
            <article
              key={group.id}
              className="technologies-group"
            >
              <div className="technologies-group-header">
                <span className="technologies-group-number">
                  {group.number}
                </span>

                <h3>{group.title}</h3>
              </div>

              <div className="technologies-list">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="technologies-badge"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="technologies-note">
          <span className="technologies-note-line" />

          <p>
            {t("aboutPage.technologies.note")}
          </p>

          <span className="technologies-note-line" />
        </div>
      </div>
    </section>
  );
}

export default Technologies;
