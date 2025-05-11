import "./lightsaber.css"
import {Guidepost} from "../../pages/Guidepost/Guidepost.jsx";
import {OverlayGuidepost} from "../OverlayGuidepost/OverlayGuidepost.jsx";

export const Lightsaber = () => {
    return (
		<>
        <span className="c" id="blue"></span>
        <span className="c" id="red"></span>
        <span className="c" id="green"></span>
        <span className="c" id="purple"></span>
        <span className="c" id="yellow"></span>

        <div id="bg"></div>
        <h1 className="guide-heading">Rozcestník</h1>
        <div id="color_selector">
            <p><strong>Vyber si barvu světelného meče</strong></p>
            <ul>
                <li><a href="#blue"
                       className="blue">Blue</a></li>
                <li><a href="#red"
                       className="red">Red</a></li>
                <li><a href="#green"
                       className="green">Green</a></li>
                <li><a href="#purple"
                       className="purple">Purple</a></li>
            </ul>
            <p className="p_blue">Modrá: Tvoje umění se soustředí spíše na šerm než na ovládání Síly – stejně jako váš vztah, který je postavený na odvaze, věrnosti a ochotě bojovat jeden za druhého.</p>
            <p className="p_red">Červená: Studoval jsi techniky temné strany Síly? – Snad jen proto, abys nás varoval, čemu se v manželství vyhnout. Brzy začínáme svou společnou cestu ve světle.</p>
            <p className="p_green">Zelená: Dáváš přednost umění Síly před technikami boje mečem. A právě proto víš, že láska, trpělivost a vnitřní rovnováha jsou silnější než jakákoliv zbraň. </p>
            <p className="p_purple">Fialová: Znáš mnoho technik jak ze světlé, tak z temné strany Síly. A právě tahle rovnováha tě činí silným. Stejně jako v manželství – nejde o dokonalost, ale o sílu jít společně dál.</p>
        </div>

        <div id="lightsaber">
			<OverlayGuidepost />
            <span id="light"></span>
            <span id="generator">
				<span id="guard">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</span>
				<span id="handlestart">
					<span></span>
					<span></span>
				</span>
				<span id="handle">
					<span></span>
					<span></span>
					<span></span><span></span>
					<span></span><span></span>
					<span></span><span></span>
					<span></span><span></span>
					<span></span><span></span>
					<span></span><span></span>
					<span></span><span></span>
					<span></span><span></span>
					<span className="long"></span>
					<span className="long"></span>
					<span className="box"></span>
				</span>
				<span className="wings">
					<span className="wing wing1"></span>
					<span className="wing wing2"></span>
					<span className="wing wing3"></span>
				</span>

				<span className="light"></span>
			</span>
        </div>
    </>)
}