import React from 'react'
import Link from '../UI/Link/Link'
import styles from './Footer.module.css'
import Instagram from '../resurs/Icons/instagram.png'
import Vk from '../resurs/Icons/vk.png'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.block}>
            <div className={styles.block1Catalog}>
                <h6 className={styles.catalog}>Каталог товаров</h6>
            </div>
            <div className={styles.block1Links}>
                <div className={styles.block1Links1}>
                    <Link to = 'https://www.instagram.com/p/CPJBWV5Mj-B/?utm_source=ig_web_copy_link'> 
                    <p  className={styles.a}>Дизайнерские обои</p>
                    </Link>
                    
                    <Link to = 'https://www.instagram.com/p/CPJBWV5Mj-B/?utm_source=ig_web_copy_link'> 
                    <p  className={styles.a}>Виниловые обои</p>
                    </Link>
                    <Link to = 'https://www.instagram.com/p/CPJBWV5Mj-B/?utm_source=ig_web_copy_link'> 
                    <p  className={styles.a}>Дизайнерские обои</p>
                    </Link>
                    <Link to = 'https://www.instagram.com/p/CPJBWV5Mj-B/?utm_source=ig_web_copy_link'> 
                    <p  className={styles.a}>Виниловые обои</p>
                    </Link>
                    <Link to = 'https://www.instagram.com/p/CPJBWV5Mj-B/?utm_source=ig_web_copy_link'> 
                    <p  className={styles.a}>Дизайнерские обои</p>
                    </Link>
                    <Link to = 'https://www.instagram.com/p/CPJBWV5Mj-B/?utm_source=ig_web_copy_link'> 
                    <p  className={styles.a}>Виниловые обои</p>
                    </Link>
                </div>
                <div className={styles.block1Links2}>
                <Link to = 'https://www.instagram.com/p/CPJBWV5Mj-B/?utm_source=ig_web_copy_link'> 
                    <p  className={styles.a}>Дизайнерские обои</p>
                    </Link>
                    <Link to = 'https://www.instagram.com/p/CPJBWV5Mj-B/?utm_source=ig_web_copy_link'> 
                    <p  className={styles.a}>Виниловые обои</p>
                    </Link>
                    <Link to = 'https://www.instagram.com/p/CPJBWV5Mj-B/?utm_source=ig_web_copy_link'> 
                    <p  className={styles.a}>Дизайнерские обои</p>
                    </Link>
                    <Link to = 'https://www.instagram.com/p/CPJBWV5Mj-B/?utm_source=ig_web_copy_link'> 
                    <p  className={styles.a}>Виниловые обои</p>
                    </Link>
                    <Link to = 'https://www.instagram.com/p/CPJBWV5Mj-B/?utm_source=ig_web_copy_link'> 
                    <p  className={styles.a}>Дизайнерские обои</p>
                    </Link>
                    <Link to = 'https://www.instagram.com/p/CPJBWV5Mj-B/?utm_source=ig_web_copy_link'> 
                    <p  className={styles.a}>Виниловые обои</p>
                    </Link>
                </div>
            </div>
        </div>
        <div className={styles.block2}>
        <div className={styles.block1Service}>
                <h6 className={styles.service}>Наши услуги</h6>
            </div>
            <div className={styles.block1Links1}>
                    <Link to = 'https://www.instagram.com/p/CPJBWV5Mj-B/?utm_source=ig_web_copy_link'> 
                    <p  className={styles.a2}>Создание уникального дизайна в квартире, доме, офисе</p>
                    </Link>
                    
                    <Link to = 'https://www.instagram.com/p/CPJBWV5Mj-B/?utm_source=ig_web_copy_link'> 
                    <p  className={styles.a2}>Создание уникального дизайна в квартире, доме, офисе</p>
                    </Link>
                    <Link to = 'https://www.instagram.com/p/CPJBWV5Mj-B/?utm_source=ig_web_copy_link'> 
                    <p  className={styles.a2}>Создание уникального дизайна в квартире, доме, офисе</p>
                    </Link>
                    <Link to = 'https://www.instagram.com/p/CPJBWV5Mj-B/?utm_source=ig_web_copy_link'> 
                    <p  className={styles.a2}>Создание уникального дизайна в квартире, доме, офисе</p>
                    </Link>
                </div>
        </div>
        <div className={styles.block3}>
            <Link to='/about'>
            <h6 className={styles.a3}>О студии</h6>
            </Link>
            <Link to='/portfolio'>
            <h6 className={styles.a3}>Портфолио</h6>
            </Link>
            <Link to='/blog'>
            <h6 className={styles.a3}>Блог</h6>
            </Link>
            <Link to='/contacts'>
            <h6 className={styles.a3}>Контакты</h6>
            </Link>
        </div>
        <div className={styles.block4}>
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
              </h2>
            </div>

            <div className={styles.messangers}>
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
            </div>
            
        </div>
    </div>
  )
}

export default Footer