"use client";

import '../assets/styles/changes/style.css';
import ImageBox from "@/components/UI/ImageBox";
import Image from "next/image";
import { ToggleModeContext } from "../../context/ToggleModeContext";
import { useContext, useState } from "react";
import Mode from "@/enum/mode";
import CollapseButton from '@/components/UI/CollapseButton';
import Link from 'next/link';
import Path from '@/enum/path';

const VelvetPage = () => {
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
                    4. <span className="ms-2">Odbory po Sametu</span>
                </h1>
            </div>
            <div className="heading-image">
                <Image
                    src="/images/chapters/velvet/velvet.svg"
                    width={300}
                    height={300}
                    alt="Krumpáč"
                />
            </div>
            <div className="pb-48 mx-auto mt-12 content lg:w-1/2">
                <div className="flex">
                    <div className="w-3/5">
                        <Image
                            src="/images/chapters/velvet/01.jpg"
                            width={400}
                            height={400}
                            alt="obr 1"
                            className="rounded-l w-full"
                        />
                    </div>
                    <div className="w-2/5">
                        <Image
                            src="/images/chapters/velvet/02.jpg"
                            width={400}
                            height={400}
                            alt="obr 2"
                            className="rounded-r w-full"
                        />
                    </div>
                </div>
                <p className="mt-8 mb-4">
                    Po revoluci roku 1989, přezdívané sametová, se nejen odbory, ale celá společnost
                    ocitly v mnohem svobodnější společnosti. 
                </p>
                <p className="mb-4">
                    Skončila vláda jedné strany, skončilo předstírání neexistující “péče” ROH – z šedého,
                    normalizovaného života se stal život barevný – a západní. 
                </p>
                <p className="mb-4">
                    V tom se však skrýval i jistý problém. Přehnaný optimismus a přehnané démonizování
                    všeho státního, sociálního, nedejbože levicového – a tudíž i odborů a jakýchkoli
                    hnutí za práva pracujících – uvolnily cestu některým porevolučním vládám a jejich
                    reformám, jejichž záměrem dozajista nebylo učinit život pracujících jedinců lehčím.
                    Tedy, alespoň pokud nepatřily k takzvaným <span className="green">horním deseti tisícům</span>.
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="mb-8">
                        Tento postarší pojem v podstatě zastupuje to, co se dnes častěji přezdívá “1%” – tedy
                        úzkou vrstvu těch nejbohatších a nejmocnějších. Kolik takových lidí reálně je a bavíme-li
                        se spíše o majetku nebo o moci, o tom by se dala vést debata, pro jednoduchost můžeme
                        říct, že kdokoli byl kdy na obálce Forbesu, dozajista pod toto označení spadá.
                    </p>
                    <Image
                        src="/images/chapters/velvet/03.jpg"
                        width={400}
                        height={400}
                        alt="obr 3"
                        className="rounded mx-auto mb-8"
                    />
                </div>
                <p className="mb-8">
                    V zájmu hájit (nejen) pracovní práva zbylých několika milionů “obyčejných” pracujících
                    se musely odbory doslova obrodit a přijít s novými strategiemi i způsoby
                    komunikace <span className="green">pro novou dobu</span>.
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/bHFXNA32Djc?si=oHYn2ppq6RdQTVkD" 
                        title="YouTube video player" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="rounded mx-auto mb-8"
                    ></iframe>
                    <p className="mb-4">
                        Film Dědictví aneb Kurvahošigutntag režisérky Věry Chytilové byl ve své době neprávem zatracován,
                        aby se později stal naprostou legendou. Oboje přitom ze stejných důvodů – jak dokonale vystihnul
                        právě kulturní a společenský dopad, který mělo nové ekonomické uspořádání na český a slovenský lid.
                        Dodnes zůstává nepřekonaným záznamem pomyslné “nové doby”, kdy “host vyhazuje vrchního”.
                    </p>
                </div>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="0" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">4.1</span>Peace {"&"} Love (and Money)
                        <br/>aneb Sametová revoluce a přestavba společnosti 
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('0') ? "block" : "hidden"}`}>
                    <div className="absolute left-0 -mt-24 transform scale-x-[-1]">
                        <Image
                            src="/images/chapters/velvet/velvet.svg"
                            width={200}
                            height={200}
                            alt="Tradice"
                        />
                    </div>
                    <p className="mt-8 mb-8">
                        Na přelomu osmdesátých a devadesátých let 20.století dostaly komunistické režimy napříč Evropou
                        KO – to už jsme si řekli. Ale jak se to vlastně stalo?
                    </p>
                    <p className="mb-8">
                        Zhruba od druhé poloviny osmdesátých let se ke kritice aktivistů 
                        a <Link href="https://cs.wikipedia.org/wiki/Disident" target="_blank">disidentů</Link> postupně začali
                        přidávat normální lidé. Hnala je jednoduchá myšlenka – pokud má komunismus znamenat ráj na zemi
                        a hojnost pro všechny, proč se mají na Západě ve všem líp? Zatímco na Východě nejsou občas
                        ani běžné potraviny nebo toaletní papír.
                    </p>
                    <Image
                        src="/images/chapters/velvet/04.jpg"
                        alt="obr 4" 
                        width={600}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        Že věci nefungují začali vidět i někteří komunističtí politici a političky. Systém už vlastně dojížděl
                        jen <span className="green">ze setrvačnosti</span> – byl příliš velký a sám sebou vystrašený, aby
                        dokázal rychle zastavit. 
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/Ss-P4qLLUyk?si=_f-RtRsjmzRceu4k" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="mt-4 mb-8 rounded mx-auto"
                        ></iframe>
                        <p className="mb-4 text-center">
                            Zhruba takhle složitý, neefektivní a bizarní byl komunistický systém na konci osmdesátých let.
                        </p>
                    </div>
                    <Image
                        src="/images/chapters/velvet/05.png"
                        alt="obr 5" 
                        width={600}
                        height={600}
                        className="rounded mx-auto mt-4 mb-8"
                    />
                    <p className="mb-4 text-center">
                        Z komunistické formy vlády zbyly na jejím závěru už jen vyprázdněné symboly jako povinné
                        průvody s povinným “nadšením” a máváním praporků.
                    </p>
                    <p className="mb-4">
                        V roce 1989 pak začaly socialistické režimy východního bloku padat jako domino.
                        U nás se tomu, co se stalo, říká sametová revoluce.
                    </p>
                    <p className="mb-8">
                        Proč sametová? Výměna autoritářství za liberální demokracii, ve které žijeme dneska, se
                        totiž obešla bez jediné lidské oběti. Ovšem bez násilí to také úplně nebylo – obušky veřejné
                        bezpečnosti pacifikující demonstrující lítaly vzduchem až až.
                    </p>
                </div>
            </div>
        </>
    );
};

export default VelvetPage;
