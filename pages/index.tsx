import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-4 lg:p-24 ${inter.className}`}>
            <div className="z-10 lg:max-w-3xl flex flex-col gap-6 text-center">
                <h1 className="text-2xl lg:text-4xl font-bold">Ontmoetingsplek voor ouderen</h1>
                <p className="text-sm lg:text-md">Voor een schooldracht werk ik aan een nieuw online platform om ouderen te verbinden. Met deze korte vragenlijst wil ik graag uw mening horen als oudere over hoe zo'n platform er idealiter uit zou moeten zien. Alvast bedankt voor uw tijd!</p>
            </div>
        </main>
    );
}
