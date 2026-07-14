import { Link } from "react-router-dom";
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

const highlights = [
  {
    icon: <FaBriefcase />,
    value: "10+",
    title: "anos em Tecnologia",
    description:
      "Experiência aplicada à criação de soluções digitais eficientes.",
  },
  {
    icon: <FaRegStar />,
    value: "100%",
    title: "projetos personalizados",
    description:
      "Soluções desenvolvidas de acordo com cada negócio e objetivo.",
  },
  {
    icon: <FaGlobe />,
    value: "PT • EN • ES",
    title: "sites multilíngues",
    description:
      "Seu negócio preparado para alcançar pessoas em diferentes idiomas.",
  },
];

function Hero() {
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
            Tecnologia • Estratégia • Presença Digital
          </span>

          <h1 className="hero__title">
            Transformo ideias

            <span className="hero__title-line">
              em{" "}
              <strong className="hero__title-highlight">
                presenças digitais
              </strong>
            </span>

            <span className="hero__title-line">profissionais.</span>
          </h1>

          <p className="hero__description">
            Cada projeto é desenvolvido para representar a essência da sua
            marca, transmitir credibilidade e gerar resultados reais.
          </p>

          <div className="hero__actions">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__button hero__button--primary"
              aria-label="Solicitar reunião pelo WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" />

              <span>Solicitar reunião</span>

              <FaArrowRight
                className="hero__button-arrow"
                aria-hidden="true"
              />
            </a>

            <Link
              to="/portfolio"
              className="hero__button hero__button--secondary"
            >
              <span>Conhecer projetos</span>

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
              alt="Rafaela Rodrigues, fundadora da Rodrigues Digital"
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
              <strong>Rafaela Rodrigues</strong>

              <span>Fundadora da Rodrigues Digital</span>
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