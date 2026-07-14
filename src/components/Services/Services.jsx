import { Link } from "react-router-dom";
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

const services = [
  {
    number: "01",
    icon: <FaGlobe />,
    title: "Site Institucional",
    text: "Apresente sua empresa com credibilidade, fortaleça sua marca e facilite o contato com seus clientes.",
    benefit: "Credibilidade e presença profissional",
  },
  {
    number: "02",
    icon: <FaBullseye />,
    title: "Landing Page",
    text: "Páginas desenvolvidas para campanhas, lançamentos, eventos e geração de novos clientes.",
    benefit: "Foco em conversão e resultados",
  },
  {
    number: "03",
    icon: <FaUserTie />,
    title: "Portfólio Profissional",
    text: "Valorize sua trajetória, seus projetos e suas competências com uma apresentação moderna e estratégica.",
    benefit: "Destaque para sua experiência",
  },
  {
    number: "04",
    icon: <FaFileAlt />,
    title: "Mídia Kit",
    text: "Apresente sua autoridade e aumente suas oportunidades de parcerias, patrocínios e negócios.",
    benefit: "Mais oportunidades comerciais",
  },
  {
    number: "05",
    icon: <FaChartLine />,
    title: "SEO Inicial",
    text: "Prepare seu site para os mecanismos de busca e aumente as chances de ser encontrado no Google.",
    benefit: "Visibilidade desde o início",
  },
  {
    number: "06",
    icon: <FaShieldAlt />,
    title: "Manutenção de Sites",
    text: "Atualizações, backups, monitoramento e suporte contínuo para manter seu site seguro e funcionando.",
    benefit: "Segurança e acompanhamento",
  },
];

function Services() {
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
              Soluções digitais
            </span>

            <h2 className="services__title">
              Soluções desenvolvidas para fortalecer sua{" "}
              <span>presença digital.</span>
            </h2>
          </div>

          <div className="services__introduction">
            <p>
              Cada empresa possui uma necessidade diferente. Por isso,
              desenvolvo soluções personalizadas que unem estratégia,
              identidade visual, tecnologia e experiência.
            </p>

            <p>
              O objetivo é transmitir credibilidade, gerar oportunidades e
              representar a qualidade do seu negócio em cada detalhe.
            </p>
          </div>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article
              key={service.title}
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
                  aria-label={`Conhecer mais sobre ${service.title}`}
                >
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="services__footer">
          <div className="services__footer-icon" aria-hidden="true">
            <FaBullseye />
          </div>

          <div className="services__footer-text">
            <strong>Precisa de um projeto personalizado?</strong>

            <p>
              Nem toda necessidade se encaixa em um modelo pronto. Vamos
              conversar sobre os objetivos do seu negócio e desenvolver uma
              presença digital pensada para gerar resultados.
            </p>
          </div>

          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="services__button"
          >
            <FaWhatsapp aria-hidden="true" />

            <span>Solicitar reunião</span>

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