import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import CssError from './Error.module.css'

const Error = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        <Header />
        <div className={CssError.error}>
          <h1 className={CssError.h1error}>404</h1>
          <p className={CssError.perror}>
            Oups ! La page que vous demandez n'existe pas.
          </p>
          <Link to="/" className={CssError.aerror}>
            Retourner sur la page d'accueil
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Error
