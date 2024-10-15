"use client";

import ImageBox from "@/components/UI/ImageBox";
import Image from "next/image";
import { ToggleModeContext } from "../../context/ToggleModeContext";
import { useContext } from "react";
import Mode from "@/enum/mode";

const ChangesPage = () => {
    const { toggleMode } = useContext(ToggleModeContext);

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
                <div className="mt-4 mb-4">
                    <ImageBox
                        foreground="/images/chapters/changes/01.webp"
                        background="/images/chapters/changes/01-line.svg"
                        additionalClass="absolute mt-24 z-100"
                    />
                </div>
                <p className="mb-4">
                    Základem bylo zemědělství – všechno se pěstovalo&nbsp;
                    <span className={`${toggleMode === Mode.FUN ? "green" : ""}`}>lokálně</span> pro
                    potřeby místní komunity.
                </p>
                <p className={`transition-all duration-500 ease-in-ou overflow-hidden ${toggleMode === Mode.FUN ? "max-h-96 opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                    Za podobná privilegia si my dnes musíme připlatit. Ale zase se můžeme podívat,
                    kam chceme (když na to budeme mít).
                </p>
                <p className="mb-4">
                    Hrstka bohatých, urozených a mocných půdu dědičně vlastnila, ostatní populace na ní
                    “dědičně” pracovala. Semtam se někdo vzepřel pravidlům, podle kterých se “odjakživa”
                    žilo, ale pohyb mezi různými vrstvami společnosti nebyl příliš častý.
                </p>
                <p className="mb-4">
                    Proč to tak bylo? Má to spoustu důvodů. Feudalismus, například. Tyto drobné životy
                    žili lidé v rámci obřích říší, kterým vládli panovníci, kteří vládli dalším panovníkům
                    a tak dále – a úplně nejníž byli skoro všichni ostatní. Bylo jich nejvíc, ale měli nejmenší moc.
                </p>
                <p className="mb-4">
                    Nebo taky náboženství a myšlenkové prostředí – ať už za tím byl Bůh či tradice komunity,
                    vesměs se mělo za to, že život je tak nějak daný, cyklicky se opakující proces a v něm
                    má každý svůj daný osud.
                </p>
            </div>
        </>
    );
};

export default ChangesPage;
