"use client";

import Image from "next/image";
import Link from "next/link";
import Path from "../../enum/path";
import { useContext } from "react";
import { ToggleModeContext } from "../../context/ToggleModeContext";
import Mode from "@/enum/mode";

const IntroPage = () => {
    const { toggleMode } = useContext(ToggleModeContext);

    return (
        <>
            <div className="headings">
                <h1 className="mt-6 text-5xl text-center fellix-semibold blue lg:text-7xl">
                    Svět práce a odborů
                </h1>
                <h2 className="text-3xl mt-8 font-semibold text-center">
                    Práce je součástí lidstva od jeho počátku.<br />
                    Ale proč? <span className="blue">A co je to vlastně práce?</span>
                </h2>
            </div>
            <div>
                <Image
                    src="/images/chapters/intro/uvod.svg"
                    width={400}
                    height={600}
                    alt="Úvod"
                    className="absolute left-0 w-1/4 top-48 2xl:1/3"
                ></Image>
            </div>
            <div className="pb-48 mx-auto mt-12 content lg:w-1/2">
                <p className="mt-4 mb-4">
                    Možná nejširší definice by byla, že je to činnost, která nepodléhá
                    naší úplné libovůli. Aspoň něco si na ní <span className={`${toggleMode === Mode.FUN ? "green" : ""}`}>nemůžeme vybrat</span>.
                </p>
                <p className={`transition-all duration-500 ease-in-ou overflow-hidden ${toggleMode === Mode.FUN ? "max-h-96 opacity-100 green mb-4" : "max-h-0 opacity-0"}`}>
                    Proto si můžeme stěžovat „sakra, to je zas práce,“ když jdeme
                    vynést přetékající koš, i když za to nedostáváme plat a neexistuje
                    šéf, co nám to nařídil.
                </p>
                <p className="mb-4">
                    Práce může mít milion podob. Může být dobrovolná,
                    nedobrovolná, dobře i špatně placená nebo neplacená. Může to být
                    péče. Může to být tvorba. A může to být příšerná dřina nebo
                    třeba bullshit.
                </p>
                <p className="mb-4">
                    Přináší nám obživu, bohatství, sebevědomí, hrdost – anebo taky nic z toho.
                </p>
                <p className="mb-4">
                    Potíž s prací je, že každý pod tím slovem rozumí něco jiného.
                </p>
                <div className="flex justify-center">
                    <div className="w-1/2">
                        <Image 
                            src="/images/chapters/intro/01.png"
                            layout="responsive"
                            width={16}
                            height={9}
                            alt="obr 1" 
                            className="rounded-l"
                        />
                    </div>
                    <div className="w-1/2">
                        <Image 
                            src="/images/chapters/intro/02.png"
                            layout="responsive"
                            width={16}
                            height={9}
                            alt="obr 1" 
                            className="rounded-r"
                        />
                    </div>
                </div>
                <p className={`transition-all duration-500 ease-in-ou overflow-hidden mb-4 ${toggleMode === Mode.FUN ? "max-h-96 opacity-100 green-box-nocap" : "max-h-0 opacity-0"}`}>
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
                <p className="mb-4">
                    Naše ulice plné elektrických koloběžek a 5G sítí asi nepřipomínají města z osmáctého století.
                    A stejně čelíme podobným výzvám jako společnost na počátku průmyslové revoluce. Digitální
                    nástroje nebo automatizace nám můžou práci zásadně zjednodušit, stejně jako nás o ni připravit.
                </p>
                <p className="mb-4 text-center">
                    Protilék? <span className={`${toggleMode === Mode.FUN ? "green" : "blue"}`}>Sociální dialog</span>. A ten tady taky budeme objevovat.
                </p>
                <div className="mt-24 text-center">
                    <Link
                        className="btn-primary px-12 py-3 text-3xl text-white"
                        href={Path.CHANGES}
                    >
                        Kapitola 1
                    </Link>
                </div>
            </div>
        </>
    );
};

export default IntroPage;
