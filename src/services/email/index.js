const express = require('express');
const router = express.Router();

router.post('/send', (req, res) => {
  res.json({enviado: true, data: req.body});
});

router.get('/health', (_, res) => res.json({status: 'ok', service: 'EMAIL'}));

module.exports = router;
