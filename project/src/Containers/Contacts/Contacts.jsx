import React from 'react'
import styles from './Contacts.module.css'
// import homeimg from '../../public/img/homeislam.png'
// import ins from '../../public/image/ins.png'
// import teleg from '../../public/image/teleg.png'
// import wat from '../../public/image/wat.png'
// import carta from '../../public/image/carta.png'
// import scif from '../../public/image/scif.png'
// import krolik from '../../public/image/krolik.png'
// import vec from '../../public/image/vec.png'

const Contacts = () => {
  const retis = () =>{
    alert('Заявка отправлена')
  }


  return (
    <div className={styles.container}>

    <div className={styles.main}>
   <img className={styles.img1}  src="../../public/img/homeislam.png" alt="000" />
       <span className={styles.slesh}> / </span>  <h1>Контакты</h1>
    </div>
    <h2 className={styles.con}>Контакты</h2>
    <div className={styles.block}>
      <div className={styles.block1}>
     <div className={styles.blk1}>
     <h3>Адрес:</h3>
     <h4>Москва, ул. Новая Басманная, дом 18, строение 2
</h4>
     </div>
      <div className={styles.blk2}>
        <div className={styles.nomer}>
          <h3>Телефон:</h3>
          <h5>+7 (495) 150-24-68</h5>
        </div>
        <div className={styles.email}>
          <h3>E-mail:</h3>
          <h5>zakaz@stenoprint.ru</h5>
        </div>
      </div>
      <div className={styles.icons}>
        <div className={styles.inst}>
        <a href="https://www.instagram.com/stenoprint/">
                <img src="../../public/img/ins.png" alt="" />
              </a>
        </div>
        <div className={styles.teleg}>
       <img src="../../public/img/teleg.png" alt="" />
        </div>
        <div className={styles.wat}>
       <img src="../../public/img/wat.png" alt="" />
        </div>
      </div>
      <p className={styles.ptn}>Время работы: <br />
Пн - Пт: 9:00 - 18:00</p>
      </div>
      <div className={styles.blk3}>
      <img className={styles.scif} src="../../public/img/scif.png" alt="" />
        <img className={styles.img2} src="../../public/img/carta.png" alt="" />
      </div>
    </div>


    {/*  */}

    <div className={styles.block2}>
      <div className={styles.blk4}>
        <p className={styles.zayavka}>Оставьте заявку</p>
        <p className={styles.zav}>Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время и ответит на все интересующие вопросы.</p>
     <div className={styles.input}>
      <div className="h">
      <h3 className={styles.h3}>Ваше имя:</h3>
      <input type="text" className={styles.inp1} placeholder='Иван' />
      </div>
      <div className={styles.m}>
      <h3 className={styles.h3}>Номер телефона:</h3>
      <input type="number" className={styles.inp1} placeholder='+7 (___) ___-__-__' />
      </div>
      </div>
      <div className={styles.cov}>
      <button onClick={retis} className={styles.btn}>Отправить заявку</button>
      <p className={styles.sullka}>Нажимая «отправить», я даю согласие на <a href="#"> обработку персональных данных</a></p>
      </div>
     </div>
     <div className={styles.image}>
      <img className={styles.vec} src="../../public/img/vec.png" alt="" />
      <img className={styles.img3} src="../../public/img/krolik.png" alt="" />
     </div>
      </div>
    </div>
    
  )
}

export default Contacts