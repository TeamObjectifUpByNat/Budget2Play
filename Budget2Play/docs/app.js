/* ============================================================
   app.js – Budget2Play
   ------------------------------------------------------------
   - Navigation entre sections (Accueil, Économisez…, Bons, etc.)
   - Estimation équipements (budget + âge)
   - Affiche aussi :
       • Licence + 1 entraînement/semaine (indicatif club)
       • Inscriptions compétitions (0 / 5 / 10 par an selon niveau)
   - Données lues depuis window.SPORTS_EQUIPMENT :
       license:     { junior:<€>, adult:<€> }
       competition: { junior:<€> (par compétition), adult:<€> }
   - Comparaison budget = TOTAL SAISON (équipement + licence + compétitions)
   - Masque les blocs Accueil supplémentaires (hero + quick + news)
     quand on change de section.
   ============================================================ */

(function(){

  /* ---------- NAVIGATION ---------- */
  const sections = {
    home:      document.getElementById("home"),
    estimator: document.getElementById("estimator"),
    offers:    document.getElementById("offers"),
    about:     document.getElementById("about"),
    legal:     document.getElementById("legal")
  };

  // Tous les blocs de la page d'accueil (hero, accès rapide, news, feedback, etc.)
  const homeGroupEls = document.querySelectorAll('.sb-home-group');

  const navLinks = document.querySelectorAll('[data-section]');
  navLinks.forEach(link=>{
    link.addEventListener('click', (e)=>{
      e.preventDefault();
      const target = e.currentTarget.getAttribute('data-section');
      showSection(target);
    });
  });

  function showSection(id){
    // Masquer toutes les sections principales
    Object.keys(sections).forEach(k=>{
      if(sections[k]) sections[k].classList.add('hidden');
    });

    // Masquer ou montrer les blocs Accueil supplémentaires
    if(id === 'home'){
      homeGroupEls.forEach(el=>el.classList.remove('hidden'));
    } else {
      homeGroupEls.forEach(el=>el.classList.add('hidden'));
    }

    // Afficher la section demandée
    if(sections[id]) sections[id].classList.remove('hidden');

    // Nav active
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
  const totalAmountEl   = document.getElementById("sb-total-amount");   // Équipement initial
  const budgetWarnEl    = document.getElementById("sb-budget-warning");

  // Lignes injectées dynamiquement (Licence, Compétitions, Total saison)
  let licenseRowEl      = null;
  let compRowEl         = null;
  let seasonRowEl       = null;

  const sportsData = window.SPORTS_EQUIPMENT || [];

  // Nombre de compétitions / an selon niveau
  const COMP_PER_LEVEL = {
    debutant:       0,
    intermediaire:  5,
    avance:        10
  };

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

    // Récup profil équipement
    const items = (sportData.profiles && sportData.profiles[niveau]) || [];
    if(!items.length){
      showNoData(`Pas (encore) d'équipements listés pour ${sportData.label} au niveau sélectionné.`);
      return;
    }

    // Render
    renderEquipments({sportData, niveau, items, budgetMax, ageNote, age});

    // Basculer sur la section Estimateur (utile si on venait d'une autre section)
    showSection('estimator');
    setTimeout(()=>{
      resultsSection.scrollIntoView({behavior:'smooth', block:'start'});
    }, 100);
  });

  function showNoData(msg){
    resultsIntro.textContent = msg;
    equipListEl.innerHTML = "";
    totalWrapperEl.classList.add("hidden");
    resultsSection.classList.remove("hidden");
  }

  function renderEquipments({sportData, niveau, items, budgetMax, ageNote, age}){
    const levelLabel = levelToLabel(niveau);
    resultsIntro.innerHTML = `
      <strong>${sportData.label}</strong> – Profil <strong>${levelLabel}</strong>.
      ${ageNote ? `<br>${ageNote}` : ""}`;

    /* ----- ÉQUIPEMENT ----- */
    equipListEl.innerHTML = "";
    let equipTotal = 0;

    items.forEach(obj=>{
      const price = Number(obj.price) || 0;
      equipTotal += price;

      const card = document.createElement("div");
      card.className = "sb-equip-card";

      // IMPORTANT : si l'item référence une image, elle doit être relative au dossier du site
      // Exemple attendu dans equipment-data.js : "Images/chaussures-running-debut.png"
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

    /* ----- LICENCE + ENTRAÎNEMENT ----- */
    const licenseCost = getLicenseCost(sportData, age); // inclut 1 entraînement/semaine (indicatif)

    /* ----- COMPÉTITIONS ----- */
    const compUnit    = getCompetitionFee(sportData, age); // coût par compétition
    const comps       = COMP_PER_LEVEL[niveau] ?? 0;
    const compCost    = compUnit * comps;

    /* ----- TOTAL SAISON ----- */
    const seasonTotal = equipTotal + licenseCost + compCost;

    /* ----- AFFICHAGES ----- */
    totalAmountEl.textContent = formatEuro(equipTotal);  // Équipement initial

    // Licence row
    if(!licenseRowEl){
      licenseRowEl = document.createElement("p");
      licenseRowEl.id = "sb-license-cost";
      licenseRowEl.className = "sb-total-extra";
      totalWrapperEl.appendChild(licenseRowEl);
    }
    licenseRowEl.textContent = `Licence + 1 entraînement/semaine : ${formatEuro(licenseCost)}${licenseCost === 0 ? " (estimé / inclus club)" : ""}`;

    // Compétitions row
    if(!compRowEl){
      compRowEl = document.createElement("p");
      compRowEl.id = "sb-comp-cost";
      compRowEl.className = "sb-total-extra";
      totalWrapperEl.appendChild(compRowEl);
    }
    compRowEl.textContent = `Inscriptions compétitions (${comps} × ${formatEuro(compUnit)}) : ${formatEuro(compCost)}`;

    // Saison row
    if(!seasonRowEl){
      seasonRowEl = document.createElement("p");
      seasonRowEl.id = "sb-season-total";
      seasonRowEl.className = "sb-total-extra sb-total-season";
      seasonRowEl.style.fontWeight = "700";
      seasonRowEl.style.marginTop = "0.75rem";
      totalWrapperEl.appendChild(seasonRowEl);
    }
    seasonRowEl.textContent = `Total saison (équipement + licence + compétitions) : ${formatEuro(seasonTotal)}`;

    totalWrapperEl.classList.remove("hidden");

    /* ----- BUDGET ----- */
    if(budgetMax !== null){
      if(seasonTotal > budgetMax){
        budgetWarnEl.textContent = `⚠ Votre budget (${formatEuro(budgetMax)}) est inférieur au coût total estimé de la saison (${formatEuro(seasonTotal)}). Nous vous aiderons à prioriser.`;
        budgetWarnEl.classList.remove("hidden");
        budgetWarnEl.style.color = "var(--sb-danger)";
      } else {
        budgetWarnEl.textContent = `👍 Votre budget couvre ce coût de saison estimé (${formatEuro(seasonTotal)}).`;
        budgetWarnEl.classList.remove("hidden");
        budgetWarnEl.style.color = "var(--sb-success)";
      }
    } else {
      budgetWarnEl.classList.add("hidden");
      budgetWarnEl.style.color = "";
    }

    resultsSection.classList.remove("hidden");
  }

  /* ---------- Helpers : coûts licence & compétition ---------- */
  function getLicenseCost(sportData, age){
    const lic = sportData.license || {};
    const jr  = isNum(lic.junior) ? lic.junior : null;
    const ad  = isNum(lic.adult)  ? lic.adult  : null;
    if(age != null){
      if(age < 18){
        return jr != null ? jr : (ad != null ? ad : 0);
      } else {
        return ad != null ? ad : (jr != null ? jr : 0);
      }
    }
    return ad != null ? ad : (jr != null ? jr : 0);
  }

  function getCompetitionFee(sportData, age){
    const comp = sportData.competition || {};
    const jr  = isNum(comp.junior) ? comp.junior : null;  // coût PAR compétition
    const ad  = isNum(comp.adult)  ? comp.adult  : null;
    if(age != null){
      if(age < 18){
        return jr != null ? jr : (ad != null ? ad : 0);
      } else {
        return ad != null ? ad : (jr != null ? jr : 0);
      }
    }
    return ad != null ? ad : (jr != null ? jr : 0);
  }

  function isNum(v){return typeof v === "number" && !isNaN(v);}

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
