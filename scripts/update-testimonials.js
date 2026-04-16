/* eslint-disable */
const fs = require("fs");
const path = require("path");

const DICT_DIR = path.join(__dirname, "..", "src", "app", "[lang]", "dictionaries");

/* ─── Real Serbian testimonials ─────────────────────────────────────────── */
const realItems = [
  {
    id: "adisa-hotic",
    type: "text",
    category: "stit",
    hook: "Hashimoto 20+ godina — cela porodica osetila razliku",
    quote:
      "Poštovani dr.Tomić, moram da podijelim svoje iskustvo sa primjenom POLARISa. Naručila sam vaš POLARIS i zaista ne mogu da ne budem oduševljena efektom, iako ga koristim tek nekih tri sedmice. Moj Hashimoto, od 1993, eto skoro više od dvadeset godina ga imam. Ono što je ostalo od moje štitne je sasvim malo, ali evo ja ne posustajem u traganju. Stoga sam ja sa nekom radošću čitala vaš članak preko atma.hr i bilo mi je neizmjerno drago. Pa, budući da su i stavovi sa kojima ja živim nekoliko zadnjih godina kad se tiče ishrane, slični mojima, ja sam odmah naručila POLARIS. I onako kako ste vi naveli u svome članku, ne odvajam se od njega! Ali ne samo ja, cijela moja porodica, a nas je petoro. Kćerka i ja tretiramo štitnu žliježdzu i čakre, a i ostali sve po potrebi! Baš kad mi je stigao POLARIS-uho me je jako boljelo, cijelu jednu noć prije toga nisam spavala i morala sam popiti brufen. Stigao je POLARIS i tretirala sam samo 2 minute svaki dan i prošlo me je. Kod djece proljev, prošlo. Glavobolja - prošlo. Sinusitis - prošlo za dan. Prehlada - prošla. Čim stave Polaris, hoće zaspati, opušta ih, opušta nas! Pa nemam riječi osim duboke ZAHVALE. Moj muž je s blagim nepovjerenjem prišao POLARISU - jer kako kaže - malo sam mu dosadna sa svojim nametanjem onog što je dobro i zdravo - ali već nakon dva dana tražio je sam. I sad se s njim redovno druži, ja mu ne moram govoriti da stavi. Probava mu automatski proradi - a inače ima problema sa zatvorom i sa bolesnim želucem i sa malo povišenim tlakom itd. Znači, dr. Dino- hvala Vam što ste nam POLARIS učinili dostupnim!!! Ja sam već mnogima preporučila POLARIS i mislim da će biti sve više narudžbi iz Sanskog Mosta. U nadi da ćete mi odgovoriti kad stignete, srdačno vas pozdravljam i želim Vam sve najbolje u Novoj godini.",
    author: "Adisa Hotić",
    profession: "medicinska sestra",
    location: "Sanski most",
    verified: true,
    duration: "",
  },
  {
    id: "snezana-korlin",
    type: "text",
    category: "stit",
    hook: "TSH pao sa 30 na 3 za pola godine",
    quote:
      "Poštovani gospodine Dino, Uz pomoć vašeg polaris diska, za ovih pola godine, uspjela sam smanjiti TSH sa 30 na 3. Zahvalna sam vam na polaris disku koji je zaista savršen. Hvala vam! S poštovanjem, Snezana Korlin.",
    author: "Snežana Korlin",
    profession: "",
    location: "Zagreb",
    verified: true,
    duration: "",
  },
  {
    id: "jasna-radanovic",
    type: "text",
    category: "stit",
    hook: "Doza leka za štitnu žlezdu smanjena sa 125mg na 100mg",
    quote:
      "Postovani dr.Tomic evo da se javim povodom terapije stitne zlezde sa Polarisom. smanjili su mi dozu leka sa 125mg na 100mg. to je uspeh. nastavljam terapiju polarisom. Pozdrav iz Linca",
    author: "Jasna Radanović",
    profession: "",
    location: "Linz",
    verified: true,
    duration: "",
  },
  {
    id: "vesna-djukic",
    type: "text",
    category: "bol",
    hook: "Bol u kolenu nestao sledećeg dana, upala uha prošla za pola sata",
    quote:
      "Dobro vece doktore Tomicu, evo da i je konacno napisem moja iskustva sa polarisom, i da vam se zahvalim sto ste mi pruzili mogucnost da ga koristim. Ja sam prije nego sto sam narucla polaris vec vjerovala da je to prava stvar ali sad sam i potpuno uvjerena kroz iskustvo. Npr. imala sam bolove u koljenu posto tesko radim a koljeno mi je osteceno poslije pada sa scootera, i uvece sam drzala polaris na mjestu bola drugi dan mi je koljeno bilo sasvim normalno i bez bolova. Imam vec dugo problem sa desnimuhom i uvijek neku malu upalu nekad je bol izrazeniji drzim polaris na uhu vec nakon pola sata bol nestaje. Ima jos puno primjera a i najradosnija sam zbog toga sto osjecam da u mojoj kuci sad ima puno vise pozitivne energije i ja nisam vise tako depresivna. Ne odvajam se od polarisa kad idem van nosim ga u torbi. Moja kcerkica od 10 godina isto ga koristi i vec je osjetila koliko pomaze. Eto za sada toliko. Hvala vam puno sto ste nam omogucili da ovako nesto jednostavno i efikasno u odrzavanju naseg zdravlja mozemo da si priustimo. Srdacan pozdrav.",
    author: "Vesna Đukić",
    profession: "",
    location: "Maastricht, Holandija",
    verified: true,
    duration: "",
  },
  {
    id: "blazenka-m",
    type: "text",
    category: "bol",
    hook: "Kvržice na dojci nestale za 6 dana — UZV nalaz u najboljem redu",
    quote:
      'Poštovani doktore Tomić, Imala sam dvije kvržice na d.dojci veličine manjeg oraha kao posljedicu mastitisa (dojenja) skoro 2 g. Prije 3 mj se ponovo aktiviralo i bilo je jako bolno trajalo je mjesec dana s tim da u ove dvije godine uopće nisam mogla spavati na d. boku zbog bolova u dojci. No unatrag 3 tjedna sam stavljala disk i već 6 dan osjetila olakšanje tkivo je postalo mekano i nisam više pipala kvrge.. Odmah sam se naručila na UZV i nalaz je u najboljem redu. Kod tretiranja sam bila više usredotočena na čakre a na dojku sam stavljala onako "usput" i nisam očekivala nikakve rezultate no iznenadila sam se pozitivno. Dr kaže da je rijetkost da ciste puknu same od sebe a začehureni infekti buknu kad tad i rješavaju se operativno.... Bilo je peckanja topline, povremeni bolovi oštri, i kao da mi netko izvlači nerve iz tkiva i kože. (Dr nisam rekla što sam poduzela da kvrga više nema jer me ionako u čudu gledao što sam došla kad je sve ok..) i nije mi baš vjerovao isto ko ni ja što ne vjerujem neki put... Izgleda da disk djeluje kako god bilo to nevjerojatno. Hvala Vam i srdačan pozdrav.',
    author: "Blažena M.",
    profession: "",
    location: "Paro, Pag",
    verified: true,
    duration: "",
  },
  {
    id: "ljubica-krnac",
    type: "text",
    category: "bol",
    hook: "Trogodišnji bol u glavi nestao potpuno",
    quote:
      "Tri godine sam imala sevajuci bol u glavi 2 cm levo od temena. Sve sam snimala i nista ne mogu da nadju, a na lekove slabo popusta. Koristila sam polaris po 2-3 min na tom mestu i bol je potpuno nestao, neverovatno. Puno vas pozdravljam i zahvaljujem.",
    author: "Ljubica Krnač",
    profession: "",
    location: "Erdevik",
    verified: true,
    duration: "",
  },
  {
    id: "jelka-rusmir",
    type: "text",
    category: "varenje",
    hook: "Upala bubrega — pritisak normalizovan, zglobovi više ne otiču",
    quote:
      "Moj suprug je imao upalu bubrega više od mjesec dana borili smo se sa temperaturom koja je bila 37,3 C. Visok pritisk, otjecanje zglobova i 4 plusa u urinu. Početkom 12mj. naručila sam Polaris, od tada ga suprug svakodnevno koristi. Krvni pritisak sada je idealan, više mu zglobovi ne otječu. Tri sedmice je kihao, kašljao i iskašljavao sekret, iz nosa mu tekao potok, da smo se već bili jako zabrinuli. A zatim slijedi poboljšanje - kašalj je prestao, nos više ne curi, ali i dalje u urinu ima pluseva sad tri, i bubrezi propuštaju proteine. Dok ovo pišem nisu mi nalazi pri ruci da Vam tačno napišem rezultate, ali razlika od prvih i zadnjih nalaza je očigledna na bolje. Ovim putem želim da se zahvalim za Polaris i nadam se da ću Vam se uskoro javiti sa još boljim nalazima. VELIKA HVALA, s poštovanjem, Jelka.",
    author: "Jelka Rusmir",
    profession: "",
    location: "BiH",
    verified: true,
    duration: "",
  },
  {
    id: "anton-rizman",
    type: "text",
    category: "varenje",
    hook: "Pozitivne promene kod uvećane prostate za dve nedelje",
    quote:
      "Bog blagoslovi Vas in Vaš Polaris. Uporabljam ga dva tedna in že opažam pozitivne spremembe v obnašanju povečane prostate. Prepričan pa sem, da bom z njim lahko odpravil še drugo težavo, ki jo imam z pulzom, ta mi občasno zelo naraste. S spoštovanjem in vse dobro!",
    author: "Anton Rizman",
    profession: "",
    location: "Ljubljana",
    verified: true,
    duration: "",
  },
  {
    id: "joki-bezovnik",
    type: "text",
    category: "deca",
    hook: "Mačka preživela trovanje zahvaljujući Polarisu",
    quote:
      "Dobar dan, ja sam jedan vrlo sretni korisnik polarisa, moji prijatelji me uglavnom sa nevjericom slušaju ali ne marim za to, mačka se izvukla od trovanja, preživila je, turala sam polaris ispod nje kad god se i ma gdje srušila, evo je živa je!",
    author: "Joki Bezovnik",
    profession: "",
    location: "Hvar",
    verified: true,
    duration: "",
  },
  {
    id: "ivana-stojanovic",
    type: "text",
    category: "deca",
    hook: "Cela porodica oduševljena — čak i uginulo cveće se oporavilo",
    quote:
      "Poštovani dr.Tomiću, htela sam na ovaj način da iskažem oduševljenje Vašim POLARISOM. Pre petnaestak dana sam naručila dva i počela intenzivnije da ga koristim kao i cela moja porodica. Ranije sam pozajmljivala od sestre, čija je svekrva kupila Polarise skoro svim članovima uže i šire porodice. I gotovo svi imaju pozitivna iskustva sa njim. Pomenuću Vam i to da sam uspela pomoću Polarisa da oporavim skoro uginulo cveće.",
    author: "Ivana Stojanović",
    profession: "",
    location: "Lučani",
    verified: true,
    duration: "",
  },
];

