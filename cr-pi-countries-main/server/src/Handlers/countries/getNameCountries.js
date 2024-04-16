const getNameCountry= require("../../Controllers/countries/getNameCountry");

const getNameCountries = async (req, res) => {
  try {
    const { name } = req.query;
    const countries = await getNameCountry(name);
    res.status(200).json(countries); 
    
  } catch (error) {
    console.error('Error al obtener países:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};    

module.exports = getNameCountries;