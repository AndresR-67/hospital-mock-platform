// src/services/infra/index.js
const express = require('express');
const router = express.Router();

// Métricas simuladas de servidores, VMs, contenedores, CPU, RAM, etc.
router.get('/metrics', (req, res) => {
  res.json({
    servers: [
      { name: 'srv-his-01', cpu: 42, ram: 73 },
      { name: 'srv-erp-02', cpu: 51, ram: 61 }
    ],
    containers: [
      { name: 'api-gateway', status: 'running', cpu: 12, ram: 256 },
      { name: 'etl-worker', status: 'stopped', cpu: 0, ram: 0 }
    ],
    network: {
      latency_ms: 18,
      bandwidth_mbps: 940
    }
  });
});

// Health interno del módulo infra
router.get('/health', (req, res) => {
  res.json({ status: 'ok', module: 'infra' });
});

module.exports = router;
