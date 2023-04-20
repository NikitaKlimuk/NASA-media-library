import { useTranslation } from "react-i18next";
import blackHole from "../../assets/images/blackHole.png";
import "./styles.scss";

const EmptyData: React.FC = () => {
  const { t } = useTranslation();
  const altText = t("emptyData.alt");

  return (
    <div className="emptyData" role="status">
      <div className="emptyData__title">{t("emptyData.title")}</div>
      <div className="emptyData__descr" role="article">
        {t("emptyData.description1")}
        <a href="/">{t("emptyData.link")}</a>
        {t("emptyData.description2")}
      </div>
      <img className="emptyData__images" src={blackHole} alt={altText} />
    </div>
  );
};

export default EmptyData;
