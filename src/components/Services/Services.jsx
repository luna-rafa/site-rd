import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  FaArrowRight,
  FaBullseye,
  FaChartLine,
  FaFileAlt,
  FaGlobe,
  FaShieldAlt,
  FaUserTie,
  FaWhatsapp,
} from "react-icons/fa";

import siteConfig from "../../config/site";

import "./Services.css";

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      number: "01",
      icon: <FaGlobe />,
      title: t("services.items.institutional.title"),
      text: t("services.items.institutional.text"),
      benefit: t("services.items.institutional.benefit"),
    },
    {
      number: "02",
      icon: <FaBullseye />,
      title: t("services.items.landing.title"),
      text: t("services.items.landing.text"),
      benefit: t("services.items.landing.benefit"),
    },
    {
      number: "03",
      icon: <FaUserTie />,
      title: t("services.items.portfolio.title"),
      text: t("services.items.portfolio.text"),
      benefit: t("services.items.portfolio.benefit"),
    },
    {
      number: "04",
      icon: <FaFileAlt />,
      title: t("services.items.mediaKit.title"),
      text: t("services.items.mediaKit.text"),
      benefit: t("services.items.mediaKit.benefit"),
    },
    {
      number: "05",
      icon: <FaChartLine />,
      title: t("services.items.seo.title"),
      text: t("services.items.seo.text"),
      benefit: t("services.items.seo.benefit"),
    },
    {
      number: "06",
      icon: <FaShieldAlt />,
      title: t("services.items.maintenance.title"),
      text: t("services.items.maintenance.text"),
      benefit: t("services.items.maintenance.benefit"),
    },
  ];

  return (
    <section className="services">
      <div
        className="services__glow services__glow--top"
        aria-hidden="true"
      />

      <div
        className="services__glow services__glow--bottom"
        aria-hidden="true"
      />

      <div
        className="services__glow services__glow--left"
        aria-hidden="true"
      />

      <div className="container services__container">
        <div className="services__header">
          <div className="services__heading">
            <span className="services__eyebrow">
              {t("services.eyebrow")}
            </span>

            <h2 className="services__title">
              {t("services.title.first")}{" "}
              <span>{t("services.title.highlight")}</span>
            </h2>
          </div>

          <div className="services__introduction">
            <p>{t("services.introduction.first")}</p>

            <p>{t("services.introduction.second")}</p>
          </div>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article
              key={service.number}
              className="services__card"
            >
              <div className="services__card-top">
                <div
                  className="services__icon"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                <span
                  className="services__number"
                  aria-hidden="true"
                >
                  {service.number}
                </span>
              </div>

              <div className="services__card-content">
                <h3>{service.title}</h3>

                <p>{service.text}</p>
              </div>

              <div className="services__card-footer">
                <span>{service.benefit}</span>

                <Link
                  to="/solucoes"
                  className="services__card-link"
                  aria-label={t("services.cardAria", {
                    service: service.title,
                  })}
                >
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="services__footer">
          <div
            className="services__footer-icon"
            aria-hidden="true"
          >
            <FaBullseye />
          </div>

          <div className="services__footer-text">
            <strong>{t("services.footer.title")}</strong>

            <p>{t("services.footer.description")}</p>
          </div>

          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="services__button"
            aria-label={t("services.footer.buttonAria")}
          >
            <FaWhatsapp aria-hidden="true" />

            <span>{t("services.footer.button")}</span>

            <FaArrowRight
              className="services__button-arrow"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;