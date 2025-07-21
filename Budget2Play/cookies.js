// cookies.js
const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');
const rejectBtn = document.getElementById('reject-cookies');

function loadGoogleAnalytics() {
  // Charger GA seulement si l'utilisateur accepte
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX";
  document.head.appendChild(script1);

  script1.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXX');
  };
}

// Vérifier si l'utilisateur a déjà fait un choix
const consent = localStorage.getItem('cookie_consent');
if (consent === 'accepted') {
  loadGoogleAnalytics();
  cookieBanner.style.display = 'none';
} else if (consent === 'rejected') {
  cookieBanner.style.display = 'none';
}

acceptBtn.addEventListener('click', () => {
  localStorage.setItem('cookie_consent', 'accepted');
  loadGoogleAnalytics();
  cookieBanner.style.display = 'none';
});

rejectBtn.addEventListener('click', () => {
  localStorage.setItem('cookie_consent', 'rejected');
  cookieBanner.style.display = 'none';
});
