const getIdCountry= require("../../Controllers/countries/getIdCountry");

const getIdCountries = async (req, res) => {
    try {
      const  idPais  = req.params.id;
      //console.log(`ID del país recibido: ${idPais}`); // Agregar console log para imprimir el ID del país
      const registro = await getIdCountry(idPais);
      res.status(200).json(registro);
    } catch (error) {
      console.error('Error al buscar el registro:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }; 

  module.exports = getIdCountries;