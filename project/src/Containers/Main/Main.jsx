import React from 'react'
import AlimCards from '../../Components/UI/Cards/AlimCards'
import Carouselbox from '../../Components/UI/CarouselBox/Carouselbox'
import styles from './Main.module.css'
import foto from '../../Components/UI/Cards/cardImage/image18.png'
import foto2 from '../../Components/UI/Cards/cardImage/image21.png'
import foto3 from '../../Components/UI/Cards/cardImage/image16.png'
import foto4 from '../../Components/UI/Cards/cardImage/image17.png'
import SecondCards from '../../Components/UI/SecondCardsForMain/SecondCards'
import foto5 from '../../Components/UI/SecondCardsForMain/images/Group1.png'
import foto6 from '../../Components/UI/SecondCardsForMain/images/Group2.png'
import foto7 from '../../Components/UI/SecondCardsForMain/images/Group3.png'
import foto8 from '../../Components/UI/SecondCardsForMain/images/Group4.png'
import Link from '../../Components/UI/Link/Link'
import ThirdCards from '../../Components/UI/ThirdCards/ThirdCards'
import foto9 from '../../Components/UI/ThirdCards/images/image8.png'
import foto10 from '../../Components/UI/ThirdCards/images/image9.png'
import foto11 from '../../Components/UI/ThirdCards/images/image10.png'
import foto12 from '../../Components/UI/ThirdCards/images/image11.png'
import ForthCards from '../../Components/UI/ForthCardsModal/ForthCards'
import foto13 from '../../Components/UI/ForthCardsModal/images/imag1.png'
import foto14 from '../../Components/UI/ForthCardsModal/images/imag2.png'
import Application from '../../Components/UI/Application/Application'




