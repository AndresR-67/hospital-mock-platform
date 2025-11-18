module.exports = {
  name: "ERP",
  getIntegrationStatus: async (systemName) => {
    const mockData = {
      "HIS": { success_rate: 96, errors: 4, avg_response: 210 },
      "Laboratorio": { success_rate: 97, errors: 3, avg_response: 190 },
      "PACS": { success_rate: 95, errors: 5, avg_response: 220 }
    };
    return mockData[systemName] || { success_rate: 0, errors: 0, avg_response: 0 };
  }
};
