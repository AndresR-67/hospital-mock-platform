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

function generateNonConformities() {
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
  const count = random(1, 4);
  const list = [];
  for (let i = 1; i <= count; i++) {
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

  // Primero agregamos las normas
  Object.entries(lawsData).forEach(([norma, data]) => {
    rows.push({
      fecha: new Date().toISOString(),
      norma,
      compliance_percent: data.compliance,
      missing_controls_count: data.missing_controls.length,
      last_audit: data.last_audit,
      non_conformity_id: null,
      non_conformity_severity: null,
      non_conformity_description: null,
      global_risk: globalRisk,
      tiene_alerta: data.compliance < 85,
      todo_bien: data.compliance >= 85
    });
  });

  // Generamos las no conformidades y las asignamos a normas existentes
  const nonConformities = generateNonConformities();
  const normaKeys = Object.keys(lawsData);

  nonConformities.forEach(nc => {
    const assignedNorma = randomPick(normaKeys);
    const normaData = lawsData[assignedNorma];

    rows.push({
      fecha: new Date().toISOString(),
      norma: assignedNorma,
      compliance_percent: normaData.compliance,
      missing_controls_count: normaData.missing_controls.length,
      last_audit: normaData.last_audit,
      non_conformity_id: nc.id,
      non_conformity_severity: nc.severity,
      non_conformity_description: nc.description,
      global_risk: globalRisk,
      tiene_alerta: nc.severity === "high" || normaData.compliance < 85,
      todo_bien: nc.severity !== "high" && normaData.compliance >= 85
    });
  });

  res.json(rows);
});

// -------------------------------------------------------------
// Endpoint simple regulatory estático
// -------------------------------------------------------------

router.get('/regulatory', (_, res) => {
  const regulatory = {
    ley_1581: randomPick(["Cumple", "Parcial", "No cumple"]),
    decreto_333_2022: randomPick(["Cumple", "Parcial", "No cumple"]),
    hce: randomPick(["Cumple", "Parcial", "No cumple"]),
    mspi: randomPick(["Cumple", "Parcial", "No cumple"])
  };
  res.json(regulatory);
});

// -------------------------------------------------------------
// Eventos (no cambia)
// -------------------------------------------------------------

router.post('/events/:type', (_, res) => {
  res.json({ ok: true });
});

// -------------------------------------------------------------
// Health
// -------------------------------------------------------------

router.get('/health', (_, res) => {
  res.json({ status: 'ok', service: 'Audit' });
});

module.exports = router;
