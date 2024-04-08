const { Country, Activity } = require("../../db.js"); // Importa los modelos de la base de datos (suponiendo que están definidos en el archivo "../db")

const axios = require('axios'); // Importa el módulo Axios para hacer solicitudes HTTP
const { Op } = require('sequelize'); // Importa el operador Sequelize para realizar consultas avanzadas

const getIdCountry = async (id) => {
  try {
      const registro = await Country.findOne({
         where: { id: id },
         include: { model: Activity }
      });
  
    if (registro) {
        return registro.toJSON();
    } else {
        throw new Error('No se encontró ningún registro con ese ID.');
      }
  } catch (error) {
      throw new Error('Error al buscar el registro.');
  }
};
module.exports = getIdCountry;