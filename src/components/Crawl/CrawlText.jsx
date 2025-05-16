import "./crawl.css"
import logoInv from "../../assets/logoInverted.png";

export const CrawlText = ({showAnime}) => {
    return (
        <div className={`fade ${!showAnime ? 'fade-out' : ''}`}>
            <div className="fade">
            </div>
            <section className="star-wars">
                <div className="crawl">
                    <div className="title">
                        <p>Epizoda 1</p>
                        <h1>Nová budoucnost</h1>
                    </div>
                    <p>
                        Temné časy pro single život končí.
                        Lukáš a Kristýna se rozhodli
                        spojit své síly a říct sbohem samotě.
                        Vydávají se na dobrodružství,
                        které je silnější než jakákoli Temná strana.</p>

                    <p>6. září 2025 v Kraslicích nastane událost,
                        která rozvíří vesmír (minimálně ten náš) svatba!</p>

                    <p>Připravte si kapesníčky na slzy dojetí,
                        játra na přípitek,
                        břicha na smích
                        a vydejte se s námi oslavit začátek
                        nové epizody plné lásky a
                        radosti.
                        Připravte se na hvězdnou párty!</p>

                    <p className="always">May the Love be with you. Always.</p>
                    <p>
                    </p>
                    <img src={logoInv} alt="logoLK inverted"/>
                </div>
            </section>
        </div>)
}