const fs = require('fs');

const srTestimonials = {
  pageHero: {
    eyebrow: 'Iskustva korisnika',
    title: 'Stvarne priče.',
    titleItalic: 'Stvarni rezultati.',
    subtitle: 'Više od 10.000 zadovoljnih korisnika. Ovo su samo neke od njihovih priča.'
  },
  filters: {
    all: 'Svi',
    pain: 'Bol',
    energy: 'Energija',
    sleep: 'San',
    sport: 'Sport'
  },
  items: [
    {
      id: 'dragan-m',
      type: 'text',
      category: 'pain',
      quote: 'Bol u leđima koji me mučio godinama nestao je za svega tri dana. Nisam mogao da poverujem. Prvih 48 sati sam bio skeptičan, ali trećeg jutra sam ustao bez bola po prvi put u deset godina.',
      author: 'Dragan M.',
      location: 'Beograd',
      verified: true,
      duration: 'Korisnik 3 meseca'
    },
    {
      id: 'jelena-s',
      type: 'text',
      category: 'sleep',
      quote: 'Konačno spavam celu noć. Budim se odmorna i puna energije. Pre Polarisa, uzimala sam tablete za spavanje skoro svake noći. Sada ih nisam dirnula već mesec i po.',
      author: 'Jelena S.',
      location: 'Novi Sad',
      verified: true,
      duration: 'Korisnica 2 meseca'
    },
    {
      id: 'marko-p',
      type: 'text',
      category: 'energy',
      quote: 'Jutarnji protokol sa Polarisom mi je promenio ceo dan. 15 minuta na solar plexus čakri ujutru i osećam se kao da sam odspavao deset sati. Moja produktivnost se udvostručila.',
      author: 'Marko P.',
      location: 'Niš',
      verified: true,
      duration: 'Korisnik 5 meseci'
    },
    {
      id: 'video-aleksandar',
      type: 'video',
      category: 'sport',
      author: 'Aleksandar D.',
      location: 'Beograd',
      role: 'Profesionalni košarkaš',
      videoThumb: 'sport'
    },
    {
      id: 'ana-k',
      type: 'text',
      category: 'pain',
      quote: 'Hronični bolovi u zglobovima su se smanjili za više od 70% posle mesec dana redovne upotrebe. Moj reumatolog je bio iznenađen poboljšanjem nalaza.',
      author: 'Ana K.',
      location: 'Subotica',
      verified: true,
      duration: 'Korisnica 4 meseca'
    },
    {
      id: 'nevena-r',
      type: 'text',
      category: 'energy',
      quote: 'Štitna žlezda mi je godinama bila problem. Posle primene na grlo čakru, endokrinolog je primetio poboljšanje. Osećam se vitalnijom nego u dvadesetim.',
      author: 'Nevena R.',
      location: 'Kragujevac',
      verified: true,
      duration: 'Korisnica 6 meseci'
    },
    {
      id: 'video-marina',
      type: 'video',
      category: 'energy',
      author: 'Marina K.',
      location: 'Zagreb',
      role: 'Joga instruktorica',
      videoThumb: 'energy'
    },
    {
      id: 'stefan-v',
      type: 'text',
      category: 'sport',
      quote: 'Oporavak posle treninga je duplo brži. Polaris Sport koristim odmah po dolasku sa utakmice — sutradan nema ni traga od umora u mišićima.',
      author: 'Stefan V.',
      location: 'Beograd',
      verified: true,
      duration: 'Korisnik Polaris Sport, 3 meseca'
    },
    {
      id: 'mirjana-t',
      type: 'text',
      category: 'sleep',
      quote: 'Imam 67 godina i godinama sam patila od nesanice. Interno, doktori su mi govorili da je to normalno za moje godine. Polaris mi je dokazao da to nije tačno.',
      author: 'Mirjana T.',
      location: 'Kragujevac',
      verified: true,
      duration: 'Korisnica 2 meseca'
    }
  ]
};

const enTestimonials = {
  pageHero: {
    eyebrow: 'User experiences',
    title: 'Real stories.',
    titleItalic: 'Real results.',
    subtitle: 'Over 10,000 satisfied users. These are just some of their stories.'
  },
  filters: { all: 'All', pain: 'Pain', energy: 'Energy', sleep: 'Sleep', sport: 'Sport' },
  items: [
    { id: 'dragan-m', type: 'text', category: 'pain', quote: 'Back pain that had been bothering me for years disappeared in just three days. I couldn\'t believe it. The third morning I woke up without pain for the first time in ten years.', author: 'Dragan M.', location: 'Belgrade', verified: true, duration: 'User for 3 months' },
    { id: 'jelena-s', type: 'text', category: 'sleep', quote: 'I finally sleep through the night. I wake up rested and full of energy. Before Polaris, I was taking sleeping pills almost every night. I haven\'t touched them in a month and a half.', author: 'Jelena S.', location: 'Novi Sad', verified: true, duration: 'User for 2 months' },
    { id: 'marko-p', type: 'text', category: 'energy', quote: 'The morning protocol with Polaris changed my whole day. 15 minutes on the solar plexus chakra in the morning and I feel like I\'ve slept ten hours. My productivity has doubled.', author: 'Marko P.', location: 'Nis', verified: true, duration: 'User for 5 months' },
    { id: 'video-aleksandar', type: 'video', category: 'sport', author: 'Aleksandar D.', location: 'Belgrade', role: 'Professional basketball player', videoThumb: 'sport' },
    { id: 'ana-k', type: 'text', category: 'pain', quote: 'Chronic joint pain has decreased by more than 70% after a month of regular use. My rheumatologist was surprised by the improvement.', author: 'Ana K.', location: 'Subotica', verified: true, duration: 'User for 4 months' },
    { id: 'nevena-r', type: 'text', category: 'energy', quote: 'My thyroid had been a problem for years. After applying to the throat chakra, my endocrinologist noticed improvement. I feel more vital than in my twenties.', author: 'Nevena R.', location: 'Kragujevac', verified: true, duration: 'User for 6 months' },
    { id: 'video-marina', type: 'video', category: 'energy', author: 'Marina K.', location: 'Zagreb', role: 'Yoga instructor', videoThumb: 'energy' },
    { id: 'stefan-v', type: 'text', category: 'sport', quote: 'Recovery after training is twice as fast. I use Polaris Sport immediately after a game — the next day there\'s no trace of muscle fatigue.', author: 'Stefan V.', location: 'Belgrade', verified: true, duration: 'Polaris Sport user, 3 months' },
    { id: 'mirjana-t', type: 'text', category: 'sleep', quote: 'I am 67 years old and have suffered from insomnia for years. Doctors told me it was normal for my age. Polaris proved them wrong.', author: 'Mirjana T.', location: 'Kragujevac', verified: true, duration: 'User for 2 months' }
  ]
};

['sr','en','es','pt','it','fr'].forEach(lang => {
  const d = JSON.parse(fs.readFileSync(`D:/polaris-disk/src/app/[lang]/dictionaries/${lang}.json`,'utf8'));
  d.testimonialsPage = lang === 'sr' ? srTestimonials : enTestimonials;
  fs.writeFileSync(`D:/polaris-disk/src/app/[lang]/dictionaries/${lang}.json`, JSON.stringify(d,null,2));
});
console.log('done');
