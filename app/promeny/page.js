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
                    <span className="green">lokálně</span> pro
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
                    To bylo <span className="green">zhruba před 250 lety</span>.
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
                    <CollapseButton shown={shown} setShown={shownHandler} id="1" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">1.1</span>Good Ol&apos; Times
                        <br/>aneb Jak se pracovalo ve starých dobách
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('1') ? "block" : "hidden"}`}>
                    <div className="absolute left-0 -mt-48 transform scale-x-[-1]">
                        <Image
                            src="/images/chapters/changes/pike.svg"
                            width={200}
                            height={200}
                            alt="Krumpáč"
                        />
                    </div>
                    <div className="flex mb-8 mt-8 justify-center">
                        <div className="w-1/2">
                            <Image 
                                src="/images/chapters/changes/04.webp"
                                alt="obr 1" 
                                width={1125}
                                height={633}
                                className="rounded-l w-full"
                            />
                        </div>
                        <div className="w-1/2">
                            <Image 
                                src="/images/chapters/changes/05.png"
                                width={1125}
                                height={633}
                                alt="obr 2" 
                                className="rounded-r w-full"
                            />
                        </div>
                    </div>
                    <p className="mb-4">
                        Běžný člověk v době knížete Václava (10. století), Karla IV.
                        (14. století) i Marie Terezie (18. století) byl chudý rolník
                        žijící na venkově ve vícegenerační chalupě.
                    </p>
                    <p className="mb-4">
                        Zpravidla byl (nebo byla) <span className={`${toggleMode === Mode.FUN ? "green" : ""}`}>nevolníkem místní vrchnosti</span>.
                    </p>
                    <p className={`transition-all duration-500 ease-in-ou overflow-hidden ${toggleMode === Mode.FUN ? "max-h-96 opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                        V rámci svého panství měla vrchnost téměř neomezenou moc.
                        Nevolníci jí museli poslouchat, bez jejího svolení se nemohli
                        vdávat nebo ženit, dokonce ani stěhovat. Navíc byli bez nároku
                        na odměnu nuceni pracovat na vrchnostenských pozemcích (tomu
                        se říkalo robota, ale taky by se tomu mohlo říkat part-time otroctví).
                    </p>
                    <p className="mb-4">
                        Vrchnost zásadně omezovala svobodu nevolníků, ale garantovala
                        jejich bezpečí, soudila jejich spory a zaopatřovala ty, kteří
                        se o sebe nedokázali postarat sami. Brala tak na sebe úkoly,
                        které mají dnes na starosti města nebo státy.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="green mb-8">
                            Představa, že někdy existovalo široké společenství absolutně
                            svobodných jedinců, kteří se pohybovali volnou krajinou a
                            směňovali mezi sebou zboží nebo zkušenosti, popřípadě se občas
                            navzájem zavraždili nebo potěšili – divoký západ, totální pravěk,
                            nebo absolutně volný trh – je mylná. Lidi odjakživa řešili otázku
                            bezpečí, které mi poskytne někdo silnější, a svobody, kdy mi
                            nikdo nestojí v cestě – a vždycky to byl kompromis.
                        </p>
                        <div className="absolute right-1/4 -mt-8">
                            <Image 
                                src={'/images/chapters/changes/07-arrow.svg'}
                                width={30}
                                height={80}
                                alt="obr 7" 
                            />
                        </div>
                        <Image
                            src="/images/chapters/changes/06.jpg"
                            width={600}
                            height={400}
                            alt="obr 6"
                            className="rounded w-4/5 mx-auto mb-4"
                        />
                    </div>
                    <p className="mb-4">
                        Továrny také neexistovaly, veškeré pracovní nástroje, oblečení
                        a další výrobky se vyráběly v malých řemeslných dílnách ve
                        městech. Řemeslníci byli svobodní lidé hrdí na svůj skill.
                    </p>
                    <p className="mb-4">
                        Ani oni ale nemohli prodávat své výrobky, jak se jim zachtělo.
                        Veškerý obchod řídily řemeslnické organizace nazývané cechy.
                    </p>
                    <p className="mb-4">
                        Cechy měly monopol na výrobu, řídily odborné vzdělávání, garantovaly
                        kvalitu výrobků a určovaly jejich ceny, ale také například
                        zakazovaly ženám vyučit se řemeslu.
                    </p>
                    <p className="mb-4">
                        Jak nevolnictví na venkově, tak cechy ve městech stály v
                        cestě pokroku, který se především ve formě obchodu a hospodářské
                        soutěže dral dopředu. A to byl jejich konec.
                    </p>
                    <p className="mb-4">
                        A to byl jejich <span className="green">konec</span>.
                    </p>
                    <p className={`transition-all duration-500 ease-in-ou overflow-hidden ${toggleMode === Mode.FUN ? "max-h-96 opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                        Nebylo to samozřejmě ani rychlé, ani jednoduché. Jaktože se jednou
                        “pokrok” prosadí a jindy ne? V naší historii práce se pořád opakují
                        dva vzorce – situace se změní buď proto, že to někdo chce a má sílu
                        to prosadit (jako když rodič „přinutí“ dítě chodit do školky, i když
                        by bylo rádo doma), nebo proto, že to naopak někdo hodně nechce a má
                        dost síly vzdorovat (jako když se dítě vzbouří proti brokolici a
                        prosadí si konečně pizzu). Samo se neděje nic.
                    </p>
                </div>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="2" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">1.2</span>Bring the Noise
                        <br/>aneb Průmyslová revoluce a počátky kapitalismu
                    </h3>
                </div>
                <div className={`${shown.includes('2') ? "block" : "hidden"}`}>
                    abcd
                </div>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="3" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">1.3</span>Práce v průmyslové společnosti
                        <br/>aneb Fight for Your Right
                    </h3>
                </div>
                <div className={`${shown.includes('3') ? "block" : "hidden"}`}>
                    abcd
                </div>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="4" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">1.4</span>Práce v post-průmyslové společnosti
                        <br/>aneb Here we go again
                    </h3>
                </div>
                <div className={`${shown.includes('4') ? "block" : "hidden"}`}>
                    abcdefg
                </div>
            </div>
        </>
    );
};

export default ChangesPage;
