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

// --- Endpoint de cumplimiento normativo (Auditoría) ---
router.get('/status', (_, res) => {
  const auditStatus = {
    laws: {
      ley_1581: {
        compliance: 92,
        missing_controls: [
          "registro de autorización incompleto",
          "falta actualizar inventario de datos"
        ],
        last_audit: "2025-10-01"
      },
      iso_27001: {
        compliance: 85,
        missing_controls: [
          "gestión de activos incompleta",
          "evaluación de riesgos desactualizada"
        ],
        last_audit: "2025-09-15"
      },
      politica_seguridad_digital: {
        compliance: 88,
        missing_controls: [
          "no hay indicadores de seguridad publicados"
        ],
        last_audit: "2025-08-20"
      },
      dnhs: {
        compliance: 95,
        missing_controls: [],
        last_audit: "2025-10-10"
      }
    },
    global_risk: 68,
    non_conformities: [
      { id: "NC-01", severity: "high", description: "Acceso no autorizado en historia clínica" },
      { id: "NC-02", severity: "medium", description: "Falta matriz de riesgos actualizada" },
      { id: "NC-03", severity: "low", description: "No hay evidencia de capacitación de TI" }
    ],
    last_review: "2025-11-01"
  };

  res.json(auditStatus);
});

// Health del servicio
router.get('/health', (_, res) => {
  res.json({ status: 'ok', service: 'Audit' });
});

module.exports = router;