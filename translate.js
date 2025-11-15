// TRADUZIONI
const translations = {
    it: {
        home: "Home",
        about: "About",
        welcome: "Benvenuto su Limoni Web",
        desc: "Il sito più folle, veloce e imprevedibile dell’universo digitale.",
        aboutText:
            "Limoni Web è come Chow: imprevedibile, brillante e con un tocco di follia. Fratello, questo sito è così veloce che neanche Jackie Chan riesce a starci dietro!",
        signup: "Iscriviti ora!",
        israel: "Pagina Israeliano",
        palestine: "Pagina Palestinese"
    },

    en: {
        home: "Home",
        about: "About",
        welcome: "Welcome to Limoni Web",
        desc: "The craziest, fastest and most unpredictable website in the digital universe.",
        aboutText:
            "Limoni Web is like Chow: unpredictable, brilliant and full of madness. Brother, this site is so fast that even Jackie Chan can't keep up!",
        signup: "Sign up now!",
        israel: "Israeli Page",
        palestine: "Palestinian Page"
    }
};

// CAMBIO LINGUA
function setLanguage(lang) {
    localStorage.setItem("language", lang);

    const texts = document.querySelectorAll("[data-key]");

    texts.forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = translations[lang][key];
    });
}

// CARICA LINGUA SALVATA
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "it";
    setLanguage(savedLang);
});
