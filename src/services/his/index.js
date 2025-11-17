const express = require('express');
const router = express.Router();

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
    uptime: 99.5,          // Porcentaje de disponibilidad del sistema
    errors: 2,             // Número de errores críticos registrados
    avg_response: 120,     // Tiempo promedio de respuesta en milisegundos
    transactions: 5400     // Número de transacciones procesadas
  };
  res.json(performanceData);
});


module.exports = router;
