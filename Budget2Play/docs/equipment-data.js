/* ============================================================
   equipment-data.js
   ------------------------------------------------------------
   Liste des sports et équipements par niveau.
   Ajoute / modifie facilement : copie-colle un bloc sport.
   price = nombre (euros). img = chemin local ou URL.
   link = URL partenaire (affiliation possible).
   ============================================================ */

window.SPORTS_EQUIPMENT = [
   {
    id: "cycling",
    label: "Cyclisme",
    ageMin: 12,
    ageMax: 99,
    license:     { junior: 80, adult: 140 },
    competition: { junior: 8,  adult: 20 },
    profiles: {
      debutant: [
        { item: "Vélo route entrée de gamme", price: 500, img: "images/placeholder-bike.jpg", link: "#" },
        { item: "Casque basique", price: 30, img: "images/placeholder-bike.jpg", link: "#" },
        { item: "Gants vélo", price: 15, img: "images/placeholder-bike.jpg", link: "#" },
        { item: "Bidon + porte-bidon", price: 10, img: "images/placeholder-bike.jpg", link: "#" },
        { item: "Mini pompe / kit crevaison", price: 20, img: "images/placeholder-bike.jpg", link: "#" }
      ],
      intermediaire: [
        { item: "Vélo route alu + transmission fiable", price: 1200, img: "images/placeholder-bike.jpg", link: "#" },
        { item: "Casque ventilé certifié", price: 70, img: "images/placeholder-bike.jpg", link: "#" },
        { item: "Cuissard + maillot technique", price: 100, img: "images/placeholder-bike.jpg", link: "#" },
        { item: "Chaussures + pédales auto", price: 130, img: "images/placeholder-bike.jpg", link: "#" },
        { item: "Compteur basique", price: 40, img: "images/placeholder-bike.jpg", link: "#" }
      ],
      avance: [
        { item: "Vélo carbone perf", price: 3500, img: "images/placeholder-bike.jpg", link: "#" },
        { item: "Casque aérodynamique", price: 150, img: "images/placeholder-bike.jpg", link: "#" },
        { item: "Cuissard haut de gamme", price: 180, img: "images/placeholder-bike.jpg", link: "#" },
        { item: "Chaussures carbone", price: 300, img: "images/placeholder-bike.jpg", link: "#" },
        { item: "Capteur de puissance", price: 600, img: "images/placeholder-bike.jpg", link: "#" }
      ]
    }
  },

  {
    id: "running",
    label: "Course à pied",
    ageMin: 8,
    ageMax: 99,
    license:     { junior: 200, adult: 250 },
    competition: { junior: 10,  adult: 20 },
    profiles: {
      debutant: [
        { item: "Chaussures running basiques", price: 60, img: "images/placeholder-shoes.jpg", link: "#" },
        { item: "Short + t-shirt technique", price: 30, img: "images/placeholder-shoes.jpg", link: "#" },
        { item: "Chaussettes techniques (2p)", price: 15, img: "images/placeholder-shoes.jpg", link: "#" }
      ],
      intermediaire: [
        { item: "Chaussures amorti / entraînement", price: 120, img: "images/placeholder-shoes.jpg", link: "#" },
        { item: "Montre cardio basique", price: 80, img: "images/placeholder-shoes.jpg", link: "#" },
        { item: "Ensemble textile respirant", price: 60, img: "images/placeholder-shoes.jpg", link: "#" }
      ],
      avance: [
        { item: "Chaussures carbone perf", price: 250, img: "images/placeholder-shoes.jpg", link: "#" },
        { item: "Montre GPS multisport", price: 300, img: "images/placeholder-shoes.jpg", link: "#" },
        { item: "Textile technique 4 saisons", price: 180, img: "images/placeholder-shoes.jpg", link: "#" }
      ]
    }
  },

  {
    id: "fitness",
    label: "Fitness / Musculation maison",
    ageMin: 12,
    ageMax: 99,
    license:     { junior: 175, adult: 250 },
    competition: { junior: 0,  adult: 0 },
    profiles: {
      debutant: [
        { item: "Kit haltères réglables (10kg)", price: 40, img: "images/placeholder-dumbbell.jpg", link: "#" },
        { item: "Tapis de sol", price: 20, img: "images/placeholder-dumbbell.jpg", link: "#" },
        { item: "Élastiques résistance", price: 15, img: "images/placeholder-dumbbell.jpg", link: "#" }
      ],
      intermediaire: [
        { item: "Barre + disques (40kg)", price: 160, img: "images/placeholder-dumbbell.jpg", link: "#" },
        { item: "Banc inclinable", price: 120, img: "images/placeholder-dumbbell.jpg", link: "#" },
        { item: "Kettlebell (16kg)", price: 45, img: "images/placeholder-dumbbell.jpg", link: "#" }
      ],
      avance: [
        { item: "Rack demi-cage", price: 400, img: "images/placeholder-dumbbell.jpg", link: "#" },
        { item: "Barre renforcée + disques (100kg)", price: 350, img: "images/placeholder-dumbbell.jpg", link: "#" },
        { item: "Set accessoires (sangles, box plyo)", price: 200, img: "images/placeholder-dumbbell.jpg", link: "#" }
      ]
    }
  },

 {
  id: "natation",
  label: "Natation",
  ageMin: 4,
  ageMax: 99,
    license:     { junior: 300, adult: 400 },
    competition: { junior: 30,  adult: 60 },
  profiles: {
    debutant: [
      { item:"Maillot bain débutant", price:20, img:"images/natation1.jpg", link:"#"},
      { item:"Bonnet silicone", price:5, img:"images/natation1.jpg", link:"#"},
      { item:"Lunettes entrée de gamme", price:10, img:"images/natation1.jpg", link:"#"}
    ],
    intermediaire: [
      { item:"Maillot entraînement club", price:40, img:"images/natation2.jpg", link:"#"},
      { item:"Lunettes anti-buée", price:25, img:"images/natation2.jpg", link:"#"},
      { item:"Pull buoy / plaquettes", price:30, img:"images/natation2.jpg", link:"#"}
    ],
    avance: [
      { item:"Combinaison compétition (jammer)", price:120, img:"images/natation3.jpg", link:"#"},
      { item:"Lunettes miroir", price:35, img:"images/natation3.jpg", link:"#"},
      { item:"Accessoires entraînement complet", price:60, img:"images/natation3.jpg", link:"#"}
    ]
  }
 },
/* ------------------------------------------------------------
   Tir à l’arc
   ------------------------------------------------------------ */
{
  id: "archery",
  label: "Tir à l’arc",
  ageMin: 8,
  ageMax: 99,
    license:     { junior: 120, adult: 155 },
    competition: { junior: 10,  adult: 20 },
  profiles: {
    debutant: [
      { item: "Arc classique débutant (club ou kit)", price: 120, img: "images/archery-kit.jpg", link: "#" },
      { item: "Flèches (6)", price: 40, img: "images/archery-arrows.jpg", link: "#" },
      { item: "Protection avant-bras + gant", price: 25, img: "images/archery-guard.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Arc démontable + branches upgrade", price: 300, img: "images/archery-recurve.jpg", link: "#" },
      { item: "Flèches carbone (12)", price: 120, img: "images/archery-arrows2.jpg", link: "#" },
      { item: "Carquois + viseur basique", price: 70, img: "images/archery-quiver.jpg", link: "#" }
    ],
    avance: [
      { item: "Arc compétition (poignée + branches haut de gamme)", price: 700, img: "images/archery-pro.jpg", link: "#" },
      { item: "Kit visée / stabilisation", price: 250, img: "images/archery-stab.jpg", link: "#" },
      { item: "Flèches compétition (12)", price: 240, img: "images/archery-arrows3.jpg", link: "#" }
    ]
  }
},

/* ------------------------------------------------------------
   Athlétisme (piste / club)
   ------------------------------------------------------------ */
{
  id: "athletics",
  label: "Athlétisme (piste / club)",
  ageMin: 8,
  ageMax: 99,
    license:     { junior: 250, adult: 250 },
    competition: { junior: 10,  adult: 20 },
  profiles: {
    debutant: [
      { item: "Chaussures running polyvalentes", price: 60, img: "images/athletics-shoes.jpg", link: "#" },
      { item: "Tenue entraînement (short + tee)", price: 30, img: "images/athletics-kit.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Chaussures d’athlétisme à pointes (sprint/multi)", price: 80, img: "images/athletics-spikes.jpg", link: "#" },
      { item: "Tenue club (débardeur + cuissard)", price: 60, img: "images/athletics-club.jpg", link: "#" },
      { item: "Sac d’entraînement", price: 40, img: "images/athletics-bag.jpg", link: "#" }
    ],
    avance: [
      { item: "Pointes spécialisées (selon discipline)", price: 150, img: "images/athletics-prospikes.jpg", link: "#" },
      { item: "Pack compression / récupération", price: 120, img: "images/athletics-compression.jpg", link: "#" },
      { item: "Montre GPS entraînement intensif", price: 250, img: "images/athletics-gps.jpg", link: "#" }
    ]
  }
},

/* ------------------------------------------------------------
   Badminton
   ------------------------------------------------------------ */
{
  id: "badminton",
  label: "Badminton",
  ageMin: 8,
  ageMax: 99,
    license:     { junior: 100, adult: 200 },
    competition: { junior: 10,  adult: 20 },
  profiles: {
    debutant: [
      { item: "Raquette loisir", price: 25, img: "images/bad-loisir.jpg", link: "#" },
      { item: "Volants plastique (6)", price: 10, img: "images/bad-shuttle.jpg", link: "#" },
      { item: "Chaussures indoor basiques", price: 40, img: "images/bad-shoes.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Raquette club graphite", price: 80, img: "images/bad-racket.jpg", link: "#" },
      { item: "Volants plume entraînement (12)", price: 20, img: "images/bad-feather.jpg", link: "#" },
      { item: "Chaussures indoor renforcées", price: 80, img: "images/bad-shoes2.jpg", link: "#" }
    ],
    avance: [
      { item: "Raquette haut de gamme (cordée)", price: 160, img: "images/bad-pro.jpg", link: "#" },
      { item: "Volants compétition (12)", price: 30, img: "images/bad-feather2.jpg", link: "#" },
      { item: "Chaussures performance", price: 130, img: "images/bad-proshoes.jpg", link: "#" }
    ]
  }
},

/* ------------------------------------------------------------
   Baseball / Softball
   ------------------------------------------------------------ */
{
  id: "baseball",
  label: "Baseball / Softball",
  ageMin: 8,
  ageMax: 99,
    license:     { junior: 150, adult: 200 },
    competition: { junior: 15,  adult: 25 },
  profiles: {
    debutant: [
      { item: "Gant entrée de gamme", price: 40, img: "images/baseball-glove.jpg", link: "#" },
      { item: "Batte aluminium loisir", price: 35, img: "images/baseball-bat.jpg", link: "#" },
      { item: "Balles entraînement (3)", price: 10, img: "images/baseball-balls.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Gant cuir club", price: 90, img: "images/baseball-glove2.jpg", link: "#" },
      { item: "Batte performante alu/composite", price: 120, img: "images/baseball-bat2.jpg", link: "#" },
      { item: "Casque batteur", price: 50, img: "images/baseball-helmet.jpg", link: "#" }
    ],
    avance: [
      { item: "Gant pro position (catcher/infielder)", price: 240, img: "images/baseball-proglove.jpg", link: "#" },
      { item: "Batte composite haut de gamme", price: 300, img: "images/baseball-probat.jpg", link: "#" },
      { item: "Équipement complet (protections, cage)", price: 250, img: "images/baseball-gear.jpg", link: "#" }
    ]
  }
},

/* ------------------------------------------------------------
   Basketball
   ------------------------------------------------------------ */
{
  id: "basketball",
  label: "Basketball",
  ageMin: 6,
  ageMax: 99,
    license:     { junior: 150, adult: 300 },
    competition: { junior: 10,  adult: 30 },
  profiles: {
    debutant: [
      { item: "Ballon outdoor caoutchouc", price: 20, img: "images/basket-ball1.jpg", link: "#" },
      { item: "Chaussures basiques", price: 45, img: "images/basket-shoes1.jpg", link: "#" },
      { item: "Short + maillot entraînement", price: 25, img: "images/basket-kit1.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Ballon club indoor/outdoor", price: 40, img: "images/basket-ball2.jpg", link: "#" },
      { item: "Chaussures amorties", price: 90, img: "images/basket-shoes2.jpg", link: "#" },
      { item: "Protège-chevilles / compression", price: 30, img: "images/basket-acc1.jpg", link: "#" }
    ],
    avance: [
      { item: "Ballon compétition FIBA", price: 80, img: "images/basket-ball3.jpg", link: "#" },
      { item: "Chaussures performance", price: 150, img: "images/basket-proshoes.jpg", link: "#" },
      { item: "Textile pro + manchons", price: 70, img: "images/basket-prokit.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Canoë / Kayak
   Notes:
   - Débutant = loisir eau calme / gonflable ou sit-on-top
   - Intermédiaire = rivière / club eau vive
   - Avancé = eau vive / mer / compé ; pagaie carbone possible
   ------------------------------------------------------------ */
{
  id: "canoe",              // <--- correspond à <option value="canoe">
  label: "Canoë / Kayak",
  ageMin: 8,
  ageMax: 99,
    license:     { junior: 90, adult: 110 },
    competition: { junior: 15,  adult: 30 },
  profiles: {
    debutant: [
      { item: "Kayak gonflable 1 place ou sit-on-top", price: 250, img: "images/canoe-basic.jpg", link: "#" },
      { item: "Pagaie double alu", price: 40, img: "images/canoe-paddle-basic.jpg", link: "#" },
      { item: "Gilet d’aide à la flottabilité (50N)", price: 40, img: "images/canoe-vest.jpg", link: "#" },
      { item: "Sac étanche petit volume", price: 20, img: "images/canoe-drybag.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Kayak rigide rivière / polyvalent", price: 600, img: "images/canoe-inter.jpg", link: "#" },
      { item: "Pagaie fibre + ajustable", price: 120, img: "images/canoe-paddle-inter.jpg", link: "#" },
      { item: "Casque eau vive", price: 60, img: "images/canoe-helmet.jpg", link: "#" },
      { item: "Jupe néoprène (pont fermé)", price: 80, img: "images/canoe-spraydeck.jpg", link: "#" }
    ],
    avance: [
      { item: "Kayak compétition / eau vive / mer", price: 1200, img: "images/canoe-pro.jpg", link: "#" },
      { item: "Pagaie carbone", price: 300, img: "images/canoe-paddle-pro.jpg", link: "#" },
      { item: "Vêtements drytop / combi néoprène", price: 220, img: "images/canoe-drytop.jpg", link: "#" },
      { item: "Kit sécurité (pagaie secours, corde, flottabilité)", price: 150, img: "images/canoe-safety.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   BMX
   Notes:
   - Débutant = usage loisir / skatepark simple
   - Intermédiaire = freestyle / premiers sauts
   - Avancé = race ou freestyle compétition
   ------------------------------------------------------------ */
{
  id: "bmx",                // <--- value="bmx" dans le <select>
  label: "BMX",
  ageMin: 6,
  ageMax: 99,
    license:     { junior: 80, adult: 130 },
    competition: { junior: 20,  adult: 20 },
  profiles: {
    debutant: [
      { item: "BMX loisir acier", price: 250, img: "images/bmx-basic.jpg", link: "#" },
      { item: "Casque bol ou intégral entrée de gamme", price: 60, img: "images/bmx-helmet.jpg", link: "#" },
      { item: "Gants basiques", price: 15, img: "images/bmx-gloves.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "BMX freestyle renforcé (cadre acier/alu)", price: 400, img: "images/bmx-inter.jpg", link: "#" },
      { item: "Protections genoux/coudes", price: 50, img: "images/bmx-protect.jpg", link: "#" },
      { item: "Pegs freestyle (set)", price: 25, img: "images/bmx-pegs.jpg", link: "#" }
    ],
    avance: [
      { item: "BMX compétition (cadre alu haut de gamme)", price: 800, img: "images/bmx-pro.jpg", link: "#" },
      { item: "Roues légères / moyeux scellés", price: 300, img: "images/bmx-wheels.jpg", link: "#" },
      { item: "Casque intégral race certifié", price: 150, img: "images/bmx-helmet-pro.jpg", link: "#" },
      { item: "Protections complètes (dorsale / cervicale)", price: 200, img: "images/bmx-protect-pro.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   VTT
   Notes:
   - Débutant = chemins faciles, basique
   - Intermédiaire = semi-rigide bon niveau + textile
   - Avancé = tout-suspendu, périphériques perf
   ------------------------------------------------------------ */
{
  id: "vtt",                // <--- value="vtt" dans le <select>
  label: "VTT",
  ageMin: 8,
  ageMax: 99,
    license:     { junior: 70, adult: 139 },
    competition: { junior: 8,  adult: 20 },
  profiles: {
    debutant: [
      { item: "VTT loisir (chemins, 26\"/27.5\")", price: 300, img: "images/vtt-basic.jpg", link: "#" },
      { item: "Casque vélo", price: 50, img: "images/vtt-helmet.jpg", link: "#" },
      { item: "Gants VTT légers", price: 20, img: "images/vtt-gloves.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "VTT semi-rigide (fourche + freins disque)", price: 700, img: "images/vtt-inter.jpg", link: "#" },
      { item: "Short / maillot VTT", price: 80, img: "images/vtt-gear.jpg", link: "#" },
      { item: "Chaussures + pédales auto (SPD)", price: 120, img: "images/vtt-shoes.jpg", link: "#" },
      { item: "Protection genoux", price: 50, img: "images/vtt-pads.jpg", link: "#" }
    ],
    avance: [
      { item: "VTT tout suspendu (trail/all-mountain)", price: 2500, img: "images/vtt-pro.jpg", link: "#" },
      { item: "Tige de selle télescopique", price: 200, img: "images/vtt-dropper.jpg", link: "#" },
      { item: "Chaussures haut de gamme", price: 180, img: "images/vtt-shoes-pro.jpg", link: "#" },
      { item: "Casque intégral / enduro + protections complètes", price: 250, img: "images/vtt-helmet-pro.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Escrime
   Notes:
   - Débutant : équipement basique pour club
   - Intermédiaire : veste + masque + épée/fleuret de qualité
   - Avancé : matériel compétition FIE
   ------------------------------------------------------------ */
{
  id: "escrime",                // value="escrime"
  label: "Escrime",
  ageMin: 10,
  ageMax: 99,
    license:     { junior: 270, adult: 420 },
    competition: { junior: 10,  adult: 30 },
  profiles: {
    debutant: [
      { item: "Veste basique non FIE", price: 70, img: "images/escrime-jacket-basic.jpg", link: "#" },
      { item: "Masque loisir", price: 50, img: "images/escrime-mask-basic.jpg", link: "#" },
      { item: "Gant simple", price: 15, img: "images/escrime-glove.jpg", link: "#" },
      { item: "Arme basique (fleuret/épée club)", price: 60, img: "images/escrime-sword-basic.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Veste FIE ou renforcée", price: 180, img: "images/escrime-jacket-inter.jpg", link: "#" },
      { item: "Masque compétition homologué", price: 150, img: "images/escrime-mask-inter.jpg", link: "#" },
      { item: "Cuirasse électrique", price: 90, img: "images/escrime-cuirasse.jpg", link: "#" },
      { item: "Arme FIE milieu de gamme", price: 150, img: "images/escrime-sword-inter.jpg", link: "#" }
    ],
    avance: [
      { item: "Veste et pantalon FIE 800N", price: 450, img: "images/escrime-jacket-pro.jpg", link: "#" },
      { item: "Masque FIE haut de gamme", price: 300, img: "images/escrime-mask-pro.jpg", link: "#" },
      { item: "Gant compétition FIE", price: 80, img: "images/escrime-glove-pro.jpg", link: "#" },
      { item: "Arme FIE carbone", price: 400, img: "images/escrime-sword-pro.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Golf
   Notes:
   - Débutant : demi-série + putter + sac
   - Intermédiaire : série complète acier
   - Avancé : série carbone + driver + wedge + fer personnalisé
   ------------------------------------------------------------ */
{
  id: "golf",                // value="golf"
  label: "Golf",
  ageMin: 12,
  ageMax: 99,
    license:     { junior: 250, adult: 400 },
    competition: { junior: 20,  adult: 50 },
  profiles: {
    debutant: [
      { item: "Demi-série (5 clubs)", price: 250, img: "images/golf-basic.jpg", link: "#" },
      { item: "Putter basique", price: 50, img: "images/golf-putter-basic.jpg", link: "#" },
      { item: "Sac trépied", price: 70, img: "images/golf-bag-basic.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Série complète acier", price: 600, img: "images/golf-set-inter.jpg", link: "#" },
      { item: "Driver entrée gamme", price: 150, img: "images/golf-driver.jpg", link: "#" },
      { item: "Sac chariot + housse pluie", price: 150, img: "images/golf-bag-inter.jpg", link: "#" },
      { item: "Gants + balles premium", price: 50, img: "images/golf-gloves.jpg", link: "#" }
    ],
    avance: [
      { item: "Série complète carbone", price: 1200, img: "images/golf-set-pro.jpg", link: "#" },
      { item: "Driver haut de gamme + bois de parcours", price: 450, img: "images/golf-driver-pro.jpg", link: "#" },
      { item: "Putter premium", price: 250, img: "images/golf-putter-pro.jpg", link: "#" },
      { item: "Sac pro + télémètre laser", price: 350, img: "images/golf-bag-pro.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Gymnastique
   Notes:
   - Débutant : tapis + tenue basique
   - Intermédiaire : accessoires spécifiques (cerceau, ruban)
   - Avancé : matériel compétition FIG
   ------------------------------------------------------------ */
{
  id: "gymnastique",                // value="gymnastique"
  label: "Gymnastique",
  ageMin: 5,
  ageMax: 99,
    license:     { junior: 150, adult: 250 },
    competition: { junior: 10,  adult: 25 },
  profiles: {
    debutant: [
      { item: "Tapis gym pliable", price: 50, img: "images/gym-mat-basic.jpg", link: "#" },
      { item: "Tenue basique (justaucorps)", price: 40, img: "images/gym-leotard.jpg", link: "#" },
      { item: "Chaussons", price: 15, img: "images/gym-shoes.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Cerceau gymnastique", price: 25, img: "images/gym-hoop.jpg", link: "#" },
      { item: "Ruban avec baguette", price: 20, img: "images/gym-ribbon.jpg", link: "#" },
      { item: "Massues", price: 30, img: "images/gym-clubs.jpg", link: "#" },
      { item: "Tapis amortissant épais", price: 100, img: "images/gym-mat-inter.jpg", link: "#" }
    ],
    avance: [
      { item: "Justaucorps compétition", price: 250, img: "images/gym-leotard-pro.jpg", link: "#" },
      { item: "Kit complet engins FIG", price: 300, img: "images/gym-kit.jpg", link: "#" },
      { item: "Barres asymétriques portables", price: 1200, img: "images/gym-bars.jpg", link: "#" },
      { item: "Sol pliable compétition", price: 2000, img: "images/gym-floor.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Handball
   Notes:
   - Débutant : ballon + chaussures + tenue
   - Intermédiaire : gants, protections, ballon pro
   - Avancé : équipement complet compétition
   ------------------------------------------------------------ */
{
  id: "handball",
  label: "Handball",
  ageMin: 8,
  ageMax: 99,
    license:     { junior: 125, adult: 250 },
    competition: { junior: 10,  adult: 25 },
  profiles: {
    debutant: [
      { item: "Ballon loisir taille 2/3", price: 25, img: "images/handball-basic.jpg", link: "#" },
      { item: "Chaussures indoor entrée gamme", price: 40, img: "images/handball-shoes.jpg", link: "#" },
      { item: "Tenue basique (maillot + short)", price: 30, img: "images/handball-kit.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Ballon officiel grip", price: 50, img: "images/handball-ball-inter.jpg", link: "#" },
      { item: "Chaussures milieu de gamme", price: 80, img: "images/handball-shoes-inter.jpg", link: "#" },
      { item: "Protections poignets + genouillères", price: 40, img: "images/handball-protections.jpg", link: "#" }
    ],
    avance: [
      { item: "Ballon pro compétition", price: 90, img: "images/handball-ball-pro.jpg", link: "#" },
      { item: "Chaussures haut de gamme indoor", price: 130, img: "images/handball-shoes-pro.jpg", link: "#" },
      { item: "Pack complet protections premium", price: 90, img: "images/handball-protections-pro.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Hockey
   Notes:
   - Débutant : crosse + balle + protège-tibias
   - Intermédiaire : crosse composite, gants, sac
   - Avancé : équipement compétition FIH
   ------------------------------------------------------------ */
{
  id: "hockey",
  label: "Hockey sur gazon",
  ageMin: 8,
  ageMax: 99,
    license:     { junior: 150, adult: 250 },
    competition: { junior: 10,  adult: 25 },
  profiles: {
    debutant: [
      { item: "Crosse bois basique", price: 40, img: "images/hockey-stick-basic.jpg", link: "#" },
      { item: "Balle plastique", price: 10, img: "images/hockey-ball.jpg", link: "#" },
      { item: "Protège-tibias basique", price: 15, img: "images/hockey-shinguards.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Crosse composite carbone", price: 120, img: "images/hockey-stick-inter.jpg", link: "#" },
      { item: "Gants de protection", price: 35, img: "images/hockey-gloves.jpg", link: "#" },
      { item: "Sac de transport", price: 50, img: "images/hockey-bag.jpg", link: "#" }
    ],
    avance: [
      { item: "Crosse compétition haut de gamme", price: 250, img: "images/hockey-stick-pro.jpg", link: "#" },
      { item: "Protège-tibias premium", price: 60, img: "images/hockey-shinguards-pro.jpg", link: "#" },
      { item: "Pack complet gardien (option)", price: 600, img: "images/hockey-goalie.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Judo
   Notes:
   - Débutant : kimono simple + ceinture blanche
   - Intermédiaire : kimono homologué IJF + sac
   - Avancé : kimono compétition premium + accessoires
   ------------------------------------------------------------ */
{
  id: "judo",
  label: "Judo",
  ageMin: 5,
  ageMax: 99,
    license:     { junior: 120, adult: 200 },
    competition: { junior: 10,  adult: 30 },
  profiles: {
    debutant: [
      { item: "Kimono basique coton", price: 35, img: "images/judo-basic.jpg", link: "#" },
      { item: "Ceinture blanche", price: 5, img: "images/judo-belt.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Kimono IJF approuvé", price: 90, img: "images/judo-ijf.jpg", link: "#" },
      { item: "Ceinture couleur (progression)", price: 8, img: "images/judo-belt-inter.jpg", link: "#" },
      { item: "Sac de sport judo", price: 40, img: "images/judo-bag.jpg", link: "#" }
    ],
    avance: [
      { item: "Kimono IJF compétition premium", price: 150, img: "images/judo-premium.jpg", link: "#" },
      { item: "Ceinture noire haut de gamme", price: 25, img: "images/judo-black-belt.jpg", link: "#" },
      { item: "Pack complet (kimono + sac pro)", price: 220, img: "images/judo-pack.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Aviron
   Notes:
   - Débutant : tenue basique + gants + gourde
   - Intermédiaire : rameur indoor + chaussures
   - Avancé : équipement compétition bateau + accessoires
   ------------------------------------------------------------ */
{
  id: "aviron",
  label: "Aviron",
  ageMin: 12,
  ageMax: 99,
    license:     { junior: 200, adult: 200 },
    competition: { junior: 10,  adult: 25 },
  profiles: {
    debutant: [
      { item: "Tenue basique (maillot + cuissard)", price: 50, img: "images/aviron-kit-basic.jpg", link: "#" },
      { item: "Gants anti-ampoules", price: 15, img: "images/aviron-gloves.jpg", link: "#" },
      { item: "Gourde isotherme", price: 10, img: "images/aviron-bottle.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Rameur indoor (modèle milieu de gamme)", price: 700, img: "images/aviron-rower-inter.jpg", link: "#" },
      { item: "Chaussures d’aviron", price: 90, img: "images/aviron-shoes.jpg", link: "#" },
      { item: "Tenue club premium", price: 80, img: "images/aviron-kit-inter.jpg", link: "#" }
    ],
    avance: [
      { item: "Bateau compétition (skiff)", price: 4500, img: "images/aviron-boat.jpg", link: "#" },
      { item: "Paires d’avirons carbone", price: 800, img: "images/aviron-oars.jpg", link: "#" },
      { item: "Support + accessoires premium", price: 300, img: "images/aviron-accessories.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Rugby
   Notes:
   - Débutant : ballon + protège-dents + maillot basique
   - Intermédiaire : crampons + short + protections épaules
   - Avancé : équipement complet compétition
   ------------------------------------------------------------ */
{
  id: "rugby",
  label: "Rugby",
  ageMin: 10,
  ageMax: 99,
    license:     { junior: 150, adult: 250 },
    competition: { junior: 10,  adult: 25 },
  profiles: {
    debutant: [
      { item: "Ballon loisir taille 4/5", price: 25, img: "images/rugby-ball.jpg", link: "#" },
      { item: "Protège-dents simple", price: 10, img: "images/rugby-mouthguard.jpg", link: "#" },
      { item: "Maillot + short basiques", price: 40, img: "images/rugby-kit-basic.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Chaussures crampons rugby", price: 70, img: "images/rugby-boots.jpg", link: "#" },
      { item: "Protège-épaules", price: 50, img: "images/rugby-shoulder-protect.jpg", link: "#" },
      { item: "Ballon officiel entraînement", price: 40, img: "images/rugby-ball-inter.jpg", link: "#" }
    ],
    avance: [
      { item: "Chaussures haut de gamme", price: 150, img: "images/rugby-boots-pro.jpg", link: "#" },
      { item: "Pack complet protections premium", price: 120, img: "images/rugby-protection-pro.jpg", link: "#" },
      { item: "Maillot officiel compétition", price: 90, img: "images/rugby-jersey-pro.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Voile
   Notes:
   - Débutant : gilet + gants + coupe-vent
   - Intermédiaire : combinaison néoprène + harnais
   - Avancé : équipement complet régate
   ------------------------------------------------------------ */
{
  id: "voile",
  label: "Voile",
  ageMin: 12,
  ageMax: 99,
    license:     { junior: 200, adult: 400 },
    competition: { junior: 10,  adult: 30 },
  profiles: {
    debutant: [
      { item: "Gilet de sauvetage 50N", price: 50, img: "images/voile-lifejacket.jpg", link: "#" },
      { item: "Gants de voile basiques", price: 20, img: "images/voile-gloves.jpg", link: "#" },
      { item: "Veste coupe-vent imperméable", price: 70, img: "images/voile-windbreaker.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Combinaison néoprène intégrale", price: 150, img: "images/voile-wetsuit.jpg", link: "#" },
      { item: "Harnais de trapèze", price: 120, img: "images/voile-harness.jpg", link: "#" },
      { item: "Bottes étanches", price: 90, img: "images/voile-boots.jpg", link: "#" }
    ],
    avance: [
      { item: "Veste de quart haut de gamme", price: 400, img: "images/voile-jacket-pro.jpg", link: "#" },
      { item: "Pack complet régate (harnais + gants premium)", price: 300, img: "images/voile-regatta-pack.jpg", link: "#" },
      { item: "Accessoires navigation électronique", price: 500, img: "images/voile-nav-tools.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Skateboard
   Notes:
   - Débutant : planche basique + protections
   - Intermédiaire : planche personnalisée + casque pro
   - Avancé : équipement premium + accessoires
   ------------------------------------------------------------ */
{
  id: "skateboard",
  label: "Skateboard",
  ageMin: 8,
  ageMax: 99,
    license:     { junior: 100, adult: 200 },
    competition: { junior: 10,  adult: 20 },
  profiles: {
    debutant: [
      { item: "Planche complète débutant", price: 50, img: "images/skateboard-basic.jpg", link: "#" },
      { item: "Casque skate", price: 30, img: "images/skateboard-helmet.jpg", link: "#" },
      { item: "Protections genoux/coudes/poignets", price: 40, img: "images/skateboard-pads.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Planche personnalisée (deck + trucks + roues)", price: 120, img: "images/skateboard-custom.jpg", link: "#" },
      { item: "Casque certifié haut de gamme", price: 60, img: "images/skateboard-pro-helmet.jpg", link: "#" },
      { item: "Roulements premium", price: 30, img: "images/skateboard-bearings.jpg", link: "#" }
    ],
    avance: [
      { item: "Deck pro + trucks légers", price: 200, img: "images/skateboard-pro-deck.jpg", link: "#" },
      { item: "Pack protections pro", price: 100, img: "images/skateboard-protection.jpg", link: "#" },
      { item: "Accessoires (rampes, outils)", price: 150, img: "images/skateboard-tools.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Escalade
   Notes:
   - Débutant : chaussons + baudrier + sac magnésie
   - Intermédiaire : corde + dégaines
   - Avancé : matériel complet extérieur
   ------------------------------------------------------------ */
{
  id: "escalade",
  label: "Escalade",
  ageMin: 10,
  ageMax: 99,
    license:     { junior: 120, adult: 200 },
    competition: { junior: 10,  adult: 25 },
  profiles: {
    debutant: [
      { item: "Chaussons d’escalade basiques", price: 50, img: "images/climbing-shoes.jpg", link: "#" },
      { item: "Baudrier standard", price: 45, img: "images/climbing-harness.jpg", link: "#" },
      { item: "Sac à magnésie + magnésie", price: 15, img: "images/climbing-chalkbag.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Corde dynamique 60m", price: 150, img: "images/climbing-rope.jpg", link: "#" },
      { item: "Jeu de 10 dégaines", price: 100, img: "images/climbing-quickdraws.jpg", link: "#" },
      { item: "Casque d’escalade", price: 60, img: "images/climbing-helmet.jpg", link: "#" }
    ],
    avance: [
      { item: "Lot complet coinceurs + friends", price: 500, img: "images/climbing-protection.jpg", link: "#" },
      { item: "Sac à corde + poulie", price: 100, img: "images/climbing-bag.jpg", link: "#" },
      { item: "Système d’assurage premium", price: 70, img: "images/climbing-belay.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Surf
   Notes:
   - Débutant : planche mousse + leash + wax
   - Intermédiaire : planche epoxy + combi intégrale
   - Avancé : shortboard + accessoires pro
   ------------------------------------------------------------ */
{
  id: "surf",
  label: "Surf",
  ageMin: 12,
  ageMax: 99,
    license:     { junior: 400, adult: 500 },
    competition: { junior: 10,  adult: 25 },
  profiles: {
    debutant: [
      { item: "Planche mousse 8’0", price: 200, img: "images/surf-softboard.jpg", link: "#" },
      { item: "Leash basique", price: 20, img: "images/surf-leash.jpg", link: "#" },
      { item: "Wax", price: 5, img: "images/surf-wax.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Planche epoxy 7’0", price: 400, img: "images/surf-epoxy.jpg", link: "#" },
      { item: "Combinaison néoprène intégrale", price: 150, img: "images/surf-wetsuit.jpg", link: "#" },
      { item: "Housse de planche", price: 80, img: "images/surf-bag.jpg", link: "#" }
    ],
    avance: [
      { item: "Shortboard carbone", price: 700, img: "images/surf-shortboard.jpg", link: "#" },
      { item: "Ailerons haut de gamme", price: 120, img: "images/surf-fins.jpg", link: "#" },
      { item: "Accessoires premium (pads, leash pro)", price: 90, img: "images/surf-accessories.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Tennis de table
   Notes:
   - Débutant : raquette basique + balles
   - Intermédiaire : raquette compétition + table loisirs
   - Avancé : table pro + raquettes haut de gamme
   ------------------------------------------------------------ */
{
  id: "pingpong",
  label: "Tennis de table",
  ageMin: 6,
  ageMax: 99,
    license:     { junior: 65, adult: 150 },
    competition: { junior: 10,  adult: 25 },
  profiles: {
    debutant: [
      { item: "Raquette basique", price: 15, img: "images/pingpong-beginner-bat.jpg", link: "#" },
      { item: "Lot de 6 balles", price: 5, img: "images/pingpong-balls.jpg", link: "#" },
      { item: "Filet de table amovible", price: 10, img: "images/pingpong-net.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Raquette compétition", price: 50, img: "images/pingpong-competition-bat.jpg", link: "#" },
      { item: "Table intérieure loisir", price: 250, img: "images/pingpong-table-indoor.jpg", link: "#" },
      { item: "Housse de protection", price: 30, img: "images/pingpong-cover.jpg", link: "#" }
    ],
    avance: [
      { item: "Table pro outdoor", price: 800, img: "images/pingpong-table-pro.jpg", link: "#" },
      { item: "Raquettes haut de gamme (lot de 2)", price: 150, img: "images/pingpong-bats-pro.jpg", link: "#" },
      { item: "Robot lance-balles", price: 400, img: "images/pingpong-robot.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Taekwondo
   Notes:
   - Débutant : dobok + ceinture blanche + protège-dents
   - Intermédiaire : protections complètes
   - Avancé : casque pro + plastron homologué
   ------------------------------------------------------------ */
{
  id: "taekwondo",
  label: "Taekwondo",
  ageMin: 6,
  ageMax: 99,
    license:     { junior: 120, adult: 200 },
    competition: { junior: 10,  adult: 25 },
  profiles: {
    debutant: [
      { item: "Dobok (tenue) basique", price: 30, img: "images/taekwondo-dobok.jpg", link: "#" },
      { item: "Ceinture blanche", price: 5, img: "images/taekwondo-belt.jpg", link: "#" },
      { item: "Protège-dents simple", price: 10, img: "images/taekwondo-mouthguard.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Protège-tibia et avant-bras", price: 40, img: "images/taekwondo-shin.jpg", link: "#" },
      { item: "Plastron standard", price: 60, img: "images/taekwondo-chestguard.jpg", link: "#" },
      { item: "Gants et protège-pieds", price: 35, img: "images/taekwondo-gloves.jpg", link: "#" }
    ],
    avance: [
      { item: "Casque homologué compétition", price: 80, img: "images/taekwondo-helmet.jpg", link: "#" },
      { item: "Plastron électronique", price: 200, img: "images/taekwondo-electronic.jpg", link: "#" },
      { item: "Lot complet protections premium", price: 150, img: "images/taekwondo-full.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Tennis
   Notes:
   - Débutant : raquette entrée de gamme + balles
   - Intermédiaire : raquette carbone + sac
   - Avancé : raquette pro + cordage premium
   ------------------------------------------------------------ */
{
  id: "tennis",
  label: "Tennis",
  ageMin: 6,
  ageMax: 99,
    license:     { junior: 140, adult: 300 },
    competition: { junior: 15,  adult: 25 },
  profiles: {
    debutant: [
      { item: "Raquette débutant", price: 40, img: "images/tennis-racket-basic.jpg", link: "#" },
      { item: "Tube de balles", price: 6, img: "images/tennis-balls.jpg", link: "#" },
      { item: "Surgrip", price: 3, img: "images/tennis-grip.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Raquette graphite/carbone", price: 120, img: "images/tennis-racket-intermediate.jpg", link: "#" },
      { item: "Sac de tennis 3 raquettes", price: 50, img: "images/tennis-bag.jpg", link: "#" },
      { item: "Lot de balles compétition", price: 15, img: "images/tennis-pro-balls.jpg", link: "#" }
    ],
    avance: [
      { item: "Raquette pro cordée", price: 220, img: "images/tennis-racket-pro.jpg", link: "#" },
      { item: "Cordage premium", price: 30, img: "images/tennis-strings.jpg", link: "#" },
      { item: "Accessoires haut de gamme", price: 50, img: "images/tennis-accessories.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Triathlon
   Notes:
   - Débutant : trifonction + lunettes natation
   - Intermédiaire : vélo route entrée de gamme
   - Avancé : vélo carbone + combinaison néoprène
   ------------------------------------------------------------ */
{
  id: "triathlon",
  label: "Triathlon",
    license:     { junior: 200, adult: 350 },
    competition: { junior: 20,  adult: 40 },
  ageMin: 16,
  ageMax: 99,
  profiles: {
    debutant: [
      { item: "Trifonction basique", price: 60, img: "images/triathlon-suit.jpg", link: "#" },
      { item: "Lunettes natation", price: 20, img: "images/triathlon-goggles.jpg", link: "#" },
      { item: "Bonnet silicone", price: 8, img: "images/triathlon-cap.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Vélo route alu", price: 800, img: "images/triathlon-bike.jpg", link: "#" },
      { item: "Chaussures vélo", price: 100, img: "images/triathlon-shoes.jpg", link: "#" },
      { item: "Combinaison natation", price: 200, img: "images/triathlon-wetsuit.jpg", link: "#" }
    ],
    avance: [
      { item: "Vélo carbone aéro", price: 3500, img: "images/triathlon-bike-carbon.jpg", link: "#" },
      { item: "Casque chrono", price: 200, img: "images/triathlon-helmet.jpg", link: "#" },
      { item: "Accessoires premium (porte-bidon, roues)", price: 400, img: "images/triathlon-accessories.jpg", link: "#" }
    ]
  }
},
/* ------------------------------------------------------------
   Volley-ball
   Notes:
   - Débutant : ballon basique + genouillères
   - Intermédiaire : ballon compétition + chaussures
   - Avancé : filet + ballon pro + protections premium
   ------------------------------------------------------------ */
{
  id: "volleyball",
  label: "Volley-ball",
  ageMin: 8,
  ageMax: 99,
    license:     { junior: 120, adult: 200 },
    competition: { junior: 10,  adult: 25 },
  profiles: {
    debutant: [
      { item: "Ballon loisir", price: 20, img: "images/volleyball-ball-basic.jpg", link: "#" },
      { item: "Genouillères", price: 25, img: "images/volleyball-kneepads.jpg", link: "#" },
      { item: "Sac de sport", price: 30, img: "images/volleyball-bag.jpg", link: "#" }
    ],
    intermediaire: [
      { item: "Ballon compétition", price: 60, img: "images/volleyball-ball-pro.jpg", link: "#" },
      { item: "Chaussures volley", price: 80, img: "images/volleyball-shoes.jpg", link: "#" },
      { item: "Protège-chevilles", price: 20, img: "images/volleyball-ankle.jpg", link: "#" }
    ],
    avance: [
      { item: "Filet officiel + poteaux", price: 250, img: "images/volleyball-net.jpg", link: "#" },
      { item: "Ballon FIVB pro", price: 100, img: "images/volleyball-ball-fivb.jpg", link: "#" },
      { item: "Lot complet protections premium", price: 100, img: "images/volleyball-protection.jpg", link: "#" }
    ]
  }
},


  /* Ajoute ici d'autres sports :
  {
    id:"swimming",
    label:"Natation",
    ageMin:6,
    ageMax:99,
    profiles:{
      debutant:[{item:"Maillot",price:20,img:"",link:"#"}, ...],
      intermediaire:[...],
      avance:[...]
    }
  }
  */
];
