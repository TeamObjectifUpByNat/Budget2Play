/* ============================================================
   app.js – Budget2Play
   ------------------------------------------------------------
   - Navigation entre sections (Accueil, Estimateur, Offres, etc.)
   - Estimation équipements (budget + âge) à partir de window.SPORTS_EQUIPMENT
   ============================================================ */

(function(){

  /* ---------- NAVIGATION ---------- */
  const sections = {
    home: document.getElementById("home"),
    estimator: document.getElementById("estimator"),
    offers: document.getElementById("offers"),
    about: document.getElementById("about"),
    legal: document.getElementById("legal")
  };

  const navLinks = document.querySelectorAll('[data-section]');
  navLinks.forEach(link=>{
    link.addEventListener('click', (e)=>{
      e.preventDefault();
      const target = e.currentTarget.getAttribute('data-section');
      showSection(target);
    });
  });

  function showSection(id){
    // Hide all
    Object.keys(sections).forEach(k=>{
      if(sections[k]) sections[k].classList.add('hidden');
    });
    // Show chosen
    if(sections[id]) sections[id].classList.remove('hidden');
    // Update nav active
    document.querySelectorAll('.sb-nav-menu a').forEach(a=>a.classList.remove('sb-active'));
    const active = document.querySelector('.sb-nav-menu a[data-section="'+id+'"]');
    if(active) active.classList.add('sb-active');
    // Scroll top
    window.scrollTo({top:0,behavior:'smooth'});
  }

  // Show home on load
  showSection('home');


  /* ---------- ESTIMATION LOGIQUE ---------- */
  const formEl          = document.getElementById("sb-form");
  const sportEl         = document.getElementById("sport");
  const niveauEl        = document.getElementById("niveau");
  const budgetEl        = document.getElementById("budget");
  const ageEl           = document.getElementById("age");

  const resultsSection  = document.getElementById("sb-results");
  const resultsIntro    = document.getElementById("sb-results-intro");
  const equipListEl     = document.getElementById("sb-equip-list");
  const totalWrapperEl  = document.getElementById("sb-total-wrapper");
  const totalAmountEl   = document.getElementById("sb-total-amount");
  const budgetWarnEl    = document.getElementById("sb-budget-warning");

  const sportsData = window.SPORTS_EQUIPMENT || [];

  formEl.addEventListener("submit", (e)=>{
    e.preventDefault();

    const sportId   = sportEl.value;
    const niveau    = niveauEl.value;
    const budgetMax = parseFloat(budgetEl.value) || null;
    const age       = parseInt(ageEl.value,10) || null;

    if(!sportId){
      alert("Sélectionnez un sport.");
      return;
    }
    if(!niveau){
      alert("Sélectionnez un niveau.");
      return;
    }

    const sportData = sportsData.find(s => s.id === sportId);
    if(!sportData){
      showNoData(`Aucune donnée trouvée pour ce sport (id: ${sportId}).`);
      return;
    }

    // Vérif âge simple si défini
    let ageNote = "";
    if(age && (age < sportData.ageMin || age > sportData.ageMax)){
      ageNote = `⚠ Ce sport est généralement pratiqué entre ${sportData.ageMin} et ${sportData.ageMax} ans (indicatif).`;
    }

    // Récup profil
    const items = (sportData.profiles && sportData.profiles[niveau]) || [];
    if(!items.length){
      showNoData(`Pas (encore) d'équipements listés pour ${sportData.label} au niveau sélectionné.`);
      return;
    }

    // Render
    renderEquipments({sportData, niveau, items, budgetMax, ageNote});

    // Basculer sur les résultats visibles dans l'estimateur
    if(sections.estimator){
      showSection('estimator');
      // Scroll jusqu'aux résultats
      setTimeout(()=>{
        resultsSection.scrollIntoView({behavior:'smooth', block:'start'});
      }, 100);
    }
  });

  function showNoData(msg){
    resultsIntro.textContent = msg;
    equipListEl.innerHTML = "";
    totalWrapperEl.classList.add("hidden");
    resultsSection.classList.remove("hidden");
  }

  function renderEquipments({sportData, niveau, items, budgetMax, ageNote}){
    const levelLabel = levelToLabel(niveau);
    resultsIntro.innerHTML = `
      <strong>${sportData.label}</strong> – Profil <strong>${levelLabel}</strong>.
      ${ageNote ? `<br>${ageNote}` : ""}`;

    equipListEl.innerHTML = "";
    let total = 0;

    items.forEach(obj=>{
      const price = Number(obj.price) || 0;
      total += price;

      const card = document.createElement("div");
      card.className = "sb-equip-card";

      const imgSrc = obj.img && obj.img.trim() ? obj.img : "https://via.placeholder.com/300x200?text=Image";
      const safeLink = obj.link && obj.link.trim() ? obj.link : "#";

      card.innerHTML = `
        <img src="${imgSrc}" alt="${escapeHtml(obj.item)}" loading="lazy">
        <h3 class="sb-equip-title">${escapeHtml(obj.item)}</h3>
        <p class="sb-equip-meta">Équipement ${levelLabel.toLowerCase()}</p>
        <p class="sb-equip-price">${formatEuro(price)}</p>
        <a href="${safeLink}" target="_blank" rel="noopener noreferrer">Voir / Acheter</a>
      `;
      equipListEl.appendChild(card);
    });

    totalAmountEl.textContent = formatEuro(total);
    totalWrapperEl.classList.remove("hidden");

    if(budgetMax !== null){
      if(total > budgetMax){
        budgetWarnEl.textContent = `⚠ Votre budget (${formatEuro(budgetMax)}) est inférieur au total estimé. Nous vous aiderons à prioriser.`;
        budgetWarnEl.classList.remove("hidden");
        budgetWarnEl.style.color = "var(--sb-danger)";
      } else {
        budgetWarnEl.textContent = `👍 Votre budget couvre ce pack.`;
        budgetWarnEl.classList.remove("hidden");
        budgetWarnEl.style.color = "var(--sb-success)";
      }
    } else {
      budgetWarnEl.classList.add("hidden");
      budgetWarnEl.style.color = "";
    }

    resultsSection.classList.remove("hidden");
  }

  function levelToLabel(id){
    switch(id){
      case "debutant": return "Débutant";
      case "intermediaire": return "Intermédiaire";
      case "avance": return "Avancé";
      default: return id;
    }
  }

  function formatEuro(n){
    return new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(n);
  }

  function escapeHtml(str=""){
    return str.replace(/[&<>"']/g, m => (
      { "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;" }[m]
    ));
  }

})();
