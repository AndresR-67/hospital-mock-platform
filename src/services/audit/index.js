const express = require('express');
const router = express.Router();

const regulatory = {
  ley_1581: "Cumple",
  decreto_333_2022: "Parcial",
  hce: "Cumple",
  mspi: "No cumple"
};

router.get('/regulatory', (_, res) => res.json(regulatory));
router.post('/events/:type', (_, res) => res.json({ok: true}));

router.get('/health', (_, res) => res.json({status: 'ok', service: 'AUDIT'}));

module.exports = router;
