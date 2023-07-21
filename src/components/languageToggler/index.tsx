import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const LanguageToggler: React.FC = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const language = localStorage.getItem("language");

  const handleLanguageChange = (event: { target: { value: any } }) => {
    const language = event.target.value;
    localStorage.setItem("language", language);
    setCurrentLanguage(language);
  };

  useEffect(() => {
    if (language && currentLanguage !== language) {
      i18n.changeLanguage(language);
      setCurrentLanguage(language);
    }
  }, [currentLanguage, language, i18n]);

  return (
    <div className="toggler">
      <label className="toggler__label" htmlFor="language">
        {t("toggler")}
      </label>
      <select
        className="toggler__select"
        id="language"
        value={currentLanguage}
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);
          handleLanguageChange(e);
        }}
      >
        <option className="toggler__select-GB" value="en">
          {t("eng")} 🇬🇧
        </option>
        <option className="toggler__select-option" value="pl">
          {t("pln")} 🇵🇱
        </option>
        <option className="toggler__select-option" value="de">
          {t("deu")} 🇩🇪
        </option>
        <option className="toggler__select-option" value="it">
          {t("it")} 🇮🇹
        </option>
      </select>
    </div>
  );
};

export default LanguageToggler;
