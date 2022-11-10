import dalaranLogo from '../../assets/img/dalaran-shop-logo.png';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export default function NavBar(){
    return(
        <div className="navBar">
        <img className='dalaranLogo' src={dalaranLogo}/>   
        <nav>
            <ul>
                <li><a href='#'>Armas</a></li>
                <li><a href='#'>Trinkets</a></li>
                <li><a href='#'>Anillos</a></li>
                <li><a href='#'>Set</a></li>                
            </ul>
        </nav>
        <CartWidget/>

        </div>
    );

}