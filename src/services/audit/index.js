const express = require('express');
const router = express.Router();

// -------------------------------------------------------------
// Helpers
// -------------------------------------------------------------
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomDate() {
  const start = new Date(2025, 6, 1).getTime();
  const end = new Date(2025, 10, 1).getTime();
  return new Date(start + Math.random() * (end - start))
    .toISOString()
    .split("T")[0];
}

function generateMissingControls() {
  const controls = [
    "registro de autorización incompleto",
    "falta actualizar inventario de datos",
    "evaluación de riesgos desactualizada",
    "no hay indicadores de seguridad publicados",
    "gestión de activos incompleta",
    "no existe política de retención de datos",
    "backups no documentados"
  ];
  const count = random(0, 3);
  const shuffled = controls.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generateNonConformities(normaCount) {
  const severities = ["low", "medium", "high"];
  const descriptions = [
    "Acceso no autorizado detectado",
    "Matriz de riesgos desactualizada",
    "No hay evidencia de capacitación anual",
    "Control de cambios sin documentación",
    "Logs incompletos en sistema crítico",
    "No se ejecutó auditoría interna",
    "Proceso de backup incompleto"
  ];
  const list = [];
  for (let i = 1; i <= normaCount; i++) {
    list.push({
      id: `NC-${String(i).padStart(2, "0")}`,
      severity: randomPick(severities),
      description: randomPick(descriptions)
    });
  }
  return list;
}

// -------------------------------------------------------------
// Endpoint principal: cumplimiento normativo aleatorio
// -------------------------------------------------------------
router.get('/status', (_, res) => {
  const lawsData = {
    ley_1581: { compliance: random(85, 99), missing_controls: generateMissingControls(), last_audit: randomDate() },
    iso_27001: { compliance: random(70, 95), missing_controls: generateMissingControls(), last_audit: randomDate() },
    politica_seguridad_digital: { compliance: random(80, 95), missing_controls: generateMissingControls(), last_audit: randomDate() },
    dnhs: { compliance: random(90, 99), missing_controls: generateMissingControls(), last_audit: randomDate() }
  };

  const globalRisk = random(40, 90);
  const rows = [];

  const normaKeys = Object.keys(lawsData);
  const nonConformities = generateNonConformities(normaKeys.length);

  // Un solo registro por norma (cumplimiento + no conformidad)
  normaKeys.forEach((norma, index) => {
    const data = lawsData[norma];
    const nc = nonConformities[index]; // una NC por norma

    rows.push({
      fecha: new Date().toISOString(),
      norma,
      compliance_percent: data.compliance,
      missing_controls_count: data.missing_controls.length,
      last_audit: data.last_audit,
      non_conformity_id: nc.id,
      non_conformity_severity: nc.severity,
      non_conformity_description: nc.description,
      global_risk: globalRisk,
      tiene_alerta: nc.severity === "high" || data.compliance < 85,
      todo_bien: nc.severity !== "high" && data.compliance >= 85
    });
  });

  res.json(rows);
});

module.exports = router;
