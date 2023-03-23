import React from 'react'
import './context.css'
import first from "../../../../../public/imgKiro/first.png"
import krest from "../../../../../public/imgKiro/krest.png"
import ava from "../../../../../public/imgKiro/ava.png"



function Context({active, setActive}) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>
          <img className='imgModal' src={first} alt="" />
          <div className="modalText">
            <div className="SR">
              <h3 className='modalTitle'>Зеркальные тонирующие пленки серии SR PS</h3>
              <button onClick={() => setActive(false)} className='krest'><img src={krest} alt="" /></button>
            </div>
            <div className="ava">
              <img src={ava} />
              <div>
                <p className='seria'>Серия R GOLD</p>
                <p className='zerk'>Зеркальная пленка</p>
              </div>
              <span className='priceText'>
                  <p className='price'>552 ₽ /</p>
                  <p>м2</p>
                </span>
            </div>
            <span className='spanText'>
            <p className='opisanie'>Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.</p>
            </span>
          </div>
        </div>
    </div>
  )
}

export default Context