/* ─── Placeholder items for other languages (existing, remapped) ─────────── */
const placeholderItemsEn = [
  {
    id: "dragan-m",
    type: "text",
    category: "bol",
    hook: "Back pain gone in 3 days",
    quote:
      "Back pain that had been bothering me for years disappeared in just three days. I couldn't believe it. The third morning I woke up without pain for the first time in ten years.",
    author: "Dragan M.",
    profession: "",
    location: "Belgrade",
    verified: true,
    duration: "User for 3 months",
  },
  {
    id: "jelena-s",
    type: "text",
    category: "spavanje",
    hook: "Finally sleeping through the night — no more sleeping pills",
    quote:
      "I finally sleep through the night. I wake up rested and full of energy. Before Polaris, I was taking sleeping pills almost every night. I haven't touched them in a month and a half.",
    author: "Jelena S.",
    profession: "",
    location: "Novi Sad",
    verified: true,
    duration: "User for 2 months",
  },
  {
    id: "marko-p",
    type: "text",
    category: "stit",
    hook: "Thyroid improved — endocrinologist noticed the difference",
    quote:
      "My thyroid had been a problem for years. After applying to the throat chakra, my endocrinologist noticed improvement. I feel more vital than in my twenties.",
    author: "Nevena R.",
    profession: "",
    location: "Kragujevac",
    verified: true,
    duration: "User for 6 months",
  },
  {
    id: "mirjana-t",
    type: "text",
    category: "spavanje",
    hook: "Insomnia at 67 — Polaris proved doctors wrong",
    quote:
      "I am 67 years old and suffered from insomnia for years. Doctors kept telling me it was normal for my age. Polaris proved that it doesn't have to be.",
    author: "Mirjana T.",
    profession: "",
    location: "Kragujevac",
    verified: true,
    duration: "User for 2 months",
  },
];

