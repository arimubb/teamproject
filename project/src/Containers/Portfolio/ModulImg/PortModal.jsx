import React, {useState} from 'react'
import Modal from './Modal'
import styles from './Modul.module.css'
import first from '../../../../public/imgKiro/first.png'
import second from '../../../../public/imgKiro/second.png'
import Context from './Context/Context'
import SContext from './Context/SContext'

function PortModal() {
  const [modalActive, setModalActive] = useState(false)
  const [SmodalActive, SsetModalActive] = useState(false)
  return (
    <div>
      <div className={styles.container}>
        <button onClick={() => setModalActive(true)}>
          <Modal img={first} />
        </button> 
        <button onClick={() => SsetModalActive(true)}>
          <Modal img={second} />
        </button>
        <button onClick={() => SsetModalActive(true)}>
          <Modal img={second} />
        </button>
        <button onClick={() => setModalActive(true)}>
          <Modal img={first} />
        </button>
        <button onClick={() => setModalActive(true)}>
          <Modal img={first} />
        </button>
        <button onClick={() => SsetModalActive(true)}>
          <Modal img={second} />
        </button>
        <button onClick={() => SsetModalActive(true)}>
          <Modal img={second} />
        </button>
        <button onClick={() => setModalActive(true)}>
          <Modal img={first} />
        </button>
        <button onClick={() => setModalActive(true)}>
          <Modal img={first} />
        </button>
        <button onClick={() => SsetModalActive(true)}>
          <Modal img={second} />
        </button>
        <button onClick={() => SsetModalActive(true)}>
          <Modal img={second} />
          </button>
        <button onClick={() => setModalActive(true)}>
          <Modal img={first} />
          </button>
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
      <Context active={modalActive} setActive={setModalActive}/>
      <SContext Sactive={SmodalActive} SsetActive={SsetModalActive}/>
    </div> 
  )
}

export default PortModal