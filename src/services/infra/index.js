const express = require('express');
const router = express.Router();

// ---- Función genérica para evaluar umbrales ----
function evaluateInfra(data) {
  const alerts = [];

  if (data.cpu_usage > 85) alerts.push(`CPU alta: ${data.cpu_usage}%`);
  if (data.ram_usage > 85) alerts.push(`RAM alta: ${data.ram_usage}%`);
  if (data.disk_usage > 90) alerts.push(`Disco al límite: ${data.disk_usage}%`);
  if (data.uptime < 99) alerts.push(`Uptime bajo: ${data.uptime}%`);
  if (data.latency > 400) alerts.push(`Latencia elevada: ${data.latency}ms`);
  if (data.incident_count > 0) alerts.push(`${data.incident_count} incidentes detectados`);
  if (data.backup_status !== "OK") alerts.push(`Backup en estado ${data.backup_status}`);

  return alerts;
}

// -------------------------
// HIS
// -------------------------
router.get('/his', (_, res) => {
  const data = {
    cpu_usage: 72,
    ram_usage: 68,
    disk_usage: 81,
    uptime: 99.2,
    latency: 180,
    incident_count: 2,
    backup_status: "OK"
  };

  res.json({
    ...data,
    alerts: evaluateInfra(data)
  });
});

// -------------------------
// ERP
// -------------------------
router.get('/erp', (_, res) => {
  const data = {
    cpu_usage: 88,
    ram_usage: 91,
    disk_usage: 77,
    uptime: 97.5,
    latency: 420,
    incident_count: 1,
    backup_status: "WARNING"
  };

  res.json({
    ...data,
    alerts: evaluateInfra(data)
  });
});

// -------------------------
// Laboratorio
// -------------------------
router.get('/lab', (_, res) => {
  const data = {
    cpu_usage: 64,
    ram_usage: 59,
    disk_usage: 83,
    uptime: 99.7,
    latency: 150,
    incident_count: 0,
    backup_status: "OK"
  };

  res.json({
    ...data,
    alerts: evaluateInfra(data)
  });
});

// -------------------------
// PACS
// -------------------------
router.get('/pacs', (_, res) => {
  const data = {
    cpu_usage: 92,
    ram_usage: 87,
    disk_usage: 94,
    uptime: 98.4,
    latency: 510,
    incident_count: 3,
    backup_status: "FAILED"
  };

  res.json({
    ...data,
    alerts: evaluateInfra(data)
  });
});

// Health
router.get('/health', (_, res) => {
  res.json({ status: "ok", service: "Infrastructure" });
});

module.exports = router;
