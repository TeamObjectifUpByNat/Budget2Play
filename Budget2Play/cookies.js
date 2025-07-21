(function(){
  // Création du fond noir semi-transparent
  const overlay = document.createElement('div');
  overlay.id = 'cookie-overlay';
  Object.assign(overlay.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: '9998',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });

  // Création du conteneur du popup
  const popup = document.createElement('div');
  popup.id = 'cookie-popup';
  Object.assign(popup.style, {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    maxWidth: '420px',
    textAlign: 'center',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
    fontFamily: 'Arial, sans-serif',
    zIndex: '9999'
  });

  popup.innerHTML = `
    <h2 style="margin-bottom: 1rem;">Cookies</h2>
    <p style="font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.4;">
      Nous utilisons des cookies pour améliorer votre expérience. <br>
      Acceptez-vous ?
    </p>
    <div style="display: flex; gap: 1rem; justify-content: center;">
      <button id="cookie-accept" style="
        padding: 0.5rem 1rem;
        background: #4CAF50;
        color: #fff;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: bold;
      ">Accepter</button>
      <button id="cookie-decline" style="
        padding: 0.5rem 1rem;
        background: #f44336;
        color: #fff;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: bold;
      ">Refuser</button>
    </div>
  `;

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  // Gestion des boutons
  document.getElementById('cookie-accept').addEventListener('click', () => {
    localStorage.setItem('cookiesConsent', 'accepted');
    overlay.remove();
  });

  document.getElementById('cookie-decline').addEventListener('click', () => {
    localStorage.setItem('cookiesConsent', 'declined');
    overlay.remove();
  });
})();
