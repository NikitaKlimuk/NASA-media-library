import { useTranslation } from "react-i18next";
import NASAlogoSm from "../../assets/logo/NASA_logo_sm.svg";
import LanguageToggler from "../languageToggler";
import "./styles.scss";

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-expand">
      <a className="navbar-brand" href="/">
        <img src={NASAlogoSm} alt="Small NASA logo"></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="navbar__container navbar-collapse"
        id="navbarNav"
        role="list"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              {t("navbar.gallery")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">
              {t("navbar.missions")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">
              {t("navbar.news")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">
              {t("navbar.events")}
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar__lang-toggler">
        <LanguageToggler />
      </div>
    </nav>
  );
};

export default Navbar;
