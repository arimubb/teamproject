import React from 'react'
import styles from './About.module.css'
import home from './icons/homeBelek.png'
// belya

const About = () => {
  return (
    <div className={styles.aboutGlavCon}>
      <div className={styles.aboutTitle}>
        <a className={styles.aboutItem} href="#">
          <img className={styles.home} src={home} alt="" />
        </a>
        <span className={styles.slesh}>/</span>
        <a className={styles.aboutItemTitl} href="#">О студии</a>
      </div>
        <div className={styles.aboutConInfo}>
          <h2>О студии</h2>
          <p className={styles.aboutInfoTitle}>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
        </div>
        <div className={styles.aboutDescription}>
         <div></div>
        </div>
    </div>
  )
}

export default About