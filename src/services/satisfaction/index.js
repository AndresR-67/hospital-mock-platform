const express = require('express');
const router = express.Router();

router.get('/results', (_, res) => res.json({
  his: 4.1,
  erp: 3.7,
  laboratorio: 4.5
}));

router.post('/events/:type', (_, res) => res.json({ok: true}));

router.get('/health', (_, res) => res.json({status: 'ok', service: 'SATISFACTION'}));

module.exports = router;
