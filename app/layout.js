"use client"

import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Path from "../enum/path";
import Footer from "./components/footer";
import { usePathname } from "next/navigation";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }) {
    const pathname = usePathname();

    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <nav className="fixed top-0 z-50 w-full py-4 bg-white">
                    <div className="container flex mx-auto">
                        <div className="basis-1/3">
                            <Link
                                href={Path.HOME}
                                className="hidden text-2xl font-semibold lg:block"
                            >
                                {pathname !== Path.HOME && (
                                    <span>Svět práce</span>
                                )}
                                {pathname === Path.HOME && (
                                    <Image src="images/components/logo-eu.svg" width={175} height={100} alt="logo"></Image>                                   
                                )}
                            </Link>
                        </div>
                        <div className="text-center basis-1/3">
                            <div>
                                <Image src="images/components/looking-glass.svg" width={20} height={15} alt="hledat" className="search-glass" />
                                <input type="text" className="w-1/2 search-bar"/>
                            </div>
                        </div>
                        <div className="basis-1/3">
                            <Image src="images/components/hamburger.svg" width={20} height={15} alt="hamburger" className="block ml-auto" />
                        </div>
                    </div>
                </nav>
                <main className="container relative p-4 pb-48 mx-auto mt-12 lg:mt-24">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
