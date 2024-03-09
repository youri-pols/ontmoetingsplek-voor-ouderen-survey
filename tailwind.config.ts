import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                "white-20": "rgba(255, 255, 255, 0.2)",
                "blue-new": "#1C2432",
                "blue-border": "#343A47",
            },
        },
    },
    plugins: [],
};
export default config;
