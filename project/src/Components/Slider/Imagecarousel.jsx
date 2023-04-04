import React from 'react'
import Mycard from './Mycard.jsx'
import './Imagecarousel.css'
const Imagecarousel = () => {
    
    let box = document.querySelector('.product-container');
    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width);
    }
    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width);
    }



  return (
    <div className='product-carousel'>
        <div className="product-btns">
            <button className='pre-btn' onClick={btnpressprev}><p>&lt;</p></button>
        <button className='next-btn' onClick={btnpressnext}><p>&gt;</p></button>
        </div>
        


        <div className="product-container">
<Mycard btntext='Узнать подробнее' title='Художественное оформление вертикальных поверхностей'/>
<Mycard btntext='Перейти' title='Дизайнерские обои для дома и бизнеса' />
<Mycard btntext='Перейти далее' title='Ваши стены - наш мольберт'/>



        </div>
    </div>
  )
}

export default Imagecarousel