import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "./locales/pt.json";
import en from "./locales/en.json";
import es from "./locales/es.json";

/* =========================================================
   IDIOMA A PARTIR DA URL
========================================================= */

function getLanguageFromPath() {
  if (typeof window === "undefined") {
    return "pt";
  }

  const pathname = window.location.pathname;

  if (
    pathname === "/en" ||
    pathname.startsWith("/en/")
  ) {
    return "en";
  }

  if (
    pathname === "/es" ||
    pathname.startsWith("/es/")
  ) {
    return "es";
  }

  return "pt";
}

/* =========================================================
   IDIOMA INICIAL
========================================================= */

const urlLanguage = getLanguageFromPath();

const savedLanguage =
  localStorage.getItem("rd-language");

/*
  A URL tem prioridade.

  /             → pt
  /sobre        → pt
  /projetos     → pt

  /en           → en
  /en/about     → en
  /en/projects  → en

  /es           → es
  /es/sobre     → es
  /es/proyectos → es
*/

const initialLanguage =
  urlLanguage ||
  savedLanguage ||
  "pt";

/* =========================================================
   I18NEXT
========================================================= */

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: pt,
      },

      en: {
        translation: en,
      },

      es: {
        translation: es,
      },
    },

    lng: initialLanguage,

    fallbackLng: "pt",

    supportedLngs: [
      "pt",
      "en",
      "es",
    ],

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

/* =========================================================
   PERSISTÊNCIA
========================================================= */

i18n.on(
  "languageChanged",
  (language) => {
    localStorage.setItem(
      "rd-language",
      language
    );

    document.documentElement.lang =
      language;
  }
);

/* Define idioma do HTML na primeira carga */

document.documentElement.lang =
  initialLanguage;

export default i18n;