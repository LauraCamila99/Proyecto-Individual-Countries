const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Se importan las dependencias necesarias, en este caso solo se necesita DataTypes de sequelize.

  // La función exportada toma sequelize como argumento para poder definir el modelo dentro de la función.

  // Definimos el modelo Activity
  sequelize.define('Activity', {
    // Definimos el campo 'id' como un UUID
    id: {
        type: DataTypes.UUID, // Tipo de dato del campo 'id' es UUID (Identificador Único Universal)
        defaultValue: DataTypes.UUIDV4, // Valor predeterminado para 'id' generado automáticamente utilizando UUIDV4
        primaryKey: true, // Indica que 'id' es la clave primaria de la tabla
        allowNull: false // Indica que 'id' no puede ser nulo, cada actividad debe tener un identificador único
      },
    // Definimos el campo 'name' como una cadena de caracteres, que no puede ser nula
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Definimos el campo 'difficulty' como un número entero entre 1 y 5, que no puede ser nulo
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
    // Definimos el campo 'duration' como un número entero que puede ser nulo
    duration: {
      type: DataTypes.TIME, // En horas
      allowNull: true
    },
    // Definimos el campo 'season' como una enumeración con los valores de las temporadas indicadas, que no puede ser nula
    season: {
      type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
      allowNull: false
    }
  },{ timestamps: false });
};
