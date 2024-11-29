"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { ToggleModeContext } from "@/context/ToggleModeContext";
import Mode from "@/enum/mode";
import Link from "next/link";
import CollapseButton from "@/components/UI/CollapseButton";
import Path from "@/enum/path";

const FuturePage = () => {
    const { toggleMode } = useContext(ToggleModeContext);
    const [shown, setShown] = useState([]);

    const shownHandler = (e) => {
        if (shown.includes(e)) {
            setShown(shown.filter((id) => id !== e));
        } else {
            setShown([...shown, e]);
        }
    };

    return (
        <>
            <div className="mx-auto headings">
                <h1 className="mt-6 text-5xl text-center blue">
                    5. <span className="ms-2">Budoucnost práce</span>
                </h1>
                <h2 className="text-3xl mt-8 font-semibold text-center">
                    Chytrá, nebo vychytralá?
                </h2>
            </div>
            <div className="heading-image mt-12">
                <Image
                    src="/images/chapters/future/future.svg"
                    width={300}
                    height={300}
                    alt="Budoucnost"
                />
            </div>
            <div className="pb-48 mx-auto mt-12 content lg:w-1/2">
            </div>
        </>
    );
};

export default FuturePage;
