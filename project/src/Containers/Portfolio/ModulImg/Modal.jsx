import React from 'react'
import styles from './Modul.module.css'

function Modal({ img }) {
  return (
    <div className={styles.contImg}>
      <img className={styles.oboi} src={img} alt="" />
    </div>
  )
}

export default Modal