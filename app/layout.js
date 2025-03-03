"use client"

import "./globals.css";
import Link from "next/link";
import Path from "../enum/path";
import Footer from "../components/footer";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Menu from "../components/menu";
import { useState, useEffect, useContext, useRef } from "react";
import { ToggleModeProvider } from "../context/ToggleModeContext";
import ToggleModeButton from "../components/mode-toggle";
import Logo from "@/components/logo";
import ScrolltopButton from "@/components/UI/ScrolltopButton";

export default function RootLayout({ children }) {
    const containerRef = useRef(null);
    const pathname = usePathname();
    const [blurContent, setBlurContent] = useState(false);
    const [scrolltopVisibility, setScrolltopVisibility] = useState(false);

    const handleMenuOpen = (e) => {
        setBlurContent(e);
    };

    useEffect(() => {
        window.scroll(0, 0);

        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setScrolltopVisibility(true);
            } else {
                setScrolltopVisibility(false);
            }
        };

        const updateButtonPosition = () => {
            const containerRect = containerRef.current.getBoundingClientRect();
            const button = document.getElementById('scrolltop');
            let rightPxCount = containerRect.right;

            if (containerRect.right < 1728) {
                rightPxCount = window.innerWidth - 100;
            }

            if (button) {
                const rightPosition = window.innerWidth - rightPxCount;
                button.style.right = `${rightPosition - 3}px`;
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('resize', updateButtonPosition);
        window.addEventListener('scroll', updateButtonPosition);

        updateButtonPosition();

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('resize', updateButtonPosition);
            window.removeEventListener('scroll', updateButtonPosition);
        }
    }, [pathname]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <ToggleModeProvider>
            <html lang="en" className="h-full">
                <head>
                    <link
                        id="favicon"
                        rel="icon"
                        href="favicon.png"
                        sizes="any"
                    />
                    <title>Svět práce - Příběh boje za lepší práci a sociální spravedlnost</title>
                </head>
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
                        ref={containerRef}
                    >
                        {children}
                        {scrolltopVisibility === true && pathname !== Path.INTRO && (
                            <button className="fixed bottom-32" id="scrolltop" onClick={scrollToTop}>
                                <ScrolltopButton />
                            </button>
                        )}
                    </main>
                    <Footer />
                </body>
            </html>
        </ToggleModeProvider>
    );
}
