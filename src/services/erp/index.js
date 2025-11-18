const express = require('express');
const router = express.Router();

const costos = [
  {area: "Farmacia", mensual: 34000000},
  {area: "Imagenología", mensual: 56400000}
];

const inventario = [
  {item: "Guantes", stock: 320},
  {item: "Agujas 18G", stock: 120}
];

const proveedores = [
  {id: 1, nombre: "MedSupply S.A.", estado: "Activo"},
  {id: 2, nombre: "LabTech", estado: "Pendiente"}
];

router.get('/costos', (_, res) => res.json(costos));
router.get('/inventario', (_, res) => res.json(inventario));
router.get('/proveedores', (_, res) => res.json(proveedores));

router.post('/events/:type', (_, res) => res.json({ok: true}));
router.get('/health', (_, res) => res.json({status: 'ok', service: 'ERP'}));



// GET /erp/performance
router.get('/performance', (_, res) => {
  const performanceData = {
    uptime: 99.2,
    errors: 0,
    avg_response: 250,
    transactions: 4100
  };
  res.json(performanceData);
});

module.exports = router;
