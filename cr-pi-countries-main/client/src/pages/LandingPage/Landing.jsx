import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <div className={styles.containerLanding}>
      <h1 className={styles.title} > Discover the world here!!</h1>
            <NavLink to="/home">
                <button className={styles.home}>Home</button>
            </NavLink>
    </div>
  )
} 

export default Landing