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

router.get('/resultados', (_, res) => res.json(resultados));
router.get('/alertas', (_, res) => res.json(alertas));

router.post('/events/:type', (_, res) => res.json({ok: true}));
router.get('/health', (_, res) => res.json({status: 'ok', service: 'LAB'}));

module.exports = router;
