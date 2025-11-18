const express = require('express');
const router = express.Router();

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randFloat(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}


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



router.get('/performance', (_, res) => {
  const performanceData = {
    uptime: parseFloat(randFloat(97.0, 99.5)),
    errors: rand(0, 2),
    avg_response: rand(200, 500),
    transactions: rand(3000, 5000)
  };
  res.json(performanceData);
});


module.exports = router;
