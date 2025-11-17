require('dotenv').config();
const fs = require("fs");
const path = require("path");
const pool = require("./connection");  
async function seed() {
  try {
    const seedPath = path.join(__dirname, "seed.sql");

    if (!fs.existsSync(seedPath)) {
      console.error("❌ ERROR: No existe seed.sql en src/db/");
      process.exit(1);
    }

    const sql = fs.readFileSync(seedPath, "utf8");

    console.log("🌱 Running seed...");
    await pool.query(sql);

    console.log("✔ Seed completed successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error:", err);
    process.exit(1);
  }
}

seed();
