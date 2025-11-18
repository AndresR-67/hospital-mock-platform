const express = require('express');
const router = express.Router();

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// --- Eventos simulados ---
router.get('/events', (_, res) => {
  const tiposEventos = ["login_fail", "acceso_no_autorizado", "config_change", "elevated_privilege"];
  const recursos = ["/his/pacientes", "/erp/finanzas", "/lab/results", "/pacs/images"];

  const eventos = Array.from({ length: rand(2, 5) }).map(() => ({
    tipo: randPick(tiposEventos),
    usuario: randPick(["admin", "soporte", "auditor", "tecnico"]),
    recurso: randPick(recursos),
    fecha: new Date(Date.now() - rand(1, 30) * 86400000).toISOString().split('T')[0]
  }));

  res.json(eventos);
});

// --- Incidentes ---
router.get('/incidents', (_, res) => {
  const estados = ["Investigando", "Mitigado", "Cerrado", "En análisis"];

  const incidents = Array.from({ length: rand(1, 4) }).map((_, i) => ({
    id: i + 1,
    estado: randPick(estados)
  }));

  res.json(incidents);
});

// Registrar eventos
router.post('/events/:type', (_, res) => res.json({ ok: true }));

// --- Status aleatorio ---
router.get('/status', (_, res) => {
  const securityStatus = {
    vulnerabilities: {
      critical: rand(0, 4),
      high: rand(3, 10),
      medium: rand(10, 25),
      low: rand(20, 60)
    },
    incidents: {
      last_24h: rand(0, 3),
      last_7d: rand(2, 10)
    },
    access: {
      failed_attempts: rand(100, 500),
      blocked_ips: rand(5, 25),
      suspicious_logins: rand(0, 5)
    },
    systems: {
      antivirus: randPick(["ok", "ok", "warning"]),
      firewall: randPick(["ok", "ok", "warning"]),
      backup: randPick(["ok", "warning", "critical"]),
      patching: rand(60, 95)   // % de parches aplicados
    },
    risk_score: rand(40, 90)   // 0–100
  };

  res.json(securityStatus);
});

// --- Health ---
router.get('/health', (_, res) => {
  res.json({ status: 'ok', service: 'Security' });
});

module.exports = router;
