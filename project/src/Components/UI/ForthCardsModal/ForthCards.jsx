import React from 'react'
import styles from './ForthCards.module.css'

function ForthCards(props) {
  return (
    <div className={styles.container}>
        <div className={styles.avatar}>
            {props.children}
        </div>
        <div className={styles.description}>
            <h6 className={styles.title}>{props.title}</h6>
            <p className={styles.text}>{props.text}</p>
        </div>
    </div>
  )
}

export default ForthCards