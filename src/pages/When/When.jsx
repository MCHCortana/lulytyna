import "./when.css"
import {CountdownTimer} from "../../components/CountDown/CountdownTimer.jsx";
import {Header} from "../../components/Header/Header.jsx";
import rings from "./../../assets/rings.png"


export const When = () => {
    const targetDate = "2025-09-06T11:00:00";
    return (
        <>
            <Header skipAnimation={true}/>
            <div className="when">
                <div className="karesovi">
                    <p>karešovi</p>
                    <p>6.9.2025</p></div>
                <img src={rings} alt={"rings"}/>
                <p>už za</p>
                <CountdownTimer targetDate={targetDate}/>
            </div>
        </>
    );
};