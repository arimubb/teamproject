import React from 'react'
import styles from './Nav.module.css'
import logo from '../resurs/image/logo.png'
import Vector from '../resurs/Icons/Vector.png'
import Instagram from '../resurs/Icons/instagram.png'
import Vk from '../resurs/Icons/vk.png'
import phone from '../resurs/Icons/telephone.png'
import Link from '../UI/Link/Link'
import Customlink from './Customlink'

const Nav = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.firstBlock}>
        <div className={styles.text}>
          При покупке 10-ти рулонов обоев - дизайн в
          ПОДАРОК!
        </div>
        <div className={styles.btn}>
          <button className={styles.button}>Перейти</button>
        </div>
      </div>

      <div className={styles.secondBlock}>
        <div className={styles.logo}>
          <img className={styles.image} src={logo} alt="" />
        </div>

        <div className={styles.assets}>
          <div className={styles.assetsFirst}>
            <div className={styles.inputs}>
              <img
                className={styles.vector}
                src={Vector}
                alt=""
              />
              <input
                type="search"
                className={styles.input}
                placeholder="Поиск..."
              />
            </div>

            <div className={styles.call}>
              <p className={styles.callUs}>
                Позвонить нам:
              </p>
              <h2 className={styles.number}>
                <a
                  className={styles.linkNumber}
                  href="tel:+"
                >
                  +7 (555) 888-98-66
                </a>
              </h2>
            </div>

            <div className={styles.write}>
              <p className={styles.writeUs}>
                Написать нам:
              </p>
              <h2 className={styles.mail}>
                <a
                  className={styles.linkMail}
                  href="mailto:"
                >
                  info@stenoprint.ru
                </a>
                {/* info@stenoprint.ru */}
              </h2>
            </div>

              <div className={styles.instLogo}>
                <a href="https://www.instagram.com/stenoprint/">
                  <img src={Instagram} alt="" />
                </a>
              </div>

            <div className={styles.vkLogo}>
              <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F736620082794067013%2F&psig=AOvVaw2fGkCZrdE5agzIe6QYVLkj&ust=1678702618974000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOixuumU1v0CFQAAAAAdAAAAABAE">
                <img src={Vk} alt="" />
              </a>
            </div>

            {/* for 375px */}
            <div className={styles.phoneLogo}>
              <a href="tel:+7 (555) 888-98-66">
                <img src={phone} alt="" />
              </a>
            </div>

            <div className={styles.vectorLogo}>
              <img src={Vector} alt="" />
            </div>  

            <div className={styles.hamburgermenu}>

     
       <input id={styles.menu__toggle} type="checkbox" />
       
    <label className={styles.menu__btn} htmlFor={styles.menu__toggle}>
      <span></span>
    </label>

     
    
    

    <ul className={styles.menu__box}>
      <li><a className={styles.menu__item} href="/services">Главная</a></li>
      <li><a className={styles.menu__item} href="#">About</a></li>
      <li><a className={styles.menu__item} href="#">Team</a></li>
      <li><a className={styles.menu__item} href="#">Contact</a></li>
      <li><a className={styles.menu__item} href="#">Twitter</a></li>
    </ul>

 

              <input
                id={styles.menu__toggle}
                type="checkbox"
              />


              <label
                className={styles.menu__btn}
                for={styles.menu__toggle}
              >
                <span></span>
              </label>

              <ul className={styles.menu__box}>
                <li>
                  <a className={styles.menu__item} href="/main">
                    Главная
                  </a>
                </li>
                <li>
                  <a className={styles.menu__item} href="/services">
                    Наши услуги 
                  </a>
                </li>
                <li>
                  <a className={styles.menu__item} href="/about">
                    О студии 
                  </a>
                </li>
                <li>
                  <a className={styles.menu__item} href="/portfolio">
                    Портфолио
                  </a>
                </li>
                <li>
                  <a className={styles.menu__item} href="/contacts">
                    Контакты
                  </a>
                </li>
              </ul>
            </div> 
           </div>
           
          

          <div className={styles.assetsSecondBlock}>
            <Customlink to="/">
              <button className={styles.catalog}>
                Главная
              </button>
            </Customlink>

            {/* <Customlink to="/catalogs">
              <button className={styles.catalog}>
                Каталог товаров
              </button>
            </Customlink> */}

            <Customlink to="/services">
              <button className={styles.catalog}>
                Наши услуги
              </button>
            </Customlink>

            <Customlink to="/about">
              <button className={styles.catalog}>
                О студии
              </button>
            </Customlink>

            <Customlink to="/portfolio">
              <button className={styles.catalog}>
                Портфолио
              </button>
            </Customlink>

            <Customlink to="/blog">
              <button className={styles.catalog}>
                Блог
              </button>
            </Customlink>

            <Customlink to="/contacts">
              <button className={styles.catalog}>
                Контакты
              </button>
            </Customlink>
          </div>
        </div></div>
      </div>
 
  )
}

export default Nav
