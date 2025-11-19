const express = require('express');
const router = express.Router();

router.get('/policies', (_, res) => {
  const randomBool = () => Math.random() < 0.85;
  const randomDate = (start = new Date(2025, 0, 1), end = new Date()) => {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
  };

  // Función para asignar detalle solo si la política no se cumple
  const detalleIncumplimiento = (cumplimiento, msg) => cumplimiento ? "" : msg;

  const policies = [
    {
      id: 1,
      nombre: "Política de contraseñas",
      descripcion: "Contraseñas de al menos 12 caracteres, renovación cada 90 días",
      cumplimiento: randomBool(),
      ultima_revision: randomDate(),
      responsable: "Seguridad TI",
      detalle_incumplimiento: "" 
    },
    {
      id: 2,
      nombre: "Política de respaldo",
      descripcion: "Respaldos diarios de sistemas críticos y almacenamiento seguro",
      cumplimiento: randomBool(),
      ultima_revision: randomDate(),
      responsable: "Infraestructura TI",
      detalle_incumplimiento: ""
    },
    {
      id: 3,
      nombre: "Política de interoperabilidad HL7/RIPS",
      descripcion: "Todos los sistemas deben intercambiar información clínica mediante HL7 y reportes RIPS",
      cumplimiento: randomBool(),
      ultima_revision: randomDate(),
      responsable: "Interoperabilidad TI",
      detalle_incumplimiento: ""
    },
    {
      id: 4,
      nombre: "Política de control de acceso",
      descripcion: "Revisión de roles y permisos, autenticación de dos factores para accesos críticos",
      cumplimiento: randomBool(),
      ultima_revision: randomDate(),
      responsable: "Seguridad TI",
      detalle_incumplimiento: ""
    },
    {
      id: 5,
      nombre: "Política de continuidad de negocio",
      descripcion: "Planes de contingencia y recuperación ante desastres actualizados",
      cumplimiento: randomBool(),
      ultima_revision: randomDate(),
      responsable: "Gestión de Riesgos TI",
      detalle_incumplimiento: ""
    },
    {
      id: 6,
      nombre: "Política de privacidad y protección de datos",
      descripcion: "Cumplimiento de la normativa de datos de pacientes y confidencialidad",
      cumplimiento: randomBool(),
      ultima_revision: randomDate(),
      responsable: "Seguridad TI",
      detalle_incumplimiento: ""
    }
  ];

  // Asignar los detalles **solo si cumplimiento === false**
  policies[0].detalle_incumplimiento = detalleIncumplimiento(policies[0].cumplimiento, "Contraseña no renovada a tiempo");
  policies[1].detalle_incumplimiento = detalleIncumplimiento(policies[1].cumplimiento, "Respaldo fallido detectado");
  policies[2].detalle_incumplimiento = detalleIncumplimiento(policies[2].cumplimiento, "Algunos sistemas no enviaron HL7");
  policies[3].detalle_incumplimiento = detalleIncumplimiento(policies[3].cumplimiento, "Cuentas críticas sin 2FA");
  policies[4].detalle_incumplimiento = detalleIncumplimiento(policies[4].cumplimiento, "Simulacro no realizado en la fecha programada");
  policies[5].detalle_incumplimiento = detalleIncumplimiento(policies[5].cumplimiento, "Acceso no autorizado detectado");

  res.json(policies);
});

module.exports = router;
