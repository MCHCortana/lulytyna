import "./where.css"
import {Header} from "../../components/Header/Header.jsx";
import map from "../../assets/map.png"
import where from "../../assets/CHSP.jpeg"


export const Where = () => {
    return (
        <>
            <Header skipAnimation={true}/>
            <div className="where">
                <h1>kraslice</h1>
                <section className="where--info">
                    {/*<h2>CHATA STŘÍBRNÝ POTOK</h2>*/}
                    <div className="where--address">
                        {/*<img src={pin} alt={"location pin"}/>*/}
                        <div className="where--address_text">
                            <p>Chata Stříbrný Potok</p>
                            <p>Stříbrná č.ev.717</p>
                            <p>Kraslice</p>
                        </div>
                        <a href="https://mapy.com/s/fobokezune" target="_blank" rel="noopener noreferrer"><img id="where--map" src={map} alt="map-link"/></a>
                    </div>
                    <div className="where--address_text">
                        <img src={where} alt="chata-stribrny-potok"/>
                        <p>Obřad proběhne u krásného rybníčku, obklopeného zelení – tak na nás, prosím, myslete, až
                            budete objednávat počasí! 🌤
                            Po „ano“ se přesuneme do salonku s terasou, kde nás čeká dobré jídlo, pití, tanec a večerní
                            zábava.

                            A protože víme, že bude veselo, těm, kteří budou potřebovat, nabízíme možnost přenocování
                            přímo na místě.</p>
                    </div>
                </section>
            </div>
        </>
    )
}