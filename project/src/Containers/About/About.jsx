import React from 'react'
import styles from './About.module.css'
import home from '../../../public/iconsBelya/homeBelek.png'
import desc from '../../../public/imgBelya/about__studio-image.png'
import Card from './cardBL/Card'
import serviceCD1 from '../../../public/imgBelya/services-image-1.png'
import serviceCD2 from '../../../public/imgBelya/services-image-2.png'
import serviceCD3 from '../../../public/imgBelya/services-image-3.png'
import serviceCD4 from '../../../public/imgBelya/services-image-4.png'
import rewiew from '../../../public/imgBelya/image 29.png'
import rewiew2 from '../../../public/imgBelya/about-studio-image.png'
import ouractivity1 from '../../../public/imgBelya/activity-image-1.png'
import ouractivity2 from '../../../public/imgBelya/activityimage2.png'

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
          <h2 className={styles.aboutH2}>О студии</h2>
          <p className={styles.aboutInfoTitle}>Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.</p>
        </div>
        <div className={styles.aboutDescription}>
         <div className={styles.aboutDescImg}>
        <img className={styles.descImg} src={desc} alt="" />
         </div>
         <div className={styles.aboutDescTitle}>
          <h2 className={styles.descTitle}>Создаем красивые стены</h2>
          <div className={styles.aboutDescText}>
          <p className={styles.descText}>Но базовый вектор развития влечет за собой процесс внедрения и
          модернизации соответствующих условий активизации. В целом, конечно, сплочённость команды
          профессионалов требует определения и уточнения поставленных обществом задач.</p>
          <p className={styles.descText}>Разнообразный и богатый опыт говорит нам, что внедрение современных
          методик представляет собой интересный эксперимент проверки кластеризации усилий.
          Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для
          дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров
          прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и
          богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий
          взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых
          участниками в отношении поставленных задач. Принимая во внимание показатели успешности,
          реализация намеченных плановых заданий в значительной степени обусловливает важность анализа
          существующих паттернов поведения.</p>
          </div>
         </div>
        </div>
        <div className={styles.aboutCard}>
          <Card img={serviceCD1} title={"Создаем красивые стены"} text={"Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия."}/>
          <Card img={serviceCD2} title={"Можно нанести любое изображение"} text={"В зависимости от выбранной технологии разрешение печати нанесённого изображения может составлять до 1440 dpi"}/>
          <Card img={serviceCD3} title={"Ваши стены - наш мольберт"} text={"Наши дизайнеры помогут с выбором качественного изображения либо создадут для вас индивидуальный проект с учётом ваших пожеланий."}/>
          <Card img={serviceCD4} title={"Обновить стены без ремонта"} text={"С помощью опыта нашей команды преобразить любые помещения не составит труда вне зависимости от масштаба или сложности задачи."}/>
        </div>

    <div className={styles.aboutRewiew}>
   <div className={styles.aboutRewtext}><h2 className={styles.rewTitle}>Мы используем разные техники оформления</h2>
   <p className={styles.rewText}>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.</p></div>
   <img className={styles.rewVideo} src={rewiew} alt="" />
    </div>
    <div className={styles.aboutRewiew2}>
      <img className={styles.rewVideo2} src={rewiew2} alt="" />
   <div className={styles.aboutRewtext2}><h2 className={styles.rewTitle2}>Дизайнерские обои для дома и бизнеса</h2>
   <p className={styles.rewText2}>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.</p></div>
   </div>
  <div className={styles.aboutOurActivity}>
    <div className={styles.OurTextCon}>
      <h2 className={styles.OurTitle}>Наша активность</h2>
      <p className={styles.OurText}>Наша команда принимает активное участие в бизнес-мероприятиях, внося вклад в развитие отрасли вертикальной печати в России</p>
    <div className={styles.OurScrollimg}>
      <img src={ouractivity1} alt="" />
      <img src={ouractivity2} alt="" />
    </div>    
    </div>
  </div>
  
    </div>

    // </div>
  )
}

export default About