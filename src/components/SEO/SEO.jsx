import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SITE_URL = "https://rodriguesdigital.tec.br";

const languageConfig = {
  pt: {
    htmlLang: "pt-BR",
    pathPrefix: "",
    locale: "pt_BR",
  },
  en: {
    htmlLang: "en",
    pathPrefix: "/en",
    locale: "en_US",
  },
  es: {
    htmlLang: "es",
    pathPrefix: "/es",
    locale: "es_ES",
  },
};

function updateMetaTag(selector, attribute, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");

    if (attribute === "name") {
      element.setAttribute("name", selector.replace('[name="', "").replace('"]', ""));
    }

    if (attribute === "property") {
      element.setAttribute(
        "property",
        selector.replace('[property="', "").replace('"]', ""),
      );
    }

    document.head.appendChild(element);
  }

  element.setAttribute("content", value);
}

function updateLinkTag(rel, href, hreflang = null) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;

  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);

    if (hreflang) {
      element.setAttribute("hreflang", hreflang);
    }

    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function removeLanguagePrefix(pathname) {
  return pathname
    .replace(/^\/en(?=\/|$)/, "")
    .replace(/^\/es(?=\/|$)/, "") || "/";
}

function buildLocalizedUrl(language, pathname) {
  const basePath = removeLanguagePrefix(pathname);
  const prefix = languageConfig[language].pathPrefix;

  if (basePath === "/") {
    return `${SITE_URL}${prefix || "/"}`;
  }

  return `${SITE_URL}${prefix}${basePath}`;
}

function SEO() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const currentLanguage = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "pt"
  ).slice(0, 2);

  useEffect(() => {
    const language =
      languageConfig[currentLanguage] ? currentLanguage : "pt";

    const config = languageConfig[language];

    const currentUrl = buildLocalizedUrl(language, location.pathname);

    const title = t("seo.home.title");
    const description = t("seo.home.description");

    document.documentElement.lang = config.htmlLang;
    document.title = title;

    updateMetaTag(
      'meta[name="description"]',
      "name",
      description,
    );

    updateMetaTag(
      'meta[name="author"]',
      "name",
      "Rodrigues Digital",
    );

    updateMetaTag(
      'meta[property="og:title"]',
      "property",
      title,
    );

    updateMetaTag(
      'meta[property="og:description"]',
      "property",
      description,
    );

    updateMetaTag(
      'meta[property="og:url"]',
      "property",
      currentUrl,
    );

    updateMetaTag(
      'meta[property="og:locale"]',
      "property",
      config.locale,
    );

    updateMetaTag(
      'meta[property="og:image"]',
      "property",
      `${SITE_URL}/og-image.png`,
    );

    updateMetaTag(
      'meta[name="twitter:title"]',
      "name",
      title,
    );

    updateMetaTag(
      'meta[name="twitter:description"]',
      "name",
      description,
    );

    updateMetaTag(
      'meta[name="twitter:image"]',
      "name",
      `${SITE_URL}/og-image.png`,
    );

    updateLinkTag("canonical", currentUrl);

    updateLinkTag(
      "alternate",
      buildLocalizedUrl("pt", location.pathname),
      "pt-BR",
    );

    updateLinkTag(
      "alternate",
      buildLocalizedUrl("en", location.pathname),
      "en",
    );

    updateLinkTag(
      "alternate",
      buildLocalizedUrl("es", location.pathname),
      "es",
    );

    updateLinkTag(
      "alternate",
      buildLocalizedUrl("pt", location.pathname),
      "x-default",
    );
  }, [currentLanguage, location.pathname, t]);

  return null;
}

export default SEO;