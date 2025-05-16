import "./crawl.css";
import logoInv from "../../assets/logoInverted.png"
import {useEffect, useState} from "react";
import {CustomButton} from "../CustomButton/CustomButton.jsx";
import {Link} from "react-router-dom";
import {CrawlText} from "./CrawlText.jsx";

export const Crawl = () => {
    const [showAnime, setShowAnime] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnime(false);
        }, 63000);

        return () => clearTimeout(timer);
    }, []);

    return (<>
        {showAnime ? <CrawlText showAnime={showAnime} /> : (<>
            <img src={logoInv} alt="logoLK inverted"/>
            <div className="continue--button post-animation">
                <Link to="/rozcestnik">
                    <CustomButton buttonText="ROZCESTNÍK"/>
                </Link>
            </div>
        </>)}
    </>)
}