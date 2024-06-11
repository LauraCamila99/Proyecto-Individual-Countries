const { Country, Activity } = require("../../db.js"); // Importa los modelos de la base de datos (suponiendo que están definidos en el archivo "../db")

const createActivity = async (activityData) => {
    const { 
       id,
       name, 
       difficulty, 
       duration, 
       season, 
       countries, 
    } = activityData;
    
    if (!name || !difficulty || !season) {
        throw new Error('Faltan datos');
    }
    
    try {
        console.log('Datos de actividad recibidos:', activityData);
        const activity = await Activity.create({
          id,
          name,
          difficulty,
          duration,
          season,
          countries,
        });
        
        //console.log('Actividad creada:', activity);


        const countriesInDb = await Country.findAll({
            where: {
                id: countries
            }
        })
        //add activity to each country
        for(const country of countriesInDb){
            await country.addActivity(activity)
        }
        return activity;
    } catch (error) {
        throw new Error('Error al crear la actividad');
    }
  };
  
module.exports=createActivity;