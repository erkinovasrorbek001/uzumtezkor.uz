import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import rustranslation from '../../public/translate/rus.json'
import uzbtranslation from '../../public/translate/uzb.json'
import engtranslation from '../../public/translate/eng.json'
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    fallbackLng: 'uzb',
    debug: false,
    lng:"uzb",
    resources:{
    uzb:{translation: uzbtranslation},
    rus:{translation: rustranslation},
    eng:{translation: engtranslation}
    },
    interpolation: {
      escapeValue: false, 
    }
  });
export default i18n;