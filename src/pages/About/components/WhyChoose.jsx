import "./WhyChoose.css";

function StrategyIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle
        cx="22"
        cy="24"
        r="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
      />

      <circle
        cx="22"
        cy="24"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
      />

      <circle
        cx="22"
        cy="24"
        r="2.5"
        fill="currentColor"
      />

      <path
        d="m24 22 16-16M33 6h7v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TechnologyIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect
        x="7"
        y="8"
        width="34"
        height="25"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
      />

      <path
        d="M18 40h12M24 33v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      <path
        d="m17 19 5 5-5 5M27 29h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CustomIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M24 6 8 14v11c0 9.8 6.4 16.8 16 21 9.6-4.2 16-11.2 16-21V14L24 6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="m17 25 4.5 4.5L31 19"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ResultsIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M8 39V25M18 39V18M28 39V12M38 39V7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="m8 21 10-7 9 3 12-11"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M32 6h7v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const differentials = [
  {
    id: 1,
    icon: <StrategyIcon />,
    number: "01",
    title: "Estratégia antes do código",
    text: "Cada projeto começa com planejamento, análise e definição clara dos objetivos da marca.",
  },
  {
    id: 2,
    icon: <TechnologyIcon />,
    number: "02",
    title: "Experiência em Tecnologia",
    text: "Mais de 10 anos de atuação em ambientes corporativos, infraestrutura, sistemas e cloud.",
  },
  {
    id: 3,
    icon: <CustomIcon />,
    number: "03",
    title: "Soluções personalizadas",
    text: "Cada entrega é construída de acordo com a identidade, o momento e a necessidade de cada cliente.",
  },
  {
    id: 4,
    icon: <ResultsIcon />,
    number: "04",
    title: "Compromisso com resultados",
    text: "Soluções digitais pensadas para fortalecer marcas, transmitir credibilidade e apoiar o crescimento.",
  },
];

function WhyChoose() {
  return (
    <section className="why-choose-section">
      <div className="why-choose-decoration why-choose-decoration-left" />
      <div className="why-choose-decoration why-choose-decoration-right" />

      <div className="container why-choose-container">
        <header className="why-choose-header">
          <span className="why-choose-tag">
            DIFERENCIAIS
          </span>

          <h2 className="why-choose-title">
            Por que escolher 
            <strong> Rodrigues Digital?</strong>
          </h2>

          <div className="why-choose-line" />

          <p className="why-choose-description">
            Tecnologia, estratégia e atendimento próximo para construir
            presenças digitais que transmitam confiança e gerem oportunidades.
          </p>
        </header>

        <div className="why-choose-grid">
          {differentials.map((item) => (
            <article
              key={item.id}
              className="why-choose-card"
            >
              <span className="why-choose-number">
                {item.number}
              </span>

              <div className="why-choose-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;