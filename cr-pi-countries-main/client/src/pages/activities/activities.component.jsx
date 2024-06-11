import React from 'react';
import { Link } from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities} from '../../redux/actions';
import './activities.style.css'


function Activities() {

  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.allActivities);
  
/*   
  
 const handleActivity = (id) => {
    dispatch(deleteActivity(id));
    console.log(id)
    console.log(dispatch)
  }; */

  useEffect(() => {
    dispatch(getActivities())
  },[dispatch])

  



  return (
    <div >
      <div>
        <Link to={'/form'}>
          <button className="boton_volver">Volver</button>
        </Link>
      </div>
      <div className="contenedor">
      
        {allActivities?.length > 0 ? ( allActivities.map(activity => (
      
          <div className="actividades" key={activity.id}>
            {/* <button className='boton_eliminar' onClick={()=>handleActivity(activity.id)}>x</button> */}
            <h2 className='parrafo_principal'>Numero: {activity.id}</h2>
            <h1 className='parrafo_principal'>Actividad: {activity.name}</h1>
            <h2 className='parrafo_secundario'>Dificultad: {activity.difficulty}</h2>
            <h2 className='parrafo_secundario'>Duración: {activity.duration}</h2>
            <h2 className='parrafo_secundario'>Temporada: {activity.season}</h2>
           {/*  <Link to={`/activities/${activity.id}`}>
            <button className='boton_cambios'>Modificar</button>
            </Link> */}
          </div>
          
        ))
      ) : <p className="mensaje_actividades">No hay actividades creadas</p>
      }
        
      </div>
    
    </div> 
  );
}


export default Activities


