import {
  ArrowRight,
  Check,
  Clock3,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import "./SolutionsCTA.css";

const WHATSAPP_NUMBER = "5527995749915";

export default function SolutionsCTA() {
  const { t } = useTranslation();
  const location = useLocation();

  const getProjectsPath = () => {
    if (location.pathname.startsWith("/en")) {
      return "/en/projects";
    }

    if (location.pathname.startsWith("/es")) {
      return "/es/proyectos";
    }

    return "/projetos";
  };

  const whatsappMessage = encodeURIComponent(
    t("solutions.cta.whatsappMessage")
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const meetingItems = t("solutions.cta.meeting.items", {
    returnObjects: true,
  });

  const stats = [
    {
      value: "+10",
      label: t("solutions.cta.stats.experience"),
    },
    {
      value: "100%", 
      label: t("solutions.cta.stats.custom"),
    },
    {
      value: "3",
      label: t("solutions.cta.stats.languages"),
    },
  ];

  return (
    <section className="solutions-cta">
      <div className="solutions-cta__container">
        <div
          className="solutions-cta__glow solutions-cta__glow--gold"
          aria-hidden="true"
        />

        <div
          className="solutions-cta__glow solutions-cta__glow--blue"
          aria-hidden="true"
        />

        <div
          className="solutions-cta__circle solutions-cta__circle--top"
          aria-hidden="true"
        />

        <div
          className="solutions-cta__circle solutions-cta__circle--bottom"
          aria-hidden="true"
        />

        <div className="solutions-cta__grid">
          <div className="solutions-cta__content">
            <div className="solutions-cta__eyebrow">
              <span className="solutions-cta__eyebrow-icon">
                <Sparkles size={15} strokeWidth={2} />
              </span>

              <span>{t("solutions.cta.eyebrow")}</span>
            </div>

            <h2 className="solutions-cta__title">
              {t("solutions.cta.titlePrefix")}{" "}
              <span>{t("solutions.cta.titleHighlight")}</span>
            </h2>

            <p className="solutions-cta__description">
              {t("solutions.cta.description")}
            </p>

            <div className="solutions-cta__benefits">
              <span>{t("solutions.cta.benefits.first")}</span>
              <span>{t("solutions.cta.benefits.second")}</span>
              <span>{t("solutions.cta.benefits.third")}</span>
            </div>

            <div className="solutions-cta__actions">
              <a
                className="solutions-cta__button solutions-cta__button--primary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={t("solutions.cta.buttons.meetingAria")}
              >
                <MessageCircle size={20} strokeWidth={2} />

                <span>{t("solutions.cta.buttons.meeting")}</span>

                <ArrowRight
                  className="solutions-cta__button-arrow"
                  size={18}
                  strokeWidth={2}
                />
              </a>

              <Link
                className="solutions-cta__button solutions-cta__button--secondary"
                to={getProjectsPath()}
                aria-label={t("solutions.cta.buttons.projectsAria")}
              >
                <span>{t("solutions.cta.buttons.projects")}</span>

                <ArrowRight
                  className="solutions-cta__button-arrow"
                  size={18}
                  strokeWidth={2}
                />
              </Link>
            </div>
          </div>

          <aside className="solutions-cta__meeting-card">
            <div className="solutions-cta__meeting-card-header">
              <div className="solutions-cta__meeting-icon">
                <MessageCircle size={22} strokeWidth={1.8} />
              </div>

              <div>
                <span>{t("solutions.cta.meeting.label")}</span>
                <h3>{t("solutions.cta.meeting.title")}</h3>
              </div>
            </div>

            <p className="solutions-cta__meeting-description">
              {t("solutions.cta.meeting.description")}
            </p>

            <ul className="solutions-cta__meeting-list">
              {Array.isArray(meetingItems) &&
                meetingItems.map((item) => (
                  <li key={item}>
                    <span>
                      <Check size={15} strokeWidth={2.5} />
                    </span>

                    {item}
                  </li>
                ))}
            </ul>

            <div className="solutions-cta__meeting-footer">
              <div className="solutions-cta__meeting-time">
                <Clock3 size={18} strokeWidth={1.8} />

                <div>
                  <span>{t("solutions.cta.meeting.durationLabel")}</span>
                  <strong>{t("solutions.cta.meeting.duration")}</strong>
                </div>
              </div>

              <span className="solutions-cta__meeting-free">
                {t("solutions.cta.meeting.note")}
              </span>
            </div>
          </aside>
        </div>

        <div className="solutions-cta__stats">
          {stats.map((stat) => (
            <article className="solutions-cta__stat" key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}