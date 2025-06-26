const sql = require("better-sqlite3");
const db = sql("debates.db");

const dummyDebates = [
  {
    title: "Gorilla vs 100 men",
    slug: "gorillavsmen",
    description: "If 100 men fight a gorilla with bare hands who will win",
    sideA: { title: "Gorilla", votes: 60 },
    sideB: { title: "100 men", votes: 40 },
    creator: "NikosZoros",
  },
  {
    title: "Pineapple on pizza: Yes or No?",
    slug: "pineapple-pizza",
    description: "Does pineapple belong on pizza? The eternal debate.",
    sideA: { title: "Yes, it's delicious", votes: 35 },
    sideB: { title: "No, it's a crime", votes: 65 },
    creator: "PizzaLover42",
  },
  {
    title: "Cats vs Dogs",
    slug: "cats-vs-dogs",
    description: "Which makes a better pet: cats or dogs?",
    sideA: { title: "Cats", votes: 45 },
    sideB: { title: "Dogs", votes: 55 },
    creator: "PetEnthusiast",
  },
  {
    title: "Night owl vs Early bird",
    slug: "sleep-schedule",
    description:
      "Which is more productive: staying up late or waking up early?",
    sideA: { title: "Night owl", votes: 30 },
    sideB: { title: "Early bird", votes: 70 },
    creator: "SleepyHead",
  },
  {
    title: "Digital books vs Physical books",
    slug: "book-format",
    description:
      "Which is better for reading: e-books or traditional paper books?",
    sideA: { title: "Digital books", votes: 40 },
    sideB: { title: "Physical books", votes: 60 },
    creator: "BookWorm99",
  },
  {
    title: "Android vs iPhone",
    slug: "smartphone-os",
    description: "Which smartphone platform is superior?",
    sideA: { title: "Android", votes: 55 },
    sideB: { title: "iPhone", votes: 45 },
    creator: "TechGuru",
  },
  {
    title: "Shower in the morning vs evening",
    slug: "shower-time",
    description: "When is the best time to take a shower?",
    sideA: { title: "Morning", votes: 65 },
    sideB: { title: "Evening", votes: 35 },
    creator: "CleanFreak",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS debates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    sideA_title TEXT NOT NULL,
    sideA_votes INTEGER NOT NULL DEFAULT 0,
    sideB_title TEXT NOT NULL,
    sideB_votes INTEGER NOT NULL DEFAULT 0,
    creator TEXT NOT NULL,
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
      INSERT INTO debates (title, slug, description, sideA_title, sideA_votes, sideB_title, sideB_votes, creator)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `
      ).run(
        debate.title,
        debate.slug,
        debate.description,
        debate.sideA.title,
        debate.sideA.votes,
        debate.sideB.title,
        debate.sideB.votes,
        debate.creator
      );
    });
    console.log("Dummy debates inserted.");
  } else {
    console.log("Debates table already has data.");
  }
}

initData();