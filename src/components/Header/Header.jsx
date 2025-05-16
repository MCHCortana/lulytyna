import "./header.css"
import hamMenu from "../../assets/menu.png"
import {CustomButton} from "../CustomButton/CustomButton.jsx";
import {useState} from "react";
import {MenuItems} from "../MenuItems/MenuItems.jsx";
import {Link} from "react-router-dom";

export const Header = ({skipAnimation}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }
    return (<>
        <div className="navbar">
            {!skipAnimation ? (<Link to="/info">
                    <CustomButton buttonText={"Přeskočit"}/>
                </Link>)
                : null}
            <div className={`ham-menu ${menuOpen ? "menu" : "menu-closed"}`}
                 onClick={handleMenuOpen}>
                <img className="ham-menu_img " src={hamMenu} alt="hambrugerMenu"/>
                <MenuItems/>
            </div>
            <div className="header">
                <MenuItems/>
            </div>
        </div>
    </>)
}