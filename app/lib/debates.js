import sql from "better-sqlite3";
import slugify from "slugify";
const db = sql("debates.db");

export async function getDebates() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("Database connection failed");
  return db.prepare("SELECT * FROM debates").all();
}

export async function getDebate(slug) {
  return db.prepare("SELECT * FROM debates WHERE slug = ?").get(slug);
}

export async function saveDebate(debate) {
  const { title, description, sideA, sideB } = debate;
  const slug = slugify(title, {
    lower: true,
    strict: true,
  });
  const creator = "Anonymous"; 
  db.prepare(
    "INSERT INTO debates (title, description, sideA_title, sideB_title, slug, creator) VALUES (?, ?, ?, ?, ?, ?)"
  ).run(title, description, sideA, sideB, slug, creator);

  return { success: true, message: "Debate added successfully!" };
}


export async function upvoteDebate(slug) {
  const debate = db.prepare("SELECT * FROM debates WHERE slug = ?").get(slug);
  if (!debate) {
    throw new Error("Debate not found");
  }
  const updatedVotes = debate.sideA_votes + 1;
  db.prepare("UPDATE debates SET sideA_votes = ? WHERE slug = ?").run(updatedVotes, slug);
  return { success: true, message: "Upvoted successfully!" };
}

export async function downvoteDebate(slug) {
  const debate = db.prepare("SELECT * FROM debates WHERE slug = ?").get(slug);
  if (!debate) {
    throw new Error("Debate not found");
  }
  const updatedVotes = debate.sideB_votes + 1;
  db.prepare("UPDATE debates SET sideB_votes = ? WHERE slug = ?").run(updatedVotes, slug);
  return { success: true, message: "Downvoted successfully!" };
} 