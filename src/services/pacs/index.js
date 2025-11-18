const express = require('express');
const router = express.Router();

const estudios = [
  {id: 1, tipo: "RX Tórax", pacienteId: 1, fecha: "2025-01-11"},
  {id: 2, tipo: "TAC Cerebral", pacienteId: 2, fecha: "2025-01-14"}
];

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randFloat(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

router.get('/estudios', (_, res) => res.json(estudios));

router.post('/events/:type', (_, res) => res.json({ok: true}));
router.get('/health', (_, res) => res.json({status: 'ok', service: 'PACS'}));


// GET /pacs/performance
router.get('/performance', (_, res) => {
  const performanceData = {
    uptime: parseFloat(randFloat(96.0, 99.0)),
    errors: rand(0, 3),
    avg_response: rand(200, 600),
    transactions: rand(2500, 4000)
  };
  res.json(performanceData);
});


module.exports = router;
