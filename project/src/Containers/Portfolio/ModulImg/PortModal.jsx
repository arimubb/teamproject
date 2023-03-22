import React from 'react'
import Modal from './Modal'
import styles from './Modul.module.css'
import first from '../../../../public/imgKiro/first.png'
import second from '../../../../public/imgKiro/second.png'

function PortModal() {
  return (
    <div>
      <div className={styles.container}>
        <Modal img={first} />
        <Modal img={second} />
        <Modal img={second} />
        <Modal img={first} />
        <Modal img={first} />
        <Modal img={second} />
        <Modal img={second} />
        <Modal img={first} />
        <Modal img={first} />
        <Modal img={second} />
        <Modal img={second} />
        <Modal img={first} />
      </div>
      <div className={styles.container2}>
        <Modal img={first} />
        <Modal img={second} />
        <Modal img={first} />
        <Modal img={second} />
        <Modal img={first} />
        <Modal img={second} />
        <Modal img={first} />
        <Modal img={second} />
      </div>
    </div> 
  )
}

export default PortModal