import React from 'react'
import Modal from './Modal'
import styles from './Modul.module.css'
import first from '../../../../public/imgKiro/first.png'
import second from '../../../../public/imgKiro/second.png'

function PortModal() {
  return (
    <div className={styles.container}>
      <Modal img={first} />
      <Modal img={second} />
    </div>
  )
}

export default PortModal