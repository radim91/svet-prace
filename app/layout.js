"use client"

import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Path from "../enum/path";
import Footer from "./components/footer";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Search from "./components/UI/Search";
import Menu from "./components/menu";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }) {
    const pathname = usePathname();

    return (
        <html lang="en" className="h-full">
            <body className={`${inter.className} h-full flex flex-col bg-gray-100`}>
                <header className="fixed top-0 z-50 w-full py-4 bg-gray-100">
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
                            <Search />
                        </div>
                        <div className="basis-1/3">
                            <Menu />
                        </div>
                    </div>
                </header>
                <main className="flex-1 container relative p-4 mx-auto mt-12 xl:mt-16 2xl:mt-24">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
