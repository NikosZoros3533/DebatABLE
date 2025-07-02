const sql = require("better-sqlite3");
const db = sql("debates.db");

const stmt = db.prepare('DELETE FROM debates WHERE id = ?');
const result = stmt.run(10);

console.log(`Row(s) deleted: ${result.changes}`);