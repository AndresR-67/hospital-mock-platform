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

module.exports = router;
