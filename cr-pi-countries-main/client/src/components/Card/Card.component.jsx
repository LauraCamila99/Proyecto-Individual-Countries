import './Card.style.css'
import { Link  } from 'react-router-dom';


function Card({country}) {
  const { id, name, image, continent } = country;
  return (
    <Link className='enlace' to={`/detail/${id}`}>
      <div className='card-container'>
       <h1 className='nombre'>{name}</h1>
       <img className='imagen' src={image} alt={name} />
       <h3 className='continente'>{continent}</h3>
      </div>
    </Link>
  )
}

export default Card