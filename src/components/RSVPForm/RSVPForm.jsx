import "./form.css"
import {SelectForm} from "./FormElements/SelectForm.jsx";
import {InputForm} from "./FormElements/InputForm.jsx";
import {useState} from "react";
import {CustomButton} from "../CustomButton/CustomButton.jsx";

export const RSVPForm = ({setAnswers, isSubmitting}) => {
    const [surname, setSurname] = useState("")
    const [prefSong, setPrefSong] = useState("")
    const [confirmAtd, setConfirmAtd] = useState("yes");
    const [sleeping, setSleeping] = useState("noSleeping");
    const [carShare, setCarShare] = useState("noCarShare");
    const [name, setName] = useState("")
    const [note, setNote] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: name,
            surname: surname,
            confirmAtd: confirmAtd,
            carShare: carShare,
            sleeping: sleeping,
            prefSong: prefSong,
            note: note
        }

        isSubmitting(false);
        const url = "https://script.google.com/macros/s/AKfycbyYVlZeC58CwD294lTPdqy85oDUI7_Xmj57-pp_7vTZOoXWHh6ZPziMp7mjvqUxrrwo-Q/exec"
        //const urlEncodedData = new URLSearchParams(formData).toString();
        console.log(formData)
        const response = await fetch(url, {
                redirect: "follow",
                method: "POST",
                headers: {"Content-Type": "text/plain"},
                body: JSON.stringify(formData)
            }
        )
        if (!response.ok) {
            alert('Aj, karamba! Něco se pokazilo. Server se mnou nemluví 😢');
            return;
        }
        //const data = await response.json();
        console.log(formData);
        setAnswers(formData)


    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form--rsvp">
                <InputForm id="name" setInput={setName} text="Jméno" inputHeight={4}/>
                <InputForm id="surname" setInput={setSurname} text="Příjmení" inputHeight={4}/>

                <SelectForm setSelect={setConfirmAtd}
                            options={[
                                {value: "yes", text: "Chci být u toho"},
                                {value: "no", text: "Děkuji za pozvání, ale nedorazím"}
                            ]}
                            value="yes"/>

                <SelectForm setSelect={setSleeping}
                            options={[
                                {value: "noSleeping", text: "Nepotřebuji ubytování ze soboty na neděli"},
                                {value: "yesSleeping", text: "Potřebuji ubytování ze soboty na neděli"},
                                {
                                    value: "yesSleeping2",
                                    text: "Potřebuji ubytování na pátek i na sobotu...máte to daleko"
                                }]
                            }
                            value={sleeping}/>

                <SelectForm setSelect={setCarShare}
                            options={[
                                {value: "noCarShare", text: "Nepotřebuji domluvit dopravu do Kraslic"},
                                {value: "yesCarShare", text: "Potřebuji domluvit carshare do Kraslic"},
                                {
                                    value: "yesCarShareDriver",
                                    text: "Můžu někoho nabrat v Praze"
                                }]}
                            value={carShare}/>

                <InputForm id="prfSong"
                           setInput={setPrefSong}
                           text="Písnička do playlistu, více odděluj středníkem 😉"
                           inputHeight={4}/>

                <InputForm id="note"
                           setInput={setNote}
                           text="Poznámka: cokoliv co tě napdane, oceníme i tipy, co bychom měli zařadit do programu a další 😊"
                           inputHeight={4}/>
                <div className="submit-button">
                    <CustomButton buttonText="Odeslat" isSubmiting={isSubmitting}/>
                </div>
            < /form>

        </>
    )
}