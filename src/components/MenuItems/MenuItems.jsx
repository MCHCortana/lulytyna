import "./menuItems.css"
import {Link} from "react-router-dom";

export const MenuItems = () => {
    return (
        < div className="menu-items">
            <Link to="/rozcestnik">
                <p className="menu-item"> Rozcestník </p>
            </Link>
            <Link to="/kdy">
                <p className="menu-item"> Kdy</p>
            </Link>
            <Link to="/kde">
                <p className="menu-item"> Kde</p>
            </Link>
            <Link to="/info">
            <p className="menu-item">Informace</p>
            </Link>
            <Link to="/RSVP">
                <p className="menu-item"> RSVP</p>
            </Link>
        </div>)
}