import { useTranslation } from "react-i18next";

function Sobre() {
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t("about.title")}</h1>

      <p>{t("about.description")}</p>
    </main>
  );
}

export default Sobre;