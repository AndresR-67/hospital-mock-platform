const express = require('express');
const router = express.Router();

// Funciones utilitarias para randoms
const rand = (min, max) => Math.random() * (max - min) + min;
const randInt = (min, max) => Math.floor(rand(min, max));

const backupStates = ["OK", "WARNING", "FAILED"];

const generateInfraData = () => ({
  cpu_usage: randInt(40, 95),      // %
  ram_usage: randInt(35, 95),      // %
  disk_usage: randInt(50, 97),     // %
  uptime: Number(rand(97.5, 99.9).toFixed(2)), // %
  latency: randInt(80, 600),       // ms
  incident_count: randInt(0, 5),   // #
  backup_status: backupStates[randInt(0, backupStates.length)]
});

// ---------------------------
// 4 ENDPOINTS
// ---------------------------

router.get('/his', (_, res) => {
  res.json(generateInfraData());
});

router.get('/erp', (_, res) => {
  res.json(generateInfraData());
});

router.get('/lab', (_, res) => {
  res.json(generateInfraData());
});

router.get('/pacs', (_, res) => {
  res.json(generateInfraData());
});

module.exports = router;
