import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/info">
                    <li>More info</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;