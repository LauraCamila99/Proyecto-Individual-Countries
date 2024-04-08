const createActivity = require("../../Controllers/activities/createActivity");


const postActivity = async (req, res) => {
  try {
    const activityData = req.body;
    const activity = await createActivity(activityData);
    res.status(200).json(activity);
  } catch (error) {
    console.error('Error al crear actividad:', error);
    res.status(500).json({ error: error.message });
  }
};
module.exports = postActivity;