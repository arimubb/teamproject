import React from 'react'
import Link from '../Link/Link'
import styles from './ThirdCards.module.css'

function ThirdCards(props,id) {
  return (
    <div className={styles.container} id={id}>
      <div className={styles.image}>
        {props.children}
      </div>
        <div className={styles.btnCont}>
           <button className={styles.btn1}>{props.sale}</button>
        <button className={styles.btn2}>{props.famous}</button>
        <button className={styles.btn3}>{props.new}</button>
        </div>
       
    
      <div className={styles.firstBlock}>
        <p className={styles.firstBlockTitle}>{props.title}</p>
        <p className={styles.firstBlockText}>{props.text}</p>
      </div>
      <div className={styles.secondBlock}>
        <p className={styles.secondBlockTitle}>{props.title2}</p>
        <s className={styles.secondBlockText}>{props.text2}</s>
      </div>
      <div className={styles.hidden}>
        <Link to='/services'>
        <button className={styles.hiddenBtn}>Подробнее</button>

        </Link>
        <Link to='/services'>
        <p className={styles.hiddenLink}>
            Купить в 1 клик
          </p>
        </Link>
      </div>
    </div>
  )
}

export default ThirdCards