import {
  FaArrowRight,
  FaCheck,
  FaCode,
  FaComments,
  FaHeadset,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa6";

import processImage from "../../assets/images/process/rafaela-processo.png";

import "./Process.css";

const processSteps = [
  {
    number: "01",
    icon: <FaComments />,
    title: "Reunião inicial",
    description:
      "Conheço sua história, seus objetivos, suas necessidades e o momento atual do seu negócio.",
  },
  {
    number: "02",
    icon: <FaLightbulb />,
    title: "Planejamento",
    description:
      "Definimos a estrutura, o conteúdo, a estratégia e a direção visual que orientarão o projeto.",
  },
  {
    number: "03",
    icon: <FaCode />,
    title: "Desenvolvimento",
    description:
      "A solução começa a ganhar forma com tecnologia, identidade e atenção a cada detalhe.",
  },
  {
    number: "04",
    icon: <FaCheck />,
    title: "Ajustes",
    description:
      "Você acompanha o projeto, avalia o resultado e solicita os ajustes previstos no planejamento.",
  },
  {
    number: "05",
    icon: <FaRocket />,
    title: "Publicação",
    description:
      "Realizo os testes finais, as configurações necessárias e a publicação da sua presença digital.",
  },
  {
    number: "06",
    icon: <FaHeadset />,
    title: "Suporte",
    description:
      "Após a entrega, você recebe orientações e acompanhamento para utilizar sua nova solução.",
  },
];

function Process() {
  return (
    <section className="process">
      <div
        className="process__glow process__glow--left"
        aria-hidden="true"
      />

      <div
        className="process__glow process__glow--right"
        aria-hidden="true"
      />

      <div className="container process__container">
        <div className="process__presentation">
          <div className="process__content">
            <span className="process__eyebrow">
              Como o projeto acontece
            </span>

            <h2 className="process__title">
              Um processo claro, próximo e{" "}
              <span>bem estruturado.</span>
            </h2>

            <div className="process__introduction">
              <p>
                Você acompanha cada etapa e sabe exatamente como o projeto está
                evoluindo.
              </p>

              <p>
                Da primeira conversa à publicação, todas as decisões são
                tomadas com transparência, estratégia e atenção aos seus
                objetivos.
              </p>
            </div>

            <div className="process__promise">
              <div
                className="process__promise-icon"
                aria-hidden="true"
              >
                <FaComments />
              </div>

              <div>
                <strong>Atendimento próximo e consultivo</strong>

                <span>
                  Cada projeto começa com escuta, compreensão e planejamento.
                </span>
              </div>
            </div>
          </div>

          <div className="process__visual">
            <div
              className="process__visual-glow"
              aria-hidden="true"
            />

            <div
              className="process__visual-line"
              aria-hidden="true"
            />

            <div className="process__image-frame">
              <img
                src={processImage}
                alt="Rafaela Rodrigues atendendo um cliente e acompanhando um projeto pelo tablet"
                className="process__image"
              />
            </div>

            <div className="process__image-card">
              <span>Rodrigues Digital</span>

              <strong>
                Comunicação transparente em todas as etapas.
              </strong>
            </div>
          </div>
        </div>

        <div className="process__timeline">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="process__step"
            >
              <div className="process__step-header">
                <span
                  className="process__number"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <div
                  className="process__icon"
                  aria-hidden="true"
                >
                  {step.icon}
                </div>
              </div>

              <div className="process__step-content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              <div
                className="process__step-arrow"
                aria-hidden="true"
              >
                <FaArrowRight />
              </div>
            </article>
          ))}
        </div>

        <div className="process__message">
          <div
            className="process__message-icon"
            aria-hidden="true"
          >
            <FaCheck />
          </div>

          <div className="process__message-content">
            <span className="process__message-label">
              Acompanhamento em cada etapa
            </span>

            <strong>
              Você não recebe apenas um projeto pronto no final.
            </strong>

            <p>
              Participa das decisões, acompanha a evolução e entende como cada
              escolha contribui para o resultado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;