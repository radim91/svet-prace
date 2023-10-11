import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Path from "../enum/path";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
    title: "Svět práce",
    description: "Vše o práci a zaměstnání",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <nav className="w-full fixed top-0 z-50 py-6 bg-white">
                    <div className="flex mx-auto container">
                        <div className="basis-1/2">
                            <Link
                                href={Path.HOME}
                                className="hidden lg:block text-2xl font-semibold"
                            >
                                Svět práce
                            </Link>
                        </div>
                        <div className="basis-1/2 text-end">
                            <span className="trans-medium text-2xl hidden lg:block">
                                Info
                            </span>
                        </div>
                    </div>
                </nav>
                <main className="relative container mx-auto mt-12 lg:mt-24 p-4 pb-48">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
