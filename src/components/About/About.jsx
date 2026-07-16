import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  FaArrowRight,
  FaChartLine,
  FaCode,
  FaHandshake,
} from "react-icons/fa6";

import aboutImage from "../../assets/images/about/rafaela-about.png";

import "./About.css";

function About() {
  const { t } = useTranslation();

  const pillars = [
    {
      icon: <FaCode />,
      title: t("about.pillars.technical.title"),
      text: t("about.pillars.technical.description"),
    },
    {
      icon: <FaChartLine />,
      title: t("about.pillars.strategy.title"),
      text: t("about.pillars.strategy.description"),
    },
    {
      icon: <FaHandshake />,
      title: t("about.pillars.support.title"),
      text: t("about.pillars.support.description"),
    },
  ];

  return (
    <section className="about">
      <div className="container about__container">
        <div className="about__content">
          <span className="about__eyebrow">
            {t("about.eyebrow")}
          </span>

          <h2 className="about__title">
            {t("about.title.first")}

            <span className="about__title-highlight">
              {" "}
              {t("about.title.highlight")}
            </span>
          </h2>

          <div className="about__texts">
            <p>{t("about.text1")}</p>

            <p>{t("about.text2")}</p>
          </div>

          <div className="about__pillars">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="about__pillar"
              >
                <div
                  className="about__pillar-icon"
                  aria-hidden="true"
                >
                  {pillar.icon}
                </div>

                <div>
                  <strong>{pillar.title}</strong>

                  <span>{pillar.text}</span>
                </div>
              </article>
            ))}
          </div>

          <Link
            to="/sobre"
            className="button button--primary about__button"
          >
            {t("about.button")}

            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="about__visual">
          <div
            className="about__gold-orb"
            aria-hidden="true"
          />

          <div
            className="about__line"
            aria-hidden="true"
          />

          <div className="about__image-frame">
            <img
              src={aboutImage}
              alt={t("about.imageAlt")}
              className="about__image"
            />
          </div>

          <div className="about__quote">
            <span>Rodrigues Digital</span>

            <strong>
              {t("about.quote")}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;