const sql = require("better-sqlite3");
const db = sql("debates.db");

const dummyDebates = [
  {
    title: "Gorilla vs 100 men",
    slug: "gorillavsmen",
    description: "If 100 men fight a gorilla with bare hands who will win",
    sideA: { title: "Gorilla", percentage: 60 },
    sideB: { title: "100 men", percentage: 40 },
    creator: "NikosZoros",
  },
  {
    title: "Pineapple on pizza: Yes or No?",
    slug: "pineapple-pizza",
    description: "Does pineapple belong on pizza? The eternal debate.",
    sideA: { title: "Yes, it's delicious", percentage: 35 },
    sideB: { title: "No, it's a crime", percentage: 65 },
    creator: "PizzaLover42",
  },
  {
    title: "Cats vs Dogs",
    slug: "cats-vs-dogs",
    description: "Which makes a better pet: cats or dogs?",
    sideA: { title: "Cats", percentage: 45 },
    sideB: { title: "Dogs", percentage: 55 },
    creator: "PetEnthusiast",
  },
  {
    title: "Night owl vs Early bird",
    slug: "sleep-schedule",
    description:
      "Which is more productive: staying up late or waking up early?",
    sideA: { title: "Night owl", percentage: 30 },
    sideB: { title: "Early bird", percentage: 70 },
    creator: "SleepyHead",
  },
  {
    title: "Digital books vs Physical books",
    slug: "book-format",
    description:
      "Which is better for reading: e-books or traditional paper books?",
    sideA: { title: "Digital books", percentage: 40 },
    sideB: { title: "Physical books", percentage: 60 },
    creator: "BookWorm99",
  },
  {
    title: "Android vs iPhone",
    slug: "smartphone-os",
    description: "Which smartphone platform is superior?",
    sideA: { title: "Android", percentage: 55 },
    sideB: { title: "iPhone", percentage: 45 },
    creator: "TechGuru",
  },
  {
    title: "Shower in the morning vs evening",
    slug: "shower-time",
    description: "When is the best time to take a shower?",
    sideA: { title: "Morning", percentage: 65 },
    sideB: { title: "Evening", percentage: 35 },
    creator: "CleanFreak",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS debates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE,
    description TEXT NOT NULL,
    sideA_title TEXT NOT NULL,
    sideA_percentage,
    sideB_title TEXT NOT NULL,
    sideB_percentage,
    creator TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  `
).run();

function initData() {
  const row = db.prepare("SELECT COUNT(*) as count FROM debates").get();
  if (row.count === 0) {
    dummyDebates.forEach((debate) => {
      db.prepare(
        `
      INSERT INTO debates (title, slug, description, sideA_title, sideA_percentage, sideB_title, sideB_percentage, creator)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `
      ).run(
        debate.title,
        debate.slug,
        debate.description,
        debate.sideA.title,
        debate.sideA.percentage,
        debate.sideB.title,
        debate.sideB.percentage,
        debate.creator
      );
    });
    console.log("Dummy debates inserted.");
  } else {
    console.log("Debates table already has data.");
  }
}

initData();