const { Country, Activity } = require("../../db.js"); // Importa los modelos de la base de datos (suponiendo que están definidos en el archivo "../db")

const axios = require('axios'); // Importa el módulo Axios para hacer solicitudes HTTP
const { Op } = require('sequelize'); // Importa el operador Sequelize para realizar consultas avanzadas

const getAllCountries = async () => {
  try {
    // Verificar si ya hay datos en la tabla Country
    const existingCountriesCount = await Country.count();
    
    // Si hay más de cero países en la base de datos, no es necesario realizar la carga desde la API
    if (existingCountriesCount > 0) {
      console.log('La base de datos ya contiene datos de países. No es necesario cargarlos nuevamente.');
      return;
    }

    const infoApi = await axios.get('http://localhost:5000/countries');
    const countriesApi = infoApi.data;

    for (const country of countriesApi) {
      await Country.create({
        id: country.cca3,
        name: country.name.common,
        image: country.flags.png,
        continent: country.region,
        capital: country.capital != null ? country.capital[0] : 'No se encontro dato',
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      });
      //console.log(`País ${country.cca3} guardado exitosamente.`)
    }

    console.log('Todos los países se han guardado exitosamente en la base de datos.');
  } catch (error) {
    console.error('Error al guardar países:', error);
  }
};


module.exports = getAllCountries;