/* ─── Filter labels per language ─────────────────────────────────────────── */
const filtersPerLang = {
  sr: {
    sve: "Sve",
    bol: "Bol",
    stit: "Štitna žlezda i hormoni",
    spavanje: "Spavanje i stres",
    varenje: "Varenje i organi",
    deca: "Deca i ljubimci",
  },
  en: {
    sve: "All",
    bol: "Pain",
    stit: "Thyroid & Hormones",
    spavanje: "Sleep & Stress",
    varenje: "Digestion & Organs",
    deca: "Kids & Pets",
  },
  es: {
    sve: "Todos",
    bol: "Dolor",
    stit: "Tiroides y hormonas",
    spavanje: "Sueño y estrés",
    varenje: "Digestión y órganos",
    deca: "Niños y mascotas",
  },
  pt: {
    sve: "Todos",
    bol: "Dor",
    stit: "Tireoide e hormônios",
    spavanje: "Sono e estresse",
    varenje: "Digestão e órgãos",
    deca: "Crianças e animais",
  },
  it: {
    sve: "Tutti",
    bol: "Dolore",
    stit: "Tiroide e ormoni",
    spavanje: "Sonno e stress",
    varenje: "Digestione e organi",
    deca: "Bambini e animali",
  },
  fr: {
    sve: "Tous",
    bol: "Douleur",
    stit: "Thyroïde et hormones",
    spavanje: "Sommeil et stress",
    varenje: "Digestion et organes",
    deca: "Enfants et animaux",
  },
};

