const express = require('express');
const router = express.Router();

// Funciones random utilitarias
const rand = (min, max) => Math.random() * (max - min) + min;
const randInt = (min, max) => Math.floor(rand(min, max));

const trends = ["UP", "DOWN", "STABLE"];

// Generador de costos realistas para un hospital de alta complejidad
const generateCostData = () => {
  // RANGOS REALISTAS (USD) Adaptables si usas COP
  const monthlyCost = randInt(25000, 120000);        // costo mensual de operación TI
  const operationalCost = randInt(15000, monthlyCost - 5000);
  const investmentCost = randInt(3000, 25000);       // compra hardware, licencias, renovación
  const unplannedCosts = randInt(0, 2000);           // fallas, ataques, soporte extraordinario
  const savings = randInt(0, 5000);                  // ahorros por optimización
  const roi = Number(rand(3, 22).toFixed(2));        // % ROI realista hospitalario
  const trend = trends[randInt(0, trends.length)];

  return {
    monthly_cost: monthlyCost,
    operational_cost: operationalCost,
    investment_cost: investmentCost,
    unplanned_costs: unplannedCosts,
    savings: savings,
    roi: roi,
    trend: trend
  };
};

// ---------------------------
// 4 ENDPOINTS
// ---------------------------

router.get('/his', (_, res) => {
  res.json(generateCostData());
});

router.get('/erp', (_, res) => {
  res.json(generateCostData());
});

router.get('/lab', (_, res) => {
  res.json(generateCostData());
});

router.get('/pacs', (_, res) => {
  res.json(generateCostData());
});

module.exports = router;
