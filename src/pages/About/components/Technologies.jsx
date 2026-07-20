import "./Technologies.css";

const technologyGroups = [
  {
    id: 1,
    title: "Desenvolvimento",
    items: [
      "React",
      "Vite",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsividade",
    ],
  },
  {
    id: 2,
    title: "Infraestrutura e Cloud",
    items: [
      "Microsoft 365",
      "Azure",
      "Cloud",
      "Servidores",
      "Redes",
      "Virtualização",
    ],
  },
  {
    id: 3,
    title: "Performance e Presença Digital",
    items: [
      "SEO Inicial",
      "Git",
      "GitHub",
      "Otimização",
      "Segurança",
      "Performance",
    ],
  },
];

function Technologies() {
  return (
    <section className="technologies-section">
      <div
        className="technologies-decoration technologies-decoration-left"
        aria-hidden="true"
      />

      <div
        className="technologies-decoration technologies-decoration-right"
        aria-hidden="true"
      />

      <div className="container technologies-container">
        <header className="technologies-header">
          <span className="technologies-tag">
            Tecnologia
          </span>

          <h2 className="technologies-title">
            Ferramentas que transformam estratégia em
            <strong> presença digital</strong>
          </h2>

          <div className="technologies-line" />

          <p className="technologies-description">
            Utilizo tecnologias modernas e soluções confiáveis para
            desenvolver projetos seguros, rápidos, responsivos e preparados
            para crescer.
          </p>
        </header>

        <div className="technologies-groups">
          {technologyGroups.map((group) => (
            <article
              key={group.id}
              className="technologies-group"
            >
              <div className="technologies-group-header">
                <span className="technologies-group-number">
                  0{group.id}
                </span>

                <h3>{group.title}</h3>
              </div>

              <div className="technologies-list">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="technologies-badge"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="technologies-note">
          <span className="technologies-note-line" />

          <p>
            Cada tecnologia é escolhida de acordo com a necessidade,
            a estratégia e os objetivos de cada projeto.
          </p>

          <span className="technologies-note-line" />
        </div>
      </div>
    </section>
  );
}

export default Technologies;