import {
  ArrowRight,
  Mail,
  MessageCircle,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

import "./ContactHero.css";

function ContactHero() {
  const { t } = useTranslation();

  return (
    <section
      className="contact-hero"
      aria-labelledby="contact-hero-title"
    >
      {/* =====================================================
          ELEMENTOS DE FUNDO
      ===================================================== */}
      <div
        className="contact-hero__glow contact-hero__glow--blue"
        aria-hidden="true"
      />

      <div
        className="contact-hero__glow contact-hero__glow--gold"
        aria-hidden="true"
      />

      <div className="contact-hero__container">
        {/* ===================================================
            CONTEÚDO PRINCIPAL
        =================================================== */}
        <div className="contact-hero__content">
          <span className="contact-hero__eyebrow">
            {t("contactPage.hero.eyebrow")}
          </span>

          <h1
            id="contact-hero-title"
            className="contact-hero__title"
          >
            {t("contactPage.hero.title.first")}

            <span>
              {t("contactPage.hero.title.highlight")}
            </span>
          </h1>

          <p className="contact-hero__description">
            {t("contactPage.hero.description")}
          </p>

          {/* =================================================
              BOTÕES
          ================================================= */}
          <div className="contact-hero__actions">
            <a
              href="https://wa.me/5527995749915"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-hero__button contact-hero__button--primary"
              aria-label={t(
                "contactPage.hero.channels.whatsappAria"
              )}
            >
              <MessageCircle aria-hidden="true" />

              <span>
                {t(
                  "contactPage.hero.channels.whatsapp"
                )}
              </span>

              <ArrowRight aria-hidden="true" />
            </a>

            <a
              href="mailto:rafaela.mentordigital@gmail.com"
              className="contact-hero__button contact-hero__button--secondary"
              aria-label={t(
                "contactPage.hero.channels.emailAria"
              )}
            >
              <Mail aria-hidden="true" />

              <span>
                {t("contactPage.hero.channels.email")}
              </span>
            </a>
          </div>

          {/* =================================================
              INSTAGRAM
          ================================================= */}
          <div className="contact-hero__social">
            <span>
              {t("contactPage.hero.social.label")}
            </span>

            <a
              href="https://www.instagram.com/rodriguesdigital.oficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t(
                "contactPage.hero.social.instagramAria"
              )}
            >
              <FaInstagram aria-hidden="true" />

              <span>
                @rodriguesdigital.oficial
              </span>
            </a>
          </div>
        </div>

        {/* ===================================================
            PAINEL DE CONTATO
        =================================================== */}
        <div className="contact-hero__panel">
          <span className="contact-hero__panel-label">
            {t("contactPage.hero.panel.eyebrow")}
          </span>

          <h2>
            {t("contactPage.hero.panel.title")}
          </h2>

          <p>
            {t("contactPage.hero.panel.description")}
          </p>

          <div className="contact-hero__panel-items">
            {/* WHATSAPP */}
            <div>
              <MessageCircle aria-hidden="true" />

              <span>
                <strong>WhatsApp</strong>
                (27) 99574-9915
              </span>
            </div>

            {/* E-MAIL */}
            <div>
              <Mail aria-hidden="true" />

              <span>
                <strong>E-mail</strong>
                rafaela.mentordigital@gmail.com
              </span>
            </div>

            {/* INSTAGRAM */}
            <div>
              <FaInstagram aria-hidden="true" />

              <span>
                <strong>Instagram</strong>
                @rodriguesdigital.oficial
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;