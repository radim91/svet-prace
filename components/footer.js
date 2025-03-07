"use client";

import Path from "@/enum/path";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import { usePathname } from "next/navigation";
import { ToggleModeContext } from "../context/ToggleModeContext";
import Mode from "@/enum/mode";
import { WindowSizeContext } from "@/context/WindowSizeContext";

const Footer = () => {
    const pathname = usePathname();
    const { toggleMode } = useContext(ToggleModeContext);
    const { windowSize } = useContext(WindowSizeContext);
    const [chaptersText, setChaptersText] = useState('Kapitoly:');
    const [shadow, setShadow] = useState(false);
    const [chapterName, setChapterName] = useState(chaptersText);
    const [shownCircle, setShownCircle] = useState(null);
    const [active, setActive] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };

        switch (pathname) {
            case Path.INTRO:
                setActive('0');
                setChaptersText('Úvod');
                setChapterName('Úvod');
                break;
            case Path.CHANGES:
                setActive('1');
                setChaptersText('Proměny světa práce');
                setChapterName('Proměny světa práce');
                break;
            case Path.FEARLESS:
                setActive('2');
                setChaptersText('Pracovat a nebát se');
                setChapterName('Pracovat a nebát se');
                break;
            case Path.TRADITION:
                setActive('3');
                setChaptersText('Česká tradice');
                setChapterName('Česká tradice');
                break;
            case Path.VELVET:
                setActive('4');
                setChaptersText('Odbory po sametu');
                setChapterName('Odbory po sametu');
                break;
            case Path.FUTURE:
                setActive('5');
                setChaptersText('Budoucnost práce');
                setChapterName('Budoucnost práce');
                break;
            case Path.TRANSFORMATION:
                setActive('6');
                setChaptersText('Spravedlivá transformace');
                setChapterName('Spravedlivá transformace');
                break;
            case Path.DEMOCRACY:
                setActive('7');
                setChaptersText('Vyhlídky demokracie');
                setChapterName('Vyhlídky demokracie');
                break;
            default:
                setActive(null);
                setChaptersText('Kapitoly:');
                setChapterName('Kapitoly:');
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathname]);

    if (windowSize.width === 0) {
        return null;
    }

    const showChapterName = (e) => {
        setChapterName(e.target.dataset.chapterName);
        setShownCircle(e.target.dataset.chapterNumber);
    };

    const hideChapterName = () => {
        setChapterName(chaptersText);
        setShownCircle(null);
    }

    return (
        <>
            {windowSize.isMobile == false && (

                <footer
                    className={`md:w-full md:fixed md:bottom-0 md:z-50 md:pt-20 md:pb-2 md:bg-gray-100 md:px-2 ${
                        shadow ? "shadow-inner-top" : ""
                    }`}
                >
                    <div className="w-full text-center chapters-name">
                        <span className="text-xl fellix-semibold">{chapterName}</span>
                    </div>
                    <div className="container-sm mx-auto footer-wrapper">
                        <div className="footer-link"> 
                            <Link
                                href={Path.INTRO}
                                className={`text-2xl fellix-medium zero-chap ${pathname === Path.INTRO ? (toggleMode === Mode.FUN ? "chap-active-green" : "chap-active") : "chap"}`}
                                data-chapter-name="Úvod"
                                data-chapter-number="0"
                                onMouseOver={showChapterName}
                                onMouseLeave={hideChapterName}
                            >
                                0
                            </Link>
                            <div className={`circled-chap-0 ${(shownCircle === '0' || active === '0') ? "" : "hidden"}`}>
                                <Image src={toggleMode === Mode.FUN ? "images/components/circle-green.svg" : "images/components/circle.svg"} alt="Circled" width={37} height={37} />
                            </div>
                        </div>
                        <div className="footer-link"> 
                            <Link
                                href={Path.CHANGES}
                                className={`text-2xl fellix-medium first-chap ${pathname === Path.CHANGES ? (toggleMode === Mode.FUN ? "chap-active-green" : "chap-active") : "chap"}`}
                                data-chapter-name="Proměny světa práce"
                                data-chapter-number="1"
                                onMouseOver={showChapterName}
                                onMouseLeave={hideChapterName}
                            >
                                1
                            </Link>
                            <div className={`circled-chap-1 ${(shownCircle === '1' || active === '1') ? "" : "hidden"}`}>
                                <Image src={toggleMode === Mode.FUN ? "images/components/circle-green.svg" : "images/components/circle.svg"} alt="Circled" width={37} height={37} />
                            </div>
                        </div>
                        <div className="footer-link">
                            <Link 
                                href={Path.FEARLESS}
                                className={`text-2xl fellix-medium second-chap ${pathname === Path.FEARLESS ? (toggleMode === Mode.FUN ? "chap-active-green" : "chap-active") : "chap"}`}
                                data-chapter-name="Pracovat a nebát se"
                                data-chapter-number="2"
                                onMouseOver={showChapterName}
                                onMouseLeave={hideChapterName}
                            >
                                2
                            </Link>
                            <div className={`circled-chap-2 ${shownCircle === '2' || active === '2' ? "" : "hidden"}`}>
                                <Image src={toggleMode === Mode.FUN ? "images/components/circle-green.svg" : "images/components/circle.svg"} alt="Circled" width={37} height={37} />
                            </div>
                        </div>
                        <div className="footer-link">
                            <Link 
                                href={Path.TRADITION}
                                className={`text-2xl fellix-medium third-chap ${pathname === Path.TRADITION ? (toggleMode === Mode.FUN ? "chap-active-green" : "chap-active") : "chap"}`}
                                data-chapter-name="Česká tradice"
                                data-chapter-number="3"
                                onMouseOver={showChapterName}
                                onMouseLeave={hideChapterName}
                            >
                                3
                            </Link>
                            <div className={`circled-chap-3 ${shownCircle === '3' || active === '3' ? "" : "hidden"}`}>
                                <Image src={toggleMode === Mode.FUN ? "images/components/circle-green.svg" : "images/components/circle.svg"} alt="Circled" width={37} height={37} />
                            </div>
                        </div>
                        <div className="footer-link">
                            <Link 
                                href={Path.VELVET}
                                className={`text-2xl fellix-medium fourth-chap ${pathname === Path.VELVET ? (toggleMode === Mode.FUN ? "chap-active-green" : "chap-active") : "chap"}`}
                                data-chapter-name="Odbory po sametu"
                                data-chapter-number="4"
                                onMouseOver={showChapterName}
                                onMouseLeave={hideChapterName}
                            >
                                4
                            </Link>
                            <div className={`circled-chap-4 ${shownCircle === '4' || active === '4' ? "" : "hidden"}`}>
                                <Image src={toggleMode === Mode.FUN ? "images/components/circle-green.svg" : "images/components/circle.svg"} alt="Circled" width={37} height={37} />
                            </div>
                        </div>
                        <div className="footer-link">
                            <Link 
                                href={Path.FUTURE}
                                className={`text-2xl fellix-medium fifth-chap ${pathname === Path.FUTURE ? (toggleMode === Mode.FUN ? "chap-active-green" : "chap-active") : "chap"}`}
                                data-chapter-name="Budoucnost práce"
                                data-chapter-number="5"
                                onMouseOver={showChapterName}
                                onMouseLeave={hideChapterName}
                            >
                                5
                            </Link>
                            <div className={`circled-chap-5 ${shownCircle === '5' || active === '5' ? "" : "hidden"}`}>
                                <Image src={toggleMode === Mode.FUN ? "images/components/circle-green.svg" : "images/components/circle.svg"} alt="Circled" width={37} height={37} />
                            </div>
                        </div>
                        <div className="footer-link">
                            <Link 
                                href={Path.TRANSFORMATION}
                                className={`text-2xl fellix-medium sixth-chap ${pathname === Path.TRANSFORMATION ? (toggleMode === Mode.FUN ? "chap-active-green" : "chap-active") : "chap"}`}
                                data-chapter-name="Spravedlivá transformace"
                                data-chapter-number="6"
                                onMouseOver={showChapterName}
                                onMouseLeave={hideChapterName}
                            >
                                6
                            </Link>
                            <div className={`circled-chap-6 ${shownCircle === '6' || active === '6' ? "" : "hidden"}`}>
                                <Image src={toggleMode === Mode.FUN ? "images/components/circle-green.svg" : "images/components/circle.svg"} alt="Circled" width={37} height={37} />
                            </div>
                        </div>
                        <div className="footer-link">
                            <Link 
                                href={Path.DEMOCRACY}
                                className={`text-2xl fellix-medium seventh-chap ${pathname === Path.DEMOCRACY ? (toggleMode === Mode.FUN ? "chap-active-green" : "chap-active") : "chap"}`}
                                data-chapter-name="Vyhlídky demokracie"
                                data-chapter-number="7"
                                onMouseOver={showChapterName}
                                onMouseLeave={hideChapterName}
                            >
                                7
                            </Link>
                            <div className={`circled-chap-7 ${shownCircle === '7' || active === '7' ? "" : "hidden"}`}>
                                <Image src={toggleMode === Mode.FUN ? "images/components/circle-green.svg" : "images/components/circle.svg"} alt="Circled" width={37} height={37} />
                            </div>
                        </div>
                    </div>
                </footer>
            )}
        </>
    );
};

export default Footer;
