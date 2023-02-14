import {useContext} from 'react';
import FavoriteContext from '../contexts/favoriteContext';
import '../style/Navbar.css'

export const Navbar = () => {
    const {favoritePokemons} = useContext(FavoriteContext);

    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return(
        <nav className='navbar'>
            <div />
            <div>
            <img src={imgUrl} alt="pokeapi-logo"
            className="logo-pokeapi"
            >
            </img>
            </div>
            <div className='favorite-counter'>💖 {favoritePokemons.length}</div>
        </nav>
    )
}

