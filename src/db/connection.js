require('dotenv').config();
const { Pool } = require('pg');

if (!process.env.DATABASE_URL) {
  console.error("❌ ERROR: No existe DATABASE_URL en el archivo .env");
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Probar la conexión una vez al iniciar
pool.connect()
  .then(client => {
    console.log("✅ Conexión a PostgreSQL exitosa");
    client.release();
  })
  .catch(err => {
    console.error("❌ Error conectando a PostgreSQL:", err.message);
    process.exit(1);
  });

module.exports = pool;
