module.exports = {
  name: "Laboratorio",

  getIntegrationStatus: async (systemName) => {

    const randomStatus = () => ({
      success_rate: Math.floor(Math.random() * (100 - 92 + 1)) + 92,
      errors: Math.floor(Math.random() * 5),
      avg_response: Math.floor(Math.random() * (300 - 150 + 1)) + 150
    });

    const mockData = {
      "HIS": randomStatus(),
      "ERP": randomStatus(),
      "PACS": randomStatus()
    };

    return mockData[systemName] || {
      success_rate: 0,
      errors: 0,
      avg_response: 0
    };
  }
};
