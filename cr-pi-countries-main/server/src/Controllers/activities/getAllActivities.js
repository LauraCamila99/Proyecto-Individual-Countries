const { Country, Activity } = require("../../db.js"); // Importa los modelos de la base de datos (suponiendo que están definidos en el archivo "../db")

const getAllActivities = async () => {
    try {
      return await Activity.findAll();
    } catch (error) {
      throw new Error('Error al obtener actividades');
    }
};
  
module.exports = getAllActivities;