module.exports = {
  name: "HIS",

  getIntegrationStatus: async (systemName) => {

    const randomStatus = () => ({
      success_rate: Math.floor(Math.random() * (100 - 90 + 1)) + 90,   // 90% - 100%
      errors: Math.floor(Math.random() * 8),                          // 0 – 7 errores
      avg_response: Math.floor(Math.random() * (350 - 150 + 1)) + 150 // 150 – 350 ms
    });

    const mockData = {
      "ERP": randomStatus(),
      "Laboratorio": randomStatus(),
      "PACS": randomStatus()
    };

    return mockData[systemName] || {
      success_rate: 0,
      errors: 0,
      avg_response: 0
    };
  }
};

