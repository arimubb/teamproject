import React from 'react'
import Link from '../Link/Link'
import styles from './Application.module.css'
import picture1 from './images/img.png'
import picture2 from './images/vec.png'


function Application() {
  return (
    <div className={styles.container}>
      <div className={styles.block1}>
        <div className={styles.block1First}>
          <h2 className={styles.title}>Оставьте заявку</h2>
          <p className={styles.text}>
            Оставьте заявку, наш менеджер свяжется с Вами
            в ближайшее время и ответит на все интересующие
            вопросы.
          </p>
        </div>

        <div className={styles.block1Second}>
          <div className={styles.input1}>
            <p className={styles.input1Title}>Ваше имя:</p>
            <input
              className={styles.inp}
              type="text"
              placeholder="Ваше имя"
              pattern="[a-z]*"
            />
          </div>

          <div className={styles.input2}>
            <p className={styles.input1Title}>Ваш номер:</p>
            <input
              className={styles.inp}
              pattern="[0-9 _+=]*"
              type="tel"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
        </div>

        <div className={styles.block1Third}>
          <Link to="/services">
            <button className={styles.btn}>
              Отправить заявку
            </button>
          </Link>
          <p className={styles.opisanie}>
            Нажимая «отправить», я даю согласие{' '}
            <a href="/services">
              на обработку персональных данных
            </a>
          </p>
        </div>
      </div>

      <div className={styles.block2}>
        <img className={styles.foto1} src={picture1} alt="" />
          </div>
    </div>
  )
}

export default Application
