const { Country, Activity } = require("../../db.js"); 

const getAllPrincipalCountries = async (req, res) => {
    try {
        const countriesInDb = await Country.findAll();
        
        if (countriesInDb.length > 0) {
            // Si hay países en la base de datos, los devolvemos
            res.status(200).json(countriesInDb);
        } else {
            // Si no hay países en la base de datos, puedes manejar esto como desees
            res.status(404).json({ message: 'No se encontraron países en la base de datos' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json('Error en el servidor');
    }
}

module.exports = getAllPrincipalCountries;