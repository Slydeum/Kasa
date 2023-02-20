// routes
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Lodging from '../pages/Lodgings/Lodgings'
import About from '../pages/About/About'
import Error from '../pages/Error/Error'

const routesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="lodgings/:id" element={<Lodging />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  )
}

export default routesConfig
