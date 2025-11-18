const express = require('express');
const router = express.Router();

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randFloat(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

// ---- Datos falsos ----
const pacientes = [
  { id: 1, nombre: "Juan Pérez", edad: 34, ingreso: "2025-01-10" },
  { id: 2, nombre: "Ana Torres", edad: 51, ingreso: "2025-01-12" }
];

const citas = [
  { id: 1, pacienteId: 1, fecha: "2025-02-01", especialidad: "Medicina Interna" },
  { id: 2, pacienteId: 2, fecha: "2025-02-03", especialidad: "Cardiología" }
];

const eventosClinicos = [
  { id: 1, pacienteId: 1, tipo: "Hospitalización", fecha: "2025-01-10" },
  { id: 2, pacienteId: 2, tipo: "Emergencia", fecha: "2025-01-12" }
];

// ---- GET endpoints ----
router.get('/pacientes', (_, res) => res.json(pacientes));
router.get('/citas', (_, res) => res.json(citas));
router.get('/eventos', (_, res) => res.json(eventosClinicos));

// ---- POST events (para n8n) ----
router.post('/events/:name', (req, res) => {
  console.log(`[HIS EVENT] ${req.params.name}`, req.body);
  res.json({ success: true, event: req.params.name });
});

// ---- Health ----
router.get('/health', (_, res) => res.json({ status: 'ok', service: 'HIS' }));

// GET /his/performance
router.get('/performance', (_, res) => {
  const performanceData = {
    uptime: parseFloat(randFloat(98.5, 99.9)),
    errors: rand(0, 3),
    avg_response: rand(90, 300),
    transactions: rand(4000, 7000)
  };
  res.json(performanceData);
});

module.exports = router;
