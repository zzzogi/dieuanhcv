import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import vi from "./locales/vi/translation.json";
import en from "./locales/en/translation.json";
import { profileConfig } from "./profile";

i18n.use(initReactI18next).init({
  resources: {
    vi: {
      translation: vi,
    },
    en: {
      translation: en,
    },
  },
  lng: profileConfig.defaultLanguage,
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
