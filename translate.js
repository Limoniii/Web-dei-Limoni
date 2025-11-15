/* TRANSLATION SYSTEM */
const translations = {
    it: {
        home: "Home",
        about: "Chi siamo",
        subscribe: "Iscriviti",
        israel: "Israeliano",
        palestine: "Palestinese",

        aboutText:
"Limoni Web è come Chow: imprevedibile, brillante e con un tocco di follia. Fratello, questo sito è così veloce che neanche Jackie Chan riesce a starci dietro!",

        footerBig: "WEBSITE CREATED BY: I DON’T KNOW!!!",
        footerSmall: "Tutti i diritti riservati a I DON’T KNOW",
        phone: "Telefono: +39 0123456789",
        email: "Email: idontknow@blabla.hehe"
    },

    en: {
        home: "Home",
        about: "About",
        subscribe: "Subscribe",
        israel: "Israeli",
        palestine: "Palestinian",

        aboutText:
"Limoni Web is like Chow: unpredictable, brilliant, and a bit insane. Brother, this site is so fast even Jackie Chan can't keep up!",

        footerBig: "WEBSITE CREATED BY: I DON’T KNOW!!!",
        footerSmall: "All rights reserved by I DON’T KNOW",
        phone: "Phone: +39 0123456789",
        email: "Email: idontknow@blabla.hehe"
    },

    ru: {
        home: "Главная",
        about: "О нас",
        subscribe: "Подписаться",
        israel: "Израиль",
        palestine: "Палестина",

        aboutText:
"Limoni Web как Чоу: непредсказуемый, яркий и немного безумный. Брат, этот сайт такой быстрый, что даже Джеки Чан не успевает!",

        footerBig: "САЙТ СОЗДАН: I DON’T KNOW!!!",
        footerSmall: "Все права защищены I DON’T KNOW",
        phone: "Телефон: +39 0123456789",
        email: "Email: idontknow@blabla.hehe"
    },

    es: {
        home: "Inicio",
        about: "Acerca",
        subscribe: "Suscribirse",
        israel: "Israelí",
        palestine: "Palestina",

        aboutText:
"Limoni Web es como Chow: impredecible, brillante y un poco loco. Hermano, este sitio es tan rápido que ni Jackie Chan puede seguirlo!",

        footerBig: "SITIO CREADO POR: I DON’T KNOW!!!",
        footerSmall: "Todos los derechos reservados por I DON’T KNOW",
        phone: "Teléfono: +39 0123456789",
        email: "Email: idontknow@blabla.hehe"
    },

    fr: {
        home: "Accueil",
        about: "À propos",
        subscribe: "S’inscrire",
        israel: "Israélien",
        palestine: "Palestinien",

        aboutText:
"Limoni Web est comme Chow : imprévisible, brillant et un peu fou. Frère, ce site est si rapide que même Jackie Chan ne peut pas suivre !",

        footerBig: "SITE CRÉÉ PAR : I DON’T KNOW!!!",
        footerSmall: "Tous droits réservés à I DON’T KNOW",
        phone: "Téléphone : +39 0123456789",
        email: "Email : idontknow@blabla.hehe"
    },

    de: {
        home: "Startseite",
        about: "Über uns",
        subscribe: "Registrieren",
        israel: "Israelisch",
        palestine: "Palästinensisch",

        aboutText:
"Limoni Web ist wie Chow: unberechenbar, brillant und ein bisschen verrückt. Bruder, diese Seite ist so schnell, dass nicht einmal Jackie Chan mithalten kann!",

        footerBig: "WEBSITE ERSTELLT VON: I DON’T KNOW!!!",
        footerSmall: "Alle Rechte vorbehalten von I DON’T KNOW",
        phone: "Telefon: +39 0123456789",
        email: "Email: idontknow@blabla.hehe"
    },

    zh: {
        home: "首页",
        about: "关于我们",
        subscribe: "注册",
        israel: "以色列",
        palestine: "巴勒斯坦",

        aboutText:
"Limoni Web 就像周先生：不可预测、聪明又有点疯狂。兄弟，这网站快得连成龙都追不上！",

        footerBig: "网站创建者：I DON’T KNOW!!!",
        footerSmall: "版权所有：I DON’T KNOW",
        phone: "电话: +39 0123456789",
        email: "邮箱: idontknow@blabla.hehe"
    }
};

/* DROPDOWN TOGGLE */
function toggleLangMenu() {
    document.querySelector(".lang-menu").style.display =
        document.querySelector(".lang-menu").style.display === "flex"
            ? "none"
            : "flex";
}

/* APPLY TRANSLATION */
function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelector(".lang-menu").style.display = "none";
}

/* LOAD SAVED LANGUAGE */
window.onload = () => {
    const saved = localStorage.getItem("lang") || "it";
    setLanguage(saved);
};
