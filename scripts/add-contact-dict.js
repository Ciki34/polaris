const fs = require('fs');

const srContact = {
  pageHero: {
    eyebrow: 'Podrška i kontakt',
    title: 'Ovde smo',
    titleItalic: 'za vas.',
    subtitle: 'Imate pitanje? Pišite nam ili pogledajte najčešća pitanja ispod.'
  },
  faq: {
    eyebrow: 'Česta pitanja',
    title: 'Sve što trebate da znate.',
    items: [
      {
        id: 'batteries',
        question: 'Da li Polaris ima baterije ili električno napajanje?',
        answer: 'Ne. Polaris je potpuno pasivan uređaj — nema baterija, kablova, niti bilo kakvog električnog napajanja. Funkcioniše isključivo na osnovu geometrije i legure metala od kojih je izrađen, bez ikakvog spoljašnjeg izvora energije.'
      },
      {
        id: 'radiation',
        question: 'Da li Polaris emituje elektromagnetno zračenje?',
        answer: 'Ne. Polaris je pasivna bio-antena, što znači da ne emituje nikakvo zračenje. Umesto toga, poput optičkog sočiva koje usmerava svetlost, on prikuplja i fokusira već prisutne prirodne frekvencije iz okoline — ne stvara ih.'
      },
      {
        id: 'children',
        question: 'Mogu li ga koristiti deca?',
        answer: 'Da. Polaris je bezbedan za primenu kod dece svih uzrasta. Pošto je u potpunosti pasivan i ne emituje nikakve signale, nema kontraindikacija za decu. Preporučujemo kraće sesije (10–15 minuta) za mlađu decu, uz nadzor roditelja.'
      },
      {
        id: 'lifespan',
        question: 'Koliki je rok trajanja Polarisa?',
        answer: 'Neograničen. Pošto Polaris nema pokretnih delova, elektronike ni materijala koji se troše ili degradiraju, njegova geometrija i rezonantna svojstva ostaju netaknuta zauvek. Jednom kupljeni Polaris je investicija za ceo život.'
      },
      {
        id: 'usage',
        question: 'Koliko dugo treba da se koristi?',
        answer: 'Standardna preporuka je 20–30 minuta dnevno na odabranoj zoni. Za akutne bolove, sesije od 3×15 minuta daju brze rezultate. Za hronična stanja, redovna primena jednom dnevno tokom 30 dana daje optimalne efekte.'
      },
      {
        id: 'delivery',
        question: 'Kada mogu da očekujem dostavu?',
        answer: 'Dostava u roku od 24 sata za Srbiju. Za regiju (Bosna, Hrvatska, Crna Gora) 2–3 radna dana. Za ostatak Evrope 5–7 radnih dana. Svaka narudžbina se prati putem tracking koda koji dobijate na email.'
      }
    ]
  },
  contactForm: {
    eyebrow: 'Kontaktirajte nas',
    title: 'Pišite nam.',
    subtitle: 'Odgovaramo u roku od 24 sata, radnim danima.',
    namePlaceholder: 'Vaše ime i prezime',
    emailPlaceholder: 'vas@email.com',
    messagePlaceholder: 'Kako vam možemo pomoći?',
    submitLabel: 'Pošalji poruku',
    submittingLabel: 'Šalje se...',
    successTitle: 'Poruka primljena!',
    successBody: 'Hvala vam. Odgovorićemo vam u roku od 24 sata.',
    errorLabel: 'Došlo je do greške. Pokušajte ponovo.'
  },
  support: {
    eyebrow: 'Direktna podrška',
    title: 'Kontakt informacije.',
    phoneLabel: 'Telefon',
    phoneValue: '+381 60 123 4567',
    emailLabel: 'Email',
    emailValue: 'podrska@polaris.rs',
    hoursLabel: 'Radno vreme',
    hoursValue: 'Pon–Pet, 09:00–17:00'
  }
};

const enContact = {
  pageHero: {
    eyebrow: 'Support & Contact',
    title: "We're here",
    titleItalic: 'for you.',
    subtitle: 'Have a question? Write to us or browse the FAQ below.'
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Everything you need to know.',
    items: [
      {
        id: 'batteries',
        question: 'Does Polaris have batteries or electrical power?',
        answer: 'No. Polaris is a completely passive device — no batteries, no cables, no electrical power of any kind. It works solely through the geometry and metal alloy it is made from, with no external energy source.'
      },
      {
        id: 'radiation',
        question: 'Does Polaris emit electromagnetic radiation?',
        answer: 'No. Polaris is a passive bio-antenna, meaning it emits no radiation. Instead, like an optical lens that directs light, it collects and focuses naturally occurring frequencies already present in the environment — it does not create them.'
      },
      {
        id: 'children',
        question: 'Can children use it?',
        answer: 'Yes. Polaris is safe for use by children of all ages. As it is completely passive and emits no signals, there are no contraindications for children. We recommend shorter sessions (10–15 minutes) for young children, with parental supervision.'
      },
      {
        id: 'lifespan',
        question: 'What is the lifespan of Polaris?',
        answer: 'Unlimited. Because Polaris has no moving parts, electronics, or materials that wear or degrade, its geometry and resonant properties remain intact forever. A Polaris purchased once is a lifelong investment.'
      },
      {
        id: 'usage',
        question: 'How long should it be used?',
        answer: 'The standard recommendation is 20–30 minutes per day on the chosen area. For acute pain, 3×15 minute sessions deliver fast results. For chronic conditions, regular once-daily use over 30 days gives optimal effects.'
      },
      {
        id: 'delivery',
        question: 'When can I expect delivery?',
        answer: 'Delivery within 24 hours for Serbia. For the region (Bosnia, Croatia, Montenegro) 2–3 business days. For the rest of Europe 5–7 business days. Each order is tracked via a tracking code sent to your email.'
      }
    ]
  },
  contactForm: {
    eyebrow: 'Contact us',
    title: 'Write to us.',
    subtitle: 'We respond within 24 hours on business days.',
    namePlaceholder: 'Your full name',
    emailPlaceholder: 'you@email.com',
    messagePlaceholder: 'How can we help you?',
    submitLabel: 'Send message',
    submittingLabel: 'Sending...',
    successTitle: 'Message received!',
    successBody: 'Thank you. We will reply within 24 hours.',
    errorLabel: 'Something went wrong. Please try again.'
  },
  support: {
    eyebrow: 'Direct support',
    title: 'Contact details.',
    phoneLabel: 'Phone',
    phoneValue: '+381 60 123 4567',
    emailLabel: 'Email',
    emailValue: 'support@polaris.rs',
    hoursLabel: 'Working hours',
    hoursValue: 'Mon–Fri, 09:00–17:00'
  }
};

['sr','en','es','pt','it','fr'].forEach(lang => {
  const d = JSON.parse(fs.readFileSync(`D:/polaris-disk/src/app/[lang]/dictionaries/${lang}.json`,'utf8'));
  d.contactPage = lang === 'sr' ? srContact : enContact;
  fs.writeFileSync(`D:/polaris-disk/src/app/[lang]/dictionaries/${lang}.json`, JSON.stringify(d, null, 2));
});
console.log('done');
