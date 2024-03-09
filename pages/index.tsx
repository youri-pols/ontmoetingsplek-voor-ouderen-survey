import Image from "next/image";
import { Inter } from "next/font/google";
import { TextField, Select } from "./components/fields";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const inter = Inter({ subsets: ["latin"] });

const options_age = [
    { value: "60 - 69", label: "60 - 69 jaar" },
    { value: "70 - 79", label: "70 -79 jaar" },
    { value: "80 of ouder", label: "80 jaar of ouder" },
];

const options_gender = [
    { value: "Man", label: "Man" },
    { value: "Vrouw", label: "Vrouw" },
];

const options_province = [
    { value: "Drenthe", label: "Drenthe" },
    { value: "Flevoland", label: "Flevoland" },
    { value: "Friesland", label: "Friesland" },
    { value: "Gelderland", label: "Gelderland" },
    { value: "Groningen", label: "Groningen" },
    { value: "Limburg", label: "Limburg" },
    { value: "Noord-brabant", label: "Noord-Brabant" },
    { value: "Noord-holland", label: "Noord-Holland" },
    { value: "Overijssel", label: "Overijssel" },
    { value: "Utrecht", label: "Utrecht" },
    { value: "Zeeland", label: "Zeeland" },
    { value: "Zuid-holland", label: "Zuid-Holland" },
];

export default function Home() {
    // Input states
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [province, setProvince] = useState("");
    const [socialContact, setSocialContact] = useState("");
    const [howContact, setHowContact] = useState("");
    const [preferences, setPreferences] = useState("");
    const [newConnections, setNewConnections] = useState("");
    const [irritations, setIrritations] = useState("");
    const [functions, setFunctions] = useState("");
    const [onlineOffline, setOnlineOffline] = useState("");
    const [tips, setTips] = useState("");

    // Form submit handler
    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch("http://localhost:3000/api/submit-form", {
            method: "POST",
            body: JSON.stringify({ age, gender, province, socialContact, howContact, preferences, newConnections, irritations, functions, onlineOffline, tips }),
        });
        if (res.status === 201) {
            toast("Thank you for contacting us!", { type: "success" });
        } else {
            toast("Please re-check your inputs.", { type: "error" });
        }
    };

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-4 lg:p-24 ${inter.className}`}>
            <div className="z-10 lg:max-w-3xl flex flex-col gap-6 text-center">
                <h1 className="text-2xl lg:text-4xl font-bold">Ontmoetingsplek voor ouderen</h1>
                <p className="text-sm lg:text-md">Voor een schooldracht werk ik aan een nieuw online platform om ouderen te verbinden. Met deze korte vragenlijst wil ik graag uw mening horen als oudere over hoe zo‘n platform er idealiter uit zou moeten zien. Alvast bedankt voor uw tijd!</p>
                <form className="mt-6 flex flex-col text-left gap-6" onSubmit={submitForm}>
                    <div className="divider">
                        <h3 className="font-bold text-xl pb-3">Introductievragen</h3>
                        <div className="h-[1px] w-full bg-slate-800"></div>
                    </div>
                    <TextField name="social-contact" value={socialContact} onChange={(newValue) => setSocialContact(newValue)} label={"1. Gebruikt u apps of websites voor sociale contacten? Zo ja, welke?"} />
                    <TextField name="how-contact" value={howContact} onChange={(newValue) => setHowContact(newValue)} label={"2. Wat zijn op dit moment uw manieren om nieuwe mensen te ontmoeten?"} />
                    <div className="divider mt-6">
                        <h3 className="font-bold text-xl pb-3">Wensen</h3>
                        <div className="h-[1px] w-full bg-slate-800"></div>
                    </div>
                    <TextField name="preferences" value={preferences} onChange={(newValue) => setPreferences(newValue)} label={"3. Wat vindt u prettig en wat vindt u lastig aan de manier waarop u nu sociale contacten onderhoudt?"} />
                    <TextField name="new-connections" value={newConnections} onChange={(newValue) => setNewConnections(newValue)} label={"4. Stel dat u nieuwe mensen zou willen ontmoeten, wat zou u dan als eerste doen?"} />
                    <div className="divider mt-6">
                        <h3 className="font-bold text-xl pb-3">Gebruikersvriendelijkheid</h3>
                        <div className="h-[1px] w-full bg-slate-800"></div>
                    </div>
                    <TextField name="irritations" value={irritations} onChange={(newValue) => setIrritations(newValue)} label={"5. Wat maakt een app of website gemakkelijk of moeilijk te gebruiken voor u?"} />
                    <TextField name="functions" value={functions} onChange={(newValue) => setFunctions(newValue)} label={"6. Wat voor functies zouden er volgens u zeker op zo'n ontmoetingsapp/-website moeten zitten? (Bijvoorbeeld chatfunctie, agenda, groepen, etc.)"} />
                    <div className="divider mt-6">
                        <h3 className="font-bold text-xl pb-3">Algemeen</h3>
                        <div className="h-[1px] w-full bg-slate-800"></div>
                    </div>
                    <TextField name="online-offline" value={onlineOffline} onChange={(newValue) => setOnlineOffline(newValue)} label={"7. Zou u liever online of op locatie nieuwe mensen ontmoeten? Waarom?"} />
                    <TextField name="tips" value={tips} onChange={(newValue) => setTips(newValue)} label={"8. Heeft u verder nog ideeën, wensen of tips om zo'n nieuw ontmoetingsplatform aantrekkelijk en toegankelijk te maken voor ouderen?"} />

                    <Select label="9. Selecteer uw leeftijdscategorie" name="age" options={options_age} value={age} onChange={(e) => setAge(e.target.value)} />

                    <Select label="10. Selecteer uw geslacht" name="gender" options={options_gender} value={gender} onChange={(e) => setGender(e.target.value)} />

                    <Select label="11. Selecteer uw provincie" name="province" options={options_province} value={province} onChange={(e) => setProvince(e.target.value)} />

                    <button className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">
                        Versturen
                    </button>
                </form>
            </div>
        </main>
    );
}
