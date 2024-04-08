const { Router } = require('express');
const countriesRouter = Router();

const getAllPrincipalCountries = require("../Controllers/countries/getAllPrincipalCountries.js");

const getIdCountries = require("../Handlers/countries/getIdCountries.js");
const getNameCountry = require("../Handlers/countries/getNameCountries.js");

//RUTAS GET / countries

//  GET | /countries ... Traeremos toda la informacion de countries
// Para probar en insomnia http://localhost:3001/countries/
countriesRouter.get('/', getAllPrincipalCountries);
//GET | /countries/name?="..." llamaremos las ciudades por name
// Para probar en insomnia http://localhost:3001/countries/   FALTA
countriesRouter.get('/name', getNameCountry);
//GET | /countries/:idPais llamaremos las ciudades por id
//Para probar en insomnia http://localhost:3001/countries/name?name=CoLoMbIa
countriesRouter.get('/:id', getIdCountries);




module.exports= countriesRouter;