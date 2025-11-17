const express = require('express');
const router = express.Router();

router.get('/daily', (_, res) => res.json({evento: "Ejecución diaria simulada"}));
router.get('/weekly', (_, res) => res.json({evento: "Ejecución semanal simulada"}));

router.get('/health', (_, res) => res.json({status: 'ok', service: 'CRON'}));

module.exports = router;
