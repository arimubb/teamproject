import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'


function Customlink({to,children}) {
  return (
    <NavLink className={styles.customLink} to={to}> 
        {children}
    </NavLink>
  )
}

export default Customlink