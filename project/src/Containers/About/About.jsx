import React from 'react'
import styles from './About.module.css'
import home from '../../../public/iconsBelya/homeBelek.png'
import desc from '../../../public/imgBelya/about__studio-image.png'
import Card from './cardBL/Card'
import serviceCD1 from '../../../public/imgBelya/services-image-1.png'
import serviceCD2 from '../../../public/imgBelya/services-image-2.png'
import serviceCD3 from '../../../public/imgBelya/services-image-3.png'
import serviceCD4 from '../../../public/imgBelya/services-image-4.png'
import aboutRew from '../../../public/imgBelya/Group 53.png'
import rewiew2 from '../../../public/imgBelya/about-studio-image.png'
import ouractivity1 from '../../../public/imgBelya/activity-image-1.png'
import ouractivity2 from '../../../public/imgBelya/activityimage2.png'
import aboutCardApplication from '../../../public/imgBelya/hareImg.png'
// import ApplicationVector from '../../../public/iconsBelya/vector (2).png'


const About = () => {
  const retis = () =>{
    alert('Заявка отправлена')
  }
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
          <p className={styles.descText1}>Но базовый вектор развития влечет за собой процесс внедрения и
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

    <div id={styles.aboutRewiew} className={styles.aboutRewiew}>
   <div className={styles.aboutRewtext}><h2 className={styles.rewTitle}>Мы используем разные техники оформления</h2>
   <p className={styles.rewText}>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.</p></div>
   <div className={styles.aboutRewImgCon}>
   <a href="https://youtu.be/P5AupXIhGHk"><img src={aboutRew} alt="" /></a>
   </div>
  </div>

  <div id={styles.aboutRewiew1} className={styles.aboutRewiew1}>
  <div className={styles.aboutRewImgCon1}>
   <a href="https://youtu.be/P5AupXIhGHk"><img className={styles.imgRewVideo1} src={aboutRew} alt="" /></a>
   </div>
   <div className={styles.aboutRewtext1}><h2 className={styles.rewTitle1}>Мы используем разные техники оформления</h2>
   <p className={styles.rewText1}>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.</p></div>
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
      <img src={ouractivity1} alt="" />
      <img src={ouractivity2} alt="" />
    </div>    
    </div>
  </div>

  
  <div className={styles.block2}>
      <div className={styles.blk4}>
        <p className={styles.zayavka}>Оставьте заявку</p>
        <p className={styles.zav}>Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время и ответит на все интересующие вопросы.</p>
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
      <p className={styles.sullka}>Нажимая «отправить», я даю согласие на <a href="#"> обработку персональных данных</a></p>
      </div>
     </div>
     <div className={styles.image}>
      <img className={styles.img3} src={aboutCardApplication} alt=""/>
     </div>
      </div>



    </div>
  )
}

export default About