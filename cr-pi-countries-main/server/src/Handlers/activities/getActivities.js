
const { Country, Activity } = require("../../db.js"); 
const getAllActivities= require("../../Controllers/activities/getAllActivities.js");

const getActivities = async (req, res) => {
  try {
    const activityData = await getAllActivities();
    res.status(200).json(activityData);
  } catch (error) {
    console.error('Error al obtener actividades:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }

};

module.exports = getActivities;