module.exports = {
  name: "HIS",
  getIntegrationStatus: async (systemName) => {
    const mockData = {
      "ERP": { success_rate: 95, errors: 5, avg_response: 200 },
      "Laboratorio": { success_rate: 98, errors: 1, avg_response: 180 },
      "PACS": { success_rate: 97, errors: 3, avg_response: 220 }
    };
    return mockData[systemName] || { success_rate: 0, errors: 0, avg_response: 0 };
  }
};
