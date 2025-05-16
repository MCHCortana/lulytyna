import "./guitepost.css"
import {Header} from "../../components/Header/Header.jsx";
import {Lightsaber} from "../../components/Lightsaber/Lightsaber.jsx";

export const Guidepost = () => {
    return (
        <section className="guide-post">
            <Header skipAnimation={true}/>
            <Lightsaber />
        </section>)

}