import './header.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header id='header'>
            <Link to='/'><h3>Cineverse</h3></Link>
            <Link to='/favoritos' className='btnFavoritos'>favoritos</Link>
        </header>
    )
}
