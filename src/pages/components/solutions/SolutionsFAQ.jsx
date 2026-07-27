import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, MessageCircle } from "lucide-react";

import faqImage from "../../../assets/images/solutions/solutions-faq.webp";

import "./SolutionsFAQ.css";

export default function SolutionsFAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const questions = t("solutions.faq.questions", {
    returnObjects: true,
  });

  const whatsappMessage = encodeURIComponent(
    "Olá, Rafaela! Gostaria de conversar sobre um projeto para minha empresa."
  );

  const handleToggle = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="solutions-faq">
      <div className="solutions-faq__container">
        <div className="solutions-faq__content">
          <header className="solutions-faq__header">
            <span className="solutions-faq__eyebrow">
              {t("solutions.faq.eyebrow")}
            </span>

            <h2 className="solutions-faq__title">
              {t("solutions.faq.titlePrefix")}{" "}
              <span>{t("solutions.faq.titleHighlight")}</span>
            </h2>

            <p className="solutions-faq__description">
              {t("solutions.faq.description")}
            </p>
          </header>

          <div className="solutions-faq__list">
            {Array.isArray(questions) &&
              questions.map((item, index) => {
                const isOpen = openIndex === index;
                const answerId = `solutions-faq-answer-${index}`;
                const questionId = `solutions-faq-question-${index}`;

                return (
                  <article
                    key={`${item.question}-${index}`}
                    className={`solutions-faq__item ${
                      isOpen ? "solutions-faq__item--open" : ""
                    }`}
                  >
                    <button
                      id={questionId}
                      type="button"
                      className="solutions-faq__question"
                      onClick={() => handleToggle(index)}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                    >
                      <span>{item.question}</span>

                      <ChevronDown
                        size={20}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </button>

                    {isOpen && (
                      <div
                        id={answerId}
                        className="solutions-faq__answer"
                        role="region"
                        aria-labelledby={questionId}
                      >
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </article>
                );
              })}
          </div>

          <div className="solutions-faq__contact">
            <div className="solutions-faq__contact-text">
              <span className="solutions-faq__contact-label">
                {t("solutions.faq.contact.label")}
              </span>

              <h3>{t("solutions.faq.contact.title")}</h3>

              <p>{t("solutions.faq.contact.description")}</p>
            </div>

            <a
              href={`https://wa.me/5527995749915?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="solutions-faq__button"
              aria-label={t("solutions.faq.contact.buttonAria")}
            >
              <MessageCircle
                size={19}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <span>{t("solutions.faq.contact.button")}</span>
            </a>
          </div>
        </div>

        <aside className="solutions-faq__visual">
          <div className="solutions-faq__image-wrapper">
            <img
              src={faqImage}
              alt={t("solutions.faq.imageAlt")}
              className="solutions-faq__image"
            />

            <div className="solutions-faq__image-overlay" />

            <div className="solutions-faq__image-card">
              <span>{t("solutions.faq.imageCard.label")}</span>

              <strong>
                {t("solutions.faq.imageCard.title")}
              </strong>
            </div>
          </div>

          <div className="solutions-faq__visual-detail">
            <span className="solutions-faq__visual-line" />

            <p>
              Estratégia, clareza e acompanhamento próximo em cada
              decisão.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}