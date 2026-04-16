/* eslint-disable */
const fs = require("fs");
const path = require("path");

const DICT_DIR = path.join(__dirname, "..", "src", "app", "[lang]", "dictionaries");

/* ─── Per-language content ──────────────────────────────────────────────── */

const DATA = {
  sr: {
    alert: {
      title: "Važna napomena",
      body: "Moguće su senzacije u vidu pojačanja bola, peckanja ili zagrevanja. To je znak da organizam počinje da popravlja poremećaj. Ne brinite, senzacije će nestajati kako se problem uklanja.",
    },
    mapSectionExtra: {
      indicationsLabel: "Indikacije",
      noteLabel: "Napomena",
      localDurationNote: "Lokalna mesta: 10–20 min, 2–3 puta dnevno",
      warningNote: "Strogo 2–3 minuta. Kod starijih i dece kraće.",
    },
    points: [
      {
        id: 1,
        name: "Baza / Prva čakra",
        title: "Baza vitalnosti i eliminacija toksina.",
        benefits:
          "Podrška urološkom zdravlju, pomoć kod hemoroida i problema sa prostatom. Jača osnovnu životnu energiju i stabilnost organizma.",
        duration: "5–10 minuta",
        position: "Sedeći položaj ili direktno na regiju",
        warning: false,
        indications: [
          "Analne infekcije",
          "Pruritus (svrab) vagine",
          "Upala mokraćnih kanala",
          "Hemoroidi",
          "Impotencija",
          "Hipertrofija prostate",
        ],
        note: "",
      },
      {
        id: 2,
        name: "Donji stomak / Druga čakra",
        title: "Centar hormonalnog balansa.",
        benefits:
          "Ključna tačka za ginekološko zdravlje, regulaciju menstrualnog ciklusa i plodnost. Pomaže kod urinarnih tegoba i problema sa crevima.",
        duration: "5–10 minuta",
        position: "Ležeći položaj, disk na donjem stomaku",
        warning: false,
        indications: [
          "Sterilitet",
          "Lumbago",
          "Opšta slabost",
          "Bubrežni problemi",
          "Opstipacija",
          "Dijareja",
        ],
        note: "",
      },
      {
        id: 3,
        name: "Solar Plexus / Treća čakra",
        title: "Glavni rezervoar unutrašnjeg mira.",
        benefits:
          "Trenutno smiruje želudac, reguliše varenje i kontroliše stres. Izuzetno efikasna tačka za prirodno snižavanje povišenog krvnog pritiska.",
        duration: "5–10 minuta",
        position: "Disk iznad želuca, lagano pritisnut",
        warning: false,
        indications: [
          "Gastritis",
          "Čir",
          "Mučnina",
          "Povišen pritisak",
          "Depresija",
          "Uznemirenost",
          "Lupanje srca",
        ],
        note: "",
      },
      {
        id: 4,
        name: "Srce / Četvrta čakra",
        title: "Centar emotivne ravnoteže i daha.",
        benefits:
          "Podrška radu srca i pluća. Pomaže kod astme, bronhitisa i osećaja teskobe u grudima.",
        duration: "5–10 minuta",
        position: "Na sredini grudne kosti",
        warning: false,
        indications: [
          "Astma",
          "Bronhitis",
          "Bolovi u dojkama",
          "Srčani problemi",
        ],
        note: "",
      },
      {
        id: 5,
        name: "Grlo / Peta čakra",
        title: "Dirigent metabolizma i podmlađivanja.",
        benefits:
          "Nezaobilazna tačka za zdravlje štitne žlezde. Stimuliše detoksikaciju i usporava procese starenja organizma.",
        duration: "5–10 minuta",
        position: "Na bazi vrata, lagan pritisak",
        warning: false,
        indications: [
          "Hashimoto",
          "Tireoiditis",
          "Upale grla",
          "Problemi sa desnima",
        ],
        note: "Štitna žlezda je dirigent organizma – tretirati i za mladalački izgled.",
      },
      {
        id: 6,
        name: "Čelo / Šesta čakra",
        title: "Fokus, intuicija i mentalna jasnoća.",
        benefits:
          "Ublažava sinuzitis, vrtoglavicu i smetnje vida. Priprema mozak za dubok i regenerativni san.",
        duration: "Strogo 2–3 minuta (kod starijih i kraće)",
        position: "Na sredini čela — kraća ekspozicija!",
        warning: true,
        indications: ["Sinuzitis", "Vrtoglavica", "Očne smetnje"],
        note: "",
      },
      {
        id: 7,
        name: "Vrh glave / Sedma čakra",
        title: "Harmonizacija celokupnog nervnog sistema.",
        benefits:
          "Pomaže kod teške nesanice, cerebralnih poremećaja, spazama i kontraktura. Vraća osećaj jedinstva sa telom.",
        duration: "Strogo 2–3 minuta (kod starijih i kraće)",
        position: "Na vrhu glave — kraća ekspozicija!",
        warning: true,
        indications: [
          "Nesanica",
          "Cerebralni poremećaji",
          "Spazmi",
          "Kontrakture",
        ],
        note: "",
      },
    ],
    newExtras: [
      {
        id: "obesity",
        title: "Gojaznost i metabolizam",
        body: "Tretman sredine trbuha i pete čakre (grlo) ubrzava metabolizam. Koristiti 2–3 puta dnevno za optimalnu metaboličku aktivaciju.",
        stat: "2–3× dnevno",
      },
      {
        id: "circulation",
        title: "Cirkulacija",
        body: "Stanite tabanima na Polaris disk 10–15 minuta. Stimuliše perifernu cirkulaciju u celom telu, odozdo prema gore.",
        stat: "10–15 min",
      },
      {
        id: "stress",
        title: "Neutralizacija stresa",
        body: "Oba dlana položite na disk ili disk stavite na treću čakru (solar plexus). Momentalno smiruje nervni sistem i reguliše krvni pritisak.",
        stat: "Odmah",
      },
    ],
  },

  en: {
    alert: {
      title: "Important Notice",
      body: "You may experience sensations such as increased pain, tingling, or warmth. This is a sign that the body is beginning to correct the disorder. Do not worry — the sensations will fade as the problem resolves.",
    },
    mapSectionExtra: {
      indicationsLabel: "Indications",
      noteLabel: "Note",
      localDurationNote: "Local spots: 10–20 min, 2–3 times daily",
      warningNote: "Strictly 2–3 minutes. Less for the elderly and children.",
    },
    points: [
      {
        id: 1,
        name: "Base / First Chakra",
        title: "Foundation of vitality and toxin elimination.",
        benefits:
          "Supports urological health, helps with hemorrhoids and prostate issues. Strengthens core life energy and bodily stability.",
        duration: "5–10 minutes",
        position: "Sitting position or directly on the region",
        warning: false,
        indications: [
          "Anal infections",
          "Vaginal pruritus (itching)",
          "Urinary canal inflammation",
          "Hemorrhoids",
          "Impotence",
          "Prostate hypertrophy",
        ],
        note: "",
      },
      {
        id: 2,
        name: "Lower Abdomen / Second Chakra",
        title: "Center of hormonal balance.",
        benefits:
          "Key point for gynecological health, menstrual cycle regulation, and fertility. Helps with urinary complaints and bowel problems.",
        duration: "5–10 minutes",
        position: "Lying down, disk on lower abdomen",
        warning: false,
        indications: [
          "Sterility",
          "Lumbago",
          "General weakness",
          "Kidney problems",
          "Constipation",
          "Diarrhea",
        ],
        note: "",
      },
      {
        id: 3,
        name: "Solar Plexus / Third Chakra",
        title: "Main reservoir of inner peace.",
        benefits:
          "Instantly soothes the stomach, regulates digestion, and controls stress. Exceptionally effective for naturally lowering elevated blood pressure.",
        duration: "5–10 minutes",
        position: "Disk above the stomach, gently pressed",
        warning: false,
        indications: [
          "Gastritis",
          "Ulcer",
          "Nausea",
          "High blood pressure",
          "Depression",
          "Anxiety",
          "Heart palpitations",
        ],
        note: "",
      },
      {
        id: 4,
        name: "Heart / Fourth Chakra",
        title: "Center of emotional balance and breath.",
        benefits:
          "Supports heart and lung function. Helps with asthma, bronchitis, and feelings of chest tightness.",
        duration: "5–10 minutes",
        position: "On the center of the sternum",
        warning: false,
        indications: [
          "Asthma",
          "Bronchitis",
          "Breast pain",
          "Cardiac problems",
        ],
        note: "",
      },
      {
        id: 5,
        name: "Throat / Fifth Chakra",
        title: "Conductor of metabolism and rejuvenation.",
        benefits:
          "Essential point for thyroid health. Stimulates detoxification and slows the body's aging processes.",
        duration: "5–10 minutes",
        position: "At the base of the neck, light pressure",
        warning: false,
        indications: [
          "Hashimoto's disease",
          "Thyroiditis",
          "Throat inflammation",
          "Gum problems",
        ],
        note: "The thyroid is the conductor of the body — treat it also for a youthful appearance.",
      },
      {
        id: 6,
        name: "Forehead / Sixth Chakra",
        title: "Focus, intuition, and mental clarity.",
        benefits:
          "Relieves sinusitis, dizziness, and vision disturbances. Prepares the brain for deep, regenerative sleep.",
        duration: "Strictly 2–3 minutes (less for the elderly)",
        position: "On the center of the forehead — shorter exposure!",
        warning: true,
        indications: ["Sinusitis", "Dizziness", "Eye disorders"],
        note: "",
      },
      {
        id: 7,
        name: "Crown / Seventh Chakra",
        title: "Harmonization of the entire nervous system.",
        benefits:
          "Helps with severe insomnia, cerebral disorders, spasms, and contractures. Restores the sense of unity with the body.",
        duration: "Strictly 2–3 minutes (less for the elderly)",
        position: "On the top of the head — shorter exposure!",
        warning: true,
        indications: [
          "Insomnia",
          "Cerebral disorders",
          "Spasms",
          "Contractures",
        ],
        note: "",
      },
    ],
    newExtras: [
      {
        id: "obesity",
        title: "Obesity & Metabolism",
        body: "Treatment of the abdominal center and the 5th chakra (throat) accelerates metabolism. Use 2–3 times daily for optimal metabolic activation.",
        stat: "2–3× daily",
      },
      {
        id: "circulation",
        title: "Circulation",
        body: "Stand with the soles of your feet on the Polaris disk for 10–15 minutes. Stimulates peripheral circulation throughout the body, from feet to head.",
        stat: "10–15 min",
      },
      {
        id: "stress",
        title: "Stress Neutralization",
        body: "Place both palms on the disk, or place the disk on the third chakra (solar plexus). Instantly calms the nervous system and regulates blood pressure.",
        stat: "Instant",
      },
    ],
  },

  es: {
    alert: {
      title: "Aviso importante",
      body: "Puede experimentar sensaciones como aumento del dolor, hormigueo o calor. Esto es una señal de que el organismo está comenzando a corregir el trastorno. No se preocupe, las sensaciones desaparecerán a medida que se elimine el problema.",
    },
    mapSectionExtra: {
      indicationsLabel: "Indicaciones",
      noteLabel: "Nota",
      localDurationNote: "Aplicación local: 10–20 min, 2–3 veces al día",
      warningNote: "Estrictamente 2–3 minutos. Menos para mayores y niños.",
    },
    points: [
      { id: 1, indications: ["Infecciones anales", "Prurito vaginal", "Inflamación urinaria", "Hemorroides", "Impotencia", "Hipertrofia prostática"], note: "" },
      { id: 2, indications: ["Esterilidad", "Lumbalgia", "Debilidad general", "Problemas renales", "Estreñimiento", "Diarrea"], note: "" },
      { id: 3, indications: ["Gastritis", "Úlcera", "Náuseas", "Presión alta", "Depresión", "Ansiedad", "Palpitaciones"], note: "" },
      { id: 4, indications: ["Asma", "Bronquitis", "Dolor mamario", "Problemas cardíacos"], note: "" },
      { id: 5, indications: ["Enfermedad de Hashimoto", "Tiroiditis", "Inflamación de garganta", "Problemas de encías"], note: "La tiroides es el director del organismo – tratar también para un aspecto juvenil." },
      { id: 6, indications: ["Sinusitis", "Vértigo", "Trastornos oculares"], note: "" },
      { id: 7, indications: ["Insomnio", "Trastornos cerebrales", "Espasmos", "Contracturas"], note: "" },
    ],
    newExtras: [
      { id: "obesity", title: "Obesidad y metabolismo", body: "El tratamiento del centro abdominal y el 5.° chakra (garganta) acelera el metabolismo. Usar 2–3 veces al día para una activación metabólica óptima.", stat: "2–3× al día" },
      { id: "circulation", title: "Circulación", body: "Coloque las plantas de los pies sobre el disco Polaris durante 10–15 minutos. Estimula la circulación periférica en todo el cuerpo, de abajo hacia arriba.", stat: "10–15 min" },
      { id: "stress", title: "Neutralización del estrés", body: "Coloque ambas palmas sobre el disco o el disco sobre el tercer chakra (plexo solar). Calma instantáneamente el sistema nervioso y regula la presión arterial.", stat: "Inmediato" },
    ],
  },

  pt: {
    alert: {
      title: "Aviso importante",
      body: "Podem ocorrer sensações como aumento da dor, formigamento ou calor. Este é um sinal de que o organismo está a começar a corrigir o distúrbio. Não se preocupe, as sensações desaparecerão à medida que o problema for resolvido.",
    },
    mapSectionExtra: {
      indicationsLabel: "Indicações",
      noteLabel: "Nota",
      localDurationNote: "Locais específicos: 10–20 min, 2–3 vezes por dia",
      warningNote: "Estritamente 2–3 minutos. Menos para idosos e crianças.",
    },
    points: [
      { id: 1, indications: ["Infecções anais", "Prurido vaginal", "Inflamação urinária", "Hemorroidas", "Impotência", "Hipertrofia prostática"], note: "" },
      { id: 2, indications: ["Esterilidade", "Lombalgia", "Fraqueza geral", "Problemas renais", "Obstipação", "Diarreia"], note: "" },
      { id: 3, indications: ["Gastrite", "Úlcera", "Náuseas", "Pressão alta", "Depressão", "Ansiedade", "Palpitações"], note: "" },
      { id: 4, indications: ["Asma", "Bronquite", "Dor mamária", "Problemas cardíacos"], note: "" },
      { id: 5, indications: ["Doença de Hashimoto", "Tireoidite", "Inflamação da garganta", "Problemas gengivais"], note: "A tiroide é o maestro do organismo – tratar também para uma aparência jovem." },
      { id: 6, indications: ["Sinusite", "Tonturas", "Distúrbios oculares"], note: "" },
      { id: 7, indications: ["Insônia", "Distúrbios cerebrais", "Espasmos", "Contraturas"], note: "" },
    ],
    newExtras: [
      { id: "obesity", title: "Obesidade e metabolismo", body: "O tratamento do centro abdominal e do 5.º chakra (garganta) acelera o metabolismo. Usar 2–3 vezes por dia para uma ativação metabólica ideal.", stat: "2–3× por dia" },
      { id: "circulation", title: "Circulação", body: "Coloque as plantas dos pés sobre o disco Polaris durante 10–15 minutos. Estimula a circulação periférica em todo o corpo, dos pés à cabeça.", stat: "10–15 min" },
      { id: "stress", title: "Neutralização do stress", body: "Coloque ambas as palmas sobre o disco ou o disco sobre o terceiro chakra (plexo solar). Acalma instantaneamente o sistema nervoso e regula a pressão arterial.", stat: "Imediato" },
    ],
  },

  it: {
    alert: {
      title: "Avviso importante",
      body: "Possono verificarsi sensazioni come aumento del dolore, formicolio o calore. Questo è un segnale che l'organismo sta iniziando a correggere il disturbo. Non preoccupatevi, le sensazioni scompariranno man mano che il problema viene risolto.",
    },
    mapSectionExtra: {
      indicationsLabel: "Indicazioni",
      noteLabel: "Nota",
      localDurationNote: "Punti locali: 10–20 min, 2–3 volte al giorno",
      warningNote: "Rigorosamente 2–3 minuti. Meno per anziani e bambini.",
    },
    points: [
      { id: 1, indications: ["Infezioni anali", "Prurito vaginale", "Infiammazione urinaria", "Emorroidi", "Impotenza", "Ipertrofia prostatica"], note: "" },
      { id: 2, indications: ["Sterilità", "Lombalgia", "Debolezza generale", "Problemi renali", "Stitichezza", "Diarrea"], note: "" },
      { id: 3, indications: ["Gastrite", "Ulcera", "Nausea", "Pressione alta", "Depressione", "Agitazione", "Palpitazioni"], note: "" },
      { id: 4, indications: ["Asma", "Bronchite", "Dolori al seno", "Problemi cardiaci"], note: "" },
      { id: 5, indications: ["Malattia di Hashimoto", "Tiroidite", "Infiammazione della gola", "Problemi alle gengive"], note: "La tiroide è il direttore dell'organismo – trattare anche per un aspetto giovanile." },
      { id: 6, indications: ["Sinusite", "Vertigini", "Disturbi oculari"], note: "" },
      { id: 7, indications: ["Insonnia", "Disturbi cerebrali", "Spasmi", "Contratture"], note: "" },
    ],
    newExtras: [
      { id: "obesity", title: "Obesità e metabolismo", body: "Il trattamento del centro addominale e del 5° chakra (gola) accelera il metabolismo. Usare 2–3 volte al giorno per un'attivazione metabolica ottimale.", stat: "2–3× al giorno" },
      { id: "circulation", title: "Circolazione", body: "Posizionare le piante dei piedi sul disco Polaris per 10–15 minuti. Stimola la circolazione periferica in tutto il corpo, dai piedi alla testa.", stat: "10–15 min" },
      { id: "stress", title: "Neutralizzazione dello stress", body: "Posizionare entrambi i palmi sul disco o il disco sul terzo chakra (plesso solare). Calma istantaneamente il sistema nervoso e regola la pressione sanguigna.", stat: "Istantaneo" },
    ],
  },

  fr: {
    alert: {
      title: "Avis important",
      body: "Des sensations telles qu'une augmentation de la douleur, des picotements ou une chaleur peuvent se produire. C'est un signe que l'organisme commence à corriger le trouble. Ne vous inquiétez pas, les sensations disparaîtront au fur et à mesure que le problème est résolu.",
    },
    mapSectionExtra: {
      indicationsLabel: "Indications",
      noteLabel: "Remarque",
      localDurationNote: "Points locaux : 10–20 min, 2–3 fois par jour",
      warningNote: "Strictement 2–3 minutes. Moins pour les personnes âgées et les enfants.",
    },
    points: [
      { id: 1, indications: ["Infections anales", "Prurit vaginal", "Inflammation urinaire", "Hémorroïdes", "Impuissance", "Hypertrophie prostatique"], note: "" },
      { id: 2, indications: ["Stérilité", "Lombalgie", "Faiblesse générale", "Problèmes rénaux", "Constipation", "Diarrhée"], note: "" },
      { id: 3, indications: ["Gastrite", "Ulcère", "Nausées", "Hypertension", "Dépression", "Anxiété", "Palpitations"], note: "" },
      { id: 4, indications: ["Asthme", "Bronchite", "Douleurs mammaires", "Problèmes cardiaques"], note: "" },
      { id: 5, indications: ["Maladie de Hashimoto", "Thyroïdite", "Inflammation de la gorge", "Problèmes de gencives"], note: "La thyroïde est le chef d'orchestre de l'organisme – traiter aussi pour une apparence jeune." },
      { id: 6, indications: ["Sinusite", "Vertiges", "Troubles oculaires"], note: "" },
      { id: 7, indications: ["Insomnie", "Troubles cérébraux", "Spasmes", "Contractures"], note: "" },
    ],
    newExtras: [
      { id: "obesity", title: "Obésité et métabolisme", body: "Le traitement du centre abdominal et du 5e chakra (gorge) accélère le métabolisme. Utiliser 2–3 fois par jour pour une activation métabolique optimale.", stat: "2–3× par jour" },
      { id: "circulation", title: "Circulation", body: "Placez la plante des pieds sur le disque Polaris pendant 10–15 minutes. Stimule la circulation périphérique dans tout le corps, des pieds à la tête.", stat: "10–15 min" },
      { id: "stress", title: "Neutralisation du stress", body: "Placez les deux paumes sur le disque ou le disque sur le troisième chakra (plexus solaire). Calme instantanément le système nerveux et régule la pression artérielle.", stat: "Immédiat" },
    ],
  },
};

