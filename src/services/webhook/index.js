const express = require('express');
const router = express.Router();

router.post('/event', (req, res) => {
  console.log("Webhook recibido:", req.body);
  res.json({received: true});
});

router.get('/health', (_, res) => res.json({status: 'ok', service: 'WEBHOOK'}));

module.exports = router;
