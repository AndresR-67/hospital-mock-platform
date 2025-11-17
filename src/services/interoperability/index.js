const express = require('express');
const router = express.Router();

// --- HL7 mock ---
const hl7 = [
  "MSH|^~\\&|HIS|HOSP|LAB|HOSP|20250101||ORU^R01|1234|P|2.3",
  "PID|1||12345678||PEREZ^JUAN||19800101|M"
];

// --- FHIR mock ---
const patient = {
  resourceType: "Patient",
  id: "123",
  name: [{given: ["Juan"], family: "Pérez"}]
};

const observation = {
  resourceType: "Observation",
  id: "obs1",
  valueString: "Normal"
};

router.get('/hl7', (_, res) => res.json(hl7));
router.get('/fhir/patient', (_, res) => res.json(patient));
router.get('/fhir/observation', (_, res) => res.json(observation));

// Gateway que solo reenvía (fake)
router.get('/gateway/:service', (req, res) => {
  res.json({gateway: true, target: req.params.service});
});

router.post('/events/:type', (_, res) => res.json({ok: true}));

router.get('/health', (_, res) => res.json({status: 'ok', service: 'INTEROP'}));

module.exports = router;
