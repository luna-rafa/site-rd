import { useTranslation } from "react-i18next";

import SEO from "../../components/SEO/SEO";


import ContactForm from "./components/ContactForm/ContactForm";
import ContactHero from "./components/ContactHero/ContactHero";

function Contato() {
  const { t, i18n } = useTranslation();

  const language = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "pt"
  ).slice(0, 2);

  const canonicalMap = {
    pt: "https://rodriguesdigital.tec.br/contato",
    en: "https://rodriguesdigital.tec.br/en/contact",
    es: "https://rodriguesdigital.tec.br/es/contacto",
  };

  const canonical =
    canonicalMap[language] ||
    canonicalMap.pt;

  return (
    <>
      <SEO
        title={t("seo.contact.title")}
        description={t("seo.contact.description")}
        canonical={canonical}
        image="https://rodriguesdigital.tec.br/og/contato.jpg"
        alternates={{
          "pt-BR":
            "https://rodriguesdigital.tec.br/contato",

          en:
            "https://rodriguesdigital.tec.br/en/contact",

          es:
            "https://rodriguesdigital.tec.br/es/contacto",

          "x-default":
            "https://rodriguesdigital.tec.br/contato",
        }}
      />

      <main className="contact-page">
        <ContactHero />
        <ContactForm />
          </main>
    </>
  );
}

export default Contato;