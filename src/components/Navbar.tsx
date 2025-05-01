import React, { JSX } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/Navbar.module.css';
import { VariablesUtils, varReturn } from '../utils/global';


export default function Navbar(): JSX.Element {
    return (
        <nav className={styles.navbar}>
          
          <div className={styles.links}>
            <NavLink 
              to="/recettes"
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              Recettes
            </NavLink>
            <NavLink 
              to="/favoris"
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              Favoris
            </NavLink>
            <NavLink 
              to="/planning"
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              Planning
            </NavLink>
          </div>
        </nav>
      );
}
