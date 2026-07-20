import "./Story.css";

function Story() {
  const timeline = [
    {
      year: "01",
      title: "Tecnologia",
      text: "O início da minha trajetória na Tecnologia da Informação, desenvolvendo uma base sólida de conhecimento técnico."
    },
    {
      year: "02",
      title: "Infraestrutura",
      text: "Experiência com servidores, redes, virtualização, segurança e ambientes corporativos de diferentes segmentos."
    },
    {
      year: "03",
      title: "Cloud",
      text: "Atuação com Microsoft 365, Azure e soluções em nuvem, apoiando empresas em seus processos de transformação digital."
    },
    {
      year: "04",
      title: "Desenvolvimento",
      text: "Percebi que muitas empresas excelentes não conseguiam transmitir sua credibilidade no ambiente digital."
    },
    {
      year: "05",
      title: "Rodrigues Digital",
      text: "Hoje uno tecnologia, estratégia e design para construir presenças digitais profissionais que fortalecem marcas."
    }
  ];

  return (
    <section className="story-section">

      <div className="container story-container">

        <div className="story-content">

          <span className="story-tag">
            TRAJETÓRIA
          </span>

          <h2 className="story-title">
            Minha história
          </h2>

          <div className="story-line"></div>

          <h3 className="story-subtitle">
            Minha trajetória começou muito antes da Rodrigues Digital.
          </h3>

          <p>
            Sempre fui movida pela curiosidade e pelo desejo de entender como
            a tecnologia pode resolver problemas reais.
          </p>

          <p>
            Ao longo de mais de <strong>10 anos</strong>, atuei em diferentes
            áreas da Tecnologia da Informação, desenvolvendo soluções para
            empresas, administrando servidores, infraestrutura, ambientes em
            nuvem e participando de projetos que exigiam estratégia,
            organização e atenção aos detalhes.
          </p>

          <p>
            Foi durante essa caminhada que percebi algo em comum: muitas
            empresas entregavam excelentes serviços, mas não conseguiam
            transmitir toda essa qualidade na internet.
          </p>

          <p>
            Foi assim que nasceu a <strong>Rodrigues Digital</strong>.
          </p>

          <p>
            Hoje aplico toda minha experiência para criar sites, landing pages
            e soluções digitais que ajudam empresas e profissionais a
            transmitirem credibilidade, autoridade e confiança.
          </p>

        </div>

        <div className="story-timeline">

          {timeline.map((item) => (

            <div
              className="timeline-item"
              key={item.year}
            >

              <div className="timeline-dot">

                <span>
                  {item.year}
                </span>

              </div>

              <div className="timeline-content">

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Story;