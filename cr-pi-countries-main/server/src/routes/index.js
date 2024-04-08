const { Router } = require("express");
//COMIENZO A LLAMAR LOS CONTROLADORES de countries y de activities
const countriesRoutes = require("./countriesRoutes")
const activitiesRoutes = require("./activitiesRoutes")



const router = Router();


//AQUI SE VAN A PONER TODAS LAS RUTAS DE COUNTRIES
router.use("/countries", countriesRoutes);
//AQUI SE VAN A PONER TODAS LAS RUTAS DE ACTIVIDADES
router.use("/activities", activitiesRoutes);    



module.exports = router;
