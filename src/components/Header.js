import headerStyle from './Header.module.css'
import icono from "../assets/icono-hamburguesa.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={headerStyle}>
            <Link to="/">
                <img src={icono} alt=''></img>
            </Link>
            <Link>
                <h1>Nombre hamburgueseria</h1>
            </Link>
        </header>
    );
};

export default Header;