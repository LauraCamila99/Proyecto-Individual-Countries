
const { Country, Activity } = require("../../db.js"); 

const getActivities = async (req, res) => {
    try {
      const activitiesinDb=  await Activity.findAll();
      if (activitiesinDb.length > 0) {
        // Si hay países en la base de datos, los devolvemos
        res.status(200).json(activitiesinDb);
    } else {
        // Si no hay países en la base de datos, puedes manejar esto como desees
        res.status(404).json({ message: 'No se encontraron ACTIVIDADES en la base de datos' });
    }

    } catch (error) {
      console.error(error);
      res.status(500).json('Error en el servidor');
    }
  };

module.exports = getActivities;