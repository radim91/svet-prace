"use client";

import '../assets/styles/changes/style.css';
import ImageBox from "@/components/UI/ImageBox";
import Image from "next/image";
import { ToggleModeContext } from "../../context/ToggleModeContext";
import { useContext, useState } from "react";
import Mode from "@/enum/mode";
import CollapseButton from '@/components/UI/CollapseButton';

const ChangesPage = () => {
    const { toggleMode } = useContext(ToggleModeContext);
    const [shown, setShown] = useState(null);

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
                        additionalClass="bg-01"
                    />
                </div>
                <p className="mb-4">
                    Základem bylo zemědělství – všechno se pěstovalo{' '}
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
                <div className="mt-12 mb-12">
                    <ImageBox
                        foreground="/images/chapters/changes/02.jpg"
                        background="/images/chapters/changes/02-line.svg"
                        additionalClass="bg-02"
                    />
                </div>
                <p className="mb-4">
                    Pak přišel velký zlom. Dokonce několik zlomů zároveň. Vynálezy, které umožnily lidem líp
                    komunikovat i cestovat, společenské změny a revoluce, které dávaly obyčejným lidem větší
                    moc a vlastní hlas. A spolu s tím vyrostl i průmysl. Tisíce let tradic, zemědělství a
                    náboženství – pojmů, které definovaly většinu lidstva po většinu času – se začalo hroutit.
                </p>
                <p className="mb-8">
                    To bylo <span className={`${toggleMode === Mode.FUN ? "green" : ""}`}>zhruba před 250 lety</span>.
                    A o těch 250 letech se budeme bavit především.
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden w-2/3 mx-auto ${toggleMode === Mode.FUN ? "opacity-100 mb-12" : "max-h-0 opacity-0"}`}>
                    <Image 
                        src="/images/chapters/changes/03.jpg"
                        width={400}
                        height={400}
                        alt="obr 3" 
                        className="rounded w-full"
                    />
                    <Image 
                        src="/images/chapters/changes/03-arrow.svg"
                        width={70}
                        height={400}
                        alt="obr 3" 
                        className="arrow-03"
                    />
                    <p className="mt-2 text-center green">
                        Mluvíme o době, kdy lidé vypadali nějak takhle.
                    </p>
                </div>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={setShown} id="1" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">1.1</span>Good Ol' Times
                        <br/>aneb Jak se pracovalo ve starých dobách
                    </h3>
                </div>
                <div className={`${shown === '1' ? "uncollapsed" : "collapsed"}`}>
                    abcd
                </div>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={setShown} id="2" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">1.2</span>Bring the Noise
                        <br/>aneb Průmyslová revoluce a počátky kapitalismu
                    </h3>
                </div>
                <div className={`${shown === '2' ? "uncollapsed" : "collapsed"}`}>
                    abcd
                </div>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={setShown} id="3" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">1.3</span>Práce v průmyslové společnosti
                        <br/>aneb Fight for Your Right
                    </h3>
                </div>
                <div className={`${shown === '3' ? "uncollapsed" : "collapsed"}`}>
                    abcd
                </div>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={setShown} id="4" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">1.4</span>Práce v post-průmyslové společnosti
                        <br/>aneb Here we go again
                    </h3>
                </div>
                <div className={`${shown === '4' ? "uncollapsed" : "collapsed"}`}>
                    abcdefg
                </div>
            </div>
        </>
    );
};

export default ChangesPage;
