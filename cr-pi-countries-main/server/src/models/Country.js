const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo COUNTRY
  sequelize.define('Country', {
    // Definimos el campo 'id' como UUID, con un valor predeterminado generado automáticamente y es la clave primaria
    id: {
      type: DataTypes.STRING(3), // Tipo de datos cadena con longitud máxima de 3 caracteres
      primaryKey: true, // Indicamos que es la clave primaria
      allowNull: false, // No permitimos valores nulos
      unique: true // Indicamos que los valores deben ser únicos
    },
    // Definimos el campo 'name'
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Definimos el campo 'flag'
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Definimos el campo 'continent'
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Definimos el campo 'capital'
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Definimos el campo 'subregion'
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // Definimos el campo 'area'
    area: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    // Definimos el campo 'population'
    population: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    
  },{ timestamps: false });
};