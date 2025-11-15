/* translate.js - uses data-i18n attributes on elements
   Supported languages: it en es fr de ru zh
*/

// translations dictionary
const T = {
  it: {
    home: "Home",
    about: "About",
    welcome: "Benvenuto su Limoni Web",
    description: "Il sito più folle, veloce e imprevedibile dell’universo digitale.",
    subscribe: "Iscriviti",
    israel: "Soldato Israeliano",
    palestine: "Soldato Palestinese",
    israel_text: "Sei un Soldato Israeliano, Complimenti Kolione.",
    palestine_text: "Sei un Soldato Palestinese, Complimenti Kolione.",
    footerBig: "WEBSITE CREATED BY: I DON’T KNOW!!!",
    footerSmall: "Tutti i diritti riservati a I DON’T KNOW",
    phone: "Telefono: +39 0123456789",
    email: "Email: idontknow@blabla.hehe",
    aboutText: "Limoni Web è come Chow: imprevedibile, brillante e con un tocco di follia. Fratello, questo sito è così veloce che neanche Jackie Chan riesce a starci dietro!"
  },
  en: {
    home: "Home",
    about: "About",
    welcome: "Welcome to Limoni Web",
    description: "The craziest, fastest and most unpredictable website in the digital universe.",
    subscribe: "Subscribe",
    israel: "Israeli Page",
    palestine: "Palestinian Page",
    israel_text: "You are an Israeli soldier, congratulations Kolione.",
    palestine_text: "You are a Palestinian soldier, congratulations Kolione.",
    footerBig: "WEBSITE CREATED BY: I DON’T KNOW!!!",
    footerSmall: "All rights reserved by I DON’T KNOW",
    phone: "Phone: +39 0123456789",
    email: "Email: idontknow@blabla.hehe",
    aboutText: "Limoni Web is like Chow: unpredictable, brilliant and full of madness. Brother, this site is so fast even Jackie Chan can't keep up!"
  },
  es: {
    home: "Inicio",
    about: "Acerca",
    welcome: "Bienvenido a Limoni Web",
    description: "El sitio más loco, rápido e impredecible del universo digital.",
    subscribe: "Suscribirse",
    israel: "Israelí",
    palestine: "Palestina",
    israel_text: "Eres un soldado israelí, felicidades Kolione.",
    palestine_text: "Eres un soldado palestino, felicidades Kolione.",
    footerBig: "SITIO CREADO POR: I DON’T KNOW!!!",
    footerSmall: "Todos los derechos reservados a I DON’T KNOW",
    phone: "Teléfono: +39 0123456789",
    email: "Email: idontknow@blabla.hehe",
    aboutText: "Limoni Web es como Chow: impredecible, brillante y un poco loco. Hermano, este sitio es tan rápido que ni Jackie Chan puede seguirlo!"
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    welcome: "Bienvenue sur Limoni Web",
    description: "Le site le plus fou, rapide et imprévisible de l'univers numérique.",
    subscribe: "S’inscrire",
    israel: "Israélien",
    palestine: "Palestinien",
    israel_text: "Vous êtes un soldat israélien, félicitations Kolione.",
    palestine_text: "Vous êtes un soldat palestinien, félicitations Kolione.",
    footerBig: "SITE CRÉÉ PAR : I DON’T KNOW!!!",
    footerSmall: "Tous droits réservés à I DON’T KNOW",
    phone: "Téléphone : +39 0123456789",
    email: "Email : idontknow@blabla.hehe",
    aboutText: "Limoni Web est comme Chow : imprévisible, brillant et un peu fou. Frère, ce site est si rapide que même Jackie Chan ne peut pas suivre !"
  },
  de: {
    home: "Startseite",
    about: "Über uns",
    welcome: "Willkommen bei Limoni Web",
    description: "Die verrückteste, schnellste und unberechenbarste Website im digitalen Universum.",
    subscribe: "Registrieren",
    israel: "Israelisch",
    palestine: "Palästinensisch",
    israel_text: "Du bist ein israelischer Soldat, Glückwunsch Kolione.",
    palestine_text: "Du bist ein palästinensischer Soldat, Glückwunsch Kolione.",
    footerBig: "WEBSEITE ERSTELLT VON: I DON’T KNOW!!!",
    footerSmall: "Alle Rechte vorbehalten I DON’T KNOW",
    phone: "Telefon: +39 0123456789",
    email: "Email: idontknow@blabla.hehe",
    aboutText: "Limoni Web ist wie Chow: unberechenbar, brillant und ein bisschen verrückt. Bruder, diese Seite ist so schnell, dass nicht einmal Jackie Chan mithalten kann!"
  },
  ru: {
    home: "Главная",
    about: "О нас",
    welcome: "Добро пожаловать на Limoni Web",
    description: "Самый безумный, быстрый и непредсказуемый сайт в цифровой вселенной.",
    subscribe: "Подписаться",
    israel: "Израиль",
    palestine: "Палестина",
    israel_text: "Вы израильский солдат, поздравляем Kolione.",
    palestine_text: "Вы палестинский солдат, поздравляем Kolione.",
    footerBig: "САЙТ СОЗДАН: I DON’T KNOW!!!",
    footerSmall: "Все права защищены I DON’T KNOW",
    phone: "Телефон: +39 0123456789",
    email: "Email: idontknow@blabla.hehe",
    aboutText: "Limoni Web как Чоу: непредсказуемый, яркий и немного сумасшедший. Брат, этот сайт такой быстрый, что даже Джеки Чан не успевает!"
  },
  zh: {
    home: "首页",
    about: "关于我们",
    welcome: "欢迎来到 Limoni Web",
    description: "数字世界中最疯狂、最快和最不可预测的网站。",
    subscribe: "注册",
    israel: "以色列",
    palestine: "巴勒斯坦",
    israel_text: "你是以色列士兵，恭喜 Kolione。",
    palestine_text: "你是巴勒斯坦士兵，恭喜 Kolione。",
    footerBig: "网站创建者：I DON’T KNOW!!!",
    footerSmall: "版权所有：I DON’T KNOW",
    phone: "电话: +39 0123456789",
    email: "邮箱: idontknow@blabla.hehe",
    aboutText: "Limoni Web 就像周先生：不可预测、聪明又有点疯狂。兄弟，这网站快得连成龙都追不上！"
  }
};

