import { v4 as uuidv4 } from "uuid";
import { footerOptions } from "../../config/footerOptions";
import { useTranslation } from "react-i18next";
import NasaLogoFooter from "../../assets/logo/NASA_logo_lg.svg";
import "./styles.scss";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const altLogo = t("footer.altLogo");

  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={NasaLogoFooter} alt={altLogo} />
      </div>
      <div className="footer__links" role="list">
        {footerOptions.map((item: { value: string; link: string }) => {
          return (
            <a href={item.link} key={uuidv4()}>
              {item.value}
            </a>
          );
        })}
      </div>
      <div className="footer__text">
        <p>{t("footer.description")}</p>
        <div className="footer__text-author" role="list">
          <p>{t("footer.develop")}: Mikita Klimuk</p>
          <p>{t("footer.designed")}: Ilya Grigorenko</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
