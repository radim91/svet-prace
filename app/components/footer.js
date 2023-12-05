"use client";

import Path from "@/enum/path";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Footer = () => {
    const [shadow, setShadow] = useState(false);

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

    return (
        <footer
            className={`w-full fixed bottom-0 z-50 py-6 bg-white px-2 ${
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
                        className="text-2xl trans-medium boxed first-boxed"
                    >
                        1
                    </Link>
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
                    <Link href={Path.GREEN_DEAL} className="text-2xl trans-medium boxed seventh-boxed">
                        7
                    </Link>
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
