const getAllCountries = require("../../Controllers/countries/getAllCountries");

const getDataApi = async (req, res) => {
    try {
      return await getAllCountries();
    } catch (error) {
      console.error('Error al guardar países:', error);
    }
  };

module.exports = getDataApi;