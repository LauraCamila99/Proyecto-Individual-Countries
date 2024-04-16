import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions';
import './Home.module.css';
import Navbar from '../../components/NavBar/NavBar.component';
import Cards from '../../components/Cards/Cards.component';
import Paginated from '../../components/paginated/paginated.component';

function Home() {

  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);


  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPage, setCountriesPage] = useState(10)
  const indexOfLastCountry = currentPage * countriesPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPage;
  const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

 
  useEffect(() => {
    dispatch(getCountries())
  },[dispatch])


  return (
      <div className='home-container'>
       <Navbar/>
       <Cards currentCountries={currentCountries}/>
       <Paginated
       currentPage={currentPage}
       setCurrentPage={setCurrentPage}
       countriesPage={countriesPage}
       allCountries={allCountries.length}
       paginado={paginado}
       ></Paginated>
      </div>
  )
}

export default Home