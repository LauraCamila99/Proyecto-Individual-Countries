const { Country, Activity } = require("../../db.js"); 

const deleteActivity = async (req, res) => {
  try{
      const id = req.params.id; // Accede al parámetro id directamente
      //console.log(`ID de la actividad recibida: ${id}`); // Imprime el ID de la actividad recibida
      const activity = await Activity.destroy({
        where: {id}
    })
    res.status(200).json({message:"Activity deleted successfully"})

  } catch (error) {
      res.status(400).send({error:error.message})
  }
}

module.exports = deleteActivity;
