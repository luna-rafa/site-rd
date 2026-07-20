import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Story from "./components/Story";
import aboutImage from "../../assets/rafaela-about.png";
import WhyChoose from "./components/WhyChoose";
import WorkProcess from "./components/WorkProcess";
import Technologies from "./components/Technologies";
import Values from "./components/Values";
import AboutCTA from "./components/AboutCTA";

function ExperienceIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="about-highlight-icon"
    >
      <path
        d="M24 4 40 10v11c0 10-6.7 18.2-16 23-9.3-4.8-16-13-16-23V10L24 4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="m24 14 2.5 5.1 5.6.8-4 3.9.9 5.5-5-2.6-5 2.6.9-5.5-4-3.9 5.6-.8L24 14Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TechnologyIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="about-highlight-icon"
    >
      <rect
        x="9"
        y="7"
        width="30"
        height="10"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />

      <rect
        x="9"
        y="19"
        width="30"
        height="10"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />

      <rect
        x="9"
        y="31"
        width="30"
        height="10"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />

      <circle cx="33.5" cy="12" r="1.5" fill="currentColor" />
      <circle cx="33.5" cy="24" r="1.5" fill="currentColor" />
      <circle cx="33.5" cy="36" r="1.5" fill="currentColor" />
    </svg>
  );
}

function DigitalIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="about-highlight-icon"
    >
      <rect
        x="6"
        y="8"
        width="36"
        height="27"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />

      <path
        d="M18 41h12M24 35v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      <rect
        x="11"
        y="14"
        width="10"
        height="8"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M25 15h11M25 20h8M11 27h25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="about-highlight-icon"
    >
      <circle
        cx="22"
        cy="25"
        r="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />

      <circle
        cx="22"
        cy="25"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />

      <circle
        cx="22"
        cy="25"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />

      <path
        d="m24 23 15-15M32 8h7v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 7V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8V7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <rect
        x="3"
        y="7"
        width="18"
        height="13"
        rx="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M3 12h18M10 12v2h4v-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ConversationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.4 8.4 0 0 1-3.3-.7L4 20l1.5-4A7.4 7.4 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const highlights = [
  {
    id: 1,
    icon: <ExperienceIcon />,
    title: "+10 anos",
    text: "em Tecnologia da Informação",
  },
  {
    id: 2,
    icon: <TechnologyIcon />,
    title: "Experiência completa",
    text: "Infraestrutura, Sistemas e Cloud",
  },
  {
    id: 3,
    icon: <DigitalIcon />,
    title: "Soluções digitais",
    text: "Sites, Landing Pages e Portfólios",
  },
  {
    id: 4,
    icon: <StrategyIcon />,
    title: "Estratégia e resultados",
    text: "Foco em performance e crescimento",
  },
];

function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    document.title =
      "Sobre Rafaela Rodrigues | Rodrigues Digital";
  }, []);

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-decoration about-decoration-left" />

        <div className="container about-hero-container">
          <div className="about-hero-content">
            <span className="about-eyebrow">
              Muito prazer.
            </span>

            <h1 className="about-title">
              Eu sou
              <strong>
                Rafaela Rodrigues
              </strong>
            </h1>

            <div className="about-title-line" />

            <div className="about-description">
              <p>
                Mais de 10 anos atuando na área de Tecnologia da
                Informação, desenvolvendo soluções para empresas dos
                mais diversos segmentos.
              </p>

              <p>
                Hoje, utilizo essa experiência para criar presenças
                digitais profissionais que unem estratégia, tecnologia
                e identidade para <strong>fortalecer marcas.</strong>
              </p>
            </div>

            <blockquote className="about-quote">
              <span className="about-quote-mark">“</span>

              <p>
                Porque um bom site não começa no código.
                <strong>Começa na estratégia.</strong>
              </p>
            </blockquote>

            <div className="about-actions">
              <Link
                to="/projetos"
                className="about-button about-button-primary"
              >
                <span className="about-button-icon">
                  <PortfolioIcon />
                </span>

                Conheça meus projetos
              </Link>

              <Link
                to="/contato"
                className="about-button about-button-secondary"
              >
                <span className="about-button-icon">
                  <ConversationIcon />
                </span>

                Vamos conversar
              </Link>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-photo-frame">
              <div className="about-photo-background" />

              <div className="about-photo-gold-line" />

              <img
                src={aboutImage}
                alt="Rafaela Rodrigues, fundadora da Rodrigues Digital"
                className="about-photo"
              />

              <div className="about-photo-detail about-photo-detail-one" />
              <div className="about-photo-detail about-photo-detail-two" />
            </div>
          </div>
        </div>

        <div className="container about-highlights-wrapper">
          <div className="about-highlights">
            {highlights.map((highlight) => (
              <article
                key={highlight.id}
                className="about-highlight-card"
              >
                {highlight.icon}

                <div className="about-highlight-content">
                  <h2>{highlight.title}</h2>
                  <p>{highlight.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Story />
      <WhyChoose />
      <WorkProcess />
      <Technologies />
      <Values />
      <AboutCTA />
    </main>
  );
}

export default About;