function Main  ()  {
  return (
    <div className={styles.container}>
      {/* <Carouselbox></Carouselbox> */}
      {/* здесь должен быть слайдер */}


      {/* блок№1 Дизайнерские обои  */}
      <div className={styles.designContainer}>
        <div className={styles.firstCont}>
          <h2 className={styles.firstContText}>
            Дизайнерские обои для дома и бизнеса
          </h2>
        </div>
        <div className={styles.secondCont}>
          <p className={styles.secondContText}>
            Но базовый вектор развития влечет за собой
            процесс внедрения и модернизации соответствующих
            условий активизации. В целом, конечно,
            сплочённость команды профессионалов требует
            определения и уточнения поставленных обществом
            задач. <br /> <br />
            Разнообразный и богатый опыт говорит нам, что
            внедрение современных методик представляет собой
            интересный эксперимент проверки кластеризации
            усилий. Предварительные выводы неутешительны:
            базовый вектор развития создаёт предпосылки для
            дальнейших направлений развития. Не следует,
            однако, забывать, что граница обучения кадров
            прекрасно подходит для реализации своевременного
            выполнения сверхзадачи. Разнообразный и богатый
            опыт говорит нам, что высокое качество
            позиционных исследований, а также свежий взгляд
            на привычные вещи — безусловно открывает новые
            горизонты для позиций, занимаемых участниками в
            отношении поставленных задач. Принимая во
            внимание показатели успешности, реализация
            намеченных плановых заданий в значительной
            степени обусловливает важность анализа
            существующих паттернов поведения.
          </p>
          <Link to='/catalogs'>
          <p className={styles.secondContLink}>
            Показать больше ↑
          </p>
          </Link>
          
        </div>


      </div>
{/* блок№2 Карточки(первые) */}
      <div className={styles.firstCards}>
        <AlimCards
          to="/portfolio"
          title="Создаем красивые стены"
          text="Используем различные технологии нанесения изображений. В нашем арсенале немецкое  оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия."
        >
          <img className={styles.img} src={foto} alt="" />
        </AlimCards>

        <AlimCards
          to="/portfolio"
          title="Можно нанести любое изображение"
          text="В зависимости от выбранной технологии разрешение печати нанесённого изображения может составлять до 1440 dpi."
        >
          <img className={styles.img} src={foto2} alt="" />
        </AlimCards>

        <AlimCards
          to="/portfolio"
          title="Ваши стены - наш мольберт"
          text="Наши дизайнеры помогут с выбором качественного изображения либо создадут для вас индивидуальный проект с учётом ваших пожеланий."
        >
          <img className={styles.img} src={foto3} alt="" />
        </AlimCards>

        <AlimCards
          to="/portfolio"
          title="Обновить стены без ремонта"
          text="С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи."
        >
          <img className={styles.img} src={foto4} alt="" />
        </AlimCards>
      </div>
{/* блок№3 Наши услуги */}
      <div className={styles.serviceContainer}>
        <h2 className={styles.serviceContTitle}>
        Наши услуги
        </h2>
        <p className={styles.serviceContText}>
        С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.
        </p>
      </div>
{/* блок№4 Карточки(вторые) */}

        <div className={styles.secondCards}>

        <SecondCards title = 'Создание уникального дизайна в квартире, доме, офисе' text='Итальянские технологии холодного трансфера и другие бесшовные покрытия.'>
          <img className={styles.img2} src={foto5} alt="" />
        </SecondCards>
        
        <SecondCards title = 'Оформление офисов и коммерческих помещений в фирменном стиле' text='Итальянские технологии холодного трансфера и другие бесшовные покрытия.'>
          <img className={styles.img2} src={foto6} alt="" />
        </SecondCards>

        <SecondCards title = 'Функциональный дизайн. Нанесение указателей, вывесок' text='Итальянские технологии холодного трансфера и другие бесшовные покрытия.'>
          <img className={styles.img2} src={foto7} alt="" />
        </SecondCards>

        <SecondCards title = 'Печать фотографий и коллажей' text='Итальянские технологии холодного трансфера и другие бесшовные покрытия.'>
          <img className={styles.img2} src={foto8} alt="" />
        </SecondCards>
        </div>

    {/* блок№5 Популярные товары */}
        
        <div className={styles.popularCont}>
          <h2 className={styles.popularContText}>Популярные товары</h2>
        </div>

          <div className={styles.thirdCardsBtns}>
            <button className={styles.buttons}>
              Дизайнерские обои
            </button>
            <button className={styles.buttons}>
              Виниловые обои 
            </button>
            <button className={styles.buttons}>
              Фирменные обои
            </button>
          </div>
          {/* блок№6 карточки3  */}
        <div className={styles.thirdCards}>
          <ThirdCards title='Floraison' text='от 2 552 ₽ / м2' title2 ='Артикул: 11039' text2='от 3 452 ₽ / м2' sale='-25%' famous='-' new='Новинка'>
            <img src={foto9} alt="" />
          </ThirdCards>
          <ThirdCards title='Floraison' text='от 2 552 ₽ / м2' title2 ='Артикул: 11039' text2='от 3 452 ₽ / м2'sale='-25%' famous='Популярное' new='Новинка' >
            <img src={foto10} alt="" />
          </ThirdCards>
          <ThirdCards title='Floraison' text='от 2 552 ₽ / м2' title2 ='Артикул: 11039' text2='от 3 452 ₽ / м2' sale='-25%' famous='Популярное' new='Новинка'>
            <img src={foto11} alt="" />
          </ThirdCards>
          <ThirdCards title='Floraison' text='от 2 552 ₽ / м2' title2 ='Артикул: 11039' text2='от 3 452 ₽ / м2' sale='-25%' famous='Популярное' new='Новинка'>
            <img src={foto12} alt="" />
          </ThirdCards>

          <ThirdCards id='first' title='Floraison' text='от 2 552 ₽ / м2' title2 ='Артикул: 11039' text2='от 3 452 ₽ / м2' sale='-15%' famous='-' new='--'>
            <img src={foto12} alt="" />
          </ThirdCards>
          <ThirdCards title='Floraison' text='от 2 552 ₽ / м2' title2 ='Артикул: 11039' text2='от 3 452 ₽ / м2'>
            <img src={foto12} alt="" />
          </ThirdCards>
          
        </div>
{/* блок№7 смотреть  товары */}
        <Link to='/catalogs'>
          <p className={styles.showProducts}>
          Смотреть все товары
          </p>
          </Link>
{/* блок№8 место */}
          <div className={styles.placeCont}>
        <h2 className={styles.placeContTitle}>
        Место применения
        </h2>
        <p className={styles.placeContText}>
        С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи.
        </p>
      </div>

    {/* блок№9 карточки с модальным окном */}
    <div className={styles.forthCards}>
      <ForthCards title='Жилые помещения' text='Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.'>
        <img className={styles.foto13} src={foto13} alt=""/> 
        </ForthCards>
        <ForthCards title='Жилые помещения' text='Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.'>
        <img className={styles.foto13}  src={foto14} alt=""/> 
        </ForthCards>
        <ForthCards title='Жилые помещения' text='Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.'>
        <img className={styles.foto13}  src={foto13} alt=""/> 
        </ForthCards>
        <ForthCards title='Жилые помещения' text='Есть над чем задуматься: акционеры крупнейших компаний будут разоблачены.'>
        <img className={styles.foto13}  src={foto14} alt=""/> 
        </ForthCards>
    </div>


      {/* блок№10 заявка */}
        <div className={styles.Application}>
          <Application></Application>
        </div>
      

      </div>
  )
}

export default Main
