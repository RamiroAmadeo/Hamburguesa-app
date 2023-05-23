import NavbarStyles from "./Navbar.module.css"
import icono from "../assets/icono-hamburguesa.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                <img src={icono} alt=""></img>
            </Link>
            <ul className={NavbarStyles.ul}>
                <Link to="/menu">
                    <li className={NavbarStyles.links}>Menu</li>
                </Link>
                <Link to="/locales">
                    <li className={NavbarStyles.links}>Locales</li>
                </Link>
                <Link to="/contacto">
                    <li className={NavbarStyles.links}>Contacto</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;