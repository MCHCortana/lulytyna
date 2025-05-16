import "./info.css"
import {Header} from "../../components/Header/Header.jsx";
import {CustomButton} from "../../components/CustomButton/CustomButton.jsx";
import pin from "../../assets/location.png"
import dress from "../../assets/bridal-shower.png"
import gift from "../../assets/surprise.png"
import bed from "../../assets/double-bed.png"
import rsvp from "../../assets/rsvp.png"
import age from "../../assets/age.png"
import {Link} from "react-router-dom";

export const InfoPage = () => {

    return (
        <>
            <Header skipAnimation={true}/>
            <div className="general--info">
                <div className="karesovi">
                    <h2>jak to bude probíhat</h2>
                </div>
                <div>
                    <h3><img src={pin} alt="location pin"/> místo</h3>
                    <p>
                        Celý den strávíme společně na chatě Stříbrný potok.
                        Obřad se odehraje u rybníčku, který obklopuje nádherná zeleň – takže pokud můžete, přibalte s
                        sebou
                        trochu slunečného počasí! ☀️
                        Po svatebním slibu se přesuneme do salonku s terasou, kde na nás čeká pohodová atmosféra,
                        výborné
                        jídlo, pití a večerní veselí.
                        A protože tušíme, že se nám nebude chtít hned domů, nabízíme možnost ubytování přímo na místě
                        pro
                        ty, kdo by rádi zůstali až do rána.
                    </p>
                </div>
                <div>

                    <h3><img src={dress} alt="dress code"/> dress code</h3>
                    <p>
                        Nalaďme se společně do barev, které máme rádi – růžová a zelená. Nemusí to být nic přehnaného,
                        ale
                        budeme rádi, když barvy promítnete do svých outfitů.
                    </p>
                    <div className="theme-colors">
                        <div className="theme-colors-c"></div>
                        <div className="theme-colors-c"></div>
                        <div className="theme-colors-c"></div>
                        <div className="theme-colors-c"></div>
                        <div className="theme-colors-c"></div>
                        <div className="theme-colors-c"></div>
                    </div>

                </div>
                <div>
                    <h3><img src={gift} alt="gift"/> dary</h3>
                    <p>
                        Váš příchod je pro nás největší dárek. Pokud byste nás přece jen chtěli podpořit i jinak,
                        oceníme finanční příspěvek – svatební truhlička bude připravená na místě.
                    </p>
                </div>
                <div>
                    <h3><img src={age} alt="age"/> bez ratolestí</h3>
                    <p>
                        Máme vás i vaše děti rádi, ale tentokrát vás prosíme – nechte ratolesti doma a přijďte si užít
                        den bez starostí.
                    </p>
                </div>
                <div>

                    <h3><img src={bed} alt="bed"/> ubytování</h3>
                    <p>
                        Pokud víte, že budete chtít zůstat přes noc, dejte nám prosím vědět. Postaráme se o to, abyste
                        měli
                        kde
                        složit hlavu a ráno se probudili s výhledem do lesa.
                    </p>
                </div>
                <div>
                    <h3><img src={rsvp} alt="rsvp"/> rsvp</h3>
                    <p>
                        Prosíme, nezapomeňte vyplnit sekci RSVP.
                        Je to pro nás klíčové, abychom vše mohli připravit přesně podle vašich potřeb – účast,
                        ubytování, strava apod.
                    </p>
                    <Link to="/rsvp">
                        <CustomButton buttonText="RSVP"/>
                    </Link>
                </div>
            </div>
        </>
    )
}