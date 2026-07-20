import { Link } from "react-router-dom";
import rafaelaCtaImage from "../../../assets/images/about/rafaela-cta.png";
import "./AboutCTA.css";

function AboutCTA() {
  return (
    <section className="about-cta-section">
      <div
        className="about-cta-glow about-cta-glow-one"
        aria-hidden="true"
      />

      <div
        className="about-cta-glow about-cta-glow-two"
        aria-hidden="true"
      />

      <div
        className="about-cta-shape about-cta-shape-one"
        aria-hidden="true"
      />

      <div
        className="about-cta-shape about-cta-shape-two"
        aria-hidden="true"
      />

      <div className="container about-cta-container">
        <div className="about-cta-image-area">
          <div
            className="about-cta-image-decoration"
            aria-hidden="true"
          />

          <div className="about-cta-image-frame">
            <img
              src={rafaelaCtaImage}
              alt="Rafaela Rodrigues trabalhando em um notebook"
              className="about-cta-image"
            />

            <div
              className="about-cta-image-overlay"
              aria-hidden="true"
            />
          </div>

          <div className="about-cta-image-badge">
            <span className="about-cta-image-badge-dot" />

            <div>
              <strong>Projetos personalizados</strong>

              <small>
                Estratégia, tecnologia e resultado
              </small>
            </div>
          </div>
        </div>

        <div className="about-cta-content">
          <span className="about-cta-tag">
            Vamos começar?
          </span>

          <h2 className="about-cta-title">
            Vamos construir uma presença digital que represente o
            <strong> verdadeiro valor da sua empresa.</strong>
          </h2>

          <div className="about-cta-line" />

          <p className="about-cta-description">
            Cada projeto começa com uma conversa para entender sua empresa,
            seus objetivos e o público que você deseja alcançar. Depois,
            transformamos estratégia, tecnologia e design em uma presença
            digital profissional.
          </p>

          <div className="about-cta-actions">
            <Link
              to="/contato"
              className="about-cta-primary"
            >
              <span>Solicitar reunião</span>

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="about-cta-button-icon"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              to="/projetos"
              className="about-cta-secondary"
            >
              <span>Conheça meu portfólio</span>

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="about-cta-link-icon"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="about-cta-signature">
            <span className="about-cta-signature-line" />

            <p>
              Mais de 10 anos transformando tecnologia em soluções digitais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;