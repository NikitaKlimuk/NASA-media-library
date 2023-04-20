import { useTranslation } from "react-i18next";
import notFound from "../../assets/images/notFound.png";
import "./styles.scss";

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  const altText = t("notFound.title");

  return (
    <div className="notFound">
      <div className="notFound__title">{t("notFound.title")}</div>
      <a className="notFound__link" href="/">
        {t("notFound.link")}
      </a>
      <img className="notFound__img" src={notFound} alt={altText} />
    </div>
  );
};

export default NotFoundPage;
