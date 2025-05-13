import "./form.css"
import {SelectForm} from "./FormElements/SelectForm.jsx";
import {InputForm} from "./FormElements/InputForm.jsx";
import {useState} from "react";
import {CustomButton} from "../CustomButton/CustomButton.jsx";

export const RSVPForm = () => {
    const [surname, setSurname] = useState("")
    const [prefSong, setPrefSong] = useState("")
    const [confirmAtd, setConfirmAtd] = useState("no");
    const [sleeping, setSleeping] = useState("no");
    const [carShare, setCarShare] = useState("no");
    const [name, setName] = useState("")
    const [note, setNote] = useState("")

    const sendData = async (guestinfo) => {
        const response = await fetch('https://script.google.com/macros/s/AKfycby5iWnHJOIeI9iaSuMc8b0ofjR8HzYDPbM_GE0tZa1GuzLvKyrAhKXBTqG6chMXb_4_/exec', {
            method: 'POST',
            body: guestinfo
        });
        const result = await response.text();
        console.log(result);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const guestInfo = new FormData()
        guestInfo.append("name", name);
        guestInfo.append("surname", surname);
        guestInfo.append("confirmAtd", confirmAtd);
        guestInfo.append("sleeping", sleeping);
        guestInfo.append("carShare", carShare);
        guestInfo.append("prefSong", prefSong);
        guestInfo.append("note", note);

        sendData(guestInfo);
        console.log(Object.fromEntries(guestInfo.entries()));

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
                            ]}/>

                <SelectForm setSelect={setSleeping}
                            options={[
                                {value: "noSleeping", text: "Nepotřebuji ubytování ze soboty na neděli"},
                                {value: "yesSleeping", text: "Potřebuji ubytování ze soboty na neděli"},
                                {
                                    value: "yesSleeping2",
                                    text: "Potřebuji ubytování na pátek i na sobotu...máte to daleko"
                                }]
                            }/>

                <SelectForm setSelect={setCarShare}
                            options={[
                                {value: "noCarShare", text: "Nepotřebuji domluvit dopravu do Kraslic"},
                                {value: "yesCarShare", text: "Potřebuji domluvit carshare do Kraslic"},
                                {
                                    value: "yesCarShareDriver",
                                    text: "Můžu někoho nabrat v Praze"
                                }]}/>

                <InputForm id="prfSong"
                           setInput={setPrefSong}
                           text="Písnička do playlistu, více odděluj středníkem 😉"
                           inputHeight={10}/>

                <InputForm id="note"
                           setInput={setNote}
                           text="Poznámka: cokoliv co tě napdane, oceníme i tipy, co bychom měli zařadit do programu a další 😊"
                           inputHeight={10}/>
                <div className="submit-button">
                    <CustomButton buttonText="Odeslat"/>
                </div>
            < /form>

        </>
    )
}