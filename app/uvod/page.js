"use client";

import Image from "next/image";
import Link from "next/link";
import Path from "../../enum/path";
import { useContext } from "react";
import { ToggleModeContext } from "../../context/ToggleModeContext";
import Mode from "@/enum/mode";
import { WindowSizeContext } from "@/context/WindowSizeContext";

const IntroPage = () => {
    const { toggleMode } = useContext(ToggleModeContext);
    const { windowSize } = useContext(WindowSizeContext);

    return (
        <>
            <title>Svět práce a odborů - Svět práce</title>
            <div className="headings">
                <h1 className={`mt-6 text-4xl md:text-5xl md:text-center ${toggleMode === Mode.FUN ? "green" : "blue"}`}>
                    Svět práce a odborů
                </h1>
                <h2 className="text-xl md:text-3xl mt-8 font-semibold md:text-center">
                    Práce je součástí lidstva od jeho počátku. {!windowSize.isMobile && (<br />)}
                    Ale proč? <span className={`${toggleMode === Mode.FUN ? "green" : "blue"}`}>A co je to vlastně práce?</span>
                </h2>
            </div>
            <div>
                <Image
                    src="/images/chapters/intro/uvod.svg"
                    width={400}
                    height={600}
                    alt="Úvod"
                    className="hidden md:block absolute left-0 w-1/4 top-48 2xl:1/3"
                ></Image>
            </div>
            <div className="pb-24 md:pb-48 mx-auto mt-12 content lg:w-1/2">
                <p className="mt-4 mb-4">
                    Možná nejširší definice by byla, že je to činnost, která nepodléhá
                    naší úplné libovůli. Aspoň něco si na ní <span className="green">nemůžeme vybrat</span>.
                </p>
                <p className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                    Proto si můžeme stěžovat „sakra, to je zas práce,“ když jdeme
                    vynést přetékající koš, i když za to nedostáváme plat a neexistuje
                    šéf, co nám to nařídil.
                </p>
                <p className="mb-4">
                    Práce může mít milion podob. Může být dobrovolná,
                    nedobrovolná, dobře i špatně placená nebo neplacená. Může to být
                    péče. Může to být tvorba. A může to být příšerná dřina&nbsp;
                    <Link href="https://denikalarm.cz/2013/09/prace-na-hovno/" target="_blank" className="underline">
                        nebo třeba bullshit.
                    </Link>
                </p>
                <p className="mb-4">
                    Přináší nám obživu, bohatství, sebevědomí, hrdost – anebo taky nic z toho.
                </p>
                <p className="mb-4">
                    Potíž s prací je, že každý pod tím slovem rozumí něco jiného.
                </p>
                <div className="md:flex justify-center">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/images/chapters/intro/01.png"
                            alt="obr 1"
                            width={1125}
                            height={633}
                            className="rounded-l w-full"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/images/chapters/intro/02.png"
                            width={1125}
                            height={633}
                            alt="obr 2"
                            className="rounded-r w-full"
                        />
                    </div>
                </div>
                <p className={`transition-all duration-500 ease-in-out overflow-hidden mb-4 ${toggleMode === Mode.FUN ? "opacity-100 green-box-nocap" : "max-h-0 opacity-0"}`}>
                    Když vstane rapová superstar po noci plné šampaňského seběhne šest
                    pater dolů ve svém sídle v Beverly Hills, aby natočila nejnovější
                    banger, je to něco jiného, než když se v pět ráno chystá
                    dvanáctiletý bangladéšský chlapec na celodenní šichtu v továrně na
                    cool tenisky. Ale oba můžou tvrdit, že jdou „do práce“.
                </p>
                <p className="mb-4">
                    Proto je zásadní, abychom spolu o práci mluvili. Abychom věděli, co znamenala práce tři tisíce
                    let nazpět a co bude znamenat – no, minimálně za tři roky.
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden w-3/4 md:w-1/3 mx-auto ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                    <Image
                        src="/images/chapters/intro/03.jpg"
                        width={600}
                        height={900}
                        alt="obr 3"
                        className="rounded w-full"
                    />
                </div>
                <p className="mb-4">
                    Naše ulice plné elektrických koloběžek a 5G sítí asi nepřipomínají města z osmáctého století.
                    A stejně čelíme podobným výzvám jako společnost na počátku průmyslové revoluce. Digitální
                    nástroje nebo automatizace nám můžou práci zásadně zjednodušit, stejně jako nás o ni připravit.
                </p>
                <p className="mb-4 text-center">
                    Protilék? <span className="green">Sociální dialog</span>. A ten tady taky budeme objevovat.
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                    <Image
                        src="/images/chapters/intro/04.jpg"
                        width={600}
                        height={400}
                        alt="obr 4"
                        className="rounded md:w-2/3 mx-auto mb-4"
                    />
                    <p className="green mb-4">
                        Zjednodušeně řečeno je to forma vyjednávání mezi těmi, co říkají „vynes koš“ a mezi těmi, co ho nakonec vynáší.
                    </p>
                    <p className="green">
                        Více sofistikovaně je to proces, ve kterém kterém  spolu zaměstnavatelé a zaměstnanci vyjednávají,
                        často ve spolupráci s vládou, s cílem ovlivnit uspořádání a vývoj pracovních záležitostí, trhu práce, sociální ochrany,
                        daní nebo jiných záležitostí hospodářské politiky.
                    </p>
                </div>
                <div className="mt-24 text-center">
                    <Link
                        className={`${toggleMode === Mode.FUN ? "btn-primary-large-green" : "btn-primary-large"}`}
                        href={Path.CHANGES}
                    >
                        <span className="text-white">Pokračovat</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default IntroPage;
