import React from 'react'
import './Mycard.css'
import { Link } from 'react-router-dom'

const Mycard = (props) => {
  return (
    <div className='mycard'>
        <div className="Mycard1">
            <h1 className='Mycard1Text'>{props.title}</h1>
        </div> 
        <div className="Mycard2">
            <p className='Mycard2Text'>
            Используем различные технологии нанесения изображений. В нашем арсенале немецкое оборудование, Итальянские технологии холодного трансфера и другие бесшовные покрытия.
            </p>
        </div>
        <div className="Mycard3">
            <Link to='/services'>
            <button className='Mycard3btn'>{props.btntext}</button>
            </Link>
        </div>
        
        </div>
  )
}

export default Mycard