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
                <nav className="fixed top-0 z-50 w-full py-6 bg-white">
                    <div className="container flex mx-auto">
                        <div className="basis-1/2">
                            <Link
                                href={Path.HOME}
                                className="hidden text-2xl font-semibold lg:block"
                            >
                                {pathname !== Path.HOME && (
                                    <span>Svět práce</span>
                                )}
                                {pathname === Path.HOME && (
                                    <Image src="images/components/logo-eu.svg" width={180} height={100} alt="logo"></Image>                                   
                                )}
                            </Link>
                        </div>
                        <div className="basis-1/2 text-end">
                            <span className="hidden text-2xl trans-medium lg:block">
                                Info
                            </span>
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
