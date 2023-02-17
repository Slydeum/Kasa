import CssCard from '../Card/Card.module.css'
import { Link } from 'react-router-dom'

import React from 'react'

function Card({ id, cover, title, rating }) {
  return (
    <Link className={CssCard.linkCard} key={id} to={`lodgings/${id}`}>
      <div key={id} className={CssCard.card}>
        <img src={cover} alt={title} className={CssCard.cover} />
        <div className={CssCard.title}>{title}</div>
      </div>
    </Link>
  )
}

export default Card
