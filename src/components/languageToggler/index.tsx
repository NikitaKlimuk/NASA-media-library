import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const LanguageToggler = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleLanguageChange = (event: { target: { value: any } }) => {
    const language = event.target.value;
    localStorage.setItem("language", language);
    setCurrentLanguage(language);
  };

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language && currentLanguage !== language) {
      i18n.changeLanguage(language);
      setCurrentLanguage(language);
    }
  }, [currentLanguage, i18n]);

  return (
    <div className="toggler">
      <label className="toggler__label" htmlFor="language">
        Language:
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
          English 🇬🇧
        </option>
        <option className="toggler__select-option" value="pl">
          Polish 🇵🇱
        </option>
      </select>
    </div>
  );
};

export default LanguageToggler;
