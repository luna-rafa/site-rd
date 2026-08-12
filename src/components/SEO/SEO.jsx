import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SEO({
  title,
  description,
  image = "https://rodriguesdigital.tec.br/og/rodrigues-digital.jpg",
  type = "website",
  canonical,
  alternates,
}) {
  const location = useLocation();

  useEffect(() => {
    const currentUrl =
      canonical ||
      `https://rodriguesdigital.tec.br${location.pathname}`;

    /* =====================================================
       TITLE
    ===================================================== */

    document.title = title;

    /* =====================================================
       META DESCRIPTION
    ===================================================== */

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      description
    );

    /* =====================================================
       CANONICAL
    ===================================================== */

    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute(
      "href",
      currentUrl
    );

    /* =====================================================
       REMOVE HREFLANG ANTIGOS
    ===================================================== */

    document
      .querySelectorAll(
        'link[rel="alternate"][hreflang]'
      )
      .forEach((link) => link.remove());

    /* =====================================================
       HREFLANG
    ===================================================== */

    if (alternates) {
      Object.entries(alternates).forEach(
        ([language, url]) => {
          const alternate = document.createElement(
            "link"
          );

          alternate.setAttribute(
            "rel",
            "alternate"
          );

          alternate.setAttribute(
            "hreflang",
            language
          );

          alternate.setAttribute(
            "href",
            url
          );

          document.head.appendChild(alternate);
        }
      );
    }

    /* =====================================================
       OPEN GRAPH
    ===================================================== */

    const setMetaProperty = (
      property,
      content
    ) => {
      let meta = document.querySelector(
        `meta[property="${property}"]`
      );

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(
          "property",
          property
        );

        document.head.appendChild(meta);
      }

      meta.setAttribute(
        "content",
        content
      );
    };

    setMetaProperty(
      "og:title",
      title
    );

    setMetaProperty(
      "og:description",
      description
    );

    setMetaProperty(
      "og:type",
      type
    );

    setMetaProperty(
      "og:url",
      currentUrl
    );

    setMetaProperty(
      "og:image",
      image
    );

    setMetaProperty(
      "og:site_name",
      "Rodrigues Digital"
    );

    /* =====================================================
       TWITTER / SOCIAL PREVIEW
    ===================================================== */

    const setMetaName = (
      name,
      content
    ) => {
      let meta = document.querySelector(
        `meta[name="${name}"]`
      );

      if (!meta) {
        meta = document.createElement("meta");

        meta.setAttribute(
          "name",
          name
        );

        document.head.appendChild(meta);
      }

      meta.setAttribute(
        "content",
        content
      );
    };

    setMetaName(
      "twitter:card",
      "summary_large_image"
    );

    setMetaName(
      "twitter:title",
      title
    );

    setMetaName(
      "twitter:description",
      description
    );

    setMetaName(
      "twitter:image",
      image
    );
  }, [
    title,
    description,
    image,
    type,
    canonical,
    alternates,
    location.pathname,
  ]);

  return null;
}

export default SEO;