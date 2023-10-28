import "@/app/globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "./providers";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Md Tausif Iqbal",
    description: "Hey, I'm Md Tausif Iqbal, a full stack developer, programmer and tech enthusiast.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`text-foreground bg-background ${poppins.className}`}>
                <Providers>
                    <div className="min-h-screen flex flex-col">
                        <Header/>
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
