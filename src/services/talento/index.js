const express = require('express');
const router = express.Router();

const roles = [
  {nombre: "Administrador TI", madurez: 4},
  {nombre: "Analista de soporte", madurez: 2}
];

router.get('/roles', (_, res) => res.json(roles));

router.post('/events/:type', (_, res) => res.json({ok: true}));
router.get('/health', (_, res) => res.json({status: 'ok', service: 'TALENTO'}));

module.exports = router;
