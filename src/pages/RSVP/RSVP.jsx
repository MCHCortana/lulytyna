import {Header} from "../../components/Header/Header.jsx";
import {RSVPForm} from "../../components/RSVPForm/RSVPForm.jsx";
import "./rsvp.css"
import {useState} from "react";
import {FormSubmitted} from "../../components/FormSubmitted/FormSubmitted.jsx";

export const RSVP = () => {
    const [answers, setAnswers] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(true)


    return (
        <>
            <Header skipAnimation={true}/>

            <section className="rsvp">

                <h2>vážení hosté,</h2>
                <p>Chystá se velká akce!</p>
                <p><strong>Potřebujeme vědět, jestli dorazíš!</strong>
                    Bez tebe to prostě nebude ono. Dej nám prosím vědět, že s tebou můžeme počítat.</p>
                <p><strong>📆 Deadline:</strong> Formulář prosíme vyplnit do 15. června.
                    Čím dřív, tím méně stresu v našem plánovacím centru!</p>
                <p><strong>👥 Každý zvlášť:</strong>Jsi pozvaný ty a tvůj doprovod. Jen vás poprosíme, ať každý vyplní
                    formulář zvlášť.
                    Dva lidé = dvě odpovědi.
                </p>
                <p><strong>🛏 Nocleh:</strong> Potřebuješ někde složit hlavu? Dej vědět, rezervujeme ti místo!</p>
                <p><strong>🚗 Doprava: </strong>Máš volné místo v autě nebo hledáš odvoz? Dej nám vědět, rádi vás
                    propojíme.</p>
                <p><strong>🎵 Hudební přání:</strong> Máte oblíbenou písničku, co by měla zaznít v kantýně? Napište nám
                    ji!</p>

                {isSubmitting ? <RSVPForm setAnswers={setAnswers} isSubmitting={setIsSubmitting}/> :
                    <FormSubmitted answers={answers}/>}


            </section>
        </>
    )
}