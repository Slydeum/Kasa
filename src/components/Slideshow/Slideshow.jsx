import React from 'react'
import { useState } from 'react'
import CssSlider from './Slideshow.module.css'
import Arrow from '../../assets/iconarrow.svg'

const Slideshow = (img) => {
  const [currentIndex, setCurrentIndex] = useState(0) // initialise l'index à 0

  const previousImg = () => {
    const isFirstImg = currentIndex === 0
    const newIndex = isFirstImg ? img.data.length - 1 : currentIndex - 1 // décrémente l'index
    setCurrentIndex(newIndex)
  }

  const nextImg = () => {
    const isLastImg = currentIndex === img.data.length - 1 //incrémente l'index
    const newIndex = isLastImg ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className={CssSlider.sliderContainer}>
      {img.data.length > 1 && (
        <>
          <img
            src={Arrow}
            alt="flêche vers la gauche"
            role="button"
            className={CssSlider.leftArrow}
            onClick={previousImg}
          />
          <img
            src={Arrow}
            alt="flêche vers la droite"
            role="button"
            className={CssSlider.rightArrow}
            onClick={nextImg}
          />
        </>
      )}
      <div className={CssSlider.imgContainer}>
        <img
          src={img.data[currentIndex]}
          alt="logement"
          className={CssSlider.imgSlider}
        />
      </div>
      <div className={CssSlider.numbers}>
        {img.data.length > 1 && (
          <p>{currentIndex + 1 + '/' + img.data.length}</p>
        )}
      </div>
    </div>
  )
}

export default Slideshow
