import "./header.css"
import hamMenu from "../../assets/menu.png"
import {CustomButton} from "../CustomButton/CustomButton.jsx";
import {useState} from "react";
import {MenuItems} from "../MenuItems/MenuItems.jsx";

export const Header = ({skipAnimation}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }
    return (<>
        <div className="navbar">
            {!skipAnimation ? <CustomButton buttonText={"Přeskočit"} />: null}
            <div className={`ham-menu ${menuOpen ? "menu" : "menu-closed"}`}
                 onClick={handleMenuOpen}>
                <img className="ham-menu_img " src={hamMenu} alt="hambrugerMenu"/>
                <MenuItems />
            </div>
            <div className="header">
                <MenuItems />
            </div>
        </div>
    </>)
}