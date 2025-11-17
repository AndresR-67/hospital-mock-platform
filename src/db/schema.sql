-- ============================
--      TABLA BASE: EVENTS
-- ============================
CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    type TEXT NOT NULL,
    payload JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ============================
--      HIS (PACIENTES)
-- ============================
CREATE TABLE IF NOT EXISTS his_pacientes (
    id SERIAL PRIMARY KEY,
    nombre TEXT,
    edad INT,
    ingreso DATE,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS his_citas (
    id SERIAL PRIMARY KEY,
    paciente_id INT,
    fecha DATE,
    especialidad TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS his_eventos_clinicos (
    id SERIAL PRIMARY KEY,
    paciente_id INT,
    tipo TEXT,
    fecha DATE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ============================
--          ERP
-- ============================
CREATE TABLE IF NOT EXISTS erp_costos (
    id SERIAL PRIMARY KEY,
    categoria TEXT,
    valor NUMERIC,
    fecha DATE,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS erp_inventario (
    id SERIAL PRIMARY KEY,
    item TEXT,
    cantidad INT,
    updated_at TIMESTAMP DEFAULT NOW()
);

-- ============================
--     LABORATORIO (LIS)
-- ============================
CREATE TABLE IF NOT EXISTS laboratorio_resultados (
    id SERIAL PRIMARY KEY,
    paciente_id INT,
    examen TEXT,
    resultado TEXT,
    fecha DATE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ============================
--         PACS / IMÁGENES
-- ============================
CREATE TABLE IF NOT EXISTS pacs_estudios (
    id SERIAL PRIMARY KEY,
    paciente_id INT,
    tipo_estudio TEXT,
    fecha DATE,
    informe TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ============================
--    SEGURIDAD / SIEM MOCK
-- ============================
CREATE TABLE IF NOT EXISTS security_events (
    id SERIAL PRIMARY KEY,
    evento TEXT,
    severidad TEXT,
    detalle JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ============================
--   AUDITORÍA / CUMPLIMIENTO
-- ============================
CREATE TABLE IF NOT EXISTS auditoria_regulatoria (
    id SERIAL PRIMARY KEY,
    norma TEXT,
    estado TEXT,
    detalle JSONB,
    updated_at TIMESTAMP DEFAULT NOW()
);

-- ============================
--   INFRAESTRUCTURA (CPU/RAM)
-- ============================
CREATE TABLE IF NOT EXISTS infra_metrics (
    id SERIAL PRIMARY KEY,
    cpu NUMERIC,
    ram NUMERIC,
    disponibilidad NUMERIC,
    respuesta_ms INT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ============================
--    PORTAFOLIO DE PROYECTOS
-- ============================
CREATE TABLE IF NOT EXISTS portafolio_proyectos (
    id SERIAL PRIMARY KEY,
    nombre TEXT,
    estado TEXT,
    avance INT,
    presupuesto_usado NUMERIC,
    riesgo TEXT,
    updated_at TIMESTAMP DEFAULT NOW()
);

-- ============================
--      TALENTO TI (RRHH)
-- ============================
CREATE TABLE IF NOT EXISTS talento_personal (
    id SERIAL PRIMARY KEY,
    nombre TEXT,
    rol TEXT,
    competencias JSONB,
    madurez TEXT,
    capacitaciones JSONB,
    updated_at TIMESTAMP DEFAULT NOW()
);

-- ============================
--   SATISFACCIÓN DEL USUARIO
-- ============================
CREATE TABLE IF NOT EXISTS satisfaction_encuestas (
    id SERIAL PRIMARY KEY,
    sistema TEXT,
    puntaje INT,
    comentario TEXT,
    fecha DATE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ============================
--   CALIDAD DEL DATO (DQ)
-- ============================
CREATE TABLE IF NOT EXISTS data_quality_metrics (
    id SERIAL PRIMARY KEY,
    sistema TEXT,
    duplicados INT,
    incompletos INT,
    calidad_porcentaje NUMERIC,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ============================
--       CRONJOBS SIMULADOS
-- ============================
CREATE TABLE IF NOT EXISTS cron_registros (
    id SERIAL PRIMARY KEY,
    nombre TEXT,
    ultima_ejecucion TIMESTAMP DEFAULT NOW(),
    detalle JSONB
);

-- ============================
--         LOGS DEL SISTEMA
-- ============================
CREATE TABLE IF NOT EXISTS system_logs (
    id SERIAL PRIMARY KEY,
    origen TEXT,
    mensaje TEXT,
    nivel TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
