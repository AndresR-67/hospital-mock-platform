module.exports = {
  name: "ERP",

  getIntegrationStatus: async (systemName) => {

    const randomStatus = () => ({
      success_rate: Math.floor(Math.random() * (100 - 90 + 1)) + 90,
      errors: Math.floor(Math.random() * 7),
      avg_response: Math.floor(Math.random() * (350 - 160 + 1)) + 160
    });

    const mockData = {
      "HIS": randomStatus(),
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
