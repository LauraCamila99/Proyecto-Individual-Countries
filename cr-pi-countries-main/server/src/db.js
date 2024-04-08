// Importa y configura las variables de entorno definidas en un archivo .env
require("dotenv").config();

// Importa la clase Sequelize del paquete sequelize
const { Sequelize } = require("sequelize");

// Importa los módulos fs y path de Node.js para manipulación de archivos y rutas
const fs = require('fs');
const path = require('path');

// Extrae las variables de entorno DB_USER, DB_PASSWORD y DB_HOST
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

// Crea una instancia de Sequelize, que representa una conexión a la base de datos
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, // Desactiva el registro de consultas SQL en la consola
  native: false,  // Desactiva el uso de las extensiones nativas de PostgreSQL
});

// Obtiene el nombre del archivo actual (este archivo)
const basename = path.basename(__filename);

// Crea un array vacío para almacenar los definidores de modelos
const modelDefiners = [];

// Lee los archivos de modelos en el directorio /models
fs.readdirSync(path.join(__dirname, '/models'))
  // Filtra los archivos para excluir aquellos que comiencen con '.' y el archivo actual
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  // Para cada archivo encontrado, importa el definidor de modelo y lo agrega al array modelDefiners
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Ejecuta cada definidor de modelo, pasándole la instancia de Sequelize como argumento
modelDefiners.forEach(model => model(sequelize));

// Convierte el objeto sequelize.models en un array de pares clave-valor y capitaliza el nombre de cada modelo
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// Convierte el array capsEntries de nuevo en un objeto y asigna ese objeto a sequelize.models
sequelize.models = Object.fromEntries(capsEntries);

// Destructura los modelos Country y Activity del objeto sequelize.models
const { Country, Activity } = sequelize.models;

// Define las relaciones entre los modelos Country y Activity a través de la tabla de unión country_activity
Country.belongsToMany(Activity,  {through: "country_activity"});
Activity.belongsToMany(Country, {through: "country_activity"});

// Exporta todos los modelos y la conexión Sequelize para su uso en otras partes de la aplicación
module.exports = {
  ...sequelize.models, // Permite importar los modelos individualmente, ej: const { Product, User } = require('./db.js');
  conn: sequelize,     // Permite importar la conexión, ej: const { conn } = require('./db.js');
};
