import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  FaArrowRight,
  FaBriefcase,
  FaGlobe,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa6";

import { FaRegStar } from "react-icons/fa";

import heroImage from "../../assets/images/hero/rafaela-hero.png";
import siteConfig from "../../config/site";

import "./Hero.css";

function Hero() {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: <FaBriefcase />,
      value: "10+",
      title: t("hero.highlights.experience.title"),
      description: t("hero.highlights.experience.description"),
    },
    {
      icon: <FaRegStar />,
      value: "100%",
      title: t("hero.highlights.custom.title"),
      description: t("hero.highlights.custom.description"),
    },
    {
      icon: <FaGlobe />,
      value: "PT • EN • ES",
      title: t("hero.highlights.languages.title"),
      description: t("hero.highlights.languages.description"),
    },
  ];

  return (
    <section className="hero">
      <div
        className="hero__background-glow hero__background-glow--left"
        aria-hidden="true"
      />

      <div
        className="hero__background-glow hero__background-glow--right"
        aria-hidden="true"
      />

      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">
            {t("hero.eyebrow")}
          </span>

          <h1 className="hero__title">
            {t("hero.title.firstLine")}

            <span className="hero__title-line">
              {t("hero.title.secondLinePrefix")}{" "}
              <strong className="hero__title-highlight">
                {t("hero.title.highlight")}
              </strong>
            </span>

            <span className="hero__title-line">
              {t("hero.title.lastLine")}
            </span>
          </h1>

          <p className="hero__description">
            {t("hero.description")}
          </p>

          <div className="hero__actions">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__button hero__button--primary"
              aria-label={t("hero.actions.meetingAria")}
            >
              <FaWhatsapp aria-hidden="true" />

              <span>{t("hero.actions.meeting")}</span>

              <FaArrowRight
                className="hero__button-arrow"
                aria-hidden="true"
              />
            </a>

            <Link
              to="/portfolio"
              className="hero__button hero__button--secondary"
            >
              <span>{t("hero.actions.projects")}</span>

              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="hero__visual">
          <div
            className="hero__visual-glow"
            aria-hidden="true"
          />

          <div
            className="hero__visual-line"
            aria-hidden="true"
          />

          <div className="hero__image-frame">
            <img
              src={heroImage}
              alt={t("hero.imageAlt")}
              className="hero__image"
            />
          </div>

          <div className="hero__founder-card">
            <div
              className="hero__founder-icon"
              aria-hidden="true"
            >
              <FaUser />
            </div>

            <div className="hero__founder-content">
              <strong>{t("hero.founder.name")}</strong>

              <span>{t("hero.founder.role")}</span>
            </div>
          </div>
        </div>

        <div
          className="hero__connection-line"
          aria-hidden="true"
        >
          <span />
        </div>

        <div className="hero__highlights">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="hero__highlight"
            >
              <div
                className="hero__highlight-icon"
                aria-hidden="true"
              >
                {item.icon}
              </div>

              <div className="hero__highlight-content">
                <strong className="hero__highlight-value">
                  {item.value}
                </strong>

                <h2>{item.title}</h2>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
 

export default Hero;