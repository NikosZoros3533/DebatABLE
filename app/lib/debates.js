import sql from "better-sqlite3";
import slugify from "slugify";
const db = sql("debates.db");

export async function getDebates() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Database connection failed");
  return db.prepare("SELECT * FROM debates").all();
}

export function getDebate(slug) {
  return db.prepare("SELECT * FROM debates WHERE slug = ?").get(slug);
}

export function saveDebate(debate) {
  const { title, description, sideA, sideB } = debate;
  const slug = slugify(title, {
    lower: true,
    strict: true,
  });
  
  db.prepare("INSERT INTO debates (title, description, sideA_title, sideB_title, slug) VALUES (?, ?, ?, ?, ?)")
    .run(title, description, sideA, sideB, slug);
  
  return { success: true, message: "Debate added successfully!" };
}