"use client";

import ImageBox from "@/components/UI/ImageBox";
import Image from "next/image";
import { useState } from "react";
/* import HoverBox from "../../components/UI/HoverBox"; */
/* import HoverLink from "../../components/UI/HoverLink"; */
/* import ImageBox from "../../components/UI/ImageBox"; */
/* import InfoBox from "../../components/UI/InfoBox"; */
/* import Quote from "../../components/UI/Quote"; */
/* import Link from "next/link"; */

const ChangesPage = () => {
    const [hoverShown, setHoverShown] = useState(null);

    return (
        <>
            <div className="mx-auto headings">
                <h1 className="mt-6 text-5xl text-center blue">
                    1. <span className="ms-2">Proměny světa práce</span>
                </h1>
                <h2 className="text-3xl mt-8 font-semibold text-center">
                    Od Age of Empires po age of Uber
                </h2>
            </div>
            <div className="heading-image">
                <Image
                    src="/images/chapters/changes/pike.svg"
                    width={300}
                    height={300}
                    alt="Krumpáč"
                />
            </div>
            <div className="pb-48 mx-auto mt-12 content lg:w-1/2">
                <p className="mb-12" id="perex-1">
                    Několik tisíc let byl svět víceméně stejný. Aspoň z pohledu práce.
                    Lidé se rodili, žili a umírali na stejném místě – nebo nepříliš
                    daleko od něj.
                </p>
                <div className="mt-4">
                    <ImageBox
                        foreground="/images/chapters/changes/01.webp"
                        background="/images/chapters/changes/01-line.svg"
                        additionalClass="absolute mt-24 z-100"
                    />
                </div>
            </div>
        </>
    );
};

export default ChangesPage;
