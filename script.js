// Utility: scroll progress
const progress = document.querySelector('.progress span');
window.addEventListener('scroll', () => {
  const s = window.scrollY;
  const h = document.body.scrollHeight - window.innerHeight;
  progress.style.width = `${(s/h)*100}%`;
});

// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const navlist = document.querySelector('#navlist');
if (toggle){
  toggle.addEventListener('click',()=>{
    const open = navlist.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  })
}

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  })
},{threshold:.15});

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Hero typing effect alt text change (decorative)
const typing = document.querySelector('.typing');
if(typing){
  const words = ['scroll‑stopping','high‑converting','native‑feel'];
  let i=0;
  setInterval(()=>{
    i=(i+1)%words.length;
    typing.textContent = words[i];
  }, 2200);
}

// Numbers counter
function animateCount(el){
  const target = parseFloat(el.dataset.count);
  const isFloat = !Number.isInteger(target);
  const dur = 1600;
  const start = performance.now();
  function tick(now){
    const p = Math.min(1, (now-start)/dur);
    let val = target * p;
    el.textContent = isFloat ? val.toFixed(1) : Math.floor(val);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
document.querySelectorAll('.num').forEach(el=>{
  const obs = new IntersectionObserver((ents)=>{
    ents.forEach(en=>{
      if(en.isIntersecting){ animateCount(el); obs.unobserve(el); }
    })
  });
  obs.observe(el);
});

// Carousel
(function(){
  const slides = document.querySelectorAll('.carousel .slide');
  if(!slides.length) return;
  let idx=0; slides[idx].classList.add('active');
  const prev = document.querySelector('.carousel .prev');
  const next = document.querySelector('.carousel .next');
  function show(i){
    slides[idx].classList.remove('active');
    idx = (i+slides.length)%slides.length;
    slides[idx].classList.add('active');
  }
  prev.addEventListener('click',()=>show(idx-1));
  next.addEventListener('click',()=>show(idx+1));
  setInterval(()=>show(idx+1), 5000);
})();

// Tile hover autoplay
Array.from(document.querySelectorAll('.tile video')).forEach(v=>{
  v.addEventListener('mouseenter', ()=>{ v.play().catch(()=>{}); });
  v.addEventListener('mouseleave', ()=>{ v.pause(); v.currentTime = 0; });
});

// Modal for reel
const modal = document.querySelector('#reelModal');
const openBtn = document.querySelector('#openReel');
const closeBtn = modal?.querySelector('.modal__close');
openBtn?.addEventListener('click', ()=> modal.showModal());
closeBtn?.addEventListener('click', ()=> modal.close());
modal?.addEventListener('click', (e)=>{ if(e.target === modal) modal.close(); });

// Lang toggle
const dict = {
  en: {
    'nav.services':'Services','nav.portfolio':'Portfolio','nav.about':'About','nav.pricing':'Packages','nav.contact':'Work with me',
    'hero.eyebrow':'UGC Creator • Morocco','hero.title1':'I craft','hero.title2':'scroll‑stopping','hero.title3':'content for brands',
    'hero.lead':'Bilingual (EN/FR) TikToks, Reels and UGC ads that feel native and convert.',
    'cta.work':'Work with me','cta.reel':'Watch creator reel','hero.trust':'Trusted by lifestyle & beauty brands',
    'services.title':'Services','services.blurb':'Native-feel UGC tailored to Moroccan culture and global audiences.',
    'services.ugcads':'Hook-first short ads for TikTok & Reels to boost ROAS.',
    'services.demos':'Showcase features with clear, friendly storytelling.',
    'services.unboxing':'ASMR vibes + honest first impressions.',
    'services.voiceover':'Clean audio in EN/FR with Moroccan nuance.',
    'portfolio.title':'Portfolio','portfolio.blurb':'A few recent pieces. Hover to preview. Click to view.',
    'stats.projects':'+ projects','stats.rating':'/5 avg rating','stats.brands':'+ brands','stats.years':' years creating',
    'about.title':'About Zainab','about.body1':'Salam! I’m Zainab, a Moroccan UGC creator passionate about beauty, lifestyle and honest product storytelling.',
    'about.body2':'I create social‑native content in English and French, tailored for Moroccan audiences and international campaigns.',
    'about.point1':'Fast turnarounds (3–5 days)','about.point2':'Studio & natural light setups','about.point3':'On‑brand scripts & hooks',
    'pricing.title':'Packages','pricing.blurb':'Pick a package or ask for a custom quote.',
    'pricing.starter.title':'Starter','pricing.starter.i1':'1x 15–30s UGC video','pricing.starter.i2':'Basic edit + captions','pricing.starter.i3':'1 revision',
    'pricing.growth.title':'Growth','pricing.growth.i1':'3x UGC videos','pricing.growth.i2':'Hooks A/B + captions','pricing.growth.i3':'2 revisions',
    'pricing.pro.title':'Pro','pricing.pro.i1':'5x UGC videos','pricing.pro.i2':'+ 10 lifestyle photos','pricing.pro.i3':'Usage rights included',
    'testimonials.title':'Brands say','contact.title':'Let’s create!','contact.blurb':'Tell me about your product and goals. I’ll reply within 24h.',
    'form.name':'Your name','form.email':'Email','form.brand':'Brand / Company','form.budget':'Budget','form.msg':'Project details','form.send':'Send','form.privacy':'By submitting, you agree to be contacted about this project.',
    'footer.rights':'All rights reserved.'
  },
  fr: {
    'nav.services':'Services','nav.portfolio':'Portfolio','nav.about':'À propos','nav.pricing':'Forfaits','nav.contact':'Travailler avec moi',
    'hero.eyebrow':'Créatrice UGC • Maroc','hero.title1':'Je crée du','hero.title2':'contenu percutant','hero.title3':'pour les marques',
    'hero.lead':'Vidéos TikTok, Reels et publicités UGC bilingues (FR/EN) qui convertissent.',
    'cta.work':'Travailler avec moi','cta.reel':'Voir mon showreel','hero.trust':'De confiance par des marques beauté & lifestyle',
    'services.title':'Services','services.blurb':'UGC authentique adapté à la culture marocaine et aux audiences internationales.',
    'services.ugcads':'Publicités courtes orientées hook pour TikTok & Reels.',
    'services.demos':'Démos produit avec storytelling clair et friendly.',
    'services.unboxing':'ASMR + premières impressions honnêtes.',
    'services.voiceover':'Voix off propre en FR/EN avec nuances marocaines.',
    'portfolio.title':'Portfolio','portfolio.blurb':'Quelques projets récents. Survolez pour prévisualiser. Cliquez pour voir.',
    'stats.projects':'+ projets','stats.rating':'/5 note moyenne','stats.brands':'+ marques','stats.years':' ans de création',
    'about.title':'À propos de Zainab','about.body1':'Salam ! Je suis Zainab, créatrice UGC marocaine passionnée par la beauté, le lifestyle et le storytelling produit.',
    'about.body2':'Je crée du contenu social-native en français et en anglais, pour le Maroc et à l’international.',
    'about.point1':'Délais rapides (3–5 jours)','about.point2':'Lumière studio & naturelle','about.point3':'Scripts & hooks on‑brand',
    'pricing.title':'Forfaits','pricing.blurb':'Choisissez un forfait ou demandez un devis sur mesure.',
    'pricing.starter.title':'Starter','pricing.starter.i1':'1 vidéo UGC 15–30s','pricing.starter.i2':'Montage basique + sous-titres','pricing.starter.i3':'1 retouche',
    'pricing.growth.title':'Growth','pricing.growth.i1':'3 vidéos UGC','pricing.growth.i2':'Hooks A/B + sous-titres','pricing.growth.i3':'2 retouches',
    'pricing.pro.title':'Pro','pricing.pro.i1':'5 vidéos UGC','pricing.pro.i2':'+ 10 photos lifestyle','pricing.pro.i3':'Droits d’utilisation inclus',
    'testimonials.title':'Avis des marques','contact.title':'Créons ensemble !','contact.blurb':'Parlez-moi de votre produit et de vos objectifs. Réponse sous 24h.',
    'form.name':'Votre nom','form.email':'Email','form.brand':'Marque / Société','form.budget':'Budget','form.msg':'Détails du projet','form.send':'Envoyer','form.privacy':'En envoyant, vous acceptez d’être contacté à propos de ce projet.',
    'footer.rights':'Tous droits réservés.'
  }
};

function setLang(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const val = dict[lang][key];
    if (val) el.textContent = val;
  });
  document.querySelectorAll('.lang__btn').forEach(b=>{
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang__btn').forEach(b=>{
  b.addEventListener('click', ()=> setLang(b.dataset.lang));
});

setLang(localStorage.getItem('lang') || 'en');

document.getElementById('year').textContent = new Date().getFullYear();
