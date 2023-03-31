import React from 'react'
import Link from '../UI/Link/Link'
import styles from './MainNav.module.css'

const MainNav = () => {
  return (
    <div className={styles.container}>
        <Link to='./design'>
        <button className={styles.btn}>
            Дизайрнеские обои
        </button>
        </Link>
    </div>
  )
}

export default MainNav