(function(){
  const CONSENT_KEY = 'cookiesConsent';  // 'accepted' | 'declined'
  const GA_ID = 'G-XXXXXXXX';            // <-- remplace si tu as un vrai ID GA4

  // Si déjà choisi, rien à afficher
  const existing = localStorage.getItem(CONSENT_KEY);
  if (existing) {
    if (existing === 'accepted') loadGA();
    return;
  }

  // Création overlay plein écran
  const overlay = document.createElement('div');
  overlay.id = 'cookie-overlay';
  Object.assign(overlay.style, {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: '9998',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  });

  const popup = document.createElement('div');
  popup.id = 'cookie-popup';
  Object.assign(popup.style, {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    maxWidth: '420px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
    fontFamily: 'Inter, system-ui, sans-serif',
    zIndex: '9999'
  });

  popup.innerHTML = `
    <h2 style="margin-bottom:1rem;">Cookies</h2>
    <p style="font-size:0.95rem;margin-bottom:1.5rem;line-height:1.4;">
      Nous utilisons un cookie de mesure d’audience (Google Analytics) pour améliorer Budget2Play.<br>
      Acceptez-vous ?
    </p>
    <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
      <button id="cookie-accept" style="
        padding:0.6rem 1.25rem;
        background:#4A90E2;
        color:#fff;
        border:none;
        border-radius:6px;
        cursor:pointer;
        font-weight:bold;
      ">Accepter</button>
      <button id="cookie-decline" style="
        padding:0.6rem 1.25rem;
        background:transparent;
        border:2px solid #4A90E2;
        color:#4A90E2;
        border-radius:6px;
        cursor:pointer;
        font-weight:bold;
      ">Refuser</button>
    </div>
    <p style="margin-top:1rem;font-size:0.85rem;">
      <a href="#" data-section="legal" style="color:#4A90E2;text-decoration:underline;">Mentions légales & données</a>
    </p>
  `;

  overlay.appendChild(popup);
  document.body.appendChild(overlay);
  document.body.classList.add('lock-scroll');

  document.getElementById('cookie-accept').addEventListener('click', ()=>{
    localStorage.setItem(CONSENT_KEY, 'accepted');
    closeOverlay();
    loadGA();
  });

  document.getElementById('cookie-decline').addEventListener('click', ()=>{
    localStorage.setItem(CONSENT_KEY, 'declined');
    closeOverlay();
  });

  function closeOverlay(){
    document.body.classList.remove('lock-scroll');
    overlay.remove();
  }

  function loadGA(){
    if (!GA_ID || GA_ID === 'G-XXXXXXXX') return; // pas d'ID => ne rien charger
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
    document.head.appendChild(script);
    script.onload = ()=>{
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_ID, { 'anonymize_ip': true });
    };
  }
})();
