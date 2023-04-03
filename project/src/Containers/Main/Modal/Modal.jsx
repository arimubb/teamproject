import React from 'react'
import './Modal.css'
import Link from '../../../Components/UI/Link/Link'

const Modal = ({active, setActive , children }) => {
  return (
<div className={active ? "modal active" : "modal"} onClick={() => setActive(false) }>
   <div className={active ? "modal__content active" : "modal"} onClick={e => e.stopPropagation()}>
       <div className="firstBlockPopup">  
         <img className='popupImage' src={children} alt="" />
       </div>
       <div className="secondBlockPopup">
         <h3 className='titlePopup'>
         Жилые помещения
         </h3>
         <p className='textPopup'>
         Разнообразный и богатый опыт говорит нам, что внедрение современных методик представляет собой интересный эксперимент проверки кластеризации усилий. Предварительные выводы неутешительны: базовый вектор развития создаёт предпосылки для дальнейших направлений развития. Не следует, однако, забывать, что граница обучения кадров прекрасно подходит для реализации своевременного выполнения сверхзадачи. Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач. 
         </p>
         <Link to="/services">
            <button className='btnPopup'>Перейти в каталог коллекции</button>
         </Link>
       </div>
   </div>
</div>
   )
}

export default Modal