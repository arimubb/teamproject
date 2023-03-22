import React from 'react'
import styles from './Modul.module.css'

function Modal({ img }) {
  return (
    <div>
      <img className={styles.oboi} src={img} alt="" />
    </div>
  )
}

export default Modal