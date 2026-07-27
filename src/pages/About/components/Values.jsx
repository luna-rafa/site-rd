import "./Values.css";
import { useTranslation } from "react-i18next";

function Values() {
  const { t } = useTranslation();
  const values = t("aboutPage.values.items", { returnObjects: true });
  return (
    <section className="values-section">
      <div className="container values-container">
        <div className="values-header">

          <span className="values-tag">
            {t("aboutPage.values.eyebrow")}
          </span>

          <h2>
            {t("aboutPage.values.titlePrefix")}
            <strong> {t("aboutPage.values.titleHighlight")}</strong>
          </h2>

          <div className="values-divider" />

          <p>
            {t("aboutPage.values.description")}
          </p>

        </div>

        <div className="values-grid">

          {values.map((item) => (

            <article
              key={item.id}
              className="value-card"
            >

              <span>{item.id}</span>

              <div className="value-line" />

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </article>

          ))}

        </div>
      </div>
    </section>
  );
}

export default Values;
