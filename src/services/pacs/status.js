module.exports = {
  name: "PACS",

  getIntegrationStatus: async (systemName) => {

    const randomStatus = () => ({
      success_rate: Math.floor(Math.random() * (100 - 88 + 1)) + 88,
      errors: Math.floor(Math.random() * 10),
      avg_response: Math.floor(Math.random() * (400 - 180 + 1)) + 180
    });

    const mockData = {
      "HIS": randomStatus(),
      "ERP": randomStatus(),
      "Laboratorio": randomStatus()
    };

    return mockData[systemName] || {
      success_rate: 0,
      errors: 0,
      avg_response: 0
    };
  }
};
