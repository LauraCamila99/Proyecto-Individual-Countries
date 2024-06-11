import { Link } from "react-router-dom"
import React from "react"
import './form.style.css'


export const Form = ({
  activityData,
  errors,
  countries,
  handleChange,
  handleSelect,
  handleDelete,
  handleSubmit,}) => {
  
return(
  <div >
    <div className="contenedor_form">
      <div>
        <Link to='/home'>
         <button className="boton">Volver</button>
        </Link>
      </div>
      <div>
        <Link to='/activities'>
         <button className="boton">Actividades</button>
        </Link>
      </div>
      </div>
    <div className="formulario">
      <form onSubmit={event=>handleSubmit(event)}>
       <div>
         <label className="nombres" >Nombre: </label>
         <input className="barra"
                name='name' 
                value={activityData.name} 
                onChange={event=>handleChange(event)}
         >
         </input>
          {errors.name && 
            <p style={{ color: 'red'}}>
            {errors.name}
            </p>}
       </div>
       <div>
         <label className="nombres" >Dificultad: </label>
         <input className="barra"
                name='difficulty' 
                value={activityData.difficulty} 
                onChange={event=>handleChange(event)}
         >
         </input>
          {errors.difficulty && 
            <p style={{ color: 'red'}}>
            {errors.difficulty}
            </p>}
       </div>
       <div>
         <label className="nombres" >Duración: </label>
         <input className="barra"
                name='duration' 
                value={activityData.duration} 
                onChange={event=>handleChange(event)}
         >
         </input>
          {errors.duration && 
            <p style={{ color: 'red'}}>
            {errors.duration}
            </p>}
       </div>
       <div>
         <label className="nombres">Temporada: </label>
         <select className='selector' name='season' value={activityData.season} onChange={event =>handleChange(event)}>
           <option value=''>Seleccionar...</option>
           <option value='Verano'>Verano</option>
           <option value='Otoño'>Otoño</option>
           <option value='Primavera'>Primavera</option>
           <option value='Invierno'>Invierno</option>
         </select>
       </div>
       <div>
         <label className="nombres">Paises: </label>
         <select className='selector' name='countries' value={activityData.countries} onChange={event => handleSelect(event)}>
           <option value=''>Seleccionar...</option>
           {countries.map((country) =>(
            <option key={country.id} value={country.id}>{country.name}</option>
          ))}
         </select>
       </div>
         {activityData.countries.map(e =>
         <div>
           <p className="pais">{e}</p>
           <button onClick={()=>handleDelete(e)}>x</button>
         </div>)}
         <button className="crear"
           type='submit'
           disabled={!activityData.name || !activityData.difficulty || errors.name || errors.difficulty || errors.duration || activityData.season == '' || activityData.countries.length == 0}
         >CREAR</button>
      </form> 
    </div>
  </div>
)}