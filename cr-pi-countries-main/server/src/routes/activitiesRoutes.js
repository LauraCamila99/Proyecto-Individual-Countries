const { Router } = require('express');
const activitiesRouter = Router();
const getActivities = require ('../Handlers/activities/getActivities');
const postActivity = require ('../Handlers/activities/postActivity');
const deleteActivity = require ('../Handlers/activities/deleteActivity');

//RUTAS GET /activities 

//RUTAS POST /activities
//POST /activities DEJA PONER UNA ACTIVIDAD NUEVA RELACIONADA CON UN PAIS ESPECIFICO 
activitiesRouter.post("/",postActivity);
// GET /activities Llamaremos todas las actividades 
activitiesRouter.get("/",getActivities);
//RUTAS DELETE /activities
//DELETE /activities ELIMINA UNA ACTVIVIDAD EN ESPECIFICO
//ESTO LO HACEMOS SI NOS SOBRA TIEMPO 
activitiesRouter.delete("/:id",deleteActivity);

module.exports = activitiesRouter;