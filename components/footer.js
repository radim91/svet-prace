"use client";

import Path from "@/enum/path";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
    const chaptersText = 'Kapitoly:';
    const [shadow, setShadow] = useState(false);
    const [chapterName, setChapterName] = useState(chaptersText);
    const [shownCircle, setShownCircle] = useState(null);
    const [active, setActive] = useState(null);
    const pathname = usePathname();

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
                break;
            case Path.CHANGES:
                setActive('1');
                break;
            case Path.FEARLESS:
                setActive('2');
                break;
            case Path.TRADITION:
                setActive('3');
                break;
            case Path.VELVET:
                setActive('4');
                break;
            case Path.FUTURE:
                setActive('5');
                break;
            case Path.GREEN_DEAL:
                setActive('7');
                break;
            default:
                setActive(null);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const showChapterName = (e) => {
        setChapterName(e.target.dataset.chapterName);
        setShownCircle(e.target.dataset.chapterNumber);
    };

    const hideChapterName = (e) => {
        setChapterName(chaptersText);
        setShownCircle(null);
    }

    return (
        <footer
            className={`w-full fixed bottom-0 z-50 pt-24 pb-6 bg-gray-100 px-2 ${
                shadow ? "shadow-inner-top" : ""
            }`}
        >
            <div className="w-full text-center chapters-name">
                <span className="text-2xl fellix-semibold">{chapterName}</span>
            </div>
            <div className="container-sm mx-auto footer-wrapper">
                <div className="footer-link"> 
                    <Link
                        href={Path.INTRO}
                        className={`text-2xl fellix-medium zero-chap ${pathname === Path.INTRO ? "chap-active" : "chap"}`}
                        data-chapter-name="Úvod"
                        data-chapter-number="0"
                        onMouseOver={showChapterName}
                        onMouseLeave={hideChapterName}
                    >
                        0
                    </Link>
                    <div className={`circled-chap-0 ${(shownCircle === '0' || active === '0') ? "" : "hidden"}`}>
                        <Image src="images/components/circle.svg" alt="Circled" width={37} height={37} />
                    </div>
                </div>
                <div className="footer-link"> 
                    <Link
                        href={Path.CHANGES}
                        className={`text-2xl fellix-medium first-chap ${pathname === Path.CHANGES ? "chap-active" : "chap"}`}
                        data-chapter-name="Proměny světa práce"
                        data-chapter-number="1"
                        onMouseOver={showChapterName}
                        onMouseLeave={hideChapterName}
                    >
                        1
                    </Link>
                    <div className={`circled-chap-1 ${(shownCircle === '1' || active === '1') ? "" : "hidden"}`}>
                        <Image src="images/components/circle.svg" alt="Circled" width={37} height={37} />
                    </div>
                </div>
                <div className="footer-link">
                    <Link 
                        href={Path.FEARLESS}
                        className={`text-2xl fellix-medium chap second-chap ${pathname === Path.FEARLESS ? "chap-active" : "chap"}`}
                        data-chapter-name="Pracovat a nebát se"
                        data-chapter-number="2"
                        onMouseOver={showChapterName}
                        onMouseLeave={hideChapterName}
                    >
                        2
                    </Link>
                    <div className={`circled-chap-2 ${shownCircle === '2' || active === '2' ? "" : "hidden"}`}>
                        <Image src="images/components/circle.svg" alt="Circled" width={37} height={37} />
                    </div>
                </div>
                <div className="footer-link">
                    <Link 
                        href={Path.TRADITION}
                        className={`text-2xl fellix-medium chap third-chap ${pathname === Path.TRADITION ? "chap-active" : "chap"}`}
                        data-chapter-name="Česká tradice"
                        data-chapter-number="3"
                        onMouseOver={showChapterName}
                        onMouseLeave={hideChapterName}
                    >
                        3
                    </Link>
                    <div className={`circled-chap-3 ${shownCircle === '3' || active === '3' ? "" : "hidden"}`}>
                        <Image src="images/components/circle.svg" alt="Circled" width={37} height={37} />
                    </div>
                </div>
                <div className="footer-link">
                    <Link 
                        href={Path.VELVET}
                        className={`text-2xl fellix-medium chap fourth-chap ${pathname === Path.VELVET ? "chap-active" : "chap"}`}
                        data-chapter-name="Odbory po sametu"
                        data-chapter-number="4"
                        onMouseOver={showChapterName}
                        onMouseLeave={hideChapterName}
                    >
                        4
                    </Link>
                    <div className={`circled-chap-4 ${shownCircle === '4' || active === '4' ? "" : "hidden"}`}>
                        <Image src="images/components/circle.svg" alt="Circled" width={37} height={37} />
                    </div>
                </div>
                <div className="footer-link">
                    <Link 
                        href={Path.FUTURE}
                        className={`text-2xl fellix-medium chap fifth-chap ${pathname === Path.FUTURE ? "chap-active" : "chap"}`}
                        data-chapter-name="Budoucnost práce"
                        data-chapter-number="5"
                        onMouseOver={showChapterName}
                        onMouseLeave={hideChapterName}
                    >
                        5
                    </Link>
                    <div className={`circled-chap-5 ${shownCircle === '5' || active === '5' ? "" : "hidden"}`}>
                        <Image src="images/components/circle.svg" alt="Circled" width={37} height={37} />
                    </div>
                </div>
                <div className="footer-link">
                    <Link 
                        href={Path.GREEN_DEAL}
                        className={`text-2xl fellix-medium chap sixth-chap ${pathname === Path.GREEN_DEAL ? "chap-active" : "chap"}`}
                        data-chapter-name="Spravedlivá transformace"
                        data-chapter-number="6"
                        onMouseOver={showChapterName}
                        onMouseLeave={hideChapterName}
                    >
                        6
                    </Link>
                    <div className={`circled-chap-6 ${shownCircle === '6' || active === '6' ? "" : "hidden"}`}>
                        <Image src="images/components/circle.svg" alt="Circled" width={37} height={37} />
                    </div>
                </div>
                <div className="footer-link">
                    <Link 
                        href={Path.DEMOCRACY}
                        className={`text-2xl fellix-medium chap seventh-chap ${pathname === Path.DEMOCRACY ? "chap-active" : "chap"}`}
                        data-chapter-name="Vyhlídky demokracie"
                        data-chapter-number="7"
                        onMouseOver={showChapterName}
                        onMouseLeave={hideChapterName}
                    >
                        7
                    </Link>
                    <div className={`circled-chap-7 ${shownCircle === '7' || active === '7' ? "" : "hidden"}`}>
                        <Image src="images/components/circle.svg" alt="Circled" width={37} height={37} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
