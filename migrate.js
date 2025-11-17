require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function runMigration() {
  try {
    const schemaPath = path.join(__dirname, 'src', 'db', 'schema.sql');
    const schemaSQL = fs.readFileSync(schemaPath, 'utf8');

    console.log("⏳ Ejecutando migración...");
    await pool.query(schemaSQL);

    console.log("✅ Migración completada con éxito");
    process.exit(0);

  } catch (err) {
    console.error("❌ Error ejecutando migración:", err.message);
    process.exit(1);
  }
}

runMigration();
