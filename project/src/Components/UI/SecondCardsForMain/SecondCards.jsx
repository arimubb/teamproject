import React from 'react'
import Link from '../Link/Link'
import styles from './SecondCards.module.css'

function SecondCards(props,to) {
  return (
    <div className={styles.container}>
         <div className={styles.container} >
        <div className={styles.image} to={to}>
            {props.children}
        </div>
        <h6 className={styles.title}>{props.title}</h6>
        <p className={styles.text}>{props.text}</p>
        <Link to="/services">
        <p className={styles.link} >Узнать подробности</p>
        </Link>
        
    </div>
    </div>
  )
}

export default SecondCards