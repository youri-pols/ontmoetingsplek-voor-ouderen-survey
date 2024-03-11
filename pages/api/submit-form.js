// Import Notion client to save data
const { Client } = require("@notionhq/client");

// Initialize the Notion client with authentication
const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

// Get the current date and time
const currentDateTime = new Date();

// Extract and format the current date components
const year = currentDateTime.getFullYear();
const month = String(currentDateTime.getMonth() + 1).padStart(2, "0");
const day = String(currentDateTime.getDate()).padStart(2, "0");
const dateFormatted = `${day}-${month}-${year}`;

// Extract and format the current time components
const hours = String(currentDateTime.getHours()).padStart(2, "0");
const minutes = String(currentDateTime.getMinutes()).padStart(2, "0");
const seconds = String(currentDateTime.getSeconds()).padStart(2, "0");
const timeFormatted = `${hours}:${minutes}:${seconds}`;

const dateTimeFormatted = `${dateFormatted} ${timeFormatted}`;

// Define an async function to handle requests
export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: `${req.method} requests are not allowed` });
    }
    try {
        const { age, gender, province, socialContact, howContact, preferences, newConnections, irritations, functions, onlineOffline, tips } = JSON.parse(req.body);

        // Concatenate the form responses into a single string
        let content =
            "1. Gebruikt u apps of websites voor sociale contacten? Zo ja, welke?: " +
            socialContact +
            "\n" +
            "2. Wat maakt een app of website gemakkelijk of moeilijk te gebruiken voor u?: " +
            irritations +
            "\n" +
            "3. Wat zijn op dit moment uw manieren om nieuwe mensen te ontmoeten?: " +
            howContact +
            "\n" +
            "4. Wat vindt u prettig en wat vindt u lastig aan de manier waarop u nu sociale contacten onderhoudt?: " +
            preferences +
            "\n" +
            "5. Stel dat u nieuwe mensen zou willen ontmoeten, wat zou u dan als eerste doen?: " +
            newConnections +
            "\n" +
            "6. Zou u liever online of op locatie nieuwe mensen ontmoeten? Waarom?: " +
            onlineOffline +
            "\n" +
            "7. Wat voor functies zouden er volgens u zeker op een ontmoetingsapp/-website moeten zitten? (Bijvoorbeeld chatfunctie, agenda, groepen, etc.): " +
            functions +
            "\n" +
            "8. Heeft u verder nog ideeën, wensen of tips om zo'n nieuw ontmoetingsplatform aantrekkelijk en toegankelijk te maken voor ouderen?: " +
            tips +
            "\n" +
            "9. Selecteer uw leeftijdscategorie: " +
            age +
            "\n" +
            "10. Selecteer uw geslacht: " +
            gender +
            "\n" +
            "11. Selecteer uw provincie: " +
            province;

        // Create a new page in the Notion database
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
