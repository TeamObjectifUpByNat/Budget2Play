﻿(function(){

  const sections = {
    home: document.getElementById("home"),
    estimator: document.getElementById("estimator"),
    offers: document.getElementById("offers"),
    about: document.getElementById("about"),
    legal: document.getElementById("legal")
  };

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
    Object.keys(sections).forEach(k=>{
      if(sections[k]) sections[k].classList.add('hidden');
    });

    if(id === 'home'){
      homeGroupEls.forEach(el=>el.classList.remove('hidden'));
    } else {
      homeGroupEls.forEach(el=>el.classList.add('hidden'));
    }

    if(sections[id]) sections[id].classList.remove('hidden');
    document.querySelectorAll('.sb-nav-menu a').forEach(a=>a.classList.remove('sb-active'));
    const active = document.querySelector('.sb-nav-menu a[data-section="'+id+'"]');
    if(active) active.classList.add('sb-active');

    window.scrollTo({top:0,behavior:'smooth'});
  }

  showSection('home');

  const formEl          = document.getElementById("sb-form");
  const sportEl         = document.getElementById("sport");
  const niveauEl        = document.getElementById("niveau");
  const pratiqueEl      = document.getElementById("pratique"); // <== NEW
  const budgetEl        = document.getElementById("budget");
  const ageEl           = document.getElementById("age");

  const resultsSection  = document.getElementById("sb-results");
  const resultsIntro    = document.getElementById("sb-results-intro");
  const equipListEl     = document.getElementById("sb-equip-list");

  const totalWrapperEl  = document.getElementById("sb-total-wrapper");
  const totalAmountEl   = document.getElementById("sb-total-amount");
  const budgetWarnEl    = document.getElementById("sb-budget-warning");

  let licenseRowEl      = null;
  let compRowEl         = null;
  let seasonRowEl       = null;

  const sportsData = window.SPORTS_EQUIPMENT || [];

  const COMP_PER_PRACTICE = {
    loisir: 0,
    competition: 10
  };

  formEl.addEventListener("submit", (e)=>{
    e.preventDefault();

    const sportId   = sportEl.value;
    const niveau    = niveauEl.value;
    const pratique  = pratiqueEl.value; // <== NEW
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
    if(!pratique){
      alert("Sélectionnez un type de pratique (loisir ou compétition).");
      return;
    }

    const sportData = sportsData.find(s => s.id === sportId);
    if(!sportData){
      showNoData(`Aucune donnée trouvée pour ce sport (id: ${sportId}).`);
      return;
    }

    let ageNote = "";
    if(age && (age < sportData.ageMin || age > sportData.ageMax)){
      ageNote = `⚠ Ce sport est généralement pratiqué entre ${sportData.ageMin} et ${sportData.ageMax} ans (indicatif).`;
    }

    const items = (sportData.profiles && sportData.profiles[niveau]) || [];
    if(!items.length){
      showNoData(`Pas (encore) d'équipements listés pour ${sportData.label} au niveau sélectionné.`);
      return;
    }

    renderEquipments({sportData, niveau, pratique, items, budgetMax, ageNote, age});

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

  function renderEquipments({sportData, niveau, pratique, items, budgetMax, ageNote, age}){
    const levelLabel = levelToLabel(niveau);
    const practiceLabel = pratique === 'loisir' ? "Loisir" : "Compétition";

    resultsIntro.innerHTML = `
      <strong>${sportData.label}</strong> – Niveau <strong>${levelLabel}</strong>, Pratique <strong>${practiceLabel}</strong>.
      ${ageNote ? `<br>${ageNote}` : ""}`;

    equipListEl.innerHTML = "";
    let equipTotal = 0;

    items.forEach(obj=>{
      const price = Number(obj.price) || 0;
      equipTotal += price;

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

    const licenseCost = getLicenseCost(sportData, age);
    const compUnit    = getCompetitionFee(sportData, age);
    const comps       = COMP_PER_PRACTICE[pratique] ?? 0;  // <== ici on utilise la pratique
    const compCost    = compUnit * comps;
    const seasonTotal = equipTotal + licenseCost + compCost;

    totalAmountEl.textContent = formatEuro(equipTotal);

    if(!licenseRowEl){
      licenseRowEl = document.createElement("p");
      licenseRowEl.id = "sb-license-cost";
      licenseRowEl.className = "sb-total-extra";
      totalWrapperEl.appendChild(licenseRowEl);
    }
    licenseRowEl.textContent = `Licence + 1 entraînement/semaine : ${formatEuro(licenseCost)}${licenseCost === 0 ? " (estimé / inclus club)" : ""}`;

    if(!compRowEl){
      compRowEl = document.createElement("p");
      compRowEl.id = "sb-comp-cost";
      compRowEl.className = "sb-total-extra";
      totalWrapperEl.appendChild(compRowEl);
    }
    compRowEl.textContent = `Inscriptions compétitions (${comps} × ${formatEuro(compUnit)}) : ${formatEuro(compCost)}`;

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

  function getLicenseCost(sportData, age){
    const lic = sportData.license || {};
    const jr  = isNum(lic.junior) ? lic.junior : null;
    const ad  = isNum(lic.adult)  ? lic.adult  : null;
    if(age != null){
      return age < 18 ? (jr ?? ad ?? 0) : (ad ?? jr ?? 0);
    }
    return ad ?? jr ?? 0;
  }

  function getCompetitionFee(sportData, age){
    const comp = sportData.competition || {};
    const jr  = isNum(comp.junior) ? comp.junior : null;
    const ad  = isNum(comp.adult)  ? comp.adult  : null;
    if(age != null){
      return age < 18 ? (jr ?? ad ?? 0) : (ad ?? jr ?? 0);
    }
    return ad ?? jr ?? 0;
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
