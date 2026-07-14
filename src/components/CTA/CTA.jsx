import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaWhatsapp,
} from "react-icons/fa6";

import siteConfig from "../../config/site";
import "./CTA.css";

const benefits = [
  "Atendimento próximo e personalizado",
  "Estratégia antes do desenvolvimento",
  "Soluções alinhadas à identidade da marca",
];

function CTA() {
  return (
    <section className="cta">
      <div
        className="cta__glow cta__glow--left"
        aria-hidden="true"
      />

      <div
        className="cta__glow cta__glow--right"
        aria-hidden="true"
      />

      <div className="container cta__container">
        <div className="cta__content">
          <span className="cta__eyebrow">
            Vamos conversar?
          </span>

          <h2 className="cta__title">
            Sua próxima presença digital pode começar{" "}
            <span>com uma boa conversa.</span>
          </h2>

          <p className="cta__description">
            Conte-me sobre seu negócio, seus objetivos e o momento atual da sua
            marca. Juntos, podemos construir uma solução profissional,
            estratégica e capaz de gerar novas oportunidades.
          </p>

          <div className="cta__benefits">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="cta__benefit"
              >
                <span
                  className="cta__benefit-icon"
                  aria-hidden="true"
                >
                  <FaCheck />
                </span>

                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="cta__actions">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="cta__button cta__button--primary"
            >
              <FaWhatsapp aria-hidden="true" />

              <span>Solicitar reunião</span>

              <FaArrowRight
                className="cta__button-arrow"
                aria-hidden="true"
              />
            </a>

            <Link
              to="/solucoes"
              className="cta__button cta__button--secondary"
            >
              <span>Conhecer soluções</span>

              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="cta__visual">
          <div
            className="cta__orbit cta__orbit--large"
            aria-hidden="true"
          />

          <div
            className="cta__orbit cta__orbit--small"
            aria-hidden="true"
          />

          <div className="cta__brand-card">
            <span className="cta__brand-label">
              Rodrigues Digital
            </span>

            <strong>
              Estratégia, identidade e tecnologia para fortalecer sua marca.
            </strong>

            <div className="cta__brand-line">
              <span />
            </div>

            <div className="cta__brand-footer">
              <span>Presença digital profissional</span>

              <FaArrowRight aria-hidden="true" />
            </div>
          </div>

          <div className="cta__floating-card">
            <span className="cta__floating-dot" />

            <div>
              <strong>Atendimento personalizado</strong>
              <span>Do planejamento à publicação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;