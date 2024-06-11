const validation = (activityData) => {
    const errors = {};

    if(activityData.name && !/^[a-zA-Z]+$/.test(activityData.name)) {
        errors.name = 'No es un nombre válido'
    }
    
    if(activityData.difficulty && !/^[1-5]$/.test(activityData.difficulty)) {
        errors.difficulty = 'Debe ser un numero entre 1 y 5 inclusive'
    }
    
    if(activityData.duration && !/^([0-9]{1,2}):([0-5][0-9]):([0-5][0-9])$/.test(activityData.duration)) {
        errors.duration = 'El valor es incorrecto, porfavor ingresa un dato tipo fecha HH:MM:SS Ej: "02:30:00" '
    }
    if(activityData.season !== 'Otoño' && activityData.season !== 'Primavera' && activityData.season !== 'Verano' && activityData.season !== 'Invierno') {
        errors.season = 'El valor ingresado no es una temporada'
    }    
       
    
    return errors;
}

export default validation;