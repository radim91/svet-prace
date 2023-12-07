"use client";

import Path from "@/enum/path";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
    const [shadow, setShadow] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const showChapterName = (e) => {
        e.target.nextSibling.style.display = "inline-block";
    };

    const hideChapterName = (e) => {
        e.target.nextSibling.style.display = "none";
    }

    return (
        <footer
            className={`w-full fixed bottom-0 z-50 pt-2 pb-6 bg-gray-100 px-2 ${
                shadow ? "shadow-inner-top" : ""
            }`}
        >
            <div className="container mx-auto footer-wrapper">
                <div className="stroke">
                    <Image src="images/components/stroke.svg" alt="stroke" width={800} height={100} className="mx-auto" />
                </div>
                <span className="text-2xl trans-semibold blue me-3">Kapitoly:</span>{" "}
                <div className="footer-link"> 
                    <Link
                        href={Path.CHANGES}
                        className={`text-2xl trans-medium first-boxed ${pathname === Path.CHANGES ? "boxed-active" : "boxed"}`}
                        onMouseOver={showChapterName}
                        onMouseLeave={hideChapterName}
                    >
                        1
                    </Link>
                    <div className="footer-item-hover first-footer-item-hover">
                        <span className="inline-block">
                            Svět práce a jeho proměny <br/>v posledních 250 letech
                            <Image src="images/components/left-arrow.svg" className="inline-block ms-2 white-svg" alt="arrow" width={10} height={10} /> 
                        </span>
                        <div className="mt-2">
                            <Image src="images/components/vertical-stroke.svg" alt="stroke" width={3} height={20} />
                        </div>
                    </div>
                </div>
                <div className="footer-link">
                    <Link href="#" className="text-2xl trans-medium boxed second-boxed">
                        2
                    </Link>
                </div>
                <div className="footer-link">
                    <Link href="#" className="text-2xl trans-medium boxed third-boxed">
                        3
                    </Link>
                </div>
                <div className="footer-link">
                    <Link href="#" className="text-2xl trans-medium boxed fourth-boxed">
                        4
                    </Link>
                </div>
                <div className="footer-link">
                    <Link href="#" className="text-2xl trans-medium boxed fifth-boxed">
                        5
                    </Link>
                </div>
                <div className="footer-link">
                    <Link href="#" className="text-2xl trans-medium boxed sixth-boxed">
                        6
                    </Link>
                </div>
                <div className="footer-link">
                    <Link 
                        href={Path.GREEN_DEAL}
                        className={`text-2xl trans-medium seventh-boxed ${pathname === Path.GREEN_DEAL ? "boxed-active" : "boxed"}`}
                        onMouseOver={showChapterName}
                        onMouseLeave={hideChapterName}
                    >
                        7
                    </Link>
                    <div className="footer-item-hover seventh-footer-item-hover">
                        <span className="inline-block">
                            Zelená ekonomika a spravedlivá<br/>transformace
                            <Image src="images/components/left-arrow.svg" className="inline-block ms-2 white-svg" alt="arrow" width={10} height={10} /> 
                        </span>
                        <div className="mt-2">
                            <Image src="images/components/vertical-stroke.svg" alt="stroke" width={3} height={20} />
                        </div>
                    </div>
                </div>
                <div className="footer-link">
                    <Link href="#" className="text-2xl trans-medium boxed eighth-boxed">
                        8
                    </Link>
                </div>
                <div className="footer-link">
                    <Link href="#" className="text-2xl trans-medium boxed ninth-boxed">
                        9
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
