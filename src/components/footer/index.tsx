import { v4 as uuidv4 } from "uuid";
import { footerOptions } from "../../config/footerOptions";
import NasaLogoFooter from "../../assets/logo/NASA_logo_lg.svg";
import "./styles.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={NasaLogoFooter} alt="NASA logo" />
      </div>
      <div className="footer__links">
        {footerOptions.map((item: { value: string; link: string }) => {
          return (
            <a href={item.link} key={uuidv4()}>
              {item.value}
            </a>
          );
        })}
      </div>
      <div className="footer__text">
        <p>
          JPL is a federally funded research and development center managed for
          NASA by Caltech.
        </p>
        <div className="footer__text-author">
          <p>Develop: Mikita Klimuk</p>
          <p>Designed: Ilya Grigorenko</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
