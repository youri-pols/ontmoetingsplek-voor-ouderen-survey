const { Client } = require("@notionhq/client");

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

const currentDateTime = new Date();

const jaar = currentDateTime.getFullYear();
const maand = String(currentDateTime.getMonth() + 1).padStart(2, "0");
const dag = String(currentDateTime.getDate()).padStart(2, "0");
const datumFormatted = `${dag}-${maand}-${jaar}`;

const uren = String(currentDateTime.getHours()).padStart(2, "0");
const minuten = String(currentDateTime.getMinutes()).padStart(2, "0");
const seconden = String(currentDateTime.getSeconds()).padStart(2, "0");
const tijdFormatted = `${uren}:${minuten}:${seconden}`;

const dateTimeFormatted = `${datumFormatted} ${tijdFormatted}`;

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: `${req.method} requests are not allowed` });
    }
    try {
        const { age, gender, province, socialContact, howContact, preferences, newConnections, irritations, functions, onlineOffline, tips } = JSON.parse(req.body);
        let content =
            "1. Gebruikt u apps of websites voor sociale contacten? Zo ja, welke?: " +
            socialContact +
            "\n" +
            "2. Wat zijn op dit moment uw manieren om nieuwe mensen te ontmoeten?: " +
            howContact +
            "\n" +
            "3. Wat vindt u prettig en wat vindt u lastig aan de manier waarop u nu sociale contacten onderhoudt?: " +
            preferences +
            "\n" +
            "4. Stel dat u nieuwe mensen zou willen ontmoeten, wat zou u dan als eerste doen?: " +
            newConnections +
            "\n" +
            "5. Wat maakt een app of website gemakkelijk of moeilijk te gebruiken voor u?: " +
            irritations +
            "\n" +
            "6. Wat voor functies zouden er volgens u zeker op zo'n ontmoetingsapp/-website moeten zitten? (Bijvoorbeeld chatfunctie, agenda, groepen, etc.): " +
            functions +
            "\n" +
            "7. Zou u liever online of op locatie nieuwe mensen ontmoeten? Waarom?: " +
            onlineOffline +
            "\n" +
            "8. Heeft u verder nog ideeën, wensen of tips om zo'n nieuw ontmoetingsplatform aantrekkelijk en toegankelijk te maken voor ouderen?: " +
            tips +
            "\n" +
            "9. Selecteer uw leeftijdscategorie: " +
            age +
            "\n" +
            "10. Selecteer uw geslacht" +
            gender +
            "\n" +
            "11. Selecteer uw provincie: " +
            province;
        await notion.pages.create({
            parent: {
                database_id: process.env.NOTION_DATABASE_ID,
            },
            properties: {
                ID: {
                    title: [
                        {
                            text: {
                                content: dateTimeFormatted,
                            },
                        },
                    ],
                },
                Inhoud: {
                    rich_text: [
                        {
                            text: {
                                content: content,
                            },
                        },
                    ],
                },
            },
        });
        res.status(201).json({ msg: "Success" });
    } catch (error) {
        res.status(500).json({ msg: "There was an error" });
    }
}
