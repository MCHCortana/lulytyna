import {Header} from "../../components/Header/Header.jsx";
import {RSVPForm} from "../../components/RSVPForm/RSVPForm.jsx";
import "./rsvp.css"
import {useState} from "react";

export const RSVP = () => {

    return (
        <>
            <Header skipAnimation={true}/>

            <section className="rsvp">

                <h2>vážení hosté,</h2>
                <p>Síly Světlé strany a Lásky se chystají spojit v jeden vesmírný celek.</p>
                <p><strong>Pomoz mi, Obi-Wane Kenobi, jsi má jediná naděje</strong></p>
                <p> Vaše přítomnost je klíčová k rovnováze v galaxii – ale nejdřív potřebujeme vědět, zda dorazíte!</p>
                <p><strong>📆 Deadline:</strong> Vyplňte prosím formulář do 15. 6. – čím dříve, tím lépe. Hyperprostorová
                    logistika se
                    neptá!</p>
                <p><strong>👥 Jeden host = jeden záznam:</strong> Každý pozvaný (včetně +1) by měl vyplnit formulář
                    zvlášť. Dva hosté =
                    dva záznamy.</p>
                <p><strong>🛏️ Nocleh na základně:</strong> Potřebujete ubytování? Dejte vědět, rezervujeme kajuty.</p>
                <p><strong>🚗 Doprava: </strong>Máte volné místo v lodi? Nebo potřebujete odvoz z planety Země?</p>
                <p><strong>🎵 Hudební přání:</strong> Máte oblíbenou písničku, co by měla zaznít v kantýně? Napište nám
                    ji!</p>


                <RSVPForm />

            </section>
        </>
    )
}