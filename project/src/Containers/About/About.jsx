import React from 'react'
import styles from './About.module.css'
import home from '../../../public/iconsBelya/homeBelek.png'
import desc from '../../../public/imgBelya/about__studio-image.png'
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
          <h2 aria-colspan={styles.aboutH2}>О студии</h2>
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




    </div>
  )
}

export default About