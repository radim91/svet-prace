"use client";

import Image from "next/image";
import { ToggleModeContext } from "../../context/ToggleModeContext";
import Mode from "@/enum/mode";
import { useContext, useState } from "react";
import CollapseButton from '@/components/UI/CollapseButton';

const FearlessPage = () => {
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
                    2. <span className="ms-2">Pracovat a nebát se</span>
                </h1>
                <h2 className="text-3xl mt-8 font-semibold text-center">
                    Working class heroes
                </h2>
            </div>
            <div className="heading-image mt-12">
                <Image
                    src="/images/chapters/fearless/paper.svg"
                    width={300}
                    height={300}
                    alt="Papír"
                />
            </div>
            <div className="pb-48 mx-auto mt-12 content lg:w-1/2">
                <div className="flex justify-center">
                    <div className="w-1/2">
                        <Image 
                            src="/images/chapters/fearless/01.jpg"
                            alt="obr 1" 
                            width={1125}
                            height={633}
                            className="rounded-l w-full"
                        />
                    </div>
                    <div className="w-1/2">
                        <Image 
                            src="/images/chapters/fearless/02.jpg"
                            width={1125}
                            height={633}
                            alt="obr 2" 
                            className="rounded-r w-full"
                        />
                    </div>
                </div>
                <p className="mt-8 mb-4">
                    Bez průmyslové revoluce – o které jsme toho namluvili dost v minulé
                    kapitole – bychom v Evropě neměli takové materiální podmínky, jaké máme.
                    To se ale nestalo samo. Na začátku byl obrovský hospodářský růst založený
                    na nekvalifikované a nebezpečné práci a otřesných životních podmínkách.
                </p>
                <p className="mb-4">
                    Takže, kdo byli ti Avengers, kteří tuhle situaci změnili? Budete se divit,
                    ale tahle parta se jmenovala <span className="green">“dělnické hnutí”</span>.
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                    <Image
                        src="/images/chapters/fearless/03.png"
                        width={400}
                        height={600}
                        alt="obr 3"
                        className="rounded mx-auto"
                    />
                    <p className="mt-8 mb-4 text-center">
                        Oops, cože? Tady vlaje rudá vlajka?
                    </p>
                    <p className="mb-4">
                        Takzvané dělnické hnutí má v celém bývalém východním bloku (to jsme třeba
                        my, Polsko, Bulharsko, Německo, Kazachstán, Maďarsko, Slovinsko a tak
                        dále) nelichotivý zvuk. Tato slova si přivlastnila jedna strana a jemně
                        řečeno, k vytváření lepší budoucnosti jí nesloužila. Ve skutečnosti má ale
                        dělnické hnutí kořeny mnohem dříve než v dobách sovětského komunismu – a
                        bez tohoto hnutí bychom neměli dovolenou, nemocenskou, volné víkendy a podobně.
                    </p>
                </div>
                <p className="mb-12">
                    Nevěříte? Pojďte prozkoumat fascinující historii boje za to, co dnes vnímáme
                    jako normální a trochu nudné – jako třeba osmihodinový pracovní den – ale dřív to
                    byl naprostý sen.
                </p>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="1" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">2.1</span>Počátky odborových organizací
                        <br/>aneb Long time ago, in a galaxy far away
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('1') ? "block" : "hidden"}`}>
                    <div className="absolute left-0 -mt-24 transform scale-x-[-1]">
                        <Image
                            src="/images/chapters/fearless/paper.svg"
                            width={200}
                            height={200}
                            alt="Papír"
                        />
                    </div>
                    <p className="mt-8 mb-4">
                        Na začátku byla bída. Tedy, ne všech. Bohatství společnosti v devatenáctém
                        století raketově rostlo, jenže stálo na levné, nekvalifikované a nebezpečné práci. 
                    </p>
                    <p className="mb-8">
                        Pracovní doba dosahovala běžně i 15 hodin denně, dělnické rodiny obývaly jednu
                        místnost bez pitné vody a čerstvého vzduchu a děti místo učení a hraní trávily
                        své dětství jako pomocníci u strojů, protože bez jejich příjmů by rodina nepřežila.
                    </p>
                    <Image
                        src="/images/chapters/fearless/04.png"
                        width={600}
                        height={600}
                        alt="obr 4"
                        className="mb-8 rounded mx-auto"
                    />
                    <p className="mb-4">
                        Tento systém neregulované námezdní práce vytvářel logicky mnoho sociálních problémů
                        a nebyl jakkoliv zákonně regulován. Státy nechtěly vstupovat do vztahů zaměstnavatelů
                        a zaměstnanců, jelikož <span className="green">továrny byly vnímány jako soukromý
                        prostor majitele</span>.
                    </p>
                </div>
            </div>
        </>
    );
};

export default FearlessPage;
