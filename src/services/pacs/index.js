const express = require('express');
const router = express.Router();

const estudios = [
  {id: 1, tipo: "RX Tórax", pacienteId: 1, fecha: "2025-01-11"},
  {id: 2, tipo: "TAC Cerebral", pacienteId: 2, fecha: "2025-01-14"}
];

router.get('/estudios', (_, res) => res.json(estudios));

router.post('/events/:type', (_, res) => res.json({ok: true}));
router.get('/health', (_, res) => res.json({status: 'ok', service: 'PACS'}));

module.exports = router;
