const express = require('express');
const router = express.Router();

// Importar los status de cada servicio
const hisService = require('../his/status');
const erpService = require('../erp/status');
const labService = require('../laboratorio/status');
const pacsService = require('../pacs/status');

// Función genérica para consultar interoperabilidad
async function checkIntegration(systemA, systemB) {
  const data = await systemA.getIntegrationStatus(systemB.name);
  return {
    with: systemB.name,
    success_rate: data.success_rate,
    errors: data.errors,
    avg_response: data.avg_response
  };
}

// Endpoint HIS
router.get('/checks/his', async (_, res) => {
  res.json({
    integrations: [
      await checkIntegration(hisService, erpService),
      await checkIntegration(hisService, labService),
      await checkIntegration(hisService, pacsService)
    ]
  });
});

// Endpoint ERP
router.get('/checks/erp', async (_, res) => {
  res.json({
    integrations: [
      await checkIntegration(erpService, hisService),
      await checkIntegration(erpService, labService),
      await checkIntegration(erpService, pacsService)
    ]
  });
});

// Endpoint Laboratorio
router.get('/checks/lab', async (_, res) => {
  res.json({
    integrations: [
      await checkIntegration(labService, hisService),
      await checkIntegration(labService, erpService),
      await checkIntegration(labService, pacsService)
    ]
  });
});

// Endpoint PACS
router.get('/checks/pacs', async (_, res) => {
  res.json({
    integrations: [
      await checkIntegration(pacsService, hisService),
      await checkIntegration(pacsService, erpService),
      await checkIntegration(pacsService, labService)
    ]
  });
});

module.exports = router;
