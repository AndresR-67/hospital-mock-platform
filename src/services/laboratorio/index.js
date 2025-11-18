const express = require('express');
const router = express.Router();

const resultados = [
  {pacienteId: 1, examen: "Hemograma", resultado: "Normal"},
  {pacienteId: 2, examen: "Glucosa", resultado: "Alta"}
];

const alertas = [
  {examen: "Potasio", nivel: "Crítico"},
  {examen: "Creatinina", nivel: "Alto"}

];

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randFloat(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

router.get('/resultados', (_, res) => res.json(resultados));
router.get('/alertas', (_, res) => res.json(alertas));

router.post('/events/:type', (_, res) => res.json({ok: true}));
router.get('/health', (_, res) => res.json({status: 'ok', service: 'LAB'}));

router.get('/performance', (_, res) => {
  const performanceData = {
    uptime: parseFloat(randFloat(95.0, 98.5)),
    errors: rand(0, 5),
    avg_response: rand(300, 700),
    transactions: rand(2000, 3500)
  };
  res.json(performanceData);
});


module.exports = router;
