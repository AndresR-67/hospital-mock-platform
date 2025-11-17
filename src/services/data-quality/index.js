const express = require('express');
const router = express.Router();

router.get('/metrics', (_, res) => res.json({
  duplicados: 12,
  incompletos: 7,
  calidad_porcentaje: 92
}));

router.post('/events/:type', (_, res) => res.json({ok: true}));

router.get('/health', (_, res) => res.json({status: 'ok', service: 'DATA-QUALITY'}));

module.exports = router;
