"use client"

import "./globals.css";
import Link from "next/link";
import Path from "../enum/path";
import Footer from "../components/footer";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Search from "../components/UI/Search";
import Menu from "../components/menu";
import { useState } from "react";
import { ToggleModeProvider } from "../context/ToggleModeContext";
import ToggleModeButton from "../components/mode-toggle";
import Logo from "@/components/logo";

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const [blurContent, setBlurContent] = useState(false);

    const handleMenuOpen = (e) => {
        setBlurContent(e);
    };

    return (
        <ToggleModeProvider>
            <html lang="en" className="h-full">
                <body className={`h-full flex flex-col bg-gray-100`}>
                    <header className={`fixed top-0 z-50 w-full py-4 bg-gray-100`}>
                        <div className="container flex mx-auto">
                            <div className="basis-1/2">
                                <Link
                                    href={Path.HOME}
                                    className="hidden text-2xl fellix-semibold lg:block"
                                >
                                    {pathname !== Path.HOME && (
                                        <Logo />
                                    )}
                                    {pathname === Path.HOME && (
                                        <Image src="images/components/logo-eu.svg" width={175} height={100} alt="logo"></Image>
                                    )}
                                </Link>
                            </div>
                            <div className="basis-1/2 flex justify-end">
                                {(pathname !== Path.HOME && pathname !== Path.INFO) && <ToggleModeButton />}
                                <Menu onMenuOpen={handleMenuOpen} />
                            </div>
                        </div>
                    </header>
                    <main
                        className={`flex-1 container relative p-4 mx-auto mt-12 xl:mt-16 2xl:mt-24 ${blurContent ? "blur-sm" : "block"}`}
                    >
                        {children}
                    </main>
                    <Footer />
                </body>
            </html>
        </ToggleModeProvider>
    );
}
