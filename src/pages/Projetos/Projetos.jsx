import { useTranslation } from "react-i18next";

import SEO from "../../components/SEO/SEO";

import EslayneLima from "./components/EslayneLima/EslayneLima";
import JaquelineLeal from "./components/JaquelineLeal/JaquelineLeal";
import LuezesVenturin from "./components/LuezesVenturin/LuezesVenturin";
import MarcelaBraga from "./components/MarcelaBraga/MarcelaBraga";
import ProjectsCTA from "./components/ProjectsCTA/ProjectsCTA";
import ProjectsHero from "./components/ProjectsHero/ProjectsHero";
import RodriguesDigital from "./components/RodriguesDigital/RodriguesDigital";

function Projetos() {
  const { t, i18n } = useTranslation();

  const language = i18n.language?.split("-")[0] || "pt";

  const canonicalMap = {
    pt: "https://rodriguesdigital.tec.br/projetos",
    en: "https://rodriguesdigital.tec.br/en/projects",
    es: "https://rodriguesdigital.tec.br/es/proyectos",
  };

  const canonical =
    canonicalMap[language] || canonicalMap.pt;

  return (
    <>
      <SEO
        title={t("seo.projects.title")}
        description={t("seo.projects.description")}
        canonical={canonical}
        image="https://rodriguesdigital.tec.br/og/projetos.jpg"
        alternates={{
          "pt-BR":
            "https://rodriguesdigital.tec.br/projetos",
          en:
            "https://rodriguesdigital.tec.br/en/projects",
          es:
            "https://rodriguesdigital.tec.br/es/proyectos",
          "x-default":
            "https://rodriguesdigital.tec.br/projetos",
        }}
      />

      <main>
        <ProjectsHero />
        <RodriguesDigital />
        <MarcelaBraga />
        <JaquelineLeal />
        <EslayneLima />
        <LuezesVenturin />
        <ProjectsCTA />
      </main>
    </>
  );
}

export default Projetos;