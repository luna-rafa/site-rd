import "./Values.css";

const values = [
  {
    id: "01",
    title: "Compromisso",
    description:
      "Cada projeto recebe atenção individual, planejamento estratégico e acompanhamento durante todas as etapas.",
  },
  {
    id: "02",
    title: "Transparência",
    description:
      "Comunicação clara, alinhamentos constantes e decisões construídas em conjunto com cada cliente.",
  },
  {
    id: "03",
    title: "Qualidade",
    description:
      "Cada detalhe é pensado para entregar uma solução elegante, eficiente e preparada para representar sua marca.",
  },
  {
    id: "04",
    title: "Evolução",
    description:
      "A tecnologia muda diariamente. Meu compromisso é evoluir continuamente para entregar sempre as melhores soluções.",
  },
];

function Values() {
  return (
    <section className="values-section">
      <div className="container values-container">
        <div className="values-header">

          <span className="values-tag">
            Nossa Essência
          </span>

          <h2>
            Mais do que desenvolver sites,
            <strong> construo relações de confiança.</strong>
          </h2>

          <div className="values-divider" />

          <p>
            Cada projeto é desenvolvido com dedicação, transparência e foco
            em resultados. Acredito que uma presença digital forte nasce da
            união entre tecnologia, estratégia e um relacionamento próximo
            com cada cliente.
          </p>

        </div>

        <div className="values-grid">

          {values.map((item) => (

            <article
              key={item.id}
              className="value-card"
            >

              <span>{item.id}</span>

              <div className="value-line" />

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </article>

          ))}

        </div>
      </div>
    </section>
  );
}

export default Values;