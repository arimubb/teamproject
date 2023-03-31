import React from 'react'
import styles from './Portfolio.module.css'
import home from '../../../public/imgKiro/Vector.png'
import Button from './UX/Button'
import PortModal from './ModulImg/PortModal'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.vlog}>
        <img className={styles.home} src={home} alt="" />
        <p className={styles.slesh}> / </p>
        <p className={styles.port}>Портфолио</p>
      </div>
      <div className={styles.portTitle}>
        <h1 className={styles.title}>Портфолио</h1>
      </div>
      <div className={styles.btns}>
        <Button text={'Дизайнерские обои'} />
        <Button text={'Виниловые обои'} />
        <Button text={'Фирменные обои'} />
      </div>
      <PortModal />
    </div>
  )
}

export default Portfolio