/* ─── Merge helper ───────────────────────────────────────────────────────── */
// For sr/en we have full point data; for others we only have indications+note to merge.
function buildPoints(lang, existingPoints) {
  const langData = DATA[lang];
  if (!langData) return existingPoints;

  return existingPoints.map((pt) => {
    const override = langData.points.find((p) => p.id === pt.id);
    if (!override) return pt;

    // For sr and en we have full data; for others only indications+note
    if (lang === "sr" || lang === "en") {
      return {
        id: override.id,
        name: override.name,
        title: override.title,
        benefits: override.benefits,
        duration: override.duration,
        position: override.position,
        warning: override.warning,
        indications: override.indications,
        note: override.note,
      };
    } else {
      // Keep existing name/title/benefits/duration/position/warning from existing dict
      // but update indications and note
      return {
        ...pt,
        indications: override.indications,
        note: override.note,
      };
    }
  });
}

/* ─── Process each language file ─────────────────────────────────────────── */
const langs = ["sr", "en", "es", "pt", "it", "fr"];

langs.forEach((lang) => {
  const filePath = path.join(DICT_DIR, `${lang}.json`);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${lang}.json — not found`);
    return;
  }

  const dict = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const h = dict.howToUse;
  const langData = DATA[lang];

  if (!langData) {
    console.log(`No data for ${lang}, skipping`);
    return;
  }

  // 1. Add alert
  h.alert = langData.alert;

  // 2. Extend mapSection with new labels
  Object.assign(h.mapSection, langData.mapSectionExtra);

  // 3. Update points
  h.points = buildPoints(lang, h.points);

  // 4. Append new extras items (avoid duplicates)
  const existingIds = new Set(h.extras.items.map((i) => i.id));
  langData.newExtras.forEach((item) => {
    if (!existingIds.has(item.id)) {
      h.extras.items.push(item);
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(dict, null, 2), "utf8");
  console.log(
    `Updated ${lang}.json — points: ${h.points.length}, extras: ${h.extras.items.length}`
  );
});

console.log("Done.");
