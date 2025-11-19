const express = require('express');
const router = express.Router();

/**
 * GET /ti/portfolio
 * Devuelve un portafolio de proyectos TI simulando un hospital de alta complejidad
 */
router.get('/portfolio', (_, res) => {

  // Función para generar un avance aleatorio
  const randomAvance = (min = 20, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

  // Función para seleccionar un estado aleatorio
  const randomEstado = () => {
    const estados = ["En progreso", "Completado", "Retrasado", "Planificado"];
    return estados[Math.floor(Math.random() * estados.length)];
  };

  // Función para seleccionar riesgo aleatorio
  const randomRiesgo = () => {
    const riesgos = ["bajo", "medio", "alto"];
    return riesgos[Math.floor(Math.random() * riesgos.length)];
  };

  // Función para generar observaciones aleatorias según riesgo
  const randomObservacion = (riesgo) => {
    const observaciones = {
      alto: [
        "Dependencia de proveedores externos",
        "Falta completar módulos críticos",
        "Problemas de integración detectados"
      ],
      medio: [
        "Pequeños retrasos en algunas fases",
        "Necesita ajustes de personal",
        "Pruebas pendientes en ciertos módulos"
      ],
      bajo: [
        "",
        "",
        "Leve retraso sin impacto crítico"
      ]
    };
    const obs = observaciones[riesgo];
    return obs[Math.floor(Math.random() * obs.length)];
  };

  // Portafolio de proyectos hospitalarios
  const portfolio = [
    {
      id: 1,
      nombre: "Proyecto HIS Upgrade",
      responsable: "Equipo HIS",
      estado: randomEstado(),
      avance: randomAvance(50, 100),
      fecha_inicio: "2025-08-01",
      fecha_fin: "2025-12-15",
      riesgo: randomRiesgo(),
      observaciones: "" // se actualizará después
    },
    {
      id: 2,
      nombre: "Implementación ERP Analytics",
      responsable: "Equipo ERP",
      estado: randomEstado(),
      avance: randomAvance(20, 70),
      fecha_inicio: "2025-07-15",
      fecha_fin: "2025-11-30",
      riesgo: randomRiesgo(),
      observaciones: ""
    },
    {
      id: 3,
      nombre: "Integración PACS con Radiología",
      responsable: "Equipo PACS",
      estado: randomEstado(),
      avance: randomAvance(30, 90),
      fecha_inicio: "2025-06-01",
      fecha_fin: "2025-10-30",
      riesgo: randomRiesgo(),
      observaciones: ""
    },
    {
      id: 4,
      nombre: "Sistema de Telemedicina",
      responsable: "Equipo Innovación TI",
      estado: randomEstado(),
      avance: randomAvance(10, 60),
      fecha_inicio: "2025-05-20",
      fecha_fin: "2025-12-20",
      riesgo: randomRiesgo(),
      observaciones: ""
    },
    {
      id: 5,
      nombre: "Actualización Laboratorio Clínico",
      responsable: "Equipo Laboratorio",
      estado: randomEstado(),
      avance: randomAvance(40, 80),
      fecha_inicio: "2025-07-01",
      fecha_fin: "2025-11-15",
      riesgo: randomRiesgo(),
      observaciones: ""
    },
    {
      id: 6,
      nombre: "Seguridad de Infraestructura TI",
      responsable: "Equipo Seguridad",
      estado: randomEstado(),
      avance: randomAvance(60, 100),
      fecha_inicio: "2025-08-10",
      fecha_fin: "2025-12-31",
      riesgo: randomRiesgo(),
      observaciones: ""
    },
    {
      id: 7,
      nombre: "Gestión de Dispositivos Médicos",
      responsable: "Equipo Ingeniería Clínica",
      estado: randomEstado(),
      avance: randomAvance(20, 70),
      fecha_inicio: "2025-06-15",
      fecha_fin: "2025-12-01",
      riesgo: randomRiesgo(),
      observaciones: ""
    }
  ];

  // Asignar observaciones según riesgo
  portfolio.forEach(proyecto => {
    proyecto.observaciones = randomObservacion(proyecto.riesgo);
  });

  res.json(portfolio);
});

module.exports = router;
