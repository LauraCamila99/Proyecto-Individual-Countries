const server = require("./src/server");
const { conn } = require('./src/db.js');
const router = require("./src/routes");
const getDataApi = require("./src/Handlers/countries/getDataApi");

const PORT = 3001; // Define el puerto en el que se ejecutará el servidor Express

server.use(router); // llama a las rutas para poder utilizar la funcion de getDataApi

conn.sync({ force: true }) // Sincroniza la base de datos. Si 'force' es true, la base de datos se sincronizará eliminando todas las tablas existentes y creando nuevas.
  .then(() => { // Maneja la promesa devuelta por el método 'sync'
    server.listen(PORT, () => { // Inicia el servidor Express en el puerto especificado
      console.log(`Server listening on port ${PORT}`); // Imprime un mensaje indicando que el servidor está escuchando en el puerto especificado
      getDataApi(); // Llama a la función para obtener datos de la API. Esto inicializará la base de datos con datos de la API.
    })
  })
  .catch(error => console.error(error)) // Maneja cualquier error que ocurra durante la sincronización de la base de datos o al iniciar el servidor
