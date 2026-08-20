import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Mail,
  MessageSquareText,
  UserRound,
} from "lucide-react";

import { useTranslation } from "react-i18next";

import "./ContactForm.css";

function ContactForm() {
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get("name");
    const company = form.get("company");
    const email = form.get("email");
    const whatsapp = form.get("whatsapp");
    const service = form.get("service");
    const timeline = form.get("timeline");
    const message = form.get("message");

    const text = `
Olá, Rafaela!

Gostaria de conversar sobre um projeto.

Nome: ${name}
Empresa/Marca: ${company || "Não informado"}
E-mail: ${email}
WhatsApp: ${whatsapp || "Não informado"}
Solução de interesse: ${service}
Prazo para começar: ${timeline}

Sobre o projeto:
${message}
    `.trim();

    const whatsappUrl =
      `https://wa.me/5527995749915?text=${encodeURIComponent(
        text
      )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="contact-form-section"
      aria-labelledby="contact-form-title"
    >
      <div className="contact-form-section__container">
        {/* ==========================================
            INTRODUÇÃO
        ========================================== */}
        <div className="contact-form-section__intro">
          <span className="contact-form-section__eyebrow">
            {t("contactPage.form.eyebrow")}
          </span>

          <h2 id="contact-form-title">
            {t("contactPage.form.title.first")}

            <span>
              {t("contactPage.form.title.highlight")}
            </span>
          </h2>

          <p>
            {t("contactPage.form.description")}
          </p>

          <div className="contact-form-section__steps">
            <div>
              <span>01</span>

              <div>
                <strong>
                  {t(
                    "contactPage.form.steps.context.title"
                  )}
                </strong>

                <p>
                  {t(
                    "contactPage.form.steps.context.description"
                  )}
                </p>
              </div>
            </div>

            <div>
              <span>02</span>

              <div>
                <strong>
                  {t(
                    "contactPage.form.steps.analysis.title"
                  )}
                </strong>

                <p>
                  {t(
                    "contactPage.form.steps.analysis.description"
                  )}
                </p>
              </div>
            </div>

            <div>
              <span>03</span>

              <div>
                <strong>
                  {t(
                    "contactPage.form.steps.direction.title"
                  )}
                </strong>

                <p>
                  {t(
                    "contactPage.form.steps.direction.description"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            FORMULÁRIO
        ========================================== */}
        <div className="contact-form-section__card">
          <div className="contact-form-section__card-header">
            <span>
              {t("contactPage.form.card.eyebrow")}
            </span>

            <h3>
              {t("contactPage.form.card.title")}
            </h3>

            <p>
              {t("contactPage.form.card.description")}
            </p>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="contact-form__grid">
              {/* NOME */}
              <label className="contact-form__field">
                <span>
                  <UserRound aria-hidden="true" />
                  {t("contactPage.form.fields.name")}
                </span>

                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder={t(
                    "contactPage.form.placeholders.name"
                  )}
                />
              </label>

              {/* EMPRESA */}
              <label className="contact-form__field">
                <span>
                  <BriefcaseBusiness
                    aria-hidden="true"
                  />
                  {t(
                    "contactPage.form.fields.company"
                  )}
                </span>

                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  placeholder={t(
                    "contactPage.form.placeholders.company"
                  )}
                />
              </label>

              {/* EMAIL */}
              <label className="contact-form__field">
                <span>
                  <Mail aria-hidden="true" />
                  {t("contactPage.form.fields.email")}
                </span>

                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="seuemail@empresa.com"
                />
              </label>

              {/* WHATSAPP */}
              <label className="contact-form__field">
                <span>
                  <MessageSquareText
                    aria-hidden="true"
                  />
                  {t(
                    "contactPage.form.fields.whatsapp"
                  )}
                </span>

                <input
                  type="tel"
                  name="whatsapp"
                  autoComplete="tel"
                  placeholder="(27) 99999-9999"
                />
              </label>

              {/* SOLUÇÃO */}
              <label className="contact-form__field">
                <span>
                  <BriefcaseBusiness
                    aria-hidden="true"
                  />
                  {t(
                    "contactPage.form.fields.service"
                  )}
                </span>

                <select
                  name="service"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t(
                      "contactPage.form.placeholders.service"
                    )}
                  </option>

                  <option value="Site Institucional">
                    {t(
                      "contactPage.form.services.website"
                    )}
                  </option>

                  <option value="Landing Page">
                    {t(
                      "contactPage.form.services.landing"
                    )}
                  </option>

                  <option value="Portfólio Profissional">
                    {t(
                      "contactPage.form.services.portfolio"
                    )}
                  </option>

                  <option value="Mídia Kit">
                    {t(
                      "contactPage.form.services.mediaKit"
                    )}
                  </option>

                  <option value="SEO">
                    {t(
                      "contactPage.form.services.seo"
                    )}
                  </option>

                  <option value="Manutenção">
                    {t(
                      "contactPage.form.services.maintenance"
                    )}
                  </option>

                  <option value="Outro">
                    {t(
                      "contactPage.form.services.other"
                    )}
                  </option>
                </select>
              </label>

              {/* PRAZO */}
              <label className="contact-form__field">
                <span>
                  <CalendarDays
                    aria-hidden="true"
                  />

                  {t(
                    "contactPage.form.fields.timeline"
                  )}
                </span>

                <select
                  name="timeline"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t(
                      "contactPage.form.placeholders.timeline"
                    )}
                  </option>

                  <option value="O quanto antes">
                    {t(
                      "contactPage.form.timeline.now"
                    )}
                  </option>

                  <option value="Próximos 30 dias">
                    {t(
                      "contactPage.form.timeline.month"
                    )}
                  </option>

                  <option value="Próximos 3 meses">
                    {t(
                      "contactPage.form.timeline.quarter"
                    )}
                  </option>

                  <option value="Estou pesquisando">
                    {t(
                      "contactPage.form.timeline.research"
                    )}
                  </option>
                </select>
              </label>
            </div>

            {/* MENSAGEM */}
            <label className="contact-form__field contact-form__field--full">
              <span>
                <MessageSquareText
                  aria-hidden="true"
                />

                {t(
                  "contactPage.form.fields.message"
                )}
              </span>

              <textarea
                name="message"
                required
                rows="7"
                placeholder={t(
                  "contactPage.form.placeholders.message"
                )}
              />
            </label>

            <div className="contact-form__footer">
              <p>
                {t("contactPage.form.privacy")}
              </p>

              <button type="submit">
                {t("contactPage.form.button")}

                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;