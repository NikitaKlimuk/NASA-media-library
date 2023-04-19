import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./translations/en.json";
import plTranslation from "./translations/pl.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "pl",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: enTranslation,
    },
    pl: {
      translation: plTranslation,
    },
  },
});

export default i18n;
