import NASAlogoSm from "../../assets/logo/NASA_logo_sm.svg";
import LanguageToggler from "../languageToggler";
import "./styles.scss";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
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
      <div className="navbar__container navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Image Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">
              Missions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">
              Events
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar__lang-toggler">
        <LanguageToggler />
      </div>
    </nav>
  );
}

export default Navbar;
