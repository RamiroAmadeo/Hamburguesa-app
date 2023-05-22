import headerStyle from './Header.module.css'
import icono from "../assets/icono-hamburguesa.png"

const Header = () => {
    return (
        <header className={headerStyle}>
            <img src={icono}></img>
            <h1>Nombre hamburgueseria</h1>
        </header>
    );
};

export default Header;