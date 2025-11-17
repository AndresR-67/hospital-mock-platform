const express = require('express');
const router = express.Router();

const proyectos = [
  {id: 1, nombre: "HIS Upgrade", avance: 45, riesgo: "Medio"},
  {id: 2, nombre: "Migración ERP", avance: 80, riesgo: "Bajo"}
];

router.get('/proyectos', (_, res) => res.json(proyectos));

router.post('/events/:type', (_, res) => res.json({ok: true}));
router.get('/health', (_, res) => res.json({status: 'ok', service: 'PORTAFOLIO'}));

module.exports = router;
