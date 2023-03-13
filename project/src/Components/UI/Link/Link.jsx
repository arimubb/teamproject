import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Link.module.css'


const Link = ({to , children}) => {
  return (
    <NavLink className={styles.link} to={to}> 
        {children}
    </NavLink>
  )
}

export default Link