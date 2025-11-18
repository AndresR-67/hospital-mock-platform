const express = require('express');
const router = express.Router();

// ---- Función genérica para generar alertas ----
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

// ---- HIS ----
router.get('/his', (_, res) => {
  const data = {
    completeness: 97.5,
    accuracy: 94.2,
    duplication_rate: 1.8,
    timeliness: 92.1,
    integrity_issues: 3
  };

  res.json({
    ...data,
    alerts: evaluateQuality(data)
  });
});

// ---- ERP ----
router.get('/erp', (_, res) => {
  const data = {
    completeness: 99.1,
    accuracy: 97.5,
    duplication_rate: 0.9,
    timeliness: 96.2,
    integrity_issues: 0
  };

  res.json({
    ...data,
    alerts: evaluateQuality(data)
  });
});

// ---- Laboratorio ----
router.get('/lab', (_, res) => {
  const data = {
    completeness: 96.4,
    accuracy: 91.8,
    duplication_rate: 2.4,
    timeliness: 94.1,
    integrity_issues: 1
  };

  res.json({
    ...data,
    alerts: evaluateQuality(data)
  });
});

// ---- PACS ----
router.get('/pacs', (_, res) => {
  const data = {
    completeness: 98.5,
    accuracy: 95.0,
    duplication_rate: 1.2,
    timeliness: 93.3,
    integrity_issues: 2
  };

  res.json({
    ...data,
    alerts: evaluateQuality(data)
  });
});

// Health
router.get('/health', (_, res) => {
  res.json({ status: "ok", service: "Data Quality" });
});

module.exports = router;
