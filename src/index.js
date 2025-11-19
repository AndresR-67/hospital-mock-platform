  const express = require('express');
  const app = express();
  app.use(express.json());

  // --- Importar servicios ---
  const his = require('./services/his');
  const erp = require('./services/erp');
  const lab = require('./services/laboratorio');
  const pacs = require('./services/pacs');
  const interoperability = require('./services/interoperability');
  const security = require('./services/security');
  const audit = require('./services/audit');
  const talento = require('./services/talento');
  const portafolio = require('./services/portafolio');
  const infra = require('./services/infra');
  const dataQuality = require('./services/data-quality');
  const satisfaction = require('./services/satisfaction');
  const email = require('./services/email');
  const cron = require('./services/cron');
  const webhook = require('./services/webhook');
  const costos = require('./services/costos');
  const ti = require('./services/ti');

  // --- Registrar rutas ---
  app.use('/his', his);
  app.use('/erp', erp);
  app.use('/lab', lab);
  app.use('/pacs', pacs);
  app.use('/interoperability', interoperability);
  app.use('/security', security);
  app.use('/audit', audit);
  app.use('/talento', talento);
  app.use('/portafolio', portafolio);
  app.use('/infra', infra);
  app.use('/data-quality', dataQuality);
  app.use('/satisfaction', satisfaction);
  app.use('/email', email);
  app.use('/cron', cron);
  app.use('/webhook', webhook);
  app.use('/costos', costos);
  app.use('/ti', ti);

  // --- HEALTH Global ---
  app.get('/health', (_, res) => {
    res.json({ status: 'ok', service: 'root' });
  });

  // --- Servidor ---
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Mock platform running on port ${PORT}`));
