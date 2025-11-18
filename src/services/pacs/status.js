module.exports = {
  name: "PACS",
  getIntegrationStatus: async (systemName) => {
    const mockData = {
      "HIS": { success_rate: 95, errors: 5, avg_response: 230 },
      "ERP": { success_rate: 94, errors: 6, avg_response: 240 },
      "Laboratorio": { success_rate: 96, errors: 4, avg_response: 220 }
    };
    return mockData[systemName] || { success_rate: 0, errors: 0, avg_response: 0 };
  }
};
