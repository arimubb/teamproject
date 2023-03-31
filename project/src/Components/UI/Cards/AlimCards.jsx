import React from 'react'
import styles from './AlimCards.module.css'

function AlimCards(props,to) {
  return (
    <div className={styles.container} >
        <div className={styles.image} to={to}>
            {props.children}
        </div>
        <h6 className={styles.title}>{props.title}</h6>
        <p className={styles.text}>{props.text}</p>
    </div>
  )
}

export default AlimCards