const express = require('express');
const router = express.Router();

// -------------------- Helper Random --------------------
function random(min, max, decimals = 1) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// -------------------- Evaluación de Alertas --------------------
function evaluateQuality(data) {
  const alerts = [];

  if (data.completeness < 98) {
    alerts.push(`Completeness bajo: ${data.completeness}%`);
  }
  if (data.accuracy < 96) {
    alerts.push(`Accuracy bajo: ${data.accuracy}%`);
  }
  if (data.duplication_rate > 2) {
    alerts.push(`Tasa de duplicación alta: ${data.duplication_rate}%`);
  }
  if (data.timeliness < 95) {
    alerts.push(`Oportunidad de datos baja: ${data.timeliness}%`);
  }
  if (data.integrity_issues > 0) {
    alerts.push(`${data.integrity_issues} problemas de integridad detectados`);
  }

  return alerts;
}

// -------------------- Generador de Data --------------------
function generateQualityProfile(profile = "default") {

  // perfiles para hacer los datos más realistas
  const profiles = {
    his: { c: [96, 99], a: [93, 97], d: [1, 3], t: [90, 97], i: [0, 4] },
    erp: { c: [98, 100], a: [96, 99], d: [0.5, 2], t: [95, 99], i: [0, 2] },
    lab: { c: [95, 98], a: [90, 95], d: [1.5, 3], t: [92, 97], i: [0, 3] },
    pacs: { c: [97, 99], a: [94, 97], d: [1, 2.5], t: [93, 97], i: [0, 3] },
    default: { c: [95, 99], a: [90, 98], d: [1, 3], t: [90, 99], i: [0, 5] }
  };

  const p = profiles[profile] || profiles.default;

  return {
    completeness: random(p.c[0], p.c[1]),
    accuracy: random(p.a[0], p.a[1]),
    duplication_rate: random(p.d[0], p.d[1]),
    timeliness: random(p.t[0], p.t[1]),
    integrity_issues: randomInt(p.i[0], p.i[1])
  };
}

// -------------------- Endpoints Automáticos --------------------

// HIS
router.get('/his', (_, res) => {
  const data = generateQualityProfile("his");
  res.json({ ...data, alerts: evaluateQuality(data) });
});

// ERP
router.get('/erp', (_, res) => {
  const data = generateQualityProfile("erp");
  res.json({ ...data, alerts: evaluateQuality(data) });
});

// Laboratorio
router.get('/lab', (_, res) => {
  const data = generateQualityProfile("lab");
  res.json({ ...data, alerts: evaluateQuality(data) });
});

// PACS
router.get('/pacs', (_, res) => {
  const data = generateQualityProfile("pacs");
  res.json({ ...data, alerts: evaluateQuality(data) });
});

// Health
router.get('/health', (_, res) => {
  res.json({ status: "ok", service: "Data Quality" });
});

module.exports = router;
