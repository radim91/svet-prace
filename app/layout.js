"use client"

import "./globals.css";
import Link from "next/link";
import Path from "../enum/path";
import Footer from "../components/footer";
import { usePathname } from "next/navigation";
import Menu from "../components/menu";
import { useState, useEffect, useContext, useRef } from "react";
import { ToggleModeProvider } from "../context/ToggleModeContext";
import ToggleModeButton from "../components/mode-toggle";
import Logo from "@/components/logo";
import ScrolltopButton from "@/components/UI/ScrolltopButton";
import { WindowSizeProvider } from "@/context/WindowSizeContext";

export default function RootLayout({ children }) {
    const containerRef = useRef(null);
    const pathname = usePathname();
    const [blurContent, setBlurContent] = useState(false);
    const [scrolltopVisibility, setScrolltopVisibility] = useState(false);

    const handleMenuOpen = (e) => {
        setBlurContent(e);
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setScrolltopVisibility(true);
            } else {
                setScrolltopVisibility(false);
            }
        };

        const updateButtonPosition = () => {
            if (containerRef === null) {
                return;
            }

            const containerRect = containerRef.current.getBoundingClientRect();
            const button = document.getElementById('scrolltop');
            let rightPxCount = containerRect.right;

            if (containerRect.right < 1728 && containerRect.right > 768) {
                rightPxCount = window.innerWidth - 100;
            }

            if (containerRect.right <= 768) {
                rightPxCount = window.innerWidth - 20;
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
        <WindowSizeProvider>
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
                        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1" />
                    </head>
                    <body className={`h-full flex flex-col bg-gray-100`} id="main-body">
                        <header className={`fixed top-0 z-50 w-full py-4 bg-gray-100`}>
                            <div className="container flex mx-auto">
                                <div className="basis-1/4">
                                    <Link
                                        href={Path.HOME}
                                        className="text-2xl fellix-semibold block"
                                    >
                                        <Logo />
                                    </Link>
                                </div>
                                <div className="basis-3/4 flex justify-end">
                                    {(pathname !== Path.HOME && pathname !== Path.INFO) && <ToggleModeButton />}
                                    <Menu onMenuOpen={handleMenuOpen} />
                                </div>
                            </div>
                        </header>
                        <main
                            className={`
                                ${pathname === Path.HOME ? "overflow-hidden" : ""}
                                flex-1 container relative 
                                px-4 py-6 md:p-4 
                                mx-auto mt-12 xl:mt-16 2xl:mt-24 
                                ${blurContent ? "blur-sm" : "block"}
                            `}
                            ref={containerRef}
                        >
                            {children}
                            {scrolltopVisibility === true && pathname !== Path.INTRO && (
                                <button className="fixed bottom-2 md:bottom-32" id="scrolltop" onClick={scrollToTop}>
                                    <ScrolltopButton />
                                </button>
                            )}
                        </main>
                        <Footer />
                    </body>
                </html>
            </ToggleModeProvider>
        </WindowSizeProvider>
    );
}
