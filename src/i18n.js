import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./translations/en.json";
import plTranslation from "./translations/pl.json";

// Define the i18next configuration
i18n.use(initReactI18next).init({
  lng: "en", // Default language
  fallbackLng: "pl",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: enTranslation, // English translations
    },
    pl: {
      translation: plTranslation, // Polish translations
    },
  },
});

export default i18n;
