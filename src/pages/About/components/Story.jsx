import "./Story.css";
import { useTranslation } from "react-i18next";

function Story() {
  const { t } = useTranslation();
  const timeline = t("aboutPage.story.timeline", { returnObjects: true });

  return (
    <section className="story-section">

      <div className="container story-container">

        <div className="story-content">

          <span className="story-tag">
            {t("aboutPage.story.eyebrow")}
          </span>

          <h2 className="story-title">
            {t("aboutPage.story.title")}
          </h2>

          <div className="story-line"></div>

          <h3 className="story-subtitle">
            {t("aboutPage.story.subtitle")}
          </h3>

          <p>
            {t("aboutPage.story.paragraph1")}
          </p>

          <p>
            {t("aboutPage.story.paragraph2Prefix")}{" "}
            <strong>{t("aboutPage.story.paragraph2Highlight")}</strong>
            {t("aboutPage.story.paragraph2Suffix")}
          </p>

          <p>
            {t("aboutPage.story.paragraph3")}
          </p>

          <p>
            {t("aboutPage.story.paragraph4Prefix")}{" "}
            <strong>Rodrigues Digital</strong>.
          </p>

          <p>
            {t("aboutPage.story.paragraph5")}
          </p>

        </div>

        <div className="story-timeline">

          {timeline.map((item) => (

            <div
              className="timeline-item"
              key={item.number}
            >

              <div className="timeline-dot">

                <span>
                  {item.number}
                </span>

              </div>

              <div className="timeline-content">

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Story;
