module.exports = {
  name: "Laboratorio",
  getIntegrationStatus: async (systemName) => {
    const mockData = {
      "HIS": { success_rate: 98, errors: 2, avg_response: 190 },
      "ERP": { success_rate: 97, errors: 3, avg_response: 200 },
      "PACS": { success_rate: 96, errors: 4, avg_response: 210 }
    };
    return mockData[systemName] || { success_rate: 0, errors: 0, avg_response: 0 };
  }
};
