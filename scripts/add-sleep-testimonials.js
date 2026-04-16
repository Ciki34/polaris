/* eslint-disable */
const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "..",
  "src",
  "app",
  "[lang]",
  "dictionaries",
  "sr.json"
);

const dict = JSON.parse(fs.readFileSync(filePath, "utf8"));

const newItems = [
  {
    id: "vesna-djinovic",
    type: "text",
    category: "spavanje",
    hook: "Spava s Polarisom pored jastuka — buđenje odmorna, bez ukočenog vrata",
    quote:
      "Zdrav mi bio. Moja iskustva su pozitivna. Spavam sa tvojim polarisom pored jastuka. Budim se odmorna i bez ukočenog vrata.",
    author: "Vesna Djinović",
    profession: "",
    location: "Beograd",
    verified: true,
    duration: "",
  },
  {
    id: "bojana-soskic",
    type: "text",
    category: "spavanje",
    hook: "15 dana buđenja u 3h — prve noći s Polarisom spavala kao beba",
    quote:
      "A za disk vam mogu reci da sam ga sinoc stavila na moju natkasnu pored glave i da sam spavala do ujutro kao beba, vidjecu kako ce biti nocas jer se vec skoro 15 dana budim svaku noc oko 3 h, a glava sva mokra od znoja, to je normalno jer sa 50 god. vec ulazim u menopauzu.",
    author: "Bojana Šoškić",
    profession: "",
    location: "Podgorica",
    verified: true,
    duration: "",
  },
  {
    id: "miroslav-sukur",
    type: "text",
    category: "spavanje",
    hook: "Bolje spavam — ni Melatonin nije pomagao pre Polarisa",
    quote:
      "Drago moj doktore bolje spavam , pre ni Melatonin nije pomagao . Hvala vam puno. Miki",
    author: "Miroslav Šukur",
    profession: "",
    location: "Beograd",
    verified: true,
    duration: "",
  },
  {
    id: "sanja-antunovic",
    type: "text",
    category: "spavanje",
    hook: "Spavam mirno, hemoroid se povukao, vitiligo se popravlja — sve zajedno",
    quote:
      "Doktore polaris mi je dao toliko vere..snage i elana. Hemoroid mi se povukao. Ne boli me nista...pigment mi se pojavljuje skoro na svim mestima (vitiligo). Sada imam redovnu stolicu, a nisam imala, muke sam mucila. Jako sam srecna i pozitivna. Ja koja sam se nocu trzala, budila, sada spavam mirno i budim se odmorna sa polarisom. Hvala vam puno",
    author: "Sanja Antunović",
    profession: "",
    location: "Sremska Mitrovica",
    verified: true,
    duration: "",
  },
];

dict.testimonialsPage.items.push(...newItems);

fs.writeFileSync(filePath, JSON.stringify(dict, null, 2), "utf8");

const counts = {};
dict.testimonialsPage.items.forEach((i) => {
  counts[i.category] = (counts[i.category] || 0) + 1;
});
console.log("Total items:", dict.testimonialsPage.items.length);
console.log("Category counts:", JSON.stringify(counts, null, 2));
console.log("Done.");
