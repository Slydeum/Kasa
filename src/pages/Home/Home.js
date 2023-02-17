import React from 'react'
import Banner from '../../components/Banner/Banner'
import Cards from '../../components/Cards/Cards'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import housingsService from '../../services/housingsService'

const Home = () => {
  return (
    <div className="mainContainer">
      <div className="container">
        <Header />
        <Banner />
        <Cards data={housingsService.getAll()} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
