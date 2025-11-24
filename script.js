// Basic utilities
const qs = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const sndClick = qs('#snd-click');
const sndExplosion = qs('#snd-explosion');
const sndSparkle = qs('#snd-sparkle');

// Loader simulation
function showLoader() {
  const loader = qs('#loader');
  if (!loader) return;
  loader.style.display = 'flex';
  const bar = loader.querySelector('.progress');
  let p = 0;
  const iv = setInterval(() => {
    p = Math.min(100, p + Math.random() * 25);
    bar.style.width = p + '%';
    if (p >= 100) {
      clearInterval(iv);
      setTimeout(() => loader.style.display = 'none', 200);
    }
  }, 250);
}

// Navbar hide on scroll down, show on scroll up
(function scrollNav() {
  const nav = qs('.navbar');
  if (!nav) return;
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > lastY + 8) nav.classList.add('nav-hidden');
    else if (y < lastY - 8) nav.classList.remove('nav-hidden');
    lastY = y;
  });
})();

// Theme toggle
(function themeInit() {
  const btn = qs('#theme-toggle');
  const html = qs('html');
  if (!btn || !html) return;
  const saved = localStorage.getItem('theme');
  if (saved) html.setAttribute('data-theme', saved);
  btn.addEventListener('click', () => {
    const cur = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', cur);
    localStorage.setItem('theme', cur);
    sndClick && sndClick.play();
  });
})();

// Language system
const LANGS = ['it','en','fr','es','ru','zh'];
let currentLang = localStorage.getItem('lang') || 'it';

async function loadLang() {
  try {
    const res = await fetch('lang.json');
    const dict = await res.json();
    applyLang(dict, currentLang);
    initLangSelect(dict);
  } catch (e) {
    console.warn('Lang load error', e);
  }
}

function applyLang(dict, lang) {
  qsa('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = dict?.[lang]?.[key];
    if (val) el.textContent = val;
  });
  // Update <html lang>
  const html = qs('html');
  if (html) html.setAttribute('lang', lang);
}

function initLangSelect(dict) {
  const sel = qs('#lang-select');
  if (!sel) return;
  sel.innerHTML = LANGS.map(l => {
    const label = dict?.labels?.[l] || l.toUpperCase();
    return `<option value="${l}" ${l===currentLang?'selected':''}>${label}</option>`;
  }).join('');
  sel.addEventListener('change', e => {
    currentLang = e.target.value;
    localStorage.setItem('lang', currentLang);
    applyLang(dict, currentLang);
    sndClick && sndClick.play();
  });
}

// Particle on "Inizia"
function particlesBurst(x, y, parent = document.body, count = 24) {
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    const angle = Math.random() * Math.PI * 2;
    const dist = 20 + Math.random() * 50;
    parent.appendChild(p);
    const tx = x + Math.cos(angle) * dist;
    const ty = y + Math.sin(angle) * dist;
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    p.style.opacity = 0.9;
    p.animate([
      { transform: 'translate(0,0) scale(1)', opacity: 1 },
      { transform: `translate(${tx - x}px, ${ty - y}px) scale(0)`, opacity: 0 }
    ], { duration: 600 + Math.random()*400, easing: 'ease-out' }).onfinish = () => p.remove();
  }
}

// Button wiring
function initButtons() {
  // "Inizia"
  const startBtn = qs('#startBtn');
  if (startBtn) {
    startBtn.addEventListener('click', (e) => {
      const rect = startBtn.getBoundingClientRect();
      const x = rect.left + rect.width/2;
      const y = rect.top + rect.height/2 + window.scrollY;
      particlesBurst(x, y);
      sndClick && sndClick.play();
      showLoader();
      setTimeout(() => { window.location.href = 'start.html'; }, 700);
    });
  }

  // Explode buttons
  qsa('.explode').forEach(btn => {
    btn.addEventListener('click', () => {
      const anim = btn.animate([
        { transform: 'scale(1)', filter: 'brightness(1)' },
        { transform: 'scale(1.15)', filter: 'brightness(1.3)' },
        { transform: 'scale(0.6)', filter: 'brightness(0.8)', opacity: 0 }
      ], { duration: 500, easing: 'cubic-bezier(.2,.8,.2,1)' });
      sndExplosion && sndExplosion.play();
      showLoader();
      anim.onfinish = () => { window.location.href = btn.dataset.target; };
    });
  });

  // Sparkle buttons
  qsa('.sparkle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      sndSparkle && sndSparkle.play();
      const rect = btn.getBoundingClientRect();
      particlesBurst(rect.left + rect.width/2, rect.top + rect.height/2 + window.scrollY, document.body, 36);
      showLoader();
      setTimeout(() => { window.location.href = btn.dataset.target; }, 600);
    });
  });

  // All links play click sound
  qsa('a, .mini-btn').forEach(a => a.addEventListener('click', () => sndClick && sndClick.play()));
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  showLoader();
  loadLang();
  initButtons();

  // Brand styling on home
  if (qs('.title')) {
    // Already styled via CSS
  }
});