// helper: set innerText for all elements with data-i18n key
function applyTranslations(lang) {
  // find all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    // keys in T use footerBig, footerSmall, phone, email, etc.
    const value = T[lang] && T[lang][key];
    if (value !== undefined) el.textContent = value;
  });

  // some pages display full paragraph keys under different attributes:
  // for israel/palestine center message we used data-i18n="israel" / "palestine" on h1 - handled above
}

// language selection + persistence
function setLanguage(lang) {
  if (!T[lang]) return;
  localStorage.setItem("limoni_lang", lang);
  applyTranslations(lang);
  closeAllLangMenus();
}

// on load: set saved language or default it
function initLanguage() {
  const saved = localStorage.getItem("limoni_lang") || "it";
  applyTranslations(saved);
}

// dropdown controls (handles multiple dropdowns on different pages)
function toggleLangMenu(menuId) {
  const menu = document.getElementById(menuId);
  if (!menu) return;
  const shown = menu.style.display === "flex";
  closeAllLangMenus();
  menu.style.display = shown ? "none" : "flex";
}
function closeAllLangMenus() {
  document.querySelectorAll(".lang-menu").forEach(m=>m.style.display = "none");
}

// attach events after DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();

  // attach clicks for any language buttons inside lang-menu elements
  document.querySelectorAll(".lang-menu button[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // attach toggles for each langBtn present (supports multiple navbars)
  document.querySelectorAll(".lang-btn").forEach((btn, idx) => {
    const menu = btn.parentElement.querySelector(".lang-menu");
    if (!menu) return;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      // toggle that specific menu
      menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    });
  });

  // close lang menus on outside click
  document.addEventListener("click", () => closeAllLangMenus());
});
