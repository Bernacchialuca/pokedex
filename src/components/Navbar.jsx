import logopokeapi from '../img/pokeapi.svg'
import '../style/Navbar.css'

export const Navbar = () => {
 
  return (
    <nav className='navbar'>
      <div/>
      <div>
        <img className='logo-pokeapi' src={logopokeapi}></img>
      </div>
      <div/>
    </nav>
  )
} 