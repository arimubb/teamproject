import React from 'react'
import styles from './Card.module.css'

function Card(props) {
  return (
    <div className={styles.card}>
        <img className={styles.imageCD} src={props.img} alt="" />
        <h6 className={styles.titleCD}>{props.title}</h6>
        <p className={styles.textCD}>{props.text}</p>
    </div>
  )
}

export default Card