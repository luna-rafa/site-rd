import processImage from "../../../assets/images/about/rafaela-process.png";

import "./WorkProcess.css";

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Conversamos",
    text: "Entendo sua necessidade, seus objetivos e o contexto atual do seu negócio.",
  },
  {
    id: 2,
    number: "02",
    title: "Planejamos",
    text: "Definimos a estratégia, a estrutura e o melhor caminho para o desenvolvimento do projeto.",
  },
  {
    id: 3,
    number: "03",
    title: "Criamos",
    text: "Desenvolvo o design com foco na identidade da marca e na experiência do usuário.",
  },
  {
    id: 4,
    number: "04",
    title: "Desenvolvemos",
    text: "Transformo o planejamento e o design em uma solução funcional, rápida, segura e responsiva.",
  },
  {
    id: 5,
    number: "05",
    title: "Publicamos",
    text: "Seu projeto vai para o ar com testes, otimizações e todos os detalhes preparados.",
  },
  {
    id: 6,
    number: "06",
    title: "Acompanhamos",
    text: "Ofereço suporte e manutenção para garantir que tudo continue funcionando com excelência.",
  },
];

function WorkProcess() {
  return (
    <section className="work-process-section">
      <div
        className="work-process-decoration work-process-decoration-left"
        aria-hidden="true"
      />

      <div
        className="work-process-decoration work-process-decoration-right"
        aria-hidden="true"
      />

      <div className="container work-process-container">
        <div className="work-process-presentation">
          <div className="work-process-content">
            <span className="work-process-tag">
              Processo
            </span>

            <h2 className="work-process-title">
              Como eu
              <strong>trabalho</strong>
            </h2>

            <div className="work-process-title-line" />

            <p className="work-process-description">
              Um método claro e estratégico para transformar ideias em
              soluções digitais que geram resultados reais para o seu negócio.
            </p>

            <blockquote className="work-process-quote">
              <span
                className="work-process-quote-mark"
                aria-hidden="true"
              >
                “
              </span>

              <p>
                Organização, comunicação e{" "}
                <strong>foco em resultados</strong> em cada etapa do projeto.
              </p>
            </blockquote>
          </div>

          <div className="work-process-visual">
            <div
              className="work-process-visual-glow"
              aria-hidden="true"
            />

            <div className="work-process-photo-frame">
              <div
                className="work-process-photo-background"
                aria-hidden="true"
              />

              <div
                className="work-process-photo-gold-line"
                aria-hidden="true"
              />

              <img
                src={processImage}
                alt="Rafaela Rodrigues trabalhando em um projeto digital"
                className="work-process-photo"
              />
            </div>
          </div>
        </div>

        <div className="work-process-steps-wrapper">
          <div
            className="work-process-connection-line"
            aria-hidden="true"
          />

          <div className="work-process-steps">
            {processSteps.map((step) => (
              <article
                key={step.id}
                className="work-process-card"
              >
                <span className="work-process-number">
                  {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;