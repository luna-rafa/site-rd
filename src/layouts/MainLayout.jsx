import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import i18n from "../i18n";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    const pathname =
      location.pathname;

    let language = "pt";

    if (
      pathname === "/en" ||
      pathname.startsWith("/en/")
    ) {
      language = "en";
    } else if (
      pathname === "/es" ||
      pathname.startsWith("/es/")
    ) {
      language = "es";
    }

    if (
      i18n.language !== language
    ) {
      i18n.changeLanguage(language);
    }
  }, [location.pathname]);

  return (
    <div className="app">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;