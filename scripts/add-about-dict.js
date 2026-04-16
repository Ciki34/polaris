const fs = require('fs');

const srAbout = {
  pageHero: {
    eyebrow: 'Nauka o Polarisu',
    title: 'Šta je',
    titleItalic: 'Polaris?',
    subtitle: 'Odgovor nije u magiji. Odgovor je u fizici.'
  },
  science: {
    eyebrow: 'Naša elektromagnetna priroda',
    title: 'Povratak osnovama elektromagnetne prirode.',
    body: 'Mi smo bića elektromagnetne prirode. Svaka ćelija u vašem telu emituje i prima elektromagnetne signale — to je jezik kojim vaši organi komuniciraju. Kada taj tok stane, nastaje disbalans koji se manifestuje kao bol, umor i bolest. Polaris je tu da ponovo uspostavi tu vezu, pasivno i bez hemije.',
    stat1: { value: '7.83 Hz', label: 'Šumannova rezonancija Zemlje' },
    stat2: { value: 'Φ 1.618', label: 'Zlatni presek prirode' },
    stat3: { value: '100 μV', label: 'Bioelektrični potencijal ćelije' }
  },
  mechanism: {
    eyebrow: 'Antenski princip',
    title: 'Devet prstenova.',
    titleItalic: 'Jedna svrha.',
    body: 'Devet prstenova Polarisa, izrađenih od specijalne legure i precizno podešenih prema Zlatnom preseku (Phi = 1.618...), deluju kao pasivna bio-antena. Poput sočiva koje fokusira rasejanu svetlost u tačku, Polaris prikuplja vitalnu energiju (Prana/Qi) iz okoline i usmerava je direktno u vaše ćelije.',
    detail1: { label: '9 prstenova', body: 'Svaki prsten proporcionalno manji po Phi rati, stvarajući savršenu harmoničnu seriju.' },
    detail2: { label: 'Pasivna tehnologija', body: 'Nema baterija, nema struje, nema zračenja. Samo geometrija i legura.' },
    detail3: { label: 'Legura metala', body: 'Specijalna kombinacija metala optimizovana za bioelektromagnetsku rezonanciju.' }
  },
  heritage: {
    eyebrow: 'Na ramenima giganata',
    title: 'Nasleđe',
    titleItalic: 'velikana.',
    intro: 'Polaris nije nastao u vakuumu. On stoji na temeljima koje su postavila dva vizionara čiji su radovi daleko ispred svog vremena.',
    conceptTitle: 'Ćelije kao oscilatorni krugovi',
    conceptBody: 'Lakhovsky je 1925. godine postavio revolucionarnu tezu: svaka živa ćelija funkcioniše kao mali oscilatorni krug — poput radio predajnika i prijemnika koji konstantno emituje i prima frekvencije. Kada je ćelija zdrava, oscilira na svojoj prirodnoj frekvenciji. Polaris pomaže u vraćanju ćelija na tu optimalnu frekvenciju.',
    people: [
      {
        name: 'Nikola Tesla',
        years: '1856 – 1943',
        role: 'Vizionar električne rezonancije',
        contribution: 'Tesla je bio prvi koji je sistematski istražio rezonanciju kao fundamentalnu silu prirode. Shvatio je da svaki objekat ima svoju prirodnu frekvenciju i da energija može biti prenošena bez žice — samo kroz prostor.',
        quote: 'Ako hoćete da spoznate tajne svemira, razmišljajte u kategorijama energije, frekvencije i vibracije.'
      },
      {
        name: 'Georges Lakhovsky',
        years: '1869 – 1942',
        role: 'Otac oscilatornih krugova',
        contribution: 'Francuski inženjer ruskog porekla koji je revolucionarizovao razumevanje biologije. Autor dela Le Secret de la Vie, u kome opisuje teoriju da su sve žive ćelije oscilatorni krugovi koji komuniciraju putem elektromagnetnih talasa.',
        quote: 'Svaka živa ćelija je poput malog radio predajnika i prijemnika koji neprestano emituje i prima talase.'
      }
    ]
  },
  expert: {
    eyebrow: 'Reč stručnjaka',
    name: 'Dr. Dino Tomić',
    role: 'Ginekolog · Bioenergičar · Osnivač Polarisa',
    title: 'Od klasične ginekologije do kvantne harmonije.',
    body: 'Nakon dvadeset godina rada kao specijalist ginekologije, Dr. Tomić je počeo da uviđa ono što medicinska literatura ne govori: mnogi hronični zdravstveni problemi pacijenata nisu imali strukturalni uzrok koji bi konvencionalna medicina mogla da reši. To ga je navelo na istraživanje bioenergetike, kvantne biologije i elektromagnetnih terapija.',
    body2: 'Polaris nije lek. To je alat koji sam dizajnirao da pacijentu vrati ono što mu je uvek pripadalo — moć sopstvenog isceljenja.',
    quote: 'Nisam napustio medicinu. Proširio sam je. Polaris je alat koji omogućava pacijentu da postane aktivni učesnik u sopstvenom isceljenju, umesto pasivnog primaoca terapije.',
    credentials: ['Specijalist ginekologije', '20+ godina kliničke prakse', 'Istraživač bioenergetike', 'Mentor i predavač']
  }
};

