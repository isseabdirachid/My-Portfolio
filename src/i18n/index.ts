import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import de from "./locales/de.json";

const SUPPORTED = ["de", "en"];

const getInitialLanguage = (): string => {
    try {
        const saved = localStorage.getItem("lang");
        if (saved && SUPPORTED.includes(saved)) return saved;
    } catch {
        // localStorage nicht verfügbar oder andere Fehler
    }
    return "de"; // Normale Sprache
};

void i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        de: { translation: de },
    },
    lng: getInitialLanguage(),
    fallbackLng: "de",
    supportedLngs: SUPPORTED,
    interpolation: {
        escapeValue: false,
    },
});

i18n.on("languageChanged", (lng) => {
    try {
        localStorage.setItem("lang", lng.startsWith("en") ? "en" : "de");
    } catch {
        // ignoniere
    }
    document.documentElement.lang = lng.startsWith("en") ? "en" : "de";
});

export default i18n;
