/* ============================================================
   cookies.js – Gestion consentement + Google Analytics
   ------------------------------------------------------------
   Flux :
     - Au chargement : vérifie localStorage['cookiesConsent']
       -> pas de valeur => affiche le modal plein écran
       -> accepted => charge GA
       -> declined => ne charge rien
     - Bouton "Gérer mes cookies" (footer) => ré-ouvre le modal
     - Aucune fermeture sans choisir (pas de X)
   ============================================================ */

(function(){
  const CONSENT_KEY = 'cookiesConsent';
  const ACCEPTED    = 'accepted';
  const DECLINED    = 'declined';

  // Éléments du modal (déjà dans index.html)
  const backdrop  = document.getElementById('cookie-modal-backdrop');
  const acceptBtn = document.getElementById('cookie-accept-btn');
  const rejectBtn = document.getElementById('cookie-reject-btn');
  const manageLink = document.getElementById('manage-cookies-link');
  // (facultatif) liens internes vers la section Mentions légales
  const legalLinks = document.querySelectorAll('.cookie-legal-link');

  /* ---------- Fonctions ---------- */
  function showModal(){
    if(!backdrop) return;
    backdrop.hidden = false;
    document.documentElement.classList.add('cookie-modal-open');
    document.body.classList.add('cookie-modal-open');
  }

  function hideModal(){
    if(!backdrop) return;
    backdrop.hidden = true;
    document.documentElement.classList.remove('cookie-modal-open');
    document.body.classList.remove('cookie-modal-open');
  }

  // Charge GA4 dynamiquement si pas déjà chargé
  function loadGoogleAnalytics(){
    if(window.__b2p_ga_loaded) return; // éviter doublon
    window.__b2p_ga_loaded = true;

    const GA_ID = 'G-XXXXXXXX'; // <<< REMPLACE par ton ID GA4

    // Script ga
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(gaScript);

    gaScript.onload = ()=>{
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_ID, {
        anonymize_ip: true
      });
    };
  }

  function setConsent(value){
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch(_) {}
  }

  function getConsent(){
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch(_) {
      return null;
    }
  }

  function handleAccept(){
    setConsent(ACCEPTED);
    hideModal();
    loadGoogleAnalytics();
  }

  function handleReject(){
    setConsent(DECLINED);
    hideModal();
    // Pas de GA
  }

  /* ---------- Listeners ---------- */
  if(acceptBtn){
    acceptBtn.addEventListener('click', handleAccept);
  }
  if(rejectBtn){
    rejectBtn.addEventListener('click', handleReject);
  }

  if(manageLink){
    manageLink.addEventListener('click', (e)=>{
      e.preventDefault();
      showModal();
    });
  }

  // Si on clique sur un des liens "Mentions légales & données" dans le modal -> navigue vers section
  if(legalLinks && legalLinks.length){
    legalLinks.forEach(l=>{
      l.addEventListener('click', (e)=>{
        // Laisser app.js gérer la navigation (data-section="legal")
        hideModal();
      });
    });
  }

  /* ---------- Init au chargement ---------- */
  document.addEventListener('DOMContentLoaded', ()=>{
    const stored = getConsent();
    if(stored === ACCEPTED){
      loadGoogleAnalytics();
      hideModal(); // s’assure que c’est bien caché
    } else if(stored === DECLINED){
      hideModal();
      // Rien à charger
    } else {
      // Pas de choix => afficher
      showModal();
    }
  });

})();
