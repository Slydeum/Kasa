import React from 'react'
import CssBanner from './Banner.module.css'
import { useLocation } from 'react-router-dom'
import homeBannerImg from '../../assets/bannerhome.jpg'
import aboutBannerImg from '../../assets/bannerabout.jpg'

function Banner() {
  const path = useLocation().pathname // hook pour se situer
  const location = path.split('/')[1]

  return (
    // condition ternaire
    <div>
      {location === 'about' ? ( // si page "à propos"
        <section className={CssBanner.banner}>
          <div className={CssBanner.imgContainer}>
            <img
              src={aboutBannerImg}
              alt="montagnes enneigées"
              className={CssBanner.img}
            />
          </div>
        </section>
      ) : (
        // si autre page
        <section className={CssBanner.banner}>
          <div className={CssBanner.imgContainerHome}>
            <img
              src={homeBannerImg}
              alt="falaise bord de mer"
              className={CssBanner.img}
            />
            <h1 className={CssBanner.title}>Chez vous, partout et ailleurs</h1>
          </div>
        </section>
      )}
    </div>
  )
}

export default Banner
