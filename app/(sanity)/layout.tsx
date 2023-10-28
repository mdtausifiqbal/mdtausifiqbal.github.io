import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Studio",
    description: "A sanity backend for managing portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                {children}
            </body>
        </html>
    );
}
