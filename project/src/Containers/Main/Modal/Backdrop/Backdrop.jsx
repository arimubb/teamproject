import React from 'react'
import styles from './Backdrop.module.css'
import cn from 'clsx'

const Backdrop = ({ children, showBack }) => {
  return (
    <div
      className={cn(
        styles.back,
        showBack && styles.activeBack
      )}
    >
     {children}
    </div>
  )
}

export default Backdrop