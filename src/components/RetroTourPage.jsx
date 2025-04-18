import { useState } from "react";
import { Card, CardGrid } from "@astrojs/starlight/components";

export default function RetroTourPage() {
  const [language, setLanguage] = useState("es");

  const translations = {
    es: {
      heroTagline: "Sitio en mantenimiento. ¡Mantente atento!",
      nextSteps: "Próximos pasos",
      contactUs: "Contáctanos",
      contactInfo: "info@retrotour-madrid.com",
      callUs: "¿Buscas una llamada?",
      phoneNumber: "+34 602 45 50 67",
      whatsappButton: "Contactar por WhatsApp",
      languageSelector: "Seleccionar idioma",
    },
    en: {
      heroTagline: "Site under maintenance. Stay tuned!",
      nextSteps: "Next steps",
      contactUs: "Contact us",
      contactInfo: "info@retrotour-madrid.com",
      callUs: "Looking for a call?",
      phoneNumber: "+34 602 45 50 67",
      whatsappButton: "Contact via WhatsApp",
      languageSelector: "Select language",
    },
  };

  const t = translations[language];

  return (
    <div>
      <header>
        <h1>{t.heroTagline}</h1>
        <select
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
          aria-label={t.languageSelector}
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </header>

      <main>
        <h2>{t.nextSteps}</h2>
        <CardGrid stagger>
          <Card title={t.contactUs} icon="pencil">
            {t.contactInfo}
          </Card>
          <Card title={t.callUs} icon="add-document">
            <a href={`tel:${t.phoneNumber}`}>{t.phoneNumber}</a>
            <br />
            <a
              href="http://wa.me/+34602455067"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>{t.whatsappButton}</button>
            </a>
          </Card>
          <Card title="WhatsApp" icon="phone">
            <a
              href="http://wa.me/+34602455067"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>{t.whatsappButton}</button>
            </a>
          </Card>
        </CardGrid>
      </main>
    </div>
  );
}
