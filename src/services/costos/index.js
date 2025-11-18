const express = require('express');
const router = express.Router();

// utilitarios robustos
const randFloat = (min, max, decimals = 0) => {
  const v = Math.random() * (max - min) + min;
  return decimals === 0 ? Math.floor(v) : Number(v.toFixed(decimals));
};
// randInt inclusivo en ambos extremos
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const trends = ["UP", "DOWN", "STABLE"];

// Generador de costos realistas para un hospital de alta complejidad
const generateCostData = (currency = "USD") => {
  // arreglé los rangos para que no haya inconsistencias
  const monthly_cost = randInt(25000, 120000);        // costo mensual TI (USD)
  const operational_cost = randInt(15000, Math.max(monthly_cost - 5000, 15000));
  const investment_cost = randInt(3000, 25000);
  const unplanned_costs = randInt(0, 3000);           // ampliado un poco por realismo
  const savings = randInt(0, 8000);
  const roi = Number((Math.random() * (22 - 3) + 3).toFixed(2)); // 3.00 - 22.00%
  const trend = trends[randInt(0, trends.length - 1)];

  // calculamos alertas ya en el servicio (opcional)
  const alerts = [];
  if (unplanned_costs > 500) alerts.push("Unplanned costs > 500");
  if (roi < 5) alerts.push("ROI < 5%");
  if (savings === 0) alerts.push("Savings = 0");
  // monthly_cost > presupuesto: aquí no tenemos 'presupuesto' global, lo dejamos para la lógica del cliente
  return {
    monthly_cost,
    operational_cost,
    investment_cost,
    unplanned_costs,
    savings,
    roi,
    trend,
    alerts
  };
};

// endpoints
router.get('/his', (_, res) => res.json(generateCostData()));
router.get('/erp', (_, res) => res.json(generateCostData()));
router.get('/lab', (_, res) => res.json(generateCostData()));
router.get('/pacs', (_, res) => res.json(generateCostData()));

// health
router.get('/health', (_, res) => res.json({ status: "ok", service: "Costos" }));

module.exports = router;
