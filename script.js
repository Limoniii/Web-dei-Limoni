document.addEventListener("DOMContentLoaded", () => {
  // Page loader
  let loader = document.getElementById("loader-progress");
  let width = 0;
  let interval = setInterval(() => {
    width += 2;
    loader.style.width = width + "%";
    if(width>=100) clearInterval(interval);
  }, 30);
  setTimeout(()=>{document.getElementById("page-loader").style.display="none";},1600);

  // Navbar scroll hide/show
  let prevScroll = window.scrollY;
  const header = document.getElementById("site-header");
  window.addEventListener("scroll", ()=>{
    let current = window.scrollY;
    if(current>prevScroll) header.style.top="-100px";
    else header.style.top="0";
    prevScroll = current;
  });

  // Theme toggle
  const themeBtn = document.getElementById("theme-toggle");
  themeBtn.addEventListener("click", ()=>{
    const body = document.body;
    body.dataset.theme = body.dataset.theme==="dark"?"light":"dark";
  });

  // Logo animation
  const logoPath = document.getElementById("logo-path");
  const logoText = document.getElementById("logo-text");
  let length = logoPath.getTotalLength();
  logoPath.style.strokeDasharray = length;
  logoPath.style.strokeDashoffset = length;
  logoPath.getBoundingClientRect(); 
  logoPath.style.transition = "stroke-dashoffset 2s ease";
  logoPath.style.strokeDashoffset = "0";
  setTimeout(()=>{logoText.style.opacity="1";},2000);

  // Button particle effects (demo)
  const particleCanvas = document.getElementById("particle-canvas");
  const ctx = particleCanvas.getContext("2d");
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
  
  function particleEffect(x, y, color="#FFD400") {
    for(let i=0;i<20;i++){
      let p = {x,y,vx:(Math.random()-0.5)*4,vy:(Math.random()-0.5)*4,r:2+Math.random()*3,alpha:1,color};
      particles.push(p);
    }
  }

  let particles=[];
  function animateParticles(){
    ctx.clearRect(0,0,particleCanvas.width,particleCanvas.height);
    particles.forEach((p,i)=>{
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -=0.02;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
      if(p.alpha<=0) particles.splice(i,1);
    });
    ctx.globalAlpha=1;
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // Example: attach particle effect to buttons
  ["start-btn","btn-israel","btn-palestine","btn-subscribe"].forEach(id=>{
    const btn=document.getElementById(id);
    if(btn){
      btn.addEventListener("click", (e)=>{
        const rect = btn.getBoundingClientRect();
        particleEffect(rect.left+rect.width/2, rect.top+rect.height/2);
      });
    }
  });

  // Language switching (basic)
  const translations = {
    it:{ "nav.home":"Home","nav.about":"About","nav.hacker":"Limine Hacker","btn.start":"Inizia","footer.created":"WEBSITE CREATED BY: I DON’T KNOW!!!","footer.rights":"Tutti i diritti riservati a I DON’T KNOW" },
    en:{ "nav.home":"Home","nav.about":"About","nav.hacker":"Limine Hacker","btn.start":"Start","footer.created":"WEBSITE CREATED BY: I DON’T KNOW!!!","footer.rights":"All rights reserved to I DON’T KNOW" },
    fr:{ "nav.home":"Accueil","nav.about":"À propos","nav.hacker":"Limine Hacker","btn.start":"Commencer","footer.created":"SITE CRÉÉ PAR : I DON’T KNOW!!!","footer.rights":"Tous droits réservés à I DON’T KNOW" },
    es:{ "nav.home":"Inicio","nav.about":"Acerca de","nav.hacker":"Limine Hacker","btn.start":"Comenzar","footer.created":"SITIO CREADO POR: I DON’T KNOW!!!","footer.rights":"Todos los derechos reservados a I DON’T KNOW" },
    ru:{ "nav.home":"Главная","nav.about":"О нас","nav.hacker":"Limine Hacker","btn.start":"Начать","footer.created":"САЙТ СОЗДАН: I DON’T KNOW!!!","footer.rights":"Все права защищены I DON’T KNOW" },
    zh:{ "nav.home":"首页","nav.about":"关于","nav.hacker":"Limine Hacker","btn.start":"开始","footer.created":"网站创建者: I DON’T KNOW!!!","footer.rights":"版权所有 I DON’T KNOW" }
  };
  const langSelect = document.getElementById("lang-select");
  langSelect.addEventListener("change",(e)=>{
    let lang = e.target.value;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.dataset.i18n;
      el.innerText = translations[lang][key];
    });
  });
});
