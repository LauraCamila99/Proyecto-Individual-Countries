
const { Country, Activity } = require("../../db.js"); 
const axios = require('axios');
const { Op } = require('sequelize');

const getNameCountry = async (name) => {
    try {
        console.log("Nombre recibido como parámetro:", name); // Muestra el nombre recibido como parámetro en la consola
        if (!name) {
          return await Country.findAll({
             include: { model: Activity}
          });
        } else {
          return await Country.findAll({
            include: { model: Activity},
            where: {
              name: { [Op.iLike]: `%${name}%` }
          }
          });
        }
    } catch (error) {
        throw new Error('Error al obtener países por nombre.');
    }
};

module.exports = getNameCountry;