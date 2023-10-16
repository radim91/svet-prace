"use client";

import Path from "@/enum/path";
import Link from "next/link";
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
            <div className="text-center">
                <span className="text-2xl trans-semibold me-3">Kapitoly:</span>{" "}
                <Link
                    href={Path.CHANGES}
                    className="trans-medium text-2xl circled"
                >
                    1
                </Link>{" "}
                <span className="line">—</span>{" "}
                <Link href="#" className="trans-medium text-2xl circled">
                    2
                </Link>{" "}
                <span className="line">—</span>{" "}
                <Link href="#" className="trans-medium text-2xl circled">
                    3
                </Link>{" "}
                <span className="line">—</span>{" "}
                <Link href="#" className="trans-medium text-2xl circled">
                    4
                </Link>{" "}
                <span className="line">—</span>{" "}
                <Link href="#" className="trans-medium text-2xl circled">
                    5
                </Link>{" "}
                <span className="line">—</span>{" "}
                <Link href="#" className="trans-medium text-2xl circled">
                    6
                </Link>{" "}
                <span className="line">—</span>{" "}
                <Link href="#" className="trans-medium text-2xl circled">
                    7
                </Link>{" "}
                <span className="line">—</span>{" "}
                <Link href="#" className="trans-medium text-2xl circled">
                    8
                </Link>{" "}
            </div>
        </footer>
    );
};

export default Footer;
