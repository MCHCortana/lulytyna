import "./formSubmitted.css"
import {useEffect} from "react";

export const FormSubmitted = ({answers}) => {
    console.log(answers + "form");
    return (
        <>
            <section className="formSubmitted">

                {answers.confirmAtd == undefined ? (<h3>odesílám ... </h3>): (
                    answers.confirmAtd === "yes" ? (
                        <h2>💜 Máme radost, že budeš s námi 💜</h2>
                    ) : (
                        <h2>Škoda, pošleme fotky 📸</h2>
                    )
                )}
            </section>
        </>
    )
}