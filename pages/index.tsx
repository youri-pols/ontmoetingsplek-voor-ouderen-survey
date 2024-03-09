import Image from "next/image";
import { Inter } from "next/font/google";
import { TextField, Select } from "./components/fields";

const inter = Inter({ subsets: ["latin"] });

const options_age = [
    { value: "sixthy", label: "60 - 69 jaar" },
    { value: "seventy", label: "70 -79 jaar" },
    { value: "eighty", label: "80 jaar of ouder" },
];

const options_gender = [
    { value: "male", label: "Man" },
    { value: "female", label: "Vrouw" },
];

const options_province = [
    { value: "drenthe", label: "Drenthe" },
    { value: "flevoland", label: "Flevoland" },
    { value: "friesland", label: "Friesland" },
    { value: "gelderland", label: "Gelderland" },
    { value: "groningen", label: "Groningen" },
    { value: "limburg", label: "Limburg" },
    { value: "noord-brabant", label: "Noord-Brabant" },
    { value: "noord-holland", label: "Noord-Holland" },
    { value: "overijssel", label: "Overijssel" },
    { value: "utrecht", label: "Utrecht" },
    { value: "zeeland", label: "Zeeland" },
    { value: "zuid-holland", label: "Zuid-Holland" },
];

export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-4 lg:p-24 ${inter.className}`}>
            <div className="z-10 lg:max-w-3xl flex flex-col gap-6 text-center">
                <h1 className="text-2xl lg:text-4xl font-bold">Ontmoetingsplek voor ouderen</h1>
                <p className="text-sm lg:text-md">Voor een schooldracht werk ik aan een nieuw online platform om ouderen te verbinden. Met deze korte vragenlijst wil ik graag uw mening horen als oudere over hoe zo'n platform er idealiter uit zou moeten zien. Alvast bedankt voor uw tijd!</p>
                <form className="mt-6 flex flex-col text-left gap-6">
                    <div className="divider">
                        <h3 className="font-bold text-xl pb-3">Introductievragen</h3>
                        <div className="h-[1px] w-full bg-slate-800"></div>
                    </div>
                    <TextField name="social-contact" label={"1. Gebruikt u apps of websites voor sociale contacten? Zo ja, welke?"} />
                    <TextField name="how-contact" label={"2. Wat zijn op dit moment uw manieren om nieuwe mensen te ontmoeten?"} />
                    <div className="divider mt-6">
                        <h3 className="font-bold text-xl pb-3">Wensen</h3>
                        <div className="h-[1px] w-full bg-slate-800"></div>
                    </div>
                    <TextField name="preferences" label={"3. Wat vindt u prettig en wat vindt u lastig aan de manier waarop u nu sociale contacten onderhoudt?"} />
                    <TextField name="new-connections" label={"4. Stel dat u nieuwe mensen zou willen ontmoeten, wat zou u dan als eerste doen?"} />
                    <div className="divider mt-6">
                        <h3 className="font-bold text-xl pb-3">Gebruikersvriendelijkheid</h3>
                        <div className="h-[1px] w-full bg-slate-800"></div>
                    </div>
                    <TextField name="irritations" label={"5. Wat maakt een app of website gemakkelijk of moeilijk te gebruiken voor u?"} />
                    <TextField name="functions" label={"6. Wat voor functies zouden er volgens u zeker op zo'n ontmoetingsapp/-website moeten zitten? (Bijvoorbeeld chatfunctie, agenda, groepen, etc.)"} />
                    <div className="divider mt-6">
                        <h3 className="font-bold text-xl pb-3">Algemeen</h3>
                        <div className="h-[1px] w-full bg-slate-800"></div>
                    </div>
                    <TextField name="online-offline" label={"7. Zou u liever online of op locatie nieuwe mensen ontmoeten? Waarom?"} />
                    <TextField name="tips" label={"8. Heeft u verder nog ideeën, wensen of tips om zo'n nieuw ontmoetingsplatform aantrekkelijk en toegankelijk te maken voor ouderen?"} />

                    <Select label="9. Selecteer uw leeftijdscategorie" name="age" options={options_age} />

                    <Select label="10. Selecteer uw geslacht" name="gender" options={options_gender} />

                    <Select label="11. Selecteer uw provincie" name="province" options={options_province} />

                    <button className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">
                        Versturen
                    </button>
                </form>
            </div>
        </main>
    );
}