const heroPerLang = {
  sr: {
    eyebrow: "Iskustva korisnika",
    title: "Stvarne priče.",
    titleItalic: "Stvarni rezultati.",
    subtitle:
      "Hiljade zadovoljnih korisnika. Ovo su neka od njihovih originalnih svedočenja.",
  },
  en: {
    eyebrow: "User experiences",
    title: "Real stories.",
    titleItalic: "Real results.",
    subtitle:
      "Thousands of satisfied users. These are some of their original testimonials.",
  },
  es: {
    eyebrow: "Experiencias de usuarios",
    title: "Historias reales.",
    titleItalic: "Resultados reales.",
    subtitle:
      "Miles de usuarios satisfechos. Estos son algunos de sus testimonios originales.",
  },
  pt: {
    eyebrow: "Experiências dos utilizadores",
    title: "Histórias reais.",
    titleItalic: "Resultados reais.",
    subtitle:
      "Milhares de utilizadores satisfeitos. Estes são alguns dos seus testemunhos originais.",
  },
  it: {
    eyebrow: "Esperienze degli utenti",
    title: "Storie reali.",
    titleItalic: "Risultati reali.",
    subtitle:
      "Migliaia di utenti soddisfatti. Queste sono alcune delle loro testimonianze originali.",
  },
  fr: {
    eyebrow: "Expériences des utilisateurs",
    title: "Vraies histoires.",
    titleItalic: "Vrais résultats.",
    subtitle:
      "Des milliers d'utilisateurs satisfaits. Voici quelques-uns de leurs témoignages originaux.",
  },
};

/* ─── Update each language file ──────────────────────────────────────────── */
const langs = ["sr", "en", "es", "pt", "it", "fr"];

langs.forEach((lang) => {
  const filePath = path.join(DICT_DIR, `${lang}.json`);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${lang}.json — not found`);
    return;
  }

  const dict = JSON.parse(fs.readFileSync(filePath, "utf8"));

  dict.testimonialsPage = {
    pageHero: heroPerLang[lang],
    filters: filtersPerLang[lang],
    items: lang === "sr" ? realItems : placeholderItemsEn,
  };

  fs.writeFileSync(filePath, JSON.stringify(dict, null, 2), "utf8");
  console.log(`Updated ${lang}.json`);
});

console.log("Done.");
