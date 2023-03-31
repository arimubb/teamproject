import React from 'react'
import styles from './Carousel.module.css'
import image1 from './images/image14.png'

const Carouselbox = () => {
  return (
 <section className={styles.container}>
  <div className={styles.sliderWrapper}>
    <div className={styles.slider}>
      <img id="#slide1" src="https://cdn.pixabay.com/photo/2022/10/03/21/47/fog-7496901__480.jpg" alt="" />
      <img id="#slide2" src="https://cs12.pikabu.ru/post_img/big/2021/02/05/10/16125462331396586.jpg" alt="" />
      <img id="#slide3" src="https://img2.akspic.ru/crops/8/6/7/4/6/164768/164768-cifrovoe_iskusstvo-artist-art-minimalizm-atmosfera-1920x1080.jpg" alt="" />
       <div className={styles.sliderNav}>
      <a href="#slide1">d</a>
      <a href="#slide2">d</a>
      <a href="#slide3">d</a>
    </div>
  </div>
    </div>
   
 </section>
  )
}

export default Carouselbox