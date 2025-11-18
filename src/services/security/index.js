const express = require('express');
const router = express.Router();

const eventos = [
  {tipo: "login_fail", usuario: "admin", fecha: "2025-01-10"},
  {tipo: "acceso_no_autorizado", recurso: "/his/pacientes"}
];

router.get('/events', (_, res) => res.json(eventos));
router.get('/incidents', (_, res) => res.json([{id: 1, estado: "Investigando"}]));

router.post('/events/:type', (_, res) => res.json({ok: true}));
router.get('/health', (_, res) => res.json({status: 'ok', service: 'SECURITY'}));



// --- Endpoint de estado de seguridad ---
router.get('/status', (_, res) => {
  const securityStatus = {
    vulnerabilities: {
      critical: 2,
      high: 5,
      medium: 12,
      low: 30
    },
    incidents: {
      last_24h: 1,
      last_7d: 4
    },
    access: {
      failed_attempts: 200,
      blocked_ips: 15,
      suspicious_logins: 3
    },
    systems: {
      antivirus: "ok",
      firewall: "ok",
      backup: "warning",
      patching: 87
    },
    risk_score: 72
  };

  res.json(securityStatus);
});

// Health del servicio
router.get('/health', (_, res) => {
  res.json({ status: 'ok', service: 'Security' });
});

module.exports = router;


module.exports = router;
