import sql from "better-sqlite3";

const db = sql("debates.db");

export async function getDebates() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Database connection failed");
  return db.prepare("SELECT * FROM debates").all();
}

export function getDebate(slug) {
  return db.prepare("SELECT * FROM debates WHERE slug = ?").get(slug);
}
