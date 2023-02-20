import { Link } from 'react-router-dom' // permet la naviguation
import Logo from '../../assets/logoHeader.svg'
import CssHeader from './Header.module.css'

function Header() {
  return (
    <header className={CssHeader.header}>
      <img src={Logo} alt="Logo Kasa" className={CssHeader.logoHeader} />
      <nav className={CssHeader.navHeader}>
        <Link to="/" className={CssHeader.navHome}>
          Accueil
        </Link>
        <Link to="/about" className={CssHeader.navAbout}>
          À propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
