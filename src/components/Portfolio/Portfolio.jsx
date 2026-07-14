import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaExternalLinkAlt,
  FaLayerGroup,
  FaUserTie,
} from "react-icons/fa";

import marcelaBragaImage from "../../assets/images/portfolio/marcela-braga.png";
import rafaelaPortfolioImage from "../../assets/images/portfolio/rafaela-portfolio.png";

import "./Portfolio.css";

const projects = [
  {
    number: "01",
    category: "Landing Page",
    title: "Marcela Braga — Logística e Negócios",
    description:
      "Landing page desenvolvida para apresentar a trajetória, os serviços e o posicionamento profissional de Marcela Braga, com foco em autoridade, clareza e geração de oportunidades.",
    image: marcelaBragaImage,
    imageAlt:
      "Landing page de Marcela Braga, especialista em logística, transporte e desenvolvimento de negócios",
    icon: <FaLayerGroup />,
    tags: ["React", "Responsivo", "Estratégia", "Posicionamento"],
    url: "https://braga-marcela.com.br/",
    theme: "portfolio__showcase--marcela",
  },
  {
    number: "02",
    category: "Portfólio Profissional",
    title: "Rafaela Rodrigues — Tecnologia da Informação",
    description:
      "Portfólio profissional criado para destacar experiência em suporte, infraestrutura, nuvem e tecnologia, reunindo trajetória, competências e formas de contato em uma apresentação moderna.",
    image: rafaelaPortfolioImage,
    imageAlt:
      "Portfólio profissional de Rafaela Rodrigues na área de Tecnologia da Informação",
    icon: <FaUserTie />,
    tags: ["React", "Marca pessoal", "Tecnologia", "Responsivo"],
    url: "https://rafaelarodrigues.vercel.app/",
    theme: "portfolio__showcase--rafaela",
  },
];

function Portfolio() {
  return (
    <section className="portfolio">
      <div
        className="portfolio__glow portfolio__glow--left"
        aria-hidden="true"
      />

      <div
        className="portfolio__glow portfolio__glow--right"
        aria-hidden="true"
      />

      <div className="container portfolio__container">
        <div className="portfolio__header">
          <div className="portfolio__heading">
            <span className="portfolio__eyebrow">
              Projetos em destaque
            </span>

            <h2 className="portfolio__title">
              Presenças digitais criadas para{" "}
              <span>representar, posicionar e conectar.</span>
            </h2>
          </div>

          <div className="portfolio__introduction">
            <p>
              Cada projeto nasce de uma necessidade diferente e é desenvolvido
              para refletir a identidade, os objetivos e o momento de cada
              cliente.
            </p>

            <p>
              Mais do que páginas visualmente bonitas, são soluções pensadas
              para transmitir credibilidade, organizar informações e gerar
              novas oportunidades.
            </p>
          </div>
        </div>

        <div className="portfolio__projects">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`portfolio__showcase ${project.theme} ${
                index % 2 !== 0 ? "portfolio__showcase--reverse" : ""
              }`}
            >
              <div className="portfolio__visual">
                <div className="portfolio__visual-glow" aria-hidden="true" />

                <span
                  className="portfolio__project-number"
                  aria-hidden="true"
                >
                  {project.number}
                </span>

                <div className="portfolio__browser">
                  <div className="portfolio__browser-top">
                    <div
                      className="portfolio__browser-dots"
                      aria-hidden="true"
                    >
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="portfolio__browser-address">
                      <span className="portfolio__browser-lock">
                        <FaCheck />
                      </span>

                      <span>{project.url.replace("https://", "")}</span>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio__browser-open"
                      aria-label={`Abrir o projeto ${project.title} em uma nova aba`}
                    >
                      <FaExternalLinkAlt aria-hidden="true" />
                    </a>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio__image-link"
                    aria-label={`Acessar o projeto ${project.title}`}
                  >
                    <div className="portfolio__image-viewport">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="portfolio__image"
                      />
                    </div>

                    <span className="portfolio__image-overlay">
                      <span>Acessar projeto</span>
                      <FaExternalLinkAlt aria-hidden="true" />
                    </span>
                  </a>
                </div>

                <div className="portfolio__published-badge">
                  <span className="portfolio__published-icon">
                    <FaCheck />
                  </span>

                  <div>
                    <strong>Projeto publicado</strong>
                    <span>Disponível para acesso</span>
                  </div>
                </div>
              </div>

              <div className="portfolio__content">
                <div className="portfolio__category">
                  <span
                    className="portfolio__category-icon"
                    aria-hidden="true"
                  >
                    {project.icon}
                  </span>

                  <span>{project.category}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="portfolio__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="portfolio__actions">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio__access-button"
                  >
                    <span>Acessar projeto</span>
                    <FaExternalLinkAlt aria-hidden="true" />
                  </a>

                  <span className="portfolio__live-status">
                    <span className="portfolio__live-dot" />
                    Projeto online
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio__footer">
          <div className="portfolio__footer-text">
            <strong>Novos projetos estão em desenvolvimento.</strong>

            <p>
              A Rodrigues Digital continua construindo soluções para empresas e
              profissionais que desejam fortalecer sua presença digital com
              estratégia, identidade e propósito.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="portfolio__button"
          >
            Conhecer todos os projetos
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;