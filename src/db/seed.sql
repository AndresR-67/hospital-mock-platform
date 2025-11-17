-- ============================
--      INSERT: HIS
-- ============================
INSERT INTO his_pacientes (nombre, edad, ingreso) VALUES
('Juan Pérez', 34, '2025-01-12'),
('María García', 52, '2025-02-10'),
('Carlos López', 41, '2025-03-05');

INSERT INTO his_citas (paciente_id, fecha, especialidad) VALUES
(1, '2025-02-01', 'Medicina Interna'),
(2, '2025-02-11', 'Cardiología'),
(3, '2025-03-09', 'Dermatología');

INSERT INTO his_eventos_clinicos (paciente_id, tipo, fecha) VALUES
(1, 'Hospitalización', '2025-02-15'),
(2, 'Reconsulta', '2025-02-12');

-- ============================
--      ERP
-- ============================
INSERT INTO erp_costos (categoria, valor, fecha) VALUES
('Farmacia', 250000, '2025-02-01'),
('Laboratorio', 120000, '2025-02-05'),
('Imagenología', 340000, '2025-02-07');

INSERT INTO erp_inventario (item, cantidad) VALUES
('Guantes', 500),
('Jeringas', 1200),
('Gasas', 800);

-- ============================
--      LABORATORIO
-- ============================
INSERT INTO laboratorio_resultados (paciente_id, examen, resultado, fecha) VALUES
(1, 'Hemograma', 'Normal', '2025-02-04'),
(2, 'TSH', 'Elevada', '2025-02-12'),
(3, 'Glucosa', 'Alta', '2025-03-05');

-- ============================
--      PACS
-- ============================
INSERT INTO pacs_estudios (paciente_id, tipo_estudio, fecha, informe) VALUES
(1, 'Rayos X', '2025-02-01', 'Sin hallazgos'),
(2, 'Resonancia', '2025-02-15', 'Lesión leve'),
(3, 'TAC', '2025-03-02', 'Normal');

-- ============================
--      SEGURIDAD
-- ============================
INSERT INTO security_events (evento, severidad, detalle) VALUES
('Intento de login', 'MEDIO', '{"ip":"192.168.1.10"}'),
('Acceso denegado', 'ALTO', '{"ip":"192.168.1.22"}');

-- ============================
--      AUDITORÍA
-- ============================
INSERT INTO auditoria_regulatoria (norma, estado, detalle) VALUES
('ISO 27001', 'Cumple', '{"auditor":"Externo"}'),
('ISO 38500', 'Parcial', '{"progreso":"70%"}');

-- ============================
--      INFRAESTRUCTURA
-- ============================
INSERT INTO infra_metrics (cpu, ram, disponibilidad, respuesta_ms) VALUES
(25.3, 60.2, 99.9, 120),
(45.1, 75.0, 99.7, 140);

-- ============================
--      PORTAFOLIO
-- ============================
INSERT INTO portafolio_proyectos (nombre, estado, avance, presupuesto_usado, riesgo) VALUES
('Modernización HIS', 'En progreso', 40, 12000000, 'Medio'),
('Implementación PACS', 'Finalizado', 100, 8000000, 'Bajo');

-- ============================
--      TALENTO TI
-- ============================
INSERT INTO talento_personal (nombre, rol, competencias, madurez, capacitaciones) VALUES
('Luis Torres', 'DevOps', '["Docker","Kubernetes"]', 'Senior', '["AWS","Linux"]'),
('Ana Ruiz', 'Backend', '["Node","PostgreSQL"]', 'Semi-Senior', '["Clean Code"]');

-- ============================
--      SATISFACCIÓN
-- ============================
INSERT INTO satisfaction_encuestas (sistema, puntaje, comentario, fecha) VALUES
('HIS', 5, 'Muy rápido', '2025-02-07'),
('ERP', 3, 'Lento por la tarde', '2025-02-11');

-- ============================
--      CALIDAD DEL DATO
-- ============================
INSERT INTO data_quality_metrics (sistema, duplicados, incompletos, calidad_porcentaje) VALUES
('HIS', 5, 12, 92.5),
('ERP', 1, 4, 97.2);

-- ============================
--      CRON
-- ============================
INSERT INTO cron_registros (nombre, detalle) VALUES
('backup_diario', '{"estado":"OK"}'),
('sync_laboratorio', '{"nuevos":32}');

-- ============================
--      LOGS
-- ============================
INSERT INTO system_logs (origen, mensaje, nivel) VALUES
('API', 'Solicitud recibida', 'INFO'),
('DB', 'Timeout de consulta', 'ERROR');
