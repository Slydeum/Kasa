import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Error from '../Error/Error'
import housingsService from '../../services/housingsService'
import CssLodgings from './Lodgings.module.css'
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from '../../components/Collapse/Collapse'
import StarFull from '../../assets/fullstar.png'
import StarEmpty from '../../assets/emptystar.png'

const Lodging = () => {
  const urlId = useParams().id // récupération de l'id dans l'url
  const data = housingsService.getById(urlId) // importation des données du fichier logements.json
  const [dataLodging, setdataLodging] = useState({
    // state des données que l'on voudra observer et afficher
    id: '',
    title: '',
    cover: '',
    pictures: [],
    description: '',
    host: { name: '', picture: '' },
    rating: '',
    equipments: [],
    location: '',
    tags: [],
  })

  useEffect(() => {
    // obervation des données du state
    const pushDataLodging = async () => {
      let found = data.find((host) => host.id === urlId) // comparaison de l'id des données avec celui de l'url
      await setdataLodging(found) // afin de récuperer les données associées à l'id
    }
    pushDataLodging()
  })

  if (dataLodging === undefined) {
    // on retourne la page Error404 si les données son incorrectes
    return <Error />
  }

  const rateStar = []
  for (let s = 1; s <= 5; s++) {
    if (s <= dataLodging.rating) {
      rateStar[s] = true
    } else {
      rateStar[s] = false
    }
  }

  const name = dataLodging.host.name.split(' ') // on sépare le nom du prénom dans les données

  return (
    <div className="mainContainer">
      <div className="container">
        <Header />
        {dataLodging && (
          <section>
            <Slideshow data={dataLodging.pictures} />
            <div className={CssLodgings.hostContainer}>
              <div className={CssLodgings.leftContainer}>
                <div className={CssLodgings.title}>{dataLodging.title}</div>
                <div className={CssLodgings.location}>
                  {dataLodging.location}
                </div>
                <div className={CssLodgings.tagsContainer}>
                  {dataLodging.tags.map((tags) => (
                    <div className={CssLodgings.tag} key={tags + urlId}>
                      {tags}
                    </div>
                  ))}
                </div>
              </div>
              <div className={CssLodgings.rightContainer}>
                <div className={CssLodgings.hostInfos}>
                  <div className={CssLodgings.hostName}>
                    {name[0]} <br></br> {name[1]}
                  </div>
                  <div className={CssLodgings.pictContainer}>
                    <img
                      className={CssLodgings.hostPicture}
                      src={dataLodging.host.picture}
                      alt="hebergeur"
                    />
                  </div>
                </div>
                <div className={CssLodgings.starsContainer}>
                  {rateStar.map((stars, index) => (
                    <img
                      key={stars + urlId + index}
                      className={CssLodgings.starPicture}
                      src={stars ? StarFull : StarEmpty}
                      alt={stars ? 'red star' : 'grey star'}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={CssLodgings.collapseHostContainer}>
              <Collapse title="Description" text={dataLodging.description} />
              <Collapse
                title="Équipements"
                text={dataLodging.equipments.map((equipement, index) => (
                  <div key={index}>{equipement}</div>
                ))}
              />
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Lodging
