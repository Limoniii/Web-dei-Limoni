const translations = {
    en: {
        home: "Home",
        about: "About",
        aboutText: 
        "Limoni Web is like Chow: unpredictable, brilliant and with a touch of madness. Brother, this site is so fast that even Jackie Chan can't keep up!"
    },
    it: {
        home: "Home",
        about: "About",
        aboutText:
        "Limoni Web è come Chow: imprevedibile, brillante e con un tocco di follia. Fratello, questo sito è così veloce che neanche Jackie Chan riesce a starci dietro!"
    }
};

function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
        let key = el.getAttribute("data-i18n");
        el.innerHTML = translations[lang][key];
    });
}

window.onload = () => {
    let lang = localStorage.getItem("lang") || "it";
    setLanguage(lang);
};
