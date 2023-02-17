// routes
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Housing from '../pages/Housings/Housings'
import About from '../pages/About/About'
import Error from '../pages/Error/Error'

const routesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="housings/:id" element={<Housing />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  )
}

export default routesConfig
