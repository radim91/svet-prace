"use client";

import '../assets/styles/changes/style.css';
import Image from "next/image";
import { ToggleModeContext } from "../../context/ToggleModeContext";
import { useContext, useState } from "react";
import Mode from "@/enum/mode";
import CollapseButton from '@/components/UI/CollapseButton';
import Link from 'next/link';
import Path from '@/enum/path';
import SideImage from '@/components/UI/SideImage';
import ImageDesc from '@/components/UI/ImageDesc';

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
                <h2 className="text-3xl mt-8 font-semibold text-center">
                    Za koncem dějin zahněte doprava
                </h2>
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
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="0" />
                    <h3 className="text-left text-3xl blue mb-4 flex">
                        <div className="subchapter-nr-width">
                            <span className="me-8">4.1</span>
                        </div>
                        <div>
                            Peace {"&"} Love (and Money) aneb Sametová revoluce a přestavba společnosti
                        </div>
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('0') ? "block" : "hidden"}`}>
                    <SideImage side="left" mainImageId={4} />
                    <p className="mt-8 mb-8">
                        Na přelomu osmdesátých a devadesátých let 20.století dostaly komunistické režimy napříč Evropou
                        KO – to už jsme si řekli. Ale jak se to vlastně stalo?
                    </p>
                    <p className="mb-8">
                        Zhruba od druhé poloviny osmdesátých let se ke kritice aktivistů 
                        a <Link href="https://cs.wikipedia.org/wiki/Disident" target="_blank" className="underline">disidentů</Link> postupně začali
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
                        className="rounded mx-auto mt-4"
                    />
                    <ImageDesc
                        description="Z komunistické formy vlády zbyly na jejím závěru už jen vyprázdněné symboly jako povinné
                        průvody s povinným “nadšením” a máváním praporků."
                    />
                    <p className="mt-4 mb-4">
                        V roce 1989 pak začaly socialistické režimy východního bloku padat jako domino.
                        U nás se tomu, co se stalo, říká sametová revoluce.
                    </p>
                    <p className="mb-4">
                        Proč sametová? Výměna autoritářství za liberální demokracii, ve které žijeme dneska, se
                        totiž obešla bez jediné lidské oběti. Ovšem bez násilí to také úplně nebylo – obušky veřejné
                        bezpečnosti pacifikující demonstrující lítaly vzduchem až až.
                    </p>
                    <Image
                        src="/images/chapters/velvet/06.png"
                        alt="obr 6" 
                        width={400}
                        height={600}
                        className="rounded mx-auto"
                    />
                    <p className="mb-8">
                        Lidé, kteří byli dlouhá ve vězení a nemohli veřejně psát ani vystupovat, se po sametové revoluci
                        najednou dostali do čela státu. Prezidentem se stal spisovatel Václav Havel, který si během doby
                        komunismu za hájení lidských práv odseděl 5 let.
                    </p>
                    <Image
                        src="/images/chapters/velvet/07.png"
                        alt="obr 7" 
                        width={600}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        Co to všechno znamenalo pro obyčejné lidi? Euforie, která zavládla doslova <span className="green">na celé planetě</span>{" "}
                        se projevila v prohlášeních slavných ekonomů a filozofů o konci dějin – odteď už bude všechno
                        jenom růžové, dalo by se říct.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Černobílý studenoválečný systém Východ/Západ měl vliv skutečně na celou planetu, včetně tak odlehlých
                            končin jako Afghanistán, Irák, nebo různých afrických i latinskoamerických zemí – Sovětský svaz a
                            západní země spolu nikdy napřímo neválčili, ale přetahovali se o globální vliv, vedli “proxy” války
                            v zemích, kterým dodávali zbraně, dosazovali i svrhávali diktátory, uzavírali obchodní dohody a 
                            vyhlašovali sankce a snažili se šířit i svůj kulturní vliv (pomocí filmů, literatury, vědy, hudby).
                        </p>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/Z3v-0RWe-rA?si=i2uDxZ18WZL2pZGz" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="rounded mx-auto"
                        ></iframe>
                        <ImageDesc
                            description="V afghánské poušti tak proti ruské armádě bojoval třeba i hollywoodský hrdina John
                            Rambo v podání Sylvestera Stallonea."
                        />
                    </div>
                    <Image
                        src="/images/chapters/velvet/08.png"
                        alt="obr 8" 
                        width={400}
                        height={600}
                        className="rounded mx-auto mt-8"
                    />
                    <ImageDesc
                        description="Francis Fukuyama, americký filosof a politolog, který se tak úplně netrefil."
                    />
                    <p className="mt-4 mb-4">
                        Podobně to vnímali lidé, kteří na Václavském i jiných náměstích svrhávali na demonstracích režim.
                        Po 40 letech místy kruté a místy úmorné a vyčerpávající diktatury se naše země otevírala světu.
                    </p>
                    <p className="mb-4">
                        Ve sféře politiky to znamenalo konec vlády jedné strany (KSČ) a obnovení pluralitní demokracie – politického
                        systému, kde spolu politické strany soutěží o hlasy občanů ve volbách a v parlamentu pak zastupují společenské
                        vrstvy nebo názorové proudy, přijímají zákony a řídí celý stát.
                    </p>
                    <p className="mb-4">
                        Pro ekonomiku byl zásadní konec <Link href="https://cs.wikipedia.org/wiki/Pl%C3%A1novan%C3%A1_ekonomika" target="_blank" className="underline">centrálního plánování</Link>{" "}
                        a obnovení tržních principů kapitalismu.
                    </p>
                    <p className="mb-4">
                        Jak ale něčeho takového dosáhnout takřka “přes noc”? <span className="green">Dost těžko.</span>
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            Představte si, že neexistuje soukromé podnikání, neexistuje soukromý pronájem bytů, neexistují banky, kromě
                            státních, neexistují OSVČ, stát dohlíží tak či onak (a s větší či menší mírou úspěchu) vlastně na všechno.
                            Určuje, čeho se kolik vyrobí, kdo co smí a nesmí dělat, kolik co bude stát, s čím se obchodovat vůbec nebude, 
                            co smí a nesmí přes hranice. Defakto zastupuje i celou nabídku a poptávku… Soukromé vlastnictví jako takové 
                            pochopitelně existuje – lidé mají svoje domy, auta nebo chaty a samozřejmě peníze – ale nemohou s nimi dělat 
                            úplně cokoli. Takové to bylo po čtyři dekády vlády komunistické strany.
                        </p>
                    </div>
                    <Image
                        src="/images/chapters/velvet/09.png"
                        alt="obr 9" 
                        width={400}
                        height={600}
                        className="rounded mx-auto mt-4 mb-8"
                    />
                    <p className="mb-4">
                        Proto taky ekonomická reforma měla mnoho složek a trvala celou první polovinu devadesátých let . Majetek státu
                        byl někdy navracen původním vlastníkům, kterým byl kdysi znárodněn (restituce), jindy privatizován (převeden 
                        do soukromých rukou). A privatizace probíhala jak prodejem, tak zvláštním systémem takzvané kuponové privatizace, 
                        kdy stát za symbolický poplatek prodal lidem “poukázky” za které si mohli koupit akcie různých podniků.
                    </p>
                    <p className="mb-4">
                        Vrátil se kapitalismus.
                    </p>
                    <p className="mb-4">
                        Podobně jako v jiných oblastech se v “porevolučním” nadšení nejprve myslelo, že se vše vyřeší vlstně samo 
                        a za pár let takzvaně “doženeme Západ”. Hlavně, aby se co nejvíce minimalizovala role státu.
                    </p>
                    <p className="blue text-2xl text-center">
                        Zde bude video o privatizaci
                    </p>
                    <p className="mb-4">
                        Mělo to však i své stinné stránky. Kromě hospodářské kriminality, která nutně vyklíčila v mezerách, kde nová
                        vláda ještě nestíhala vyrábět <span className="green">adekvátní zákony</span>, se objevily i úplně nové
                        problémy. Začalo být levnější některé výrobky či potraviny dovážet, než vyrábět a mnoho podniků se zavřelo 
                        nebo dostalo do problémů. Objevila se nezaměstnanost, která “za komunistů” neexistovala. Skončila regulace 
                        cen a nájmů a některé ceny astronomicky stouply. Společnost se začala od základů přeskupovat – jako vždy 
                        v kapitalismu, otevírala se cesta nahoru, snadnější byl ale i pád dolů. Devadesátá léta, kdy probíhaly 
                        tyto “společenské hry”, stvořila miliardáře i bezdomovce.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green mb-4 ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Kromě toho, co jsme už zmínili – že bylo třeba vymyslet, jak vlastně prakticky vyřešit všechny ty situace
                            s bankami, podnikáním a penězi – na to bylo třeba taky vymyslet spoustu zákonů. A to trvalo dlouho. A 
                            tak byla mnohdy ruka “zločinu” rychlejší než ruka práva.
                        </p>
                        <Image
                            src="/images/chapters/velvet/10.jpg"
                            alt="obr 10" 
                            width={400}
                            height={600}
                            className="rounded mx-auto"
                        />
                        <ImageDesc
                            description="Největším symbolem ekonomických zločinů devadesátých let se stal Viktor Kožený."
                        />
                    </div>
                    <p className="mb-4">
                        Ekonomika se otevírala také světu. Představitelé československého (a po roce 1993 českého) státu volili 
                        různé strategie, jak přilákat na trh zahraniční investory.
                    </p>
                    <p className="mb-8">
                        Jednou z nich byl příslib nízkých nákladů za pracovní sílu, což v důsledku znamenalo, že jeden z jevů 
                        naší ekonomiky se staly nízké mzdy pro pracující. S tímto jevem se bohužel potýkáme dodnes.
                    </p>
                    <Image
                        src="/images/chapters/velvet/11.jpg"
                        alt="obr 11" 
                        width={400}
                        height={600}
                        className="rounded mx-auto mb-12"
                    />
                </div>
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="1" />
                    <h3 className="text-left text-3xl blue mb-4 flex">
                        <div className="subchapter-nr-width">
                            <span className="me-8">4.2</span>
                        </div>
                        <div>
                            Haters Gonna Hate aneb Hledání místa odborů v polistopadové společnosti
                        </div>
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('1') ? "block" : "hidden"}`}>
                    <SideImage side="right" mainImageId={1} />
                    <p className="mt-8 mb-8">
                        Odbory přechod od centrálně plánované k tržní ekonomice samozřejmě podporovaly. Zároveň ale od 
                        začátku připomínaly rizika procesu. Liberalizace trhu a privatizace majetku musí být provedena 
                        sociálně citlivě – jinak se mohou dostavit velké společenské problémy.
                    </p>
                    <Image
                        src="/images/chapters/velvet/12.gif"
                        width={400}
                        height={400}
                        alt="obr 12"
                        className="mx-auto rounded mb-8"
                    />
                    <p className="mb-8">
                        Veřejné mínění podobným “škarohlídským” pohledům ale nebylo nakloněno. Boj s komunismem byl 
                        jednou pro vždy vyhrán, dějiny ukončeny, trh bez přívlastků a jeho “neviditelná ruka” měly 
                        vyřešit vše. Odbory byly brány jako relikt minulosti, organizace pro lidi, kterým se nechce 
                        makat a radši by mávali vlaječkami na prvomájových demonstracích jako “před revolucí”.
                    </p>
                    <Image
                        src="/images/chapters/velvet/13.png"
                        alt="obr 13" 
                        width={400}
                        height={600}
                        className="rounded mx-auto"
                    />
                    <ImageDesc
                        description="Z aktérů revoluce se stávaly symboly a ty, jak známo, patří na triko!"
                    />
                    <p className="mt-4 mb-4">
                        Odbory se skutečně musely zbavit nánosů čtyřicetileté vlády jedné strany a demokratizovat 
                        se. Nakročily k tomu už na generální stávce, kterou jsme <Link href={Path.TRADITION} className="underline">tu párkrát zmínili</Link>.
                    </p>
                    <Image
                        src="/images/chapters/velvet/14.svg"
                        alt="obr 14" 
                        width={400}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-8">
                        V březnu 1990 pak proběhl první všeodborový sjezd po pádu komunismu. ROH bylo konečně posláno, 
                        kam patří, a založena byla zcela nová odborová centrála s názvem Československá konfederace 
                        odborových svazů (ČSKOS), po vzniku samostatné České republiky pak Českomoravská komora (od 
                        1998 konfederace) odborových svazů (ČMKOS).
                    </p>
                    <Image
                        src="/images/chapters/velvet/15.gif"
                        alt="obr 15" 
                        width={500}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <span className="absolute ms-48 -mt-32 fellix-bold text-8xl text-white">
                        ČMKOS!
                    </span>
                    <p className="mb-8">
                        I když musely odbory “v devadesátkách” bojovat za svou pověst, podařilo se jim mnoho úspěchů. 
                        Mezi ty nejvýznamnější patřilo přizvání k připomínkování sociálních zákonů, začlenění do 
                        mezinárodních odborových struktur demokratického světa nebo přijetí základních odborových 
                        zákonů, jež jsou dnes součástí zákoníku práce.
                    </p>
                    <p className="blue text-2xl text-center">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/ENXaR8A4BFA?si=gUWib7nWfwRCpMJ0" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="rounded mx-auto"
                        ></iframe>
                    </p>
                    <ImageDesc
                        description="První polistopadový ministr práce a sociálních věcí Petr Miller hovoří o základní odborové
                        legislativě (Zdroj: Archiv ČT, vysílání dne 4. 12. 1990)."
                    />
                    <p className="mt-4 mb-4">
                        To nejdůležitější ale bylo třeba teprve nastartovat. Sociální dialog. Bylo potřeba úplně 
                        nově vybudovat mechanismy, jak spolu mají zaměstnanci a 
                        zaměstnavatelé <span className="green">jednat o podmínkách práce</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Během doby komunistické vlády měly odbory na starosti úlohy jako organizace podnikových 
                            rekreací nebo vyplácení sociálních dávek. Jejich činnost v oblasti sociálního dialogu byla 
                            zcela zanedbatelná a pouze formální. Není divu – jiní zaměstnavatelé než stát tu po 40 let 
                            vlastně ani nebyli, tak kdo měl s kým jednat.
                        </p>
                        <p className="blue text-center text-2xl">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/fgnvCZ0BJU4?si=68IkfCKGVW-fG3Lq" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                                className="rounded mx-auto"
                            ></iframe>
                        </p>
                        <ImageDesc
                            description="Jednání byla často bouřlivá, všechny zúčastněné strany obnoveného sociálního dialogu se 
                            však snažily najít kompromis (Zdroj: Archiv ČT, vysílání ze dne 28. 8. 1990)."
                        />
                    </div>
                    <p className="mb-4">
                        Z toho důvodu vznikla Rada hospodářské a sociální dohody České republiky, pro kterou se 
                        také užívá název <span className="green">tripartita</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/velvet/16.png"
                            alt="obr 16" 
                            width={300}
                            height={600}
                            className="rounded mx-auto mt-4 mb-8"
                        />
                        <p className="mb-8">
                            Tripartita doslova znamená tři strany (parties). A je to přesně tohle. Setkání tří 
                            různých stran, zaangažovaných v jednom problém. Dnes se s tímto slovem můžete setkat 
                            i mimo odbory – na základních školách třeba tripartita znamená updatovanou verzi 
                            třídní schůzky, kde se potkává rodič, žák i učitel dohromady.
                        </p>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/kOIfwgIGA5Q?si=7Xqc0cbJF5_7IM9_" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="mx-auto rounded mb-8"
                        ></iframe>
                    </div>
                    <p className="mb-4">
                        Tato organizace je “nejvyšším orgánem sociálního dialogu a garantem sociálního smíru v zemi”.  
                        Co to znamená lidskou řečí? V rámci jednání triparity se vždy sejdou u jednoho stolu:
                    </p>
                    <ol className="mb-4 fellix-regular list-decimal">
                        <li className="ps-2">
                            zástupci zaměstnavatelů: těm jde o hospodářský růst a konkurenceschopnost českých firem (rozuměj – o peníze) 
                        </li>
                        <li className="ps-2">
                            zástupci zaměstnanců (odborů): ti usilují o důstojné pracovní podmínky (rozuměj – o peníze)
                        </li>
                        <li className="ps-2">
                            zástupci vlády: snaží se o to, aby sociální dialog byl férový, obě strany dosáhly smíru a z 
                            jednání vzešly závěry, které zvýší spravedlnost ve společnosti (rozuměj – jde jim o hlasy ve volbách)
                        </li>
                    </ol>
                    <p className="mb-8">
                        Takové dohadování se by mohlo znít jako sobecká přestřelka, jenže ve výsledku slouží jako výsostně 
                        demokratický proces, kde dbaním na prospěch druhých dosáhne každá strana i svého vlastního. Firmy 
                        chtějí spokojené zaměstnance a stát chce spokojené firmy, které rozproudí hospodářství a 
                        neodcházejí do zahraničí – a tak dále.
                    </p>
                    <Image
                        src="/images/chapters/velvet/17.webp"
                        alt="obr 17" 
                        width={500}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                       V polovině 90. let již bylo jasné, že odborové organizace budou i nadále 
                        na <span className="green">podnikové, sektorové i státní</span> úrovni 
                        stabilní součástí politické kultury České republiky.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Počkat, počkat, počkat – kolik že těch úrovní mají odbory? Zní to trochu jako děj filmu 
                            Inception Christophera Nolana – sen ve snu, který se zdá někomu ve snu.
                        </p>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/JweJ3yd-JmQ?si=MBPkw8yi8PNyaAkg" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="mb-8 rounded mx-auto"
                        ></iframe>
                        <p className="mb-4">
                            Ve skutečnosti to tak složité není. První je úroveň podniků – zde se odborům říká základní 
                            organizace. Zaměstnanci a zaměstnankyně jednoho podniku (třeba výrobny rohlíků) zde jednají 
                            o svých pracovních podmínkách se svým zaměstnavatelem.
                        </p>
                        <p className="mb-4">
                            Občas je ale potřeba se poradit i s kolegy a kolegyněmi z jiných podniků – někteří zaměstnavatelé 
                            možná tlačí platy příliš nízko a je dobré mít argumenty, že v jiných rohlíkárnách je to jinak. 
                            Z toho důvodů spolu jednají zaměstnanci z jednoho odvětví (celého rohlíkového sektoru) napříč 
                            podniky a organizují se do takzvaných odborových svazů, které shromažďují informace z jednotlivých 
                            podniků, ale například i základním organizacím poskytují zdarma právní pomoc.
                        </p>
                        <p className="mb-4">
                            Odborové svazy se pak napříč obory sdružují do jedné velké odborové centrály, která je deštníkovou 
                            (zastřešující) organizací pro odboráře všech oborů: čili nejen pekaře rohlíků, ale i zdravotní 
                            sestry, učitele, houslistky nebo strojírenské dělníky.
                        </p>
                        <p className="mb-8">
                            Největší odborová centrála....
                        </p>
                        <Image
                            src="/images/chapters/velvet/18.png"
                            alt="obr 18" 
                            width={500}
                            height={600}
                            className="rounded mx-auto mb-8"
                        />
                        <p className="mb-8">
                            ...ano, ČMKOS, v současné době sdružuje 31 svazů. ČMKOS je především reprezentační orgán, 
                            rozhodovací moc je demokraticky rozložena mezi jednotlivé svazy. Zásady odborové plurality 
                            také vedly k tomu, že vedle největší ČMKOS vznikaly i další odborové centrály – nejvýznamnější 
                            z nich se stala Asociace samostatných odborů (ASO) založená v červenci 1995. ASO spolu s 
                            ČMKOS také zastupuje zaměstnance v tripartitě.
                        </p>
                        <Image
                            src="/images/chapters/velvet/19.png"
                            alt="obr 19" 
                            width={600}
                            height={600}
                            className="rounded mx-auto"
                        />
                        <ImageDesc
                            description="Jednoduché, no ne?"
                        />
                    </div>
                    <p className="mb-4">
                        I když si odbory už vybudovaly určité postavení, politická reprezentace poloviny devadesátých let 
                        pod vedením <span className="green">Václava Klause</span> se ale pokoušela cíleně umenšovat jejich pozici jako aktéra sociálního 
                        dialogu na státní úrovni.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Václav Klaus, ekonom, tenista, milovník Margaret Thatcherové a největší politický fenomén 
                            devadesátek, možná vůbec porevoluční doby. Mysleme si o něm co chceme, ale politiku ovlivnil 
                            jako málokdo – a přítelem odborů dozajista nebyl. Nejspíš je považoval za příliš levicové, 
                            stejně jako snowboard, batůžky, zeleninový salát, nebo láhev s vodou (to opravdu řekl). 
                            Zato autenticky pravicové podle něj bylo věřit,  že vše vyřeší trh a že neexistují špinavé 
                            peníze. I dodnes zůstává Klaus kontroverzní figurou – jako prezident rozdal amnestii 
                            tisícům (mimo jiné) ekonomických kriminálníků a v současnosti v institutu, nesoucím jeho 
                            vlastní jméno, vydává knihy o neexistenci klimatické změny. Je to vskutku svéráz!
                        </p>
                        <Image
                            src="/images/chapters/velvet/20.png"
                            alt="obr 20" 
                            width={400}
                            height={600}
                            className="rounded mx-auto mb-8"
                        />
                    </div>
                    <p className="mb-4">
                        Odborové centrály pobouřilo například schvalování reforem sociálních zákonů bez 
                        předchozího projednání se zástupci odborů. 
                    </p>
                    <p className="mb-8">
                        Začala se také ozývat – i z širší společnosti – kritika politiky škrtů. Odbory se postavily 
                        do čela protestů proti vládní politice, cž vyvrcholilo demonstrací na Staroměstském náměstí 
                        v listopadu 1997, na které se sešlo na 100 000 lidí. Do té doby neproběhl od sametové 
                        revoluce větší protest.
                    </p>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/u3gT5LT-cyU?si=Q4K6VV2AC4QPQ0PV" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="rounded mx-auto"
                    ></iframe>
                    <ImageDesc
                        description="Odborová demonstrace na Staroměstském náměstí, 8. 11. 1997. V čele průvodu a na pódiu 
                        Richard Falbr, předseda ČMKOS v letech 1994–2002."
                    />
                    <p className="mt-4 mb-4">
                        Poté, co se odbory takto hlasitě ozvaly, nabyl jejich hlas zase na důležitosti. Na 
                        přelomu tisíciletí, v době vlády ČSSD, prosadily odbory důležitá opatření jako zvýšení 
                        minimální mzdy, nemocenských dávek nebo platů ve veřejném sektoru.
                    </p>
                    <p className="mb-8">
                        Zároveň se stále více prosazovalo kolektivní vyjednávání (zaměstnanci vyjednávají o platu 
                        jako celek, ne jednotlivě). K roku 2001 pracovalo pod kolektivní smlouvou vyššího stupně, 
                        které se uzavírají pro celé odvětví, už asi 735 tisíc zaměstnanců.
                    </p>
                    <Image
                        src="/images/chapters/velvet/21.png"
                        alt="obr 21" 
                        width={600}
                        height={600}
                        className="rounded mx-auto"
                    />
                    <ImageDesc
                        description="K dosažení takto skvělých výsledků stačil sociální dialog, nebylo ani třeba angažovat 
                        Sylvestera Stallonea, který si důrazného odboráře zahrál ve filmu F.I.S.T."
                    />
                    <p className="mt-4 mb-4">
                        Zásadním mezníkem bylo přijetí Zákona o ochraně zaměstnanců při platební neschopnosti zaměstnavatele v 
                        roce 2000. Tento zákon stanovil, že při likvidaci podniků – kterých vlivem ekonomické krize z roku 
                        1998 zásadně přibývalo - musejí na prvním místě dostat zaměstnanci své mzdy. Odbory tak uhájily jednu 
                        ze svých nejsilnějších zásad, že zaměstnanci nesmějí nést zbytečné 
                        velkou <span className="green">tíhu podnikatelského rizika</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            A proč ne? V dnešní době flexibilních úvazků a “zaměstnávání” OSVČ se to bere tak, že zaměstnanec 
                            na riziko přistupuje dobrovolně a vlastně mu dává svobodu. Jenže nejjednodušší odpověď na to, 
                            proč by neměl zaměstnanec sdílet riziko, že přijde ze dne na den o práci nebo nedostane výplatu, 
                            když se zaměstnavateli nedaří, je to, že zaměstnavatel s ním nesdílí svoje vrcholy (když je 
                            obrat nečekaně skvělý, zaměsnanci jsou z dělení zisku vynecháni), proč by se tedy měl dělit o své pády.
                        </p>
                        <Image
                            src="/images/chapters/velvet/22.jpg"
                            alt="obr 22" 
                            width={400}
                            height={600}
                            className="rounded mx-auto mb-8"
                        />
                    </div>
                </div>
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="3" />
                    <h3 className="text-left text-3xl blue mb-4 flex">
                        <div className="subchapter-nr-width">
                            <span className="me-8">4.3</span>
                        </div>
                        <div>
                            Speak to Me aneb Sociální dialog v 21. století
                        </div>
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('3') ? "block" : "hidden"}`}>
                    <SideImage side="left" mainImageId={4} />
                    <p className="mt-8 mb-8">
                        Politika je jako život – pořád na houpačce.
                    </p>
                    <Image
                        src="/images/chapters/velvet/23.jpg"
                        alt="obr 23" 
                        width={600}
                        height={600}
                        className="rounded mx-auto"
                    />
                    <ImageDesc
                        description="Podle některých vlád je rolí odborů smutně čekat, jestli s nimi někdo bude mluvit, nebo ne."
                    />
                    <p className="mt-4 mb-4">
                        Vcelku uspokojivý sociální dialog se sociálně demokratickými vládami na přelomu devadesátých a 
                        nultých let tak vystřídalo ochlazením vztahů mezi zástupci odborů a státem v době dvou 
                        pravicových vlád Mirka Topolánka (2006–2009).
                    </p>
                    <p className="mb-8">
                        Topolánkova vize reformy veřejných financí “chudým brala a bohatým dávala” – škrty na straně 
                        výdajů totiž doplnila masivními úlevami na daních, které pomohly jen horním procentům společnosti.
                    </p>
                    <Image
                        src="/images/chapters/velvet/24.png"
                        alt="obr 24" 
                        width={600}
                        height={600}
                        className="rounded mx-auto"
                    />
                    <ImageDesc
                        description="Není divu, že si Mirek Topolánek dobře rozuměl s italským mediálním magnátem a politikem Silviem 
                        Berlusconim, který byl proslulý mafiánským stylem vládnutí."
                    />
                    <p className="mt-4 mb-4">
                        Symbolem reforem se staly poplatky za návštěvu lékaře nebo vyzvednutí léku (zavedené v roce 2007).
                        Poplatky vzbudily všeobecné vášně, proti reformě zdravotnictví se ale vyjádřila i třeba Univerzita 
                        Karlova. Odbory hlasitě protestovaly a pustily se do demnostrací. Poplatky byly nakonec zrušeny roku 2014.
                    </p>
                    <Image
                        src="/images/chapters/velvet/25.png"
                        alt="obr 25" 
                        width={500}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        V letech 2008 a 2009 se začala ve střední Evropě naplno projevovat{" "}
                        <span className="green">další finanční krize</span> – tentokrát opravdu silná a globální.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/vgqG3ITMv1Q?si=c9Iii-Bnj5NEKoD-" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="mx-auto rounded mt-4"
                        ></iframe>
                        <ImageDesc
                            description="Chcete vědět víc o krizi na konci nultých let? Pusťte si film The Big Short Adama 
                            McKaye – vtipnou, ale nekompromisní formou se tam dozvíte to nejdůležitější."
                        />
                    </div>
                    <p className="mb-8">
                        Kabinet Petra Nečase chtěl přikročit ke zmírnění dopadu krize způsobem, který ale opět dopadal 
                        pouze na obyčejné lidí. Vláda se pokusila o privatizaci penzijního, zdravotnického a sociálního 
                        systému, podezřele při tom ale nahrávala soukromým firmám. Kromě toho stigmatizovala lidi 
                        pobírající sociální dávky (zřízením takzvané sociální karty), šikanovala nezaměstnané (museli 
                        se pravidelně hlásit na místní poště nebo vykonávat veřejné práce), a také omezovala péči 
                        o osoby se zdravotním postižením.
                    </p>
                    <Image
                        src="/images/chapters/velvet/26.jpg"
                        alt="obr 26" 
                        width={300}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        Odbory se i tentokrát postavily do čela odporu proti vládní asociální politice. Zahájily kampaň 
                        Otevřete oči a začaly spolupracovat s organizacemi sdružující osoby s tělesným postižením nebo 
                        protestními iniciativami, z nichž nejznámější se stala ProAlt.
                    </p>
                    <p className="mb-16">
                        Protivládní koalice složená z odborů a několika desítek občanských organizací a iniciativ požádala 
                        různé protestní akce, z nichž největší byla mohutná manifestace Stop vládě 20. dubna 2012, jíž se 
                        zúčastnilo přes 100 000 osob a stala se tak jednou z největších demonstrací v polistopadových 
                        dějinách (v současné době je ale již překonaly například demonstrace Milionu chvilek za demokracii).
                    </p>
                    <Image
                        src="/images/chapters/velvet/27.png"
                        alt="obr 27" 
                        width={300}
                        height={600}
                        className="rounded mt-8 ms-24"
                    />
                    <Image
                        src="/images/chapters/velvet/28.png"
                        alt="obr 28" 
                        width={300}
                        height={600}
                        className="absolute -mt-56 ms-96"
                    />
                    <ImageDesc
                        description="Odborář z OSSOO během protestu před MPSV (2012)."
                    />
                    <p className="mt-4 mb-4">
                        Odbory však jenom neprotestovaly – představily i vlastní pohled na na hospodářský a sociální 
                        vývoj. Odboroví ekonomové prezentovali své vývody v publikaci Vize 2012.
                    </p>
                    <p className="mb-4">
                        <span className="green">Jak se říká v pohádce</span>, “každá voda nakonec steče dolů – a každá 
                        špatná vláda padne.” Takže i této vládě takzvané rozpočtové zodpovědnosti vystavili odboráři a 
                        odborářky i nespokojení občané finální STOPku a v roce 2013 extrémně nepopulární 
                        “Nečasova crew” podala demisi.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/zeqEE9D700g?si=TDxR4yrbP9p1sHEI" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="mx-auto rounded mb-8 mt-4"
                        ></iframe>
                    </div>
                    <Image
                        src="/images/chapters/velvet/29.png"
                        alt="obr 29" 
                        width={400}
                        height={600}
                        className="rounded mx-auto mt-4"
                    />
                    <ImageDesc
                        description="A co dál?"
                    />
                    <p className="mt-4 mb-4">
                        Odborové organizace jsou na našem území <span className="green">součástí občanské společnosti</span> již 
                        přes 150 let. A doufejme, že budou i nadále.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            V polistopadovém vývoji České republiky dokázaly, že jsou důležitou a nezastupitelnou organizační 
                            platformou na všech úrovních, včetně té mezinárodní. Základní odborové organizace na úrovni podniků 
                            mohou prostřednictvím kolektivního vyjednávání zlepšovat pracovní podmínky zaměstnanců. Na státní 
                            úrovni vypracovávají ekonomické a sociologické analýzy o trhu práce, vstupují do tvorby a realizace 
                            sociální politiky a reprezentují zájmy zaměstnanců při projednávání nových právních předpisů. V 
                            neposlední řadě mezi důležité funkce odborů patří i poskytování bezplatné právní pomoci.
                        </p>
                    </div>
                    <p className="mb-12">
                        Je to dobrý barometr stavu demokracie – kdykoli začne odborům přituhovat, můžete si být jistí, 
                        že se stahuje smyčka i nad svobodnou a solidární společností.
                    </p>
                </div>
                <div className="mt-24 text-center">
                    <Link
                        className="btn-primary-large"
                        href={Path.FUTURE}
                    >
                        <span className="text-white">Další kapitola</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default VelvetPage;
