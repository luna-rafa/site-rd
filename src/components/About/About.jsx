import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaChartLine,
  FaCode,
  FaHandshake,
} from "react-icons/fa6";

import aboutImage from "../../assets/images/about/rafaela-about.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="container about__container">
        <div className="about__content">
          <span className="about__eyebrow">
            Quem está por trás da Rodrigues Digital
          </span>

          <h2 className="about__title">
            Cada projeto começa{" "}
            <span className="about__title-highlight">
              muito antes do código.
            </span>
          </h2>

          <div className="about__texts">
            <p>
              Durante mais de uma década atuando em Tecnologia da Informação,
              aprendi que uma boa solução começa pela compreensão do problema.
              Hoje, aplico esse mesmo pensamento para desenvolver presenças
              digitais que representam empresas, profissionais e projetos com
              estratégia, identidade e propósito.
            </p>

            <p>
              Cada cliente possui uma história única. Por isso, nenhum projeto é
              desenvolvido a partir de modelos prontos. Meu trabalho é
              compreender a essência da marca e transformá-la em uma presença
              digital profissional que inspire confiança e gere oportunidades.
            </p>
          </div>

          <div className="about__pillars">
            <article className="about__pillar">
              <div className="about__pillar-icon" aria-hidden="true">
                <FaCode />
              </div>

              <div>
                <strong>Experiência técnica</strong>
                <span>
                  Mais de 10 anos em Tecnologia da Informação aplicados a
                  soluções digitais.
                </span>
              </div>
            </article>

            <article className="about__pillar">
              <div className="about__pillar-icon" aria-hidden="true">
                <FaChartLine />
              </div>

              <div>
                <strong>Visão estratégica</strong>
                <span>
                  Cada decisão é alinhada à identidade, ao público e aos
                  objetivos do negócio.
                </span>
              </div>
            </article>

            <article className="about__pillar">
              <div className="about__pillar-icon" aria-hidden="true">
                <FaHandshake />
              </div>

              <div>
                <strong>Acompanhamento próximo</strong>
                <span>
                  Comunicação transparente do planejamento à publicação do
                  projeto.
                </span>
              </div>
            </article>
          </div>

          <Link to="/sobre" className="button button--primary about__button">
            Conheça minha história
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="about__visual">
          <div className="about__gold-orb" aria-hidden="true" />
          <div className="about__line" aria-hidden="true" />

          <div className="about__image-frame">
            <img
              src={aboutImage}
              alt="Rafaela Rodrigues, fundadora da Rodrigues Digital"
              className="about__image"
            />
          </div>

          <div className="about__quote">
            <span>Rodrigues Digital</span>

            <strong>
              Estratégia, tecnologia e atenção aos detalhes em cada etapa.
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;