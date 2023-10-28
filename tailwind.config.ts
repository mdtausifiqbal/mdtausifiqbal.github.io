import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        background: "#ffffff",
                        foreground: "#11181C",
                        primary: {
                            50: "#f2eafa",
                            100: "#e4d4f4",
                            200: "#c9a9e9",
                            300: "#ae7ede",
                            400: "#9353d3",
                            500: "#7828c8",
                            600: "#6020a0",
                            700: "#481878",
                            800: "#301050",
                            900: "#180828",
                            DEFAULT: "#7828c8",
                            foreground: "#ffffff",
                        },
                        focus: "#7828c8",
                    },
                },
                
                dark: {
                    colors: {
                        background: "#18181b",
                        foreground: "#ECEDEE",
                        primary: {
                            50: "#180828",
                            100: "#301050",
                            200: "#481878",
                            300: "#6020a0",
                            400: "#7828c8",
                            500: "#9353d3",
                            600: "#ae7ede",
                            700: "#c9a9e9",
                            800: "#e4d4f4",
                            900: "#f2eafa",
                            DEFAULT: "#9353d3",
                            foreground: "#ECEDEE",
                        },
                        focus: "#7828c8",
                    },
                },
            },
        }),
    ],
};
export default config;
