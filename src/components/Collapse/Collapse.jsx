import React from 'react'
import { useState } from 'react' // hook useState
import CssCollapse from './Collapse.module.css'
import Arrow from '../../assets/iconarrow.svg'

function Collapse({ title, text }) {
  const [arrowUp, setArrowUp] = useState(false)

  return arrowUp ? ( // si flêche vers haut
    <div className={CssCollapse.collapseContainer}>
      <div className={CssCollapse.title} onClick={() => setArrowUp(false)}>
        {title}
        <img
          src={Arrow}
          className={CssCollapse.iconUp}
          alt="flêche vers le haut"
          role="button"
        />
      </div>
      <div className={CssCollapse.text}>{text}</div>
    </div>
  ) : (
    // si flêche vers bas
    <div className={CssCollapse.collapseContainer}>
      <div className={CssCollapse.title} onClick={() => setArrowUp(true)}>
        {title}
        <img
          src={Arrow}
          className={CssCollapse.iconDown}
          alt="flêche vers le bas"
          role="button"
        />
      </div>
    </div>
  )
}

export default Collapse