const enAbout = {
  pageHero: { eyebrow: 'The Science of Polaris', title: 'What is', titleItalic: 'Polaris?', subtitle: 'The answer is not in magic. The answer is in physics.' },
  science: {
    eyebrow: 'Our electromagnetic nature',
    title: 'A return to the fundamentals of electromagnetic nature.',
    body: 'We are electromagnetic beings. Every cell in your body emits and receives electromagnetic signals — this is the language your organs use to communicate. When that flow stops, imbalance manifests as pain, fatigue, and illness. Polaris is here to re-establish that connection, passively and without chemistry.',
    stat1: { value: '7.83 Hz', label: "Earth's Schumann Resonance" },
    stat2: { value: 'Φ 1.618', label: "Nature's Golden Ratio" },
    stat3: { value: '100 μV', label: 'Bioelectric cell potential' }
  },
  mechanism: {
    eyebrow: 'The Antenna Principle',
    title: 'Nine rings.',
    titleItalic: 'One purpose.',
    body: 'The nine rings of Polaris, crafted from a special alloy and precisely tuned to the Golden Ratio (Phi = 1.618...), act as a passive bio-antenna. Like a lens focusing scattered light into a point, Polaris collects vital energy (Prana/Qi) from the environment and directs it into your cells.',
    detail1: { label: '9 rings', body: 'Each ring proportionally smaller by the Phi ratio, creating a perfect harmonic series.' },
    detail2: { label: 'Passive technology', body: 'No batteries, no electricity, no radiation. Only geometry and alloy.' },
    detail3: { label: 'Metal alloy', body: 'A special combination of metals optimized for bioelectromagnetic resonance.' }
  },
  heritage: {
    eyebrow: 'Standing on the shoulders of giants',
    title: 'The legacy of',
    titleItalic: 'the greats.',
    intro: 'Polaris was not born in a vacuum. It stands on the foundations laid by two visionaries whose work was far ahead of their time.',
    conceptTitle: 'Cells as oscillating circuits',
    conceptBody: 'In 1925, Lakhovsky put forward a revolutionary thesis: every living cell functions as a small oscillating circuit. When a cell is healthy, it oscillates at its natural frequency. Polaris helps return cells to that optimal frequency.',
    people: [
      { name: 'Nikola Tesla', years: '1856 – 1943', role: 'Visionary of electrical resonance', contribution: 'Tesla systematically explored resonance as a fundamental force of nature. He understood that every object has its own natural frequency and that energy can be transmitted without wires.', quote: 'If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.' },
      { name: 'Georges Lakhovsky', years: '1869 – 1942', role: 'Father of oscillating circuits', contribution: 'A French engineer of Russian origin who revolutionized the understanding of biology. Author of The Secret of Life, describing his theory that all living cells are oscillating circuits.', quote: 'Every living cell is like a small radio transmitter and receiver that constantly emits and receives waves.' }
    ]
  },
  expert: {
    eyebrow: 'Expert perspective',
    name: 'Dr. Dino Tomić',
    role: 'Gynecologist · Bioenergetics specialist · Founder of Polaris',
    title: 'From classical gynecology to quantum harmony.',
    body: 'After twenty years as a specialist gynecologist, Dr. Tomić began to notice what medical literature does not say: many chronic health problems had no structural cause that conventional medicine could solve. This led him to research bioenergetics, quantum biology and electromagnetic therapies.',
    body2: 'Polaris is not a medicine. It is a tool I designed to give patients back what has always belonged to them — the power of self-healing.',
    quote: 'I did not abandon medicine. I expanded it. Polaris allows the patient to become an active participant in their own healing, rather than a passive recipient of therapy.',
    credentials: ['Specialist in gynecology', '20+ years of clinical practice', 'Bioenergetics researcher', 'Mentor and lecturer']
  }
};

['sr','en','es','pt','it','fr'].forEach(lang => {
  const d = JSON.parse(fs.readFileSync(`D:/polaris-disk/src/app/[lang]/dictionaries/${lang}.json`,'utf8'));
  d.aboutPage = lang === 'sr' ? srAbout : enAbout;
  fs.writeFileSync(`D:/polaris-disk/src/app/[lang]/dictionaries/${lang}.json`, JSON.stringify(d,null,2));
});
console.log('done');
