"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { ToggleModeContext } from "@/context/ToggleModeContext";
import Mode from "@/enum/mode";
import Link from "next/link";
import CollapseButton from "@/components/UI/CollapseButton";
import Path from "@/enum/path";
import SideImage from "@/components/UI/SideImage";
import ImageDesc from "@/components/UI/ImageDesc";
import SubchapterHeading from "@/components/UI/SubchapterHeading";
import { WindowSizeContext } from "@/context/WindowSizeContext";

const FuturePage = () => {
    const { toggleMode } = useContext(ToggleModeContext);
    const { windowSize } = useContext(WindowSizeContext);
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
            <title>Budoucnost práce - Svět práce</title>
            <div className="mx-auto headings">
                <h1 className={`mt-6 text-4xl md:text-5xl md:text-center ${toggleMode === Mode.FUN ? "green" : "blue"}`}>
                    5. <span className="ms-2">Budoucnost práce</span>
                </h1>
                <h2 className="text-xl md:text-3xl mt-6 font-semibold md:text-center">
                    Chytrá, nebo vychytralá?
                </h2>
            </div>
            <div className="hidden md:block heading-image mt-12">
                <Image
                    src="/images/chapters/future/future.svg"
                    width={300}
                    height={300}
                    alt="Budoucnost"
                    className="transform scale-x-[-1]"
                />
            </div>
            <div className="pb-24 md:pb-48 mx-auto mt-12 content lg:w-1/2">
                <div className="flex justify-center mb-8">
                    <div className="w-1/2">
                        <Image
                            src="/images/chapters/future/01.jpg"
                            alt="obr 1"
                            width={1125}
                            height={633}
                            className="rounded-l w-full"
                        />
                    </div>
                    <div className="w-1/2">
                        <Image
                            src="/images/chapters/future/02.jpg"
                            width={1125}
                            height={633}
                            alt="obr 2"
                            className="rounded-r w-full"
                        />
                    </div>
                </div>
                <p className="mb-4">
                    Historii světa práce jsme už probrali zleva i zprava. Je načase se podívat do budoucnosti.
                    Bude připomínat spíše <span className="green">utopii, nebo dystopii</span>?
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                    <p className="mb-8">
                        Utopie je obraz světa či společnosti, ve které všechno funguje dokonale, obzvláště
                        soužití všech lidí. Pojem je převzatý ze stejnojmenné knihy anglického filozofa
                        Thomase Morea. Principem utopie je to, že je nenaplnitelná – jde jen o ideál, o
                        který má ale smysl usilovat.
                    </p>
                    <Image
                        src="/images/chapters/future/03.jpg"
                        alt="obr 3"
                        width={600}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-8">
                        Dystopie je opakem Utopie, obrazem světa či společnosti, který se vyvinul špatně
                        (narozdíl od utopie v něm ale nemusí být špatně úplně všechno). Dystopie je velmi
                        často využívaná v uměleckých dílech (hlavně sci-fi a “spekulativní fikce”jako knihy
                        1984 nebo Příběh služebnice, případně filmy Brazil, Elysium, nebo třeba Demolition
                        Man). Dystopie často slouží jako zveličení už existující špatné tendence a jejím
                        principem, narozdíl od Utopie je bohužel i to, že je zcela jistě naplnitelná.
                    </p>
                    <Image
                        src="/images/chapters/future/04.jpg"
                        alt="obr 4"
                        width={600}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                </div>
                <p className="mb-4">
                    V nejpravděpodobnějším případě ani jediné – nebo obojí tak trochu. Bez křišťálové koule
                    si nemůžeme být jistí ničím, ale můžeme se řídit tím, co nám dějiny zatím ukázaly, i
                    důkladným zkoumáním toho, co se nám už v přítomnosti děje.
                </p>
                <p className="mb-8">
                    Jedna věc je naopak jistá určitě – budoucnost není nikdy plně daná, což platí i pro
                    budoucnost práce. A to, jak se k ní my sami postavíme, bude hrát možná tu nejzásadnější roli.
                </p>
                <Image
                    src="/images/chapters/future/05.jpg"
                    alt="obr 5"
                    width={600}
                    height={600}
                    className="rounded mx-auto"
                />
                <ImageDesc
                    description="Je možné, že se někdy v budoucnosti bude někdo chtít vrátit do dnešního dne a zabránit 
                    vám, abyste si přečetli tato slova?"
                />
                <div className="mt-12 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="1" />
                    <SubchapterHeading
                        id="1"
                        chapterNumber="5.1"
                        chapterTitle="Future Shock aneb Čtvrtá průmyslová revoluce"
                        setShown={shownHandler}
                        shown={shown}
                    />
                </div>
                <div className={`mb-12 ${shown.includes('1') ? "block" : "hidden"}`}>
                    <SideImage side="left" mainImageId={5} />
                    <p className="mb-8">
                        Během moderních dějin a především posledních dekád se zásadně proměňoval vztah člověka
                        a strojů při výrobě a poskytování služeb, ale i třeba ve sféře dopravy, komunikace,
                        údržby domácnosti nebo trávení volného času.
                    </p>
                    <Image
                        src="/images/chapters/future/06.png"
                        alt="obr 6"
                        width={600}
                        height={600}
                        className="rounded mx-auto"
                    />
                    <ImageDesc
                        description="Divoké vize robotů z doby Karla Čapka už dávno překonala... i obyčejná lednička."
                    />
                    <p className="mt-4 mb-8">
                        Někdy se hovoří o čtyřech hlavních stádiích změn, společenských a technických
                        “revolucích”, které se odehrály v posledních 250 letech.
                    </p>
                    <Image
                        src="/images/chapters/future/07.png"
                        alt="obr 7"
                        width={400}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        První průmyslovou revoluci probíhající od konce 18. století symbolizovala pára,
                        uhlí a tovární haly, které pomalu nahradily malé řemeslné dílny. Z dnešního
                        pohledu: old school. Ale po stovkách let feudalismu a převážně zemědělské
                        společnosti to bylo jako velký třesk.
                    </p>
                    <p className="mb-4">
                        Hlavní fenomény druhé průmyslové revoluce na konci 19. století byly elektřina,
                        spalovací motory, pásová výroba a rozvoj vědeckého managementu. Tady asi není
                        nikomu třeba vysvětlovat, <span className="green">jak moc to společnost změnilo – a urychlilo</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <iframe
                            width={windowSize.isMobile ? "100%" : "560"}
                            height="315"
                            src="https://www.youtube.com/embed/i3TzAfMLQ5w?si=ABpbTfY_HaAuDPzv"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded mx-auto mt-4"
                        ></iframe>
                        <ImageDesc
                            description="Ehm, ano – sérii Fast and Furious bychom bez druhé průmyslové revoluce dozajista neměli."
                        />
                    </div>
                    <p className="mb-4">
                        Výroba se během této takzvané druhé revoluce ještě zrychlila a dělba práce prohloubila.
                    </p>
                    <p className="mb-8">
                        Charakter třetí průmyslové revoluce probíhající od 60. let 20. století určoval rozvoj
                        výpočetní techniky, informačních technologií a první pokusy o automatizaci výrobního
                        procesu. Zjednodušeně řečeno: přišly počítače.
                    </p>
                    <iframe
                        width={windowSize.isMobile ? "100%" : "560"}
                        height="315"
                        src="https://www.youtube.com/embed/YIh41wZEd5c?si=rmrHZX4JIZXizsW0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded mx-auto mb-8"
                    ></iframe>
                    <p className="mb-8">
                        Stroje postupně začaly přebírat nejen fyzické, ale i intelektuální úkoly, i
                        když zatím pod přímým lidským vedením.
                    </p>
                    <Image
                        src="/images/chapters/future/08.png"
                        alt="obr 8"
                        width={400}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        Zhruba po roce 2010 svět vstupuje do éry čtvrté průmyslové revoluce, se kterou se pojí
                        pojmy <span className="green">Průmysl 4.0 a Společnost 4.0</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Co si pod všemi těmi čtyřkami a nulami představit? Třeba tenhle příklad – chytré mobily
                            (smartphony) od základu změnily způsob i tempo, jakým komunikujeme, hledáme nové
                            informace, seznamujeme se, nakupujeme a poznáváme svět.
                        </p>
                        <Image
                            src="/images/chapters/future/09.png"
                            alt="obr 9"
                            width={400}
                            height={600}
                            className="rounded mx-auto"
                        />
                        <ImageDesc
                            description="Smartphony dokonce změnily i způsob, jakým trávíme čas na záchodě."
                        />
                        <p className="mt-4 mb-4">
                            Přístroje, které před dekádou ještě spousta z nás nevlastnila (a před dvěma dekádami
                            o nich možná ani neslyšela), dnes tvoří tak samozřejmou součást naší každodennosti,
                            že si život bez nich již neumíme představit.
                        </p>
                    </div>
                    <p className="mb-4">
                        Procesy digitalizace, automatizace a rozvoj umělé inteligence pravděpodobně vytvoří situaci,
                        kdy mnoho z věcí, které zatím děláme sami, bude plně plánováno, vykonáváno i vyhodnocováno
                        stroji. A to v podstatě všude – v zemědělství, průmyslu, službách i ve správě státu.
                    </p>
                    <p className="mb-4">
                        Člověk bude pro většinu pracovních procesů stále méně potřebný.
                    </p>
                    <p className="mb-4">
                        Tyto změny se samozřejmě neprojeví jen v samotné práci, ale zásadním způsobem ovlivní – a
                        už teď vlastně ovlivňují – celé naše životy. Jak se k tomu všemu postavíme, je jednou{" "}
                        <span className="green">z nejzásadnějších otázek přítomnosti</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Ale nejprve malé kalendárium, které nám umožní seřadit si pojmy na časové lince a lépe jim porozumět…
                        </p>
                        <Image
                            src="/images/chapters/future/10.png"
                            alt="obr 10"
                            width={600}
                            height={600}
                            className="rounded mx-auto mb-8"
                        />
                    </div>
                </div>
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="2" />
                    <SubchapterHeading
                        id="2"
                        chapterNumber="5.2"
                        chapterTitle="Automatic for the People: Současné trendy a pojmy"
                        setShown={shownHandler}
                        shown={shown}
                    />
                </div>
                <div className={`mb-12 ${shown.includes('2') ? "block" : "hidden"}`}>
                    <SideImage side="right" mainImageId={5} />
                    <p className="mb-4">
                        Silnice plné aut bez řidičů, domácnosti vybavené 3D tiskárnami, schopnými vytisknout libovolný produkt,
                        nebo stroje zabývající se samy vědeckým výzkumem. To nejsou výjevy ze sci-fi, ale fenomény, které se
                        možná <span className="green">už v blízké budoucnosti</span> stanou součástí našeho světa.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Už teď máme díky extrémní akceleraci vývoje AI (artificial intelligence - umělé inteligence) věci,
                            které ještě pouhé dva roky zpátky vypadaly nemožně – perfektní překlady z mnoha jazyků během sekundy,
                            videa generovaná z pouhého nápadu, fotky, ze kterých jedním kliknutím cokoli vymažeme, přidáme, nebo
                            předěláme do jiného stylu, až děsivě dokonalé nápodoby jakýchkoli hlasů, AI hlasové asistenty, kteří
                            jsou schopní reálně vyřešit celou řadu problému volajících na infolinkách…
                        </p>
                        <Image
                            src="/images/chapters/future/11.png"
                            alt="obr 11"
                            width={500}
                            height={600}
                            className="rounded mx-auto"
                        />
                        <ImageDesc
                            description="Naštěstí zatím naše technologické výdobytky neprojevují podobné záměry jako Skynet v sérii filmů Terminator..."
                        />
                    </div>
                    <p className="mb-4">
                        Čtvrtá průmyslová revoluce či Průmysl 4.0 je zatím poslední stádium vývoje vztahu člověka a
                        techniky. Někdy se jí také přezdívá <span className="green">“druhý věk strojů”</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            Proč druhý, když revoluce je už čtvrtá?
                        </p>
                        <p className="mb-4">
                            Jde o to, že v době prvního věku strojů (počínaje Wattovým parním strojem) stroje postupně
                            přebíraly fyzické úkoly a nyní, ve druhém věku, přebírají úkoly duševní a získávají i kreativní
                            kompetence, které svou činností mohou zlepšovat podobně jako lidé. Tomu se v případě strojů
                            či robotů říká strojové učení.
                        </p>
                    </div>
                    <p className="mb-8">
                        V současné době již velká část komunikace, výroby, obchodních transakcí nebo trávení volného času
                        probíhá v digitálním prostoru. V souvislosti s tím se hovoří o digitalizaci, digitální společnosti
                        nebo digitální ekonomice.
                    </p>
                    <Image
                        src="/images/chapters/future/12.png"
                        alt="obr 12"
                        width={400}
                        height={600}
                        className="rounded mx-auto"
                    />
                    <ImageDesc
                        description="Pamatujete, když vrcholem digitality byly takzvané “digitálky”?"
                    />
                    <p className="mt-4 mb-4">
                        Dalšími důležitými pojmy by mohly být automatizace a robotizace. Že to zní staře?
                        Roboty máme už od Karla Čapka a automatizované stroje v továrnách taky? Přidejte
                        k tomu všemu slovo <span className="green">“smart”</span> a přiblížíme se dnešní době o něco blíž.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/future/13.png"
                            alt="obr 13"
                            width={400}
                            height={600}
                            className="rounded mx-auto mb-8 mt-4"
                        />
                        <p className="mb-4">
                            Auto jménem smart revoluci nezpůsobilo (koneckonců, nic moc “smart” na něm nebylo), ale všechny
                            další smart technologie už ano. Třeba výše zmíněné smartphony, ale i chytré hodinky, mikrovlnky,
                            chytré aplikace, které se učí z našeho chování, hlasoví asistenti a spousta dalších nástrojů.
                        </p>
                    </div>
                    <p className="mb-8">
                        V rámci automatizace a robotizace mají totiž stroje nebo technologie postupně začít plnit úkoly bez
                        většího lidského zásahu. V automatizované výrobě již dnes není třeba příliš velké fyzické ani intelektuální
                        energie člověka: brzy ale nebude třeba víceméně žádná. Pracovník v takzvané chytré továrně (smart factory)
                        budoucnosti už nebude ani stát u výrobní linky, ani ovládat počítače, které linku řídí.
                    </p>
                    <Image
                        src="/images/chapters/future/14.webp"
                        alt="obr 14"
                        width={400}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        Půjde zde spíše o systém výroby využívající umělou inteligenci (AI) k vzájemné komunikaci, vlastnímu výrobnímu
                        procesu a i k předcházení a řešení případných rizikových situací. Podobně může být automatizovaná i doprava.
                    </p>
                    <p className="mb-8">
                        Linky metra v Paříži, Norimberku nebo Budapešti už nějakou dobu jezdí bez řidičů a brzo tento trend čeká i Prahu.
                        V budoucnosti budou také brázdit silnice plně automatizovaná auta – zatím ale zbývá vyřešit mnoho technických,
                        bezpečnostních, právních i etických otázek: například, jak se má algoritmus řídící stroje zachovat v případě nehody.
                    </p>
                    <Image
                        src="/images/chapters/future/15.jpg"
                        alt="obr 15"
                        width={600}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        Jako každý pokrok, i ten technologický má prostě spoustu pro a spoustu proti. A je třeba je důkladně zkoumat.
                    </p>
                    <p className="mb-4">
                        Kupříkladu jednou z hlavních podmínek dalšího rozvoje automatizace, digitalizace nebo umělé inteligence je shromažďování
                        obrovského množství dat, které svou činností vytváří státy, firmy, lidé a nyní již i stroje. Jenže ta <span className="green">spousta je tak
                            obrovská</span>, že není tak snadné dohlédnout, co všechno zahrnuje, kdo všechno k ní má přístup a co by se s tím mohlo stát.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            Když jste si v dávných dobách předpláceli tištěné noviny, také měl někdo přehled o vaší adrese a o tom, co vás
                            zajímá (Literární noviny nebo Kůň a pes?). Jenže nikdo už nemohl – tak jako dnes, díky chytrým telefonům – vědět,
                            kde a kdy ty noviny čtete, jaký článek vás zaujal, jaký jste přeskočili, na kterou reklamu reagujete... Taky
                            nebylo ta vaše data tak snadné uchovávat ani porovnávat s jinými, natož někomu prodat. Což se dnes ve velkém
                            děje – data mají hodnotu zlata a touží po nich “reklamky”, stejně jako političtí stratégové i obří technologické
                            korporace nebo celé vlády.
                        </p>
                    </div>
                    <p className="mb-4">
                        Samozřejmě ne každé využití dat je jejich zneužitím – data z velkého počtu mobilů v nějaké oblasti můžou například
                        i prostřednictvím obyčejné GPSky přispět k plynulému provozu a dokonce i předcházení nehod.
                    </p>
                    <p className="mb-4">
                        Ale jsou tu i jiné situace. Pomineme-li všechny varianty, kde shromažďování vašich dat slouží k nějakému narušení
                        soukromí, pak je tu třeba fakt, že většina současných AI modelů se učí právě z takzvaně volně přístupných dat – kterými
                        jsou však často produkty lidské činnosti, za jejichž užití už <span className="green">nikdo nedostane zaplaceno</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Chat GPT se může naučit krásně psát na základě vašich školních slohovek a Midjourney malovat díky starým
                            mistrům z pařížských škol a galerií.
                        </p>
                        <Image
                            src="/images/chapters/future/16.jpg"
                            alt="obr 16"
                            width={500}
                            height={600}
                            className="rounded mx-auto mb-8"
                        />
                    </div>
                    <p className="mb-8">
                        Kombinace obrovských množství dat různého původu se také někdy nazývá Velká data (Big data). Právě tato big data a přístup
                        k nim na velkých uložištích (cloudech) budou jednou z nejcennějších komodit budoucnosti.
                    </p>
                </div>
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="3" />
                    <SubchapterHeading
                        id="3"
                        chapterNumber="5.3"
                        chapterTitle="What's Cookin' aneb Přínosy a rizika společnosti 4.0"
                        setShown={shownHandler}
                        shown={shown}
                    />
                </div>
                <div className={`mb-12 ${shown.includes('3') ? "block" : "hidden"}`}>
                    <SideImage side="left" mainImageId={5} />
                    <p className="mb-8">
                        Digitalizace a automatizace práce bude mít velký vliv na naše pracovní i mimopracovní životy.
                    </p>
                    <Image
                        src="/images/chapters/future/17.gif"
                        alt="obr 17"
                        width={500}
                        height={600}
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        <Link href="https://willrobotstakemyjob.com/" target="_blank" className="underline">Mnoho povolání zanikne</Link> – podle odhadu expertů až
                        polovina – mnoho ale bude opět vytvořeno.
                    </p>
                    <p className="mb-4">
                        Jaký bude poměr těchto vítězství a ztrát? To záleží i na tom, jak si pohlídáme průběh zavádění všech změn.
                        Abychom byli jako společnost na celý proces připraveni, je nutné analyzovat možné přínosy i rizika čtvrté průmyslové revoluce.
                    </p>
                    <p className="mb-12">
                        Tak pojďme na to!
                    </p>
                    <div className="flex gap-48 justify-center mb-8">
                        <div>
                            <Image
                                src="/images/chapters/future/18.svg"
                                alt="obr 18"
                                width={200}
                                height={600}
                            />
                        </div>
                        <div>
                            <Image
                                src="/images/chapters/future/19.svg"
                                alt="obr 19"
                                width={100}
                                height={300}
                            />
                        </div>
                    </div>
                    <p className="mb-2 text-center text-2xl fellix-semibold">
                        Zdravotnictví
                    </p>
                    <Image
                        src="/images/components/double-arrow.svg"
                        alt="rozdělovník"
                        width={100}
                        height={600}
                        className="mx-auto mb-4"
                    />
                    <div className="flex gap-24 justify-center mb-8">
                        <div className="w-1/2">
                            <p className="mb-4">
                                Lepší diagnostika i efektivnější léčba.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <p className="mb-4">
                                Musíme si ale pohlídat, aby zůstalo zdravotnictví pro všechny – k čemu by nám byly technologické vymoženosti, kdyby
                                byly jen součástí placeného <span className="green">“pro” módu</span>!
                            </p>
                            <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                                <p className="mb-4">
                                    Náš pro mód zůstane vždycky zdarma – mimochodem, už jste ho vyzkoušeli?
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="mb-2 text-center text-2xl fellix-semibold">
                        Ochrana životního prostředí
                    </p>
                    <Image
                        src="/images/components/double-arrow.svg"
                        alt="rozdělovník"
                        width={100}
                        height={600}
                        className="mx-auto mb-4"
                    />
                    <div className="flex gap-24 justify-center mb-8">
                        <div className="w-1/2">
                            <p className="mb-4">
                                Mírnění dopadů klimatických změn, předcházení přírodním katastrofám.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <p className="mb-4">
                                I to má ale svá “ale” – zaprvé <span className="green">greenwashing</span>, zadruhé i ty samé technologie, které mohou
                                sloužit dobru, produkují zároveň velkou energetickou zátěž – týká se to v podstatě všeho, kde se používají velká datová
                                úložiště, takže kryptoměny, umělá inteligence, ale i videa na youtube, která používáme na tomto webu. Provoz takových
                                obrovských serverů spaluje nesmírné množství energie a ještě zásadně zahřívá planetu. To je třeba mít na mysli, když
                                se mluví o tom, že AI pomůže vyřešit klimatickou krizi.
                            </p>
                            <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                                <p className="mb-4">
                                    Co to je greenwashing? Greenwashing (a další “washingy” – třeba genderwashing) jsou jako když mafie sponzoruje
                                    charitu – úctyhodné činy, dary či gesta, které určité firmy využívají k tomu, aby navenek vypadaly, že daný problém
                                    (nedostatek žen ve vedení, ekologickou škodlivost) řeší, ale ve skutečnosti ho řešit nemusely.
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="mb-2 text-center text-2xl fellix-semibold">
                        Doprava
                    </p>
                    <Image
                        src="/images/components/double-arrow.svg"
                        alt="rozdělovník"
                        width={100}
                        height={600}
                        className="mx-auto mb-4"
                    />
                    <div className="flex gap-24 justify-center mb-8">
                        <div className="w-1/2">
                            <p className="mb-4">
                                Předcházení dopravním zácpám a nehodám pomocí dat, aplikací a AI.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <p className="mb-4">
                                Potřebujeme však více aut v plynulejším provozu, nebo spíš kvalitní hromadnou a vlakovou dopravu?
                            </p>
                        </div>
                    </div>
                    <p className="mb-2 text-center text-2xl fellix-semibold">
                        Správa státu a veřejných úřadů
                    </p>
                    <Image
                        src="/images/components/double-arrow.svg"
                        alt="rozdělovník"
                        width={100}
                        height={600}
                        className="mx-auto mb-4"
                    />
                    <div className="flex gap-24 justify-center mb-8">
                        <div className="w-1/2">
                            <p className="mb-4">
                                Zmírnění klientelismu a korupce.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <p className="mb-4">
                                Digitalizace všeho ale přináší i zásadní byrokratickou zátěž.
                            </p>
                        </div>
                    </div>
                    <p className="mb-2 text-center text-2xl fellix-semibold">
                        Politika
                    </p>
                    <Image
                        src="/images/components/double-arrow.svg"
                        alt="rozdělovník"
                        width={100}
                        height={600}
                        className="mx-auto mb-4"
                    />
                    <div className="flex gap-24 justify-center mb-8">
                        <div className="w-1/2">
                            <p className="mb-4">
                                Zvýšení účasti obyvatelstva na rozhodování o věcech veřejných.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <p className="mb-4">
                                S přímou demokracií přichází nicméně i populismus.
                            </p>
                        </div>
                    </div>
                    <p className="mb-2 text-center text-2xl fellix-semibold">
                        Bezpečnost
                    </p>
                    <Image
                        src="/images/components/double-arrow.svg"
                        alt="rozdělovník"
                        width={100}
                        height={600}
                        className="mx-auto mb-4"
                    />
                    <div className="flex gap-24 justify-center mb-8">
                        <div className="w-1/2">
                            <p className="mb-4">
                                Lepší prevence kriminality.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <p className="mb-4">
                                Ale větší problém s daty – kamery v ulicích v kombinaci s technologií rozpoznávání obličejů či chůze mohou
                                znamenat, že už nikdy nikde <span className="green">nebudeme anonymní</span>.
                            </p>
                            <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                                <Image
                                    src="/images/chapters/future/20.jpg"
                                    alt="obr 20"
                                    width={300}
                                    height={600}
                                    className="w-full mx-auto rounded mb-8"
                                />
                                <p className="mb-4">
                                    Jistě, řeknete si, že jste se přeci ničím neprovinili, a tak se nemáte čeho bát – ale jak jsme si mnohokrát
                                    ukázali na této stránce, historie se mění, přicházejí různé režimy a ne všechny by vaše data využily k
                                    bytostně ctnostným účelům, kdyby k nim měly volný přístup.
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="mb-2 text-center text-2xl fellix-semibold">
                        Ekonomika
                    </p>
                    <Image
                        src="/images/components/double-arrow.svg"
                        alt="rozdělovník"
                        width={100}
                        height={600}
                        className="mx-auto mb-4"
                    />
                    <div className="flex gap-24 justify-center mb-8">
                        <div className="w-1/2">
                            <p className="mb-4">
                                Růst produktivity, snížení správních nákladů.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <p className="mb-4">
                                Větší nerovnost.
                            </p>
                        </div>
                    </div>
                    <p className="mb-2 text-center text-2xl fellix-semibold">
                        Práce
                    </p>
                    <Image
                        src="/images/components/double-arrow.svg"
                        alt="rozdělovník"
                        width={100}
                        height={600}
                        className="mx-auto mb-4"
                    />
                    <div className="flex gap-24 justify-center mb-8">
                        <div className="w-1/2">
                            <p className="mb-4">
                                Zvýšení bezpečnosti práce, předcházení úrazům, automatizace rutinní práce, tvorba nových pracovních míst,
                                větší flexibilita a zvýšení možnosti práce na dálku.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <p className="mb-4">
                                Ztráta mnoha pracovních míst a pozic, rozvoj “gig” economy a nejisté či nestabilní práce mimo zákonný dohled.
                            </p>
                        </div>
                    </div>
                    <p className="mb-2 text-center text-2xl fellix-semibold">
                        Podnikání
                    </p>
                    <Image
                        src="/images/components/double-arrow.svg"
                        alt="rozdělovník"
                        width={100}
                        height={600}
                        className="mx-auto mb-4"
                    />
                    <div className="flex gap-24 justify-center mb-8">
                        <div className="w-1/2">
                            <p className="mb-4">
                                Větší efektivita podniků, rozvoj nových směrů podnikání, snížení nákladů, zlepšení komunikace.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <p className="mb-4">
                                Kumulace moci v rukou technologických gigantů a korporací.
                            </p>
                        </div>
                    </div>
                    <p className="mb-8">
                        Prostě a jednoduše, jak už bylo – nejen námi – řečeno, “každá společenská změna má své náklady a své oběti.
                    </p>
                    <Image
                        src="/images/chapters/future/21.jpg"
                        alt="obr 21"
                        width={500}
                        height={600}
                        className="mx-auto rounded mb-8"
                    />
                    <p className="mb-4">
                        To platilo v době průmyslové revoluce a bude to platit i nyní. Ale jak velké ty náklady a oběti budou, závisí
                        na tom, jak se na změny připravíme. Abychom mohli užívat všechny plusy průmyslu 4.0, musíme
                        zhodnotit i <span className="green">jeho potenciální rizika</span> a pokusit se najít jejich řešení.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/future/22.jpg"
                            alt="obr 22"
                            width={400}
                            height={600}
                            className="mx-auto rounded mb-8 mt-4"
                        />
                        <p className="mb-4">
                            Zjednodušeně řečeno, ty samé technologie a procesy, které by nás mohly zavést do nejoptimističtější budoucnosti,
                            nás taky můžou zavést oklikou k té nejtemnější a nejméně svobodné minulosti.
                        </p>
                        <p className="mb-4">
                            Jak to? Protože umožňují kumulovat moc, majetek i možnosti skoro jako v době králů – a jak už víme, velmi často zlých králů.
                        </p>
                        <p className="mb-4">
                            Kromě těchto velkých problémů, z nichž velkou část jsme už zmínili, jsou tu i “menší” věci, jako třeba problémy s
                            psychickým zdravím, spojené s digitalizací, mobilními technologiemi nebo sociálními sítěmi.
                        </p>
                        <p className="mb-4">
                            Největší hrozbou je ale zánik sociálních výdobytků, za které (nejen) pracující bojovali více než 100 let. Velké digitální
                            platformy učinily ze zaměstnanců podnikatele. Obešly tak sociální dialog – když není vztah zaměstnance a zaměstnavatele,
                            není o čem vyjednávat. Navíc se ve vztazích jednotlivých “podnikatelů/kontraktorů” ztrácí sociální vazba. Což ještě umocňuje
                            fakt, že lidé více a více pracují z domova a své “spolupracovníky”, připojené z jiných domovů u jiných obrazovek, vlastně
                            ani neznají.
                        </p>
                        <p className="mb-4">
                            Takhle hrozí, že přijdeme o všechny ty důchody, nemocenské, dovolené, krátké pracovní týdny, víkendy a vše, co dosud
                            činilo pracovní život snesitelným a v dobrém slova smyslu předvídatelným. Neustálé cinkání pracovních emailů a notifikací
                            se pak nepodepíše jen na psychickém zdraví jednotlivců, ale i na tom, že bez volného a společně tráveného času se ve
                            společnosti prohloubí individualismus a separace. Jinými slovy: budeme sami, chudí a ve stresu, zatímco technologičtí
                            giganti jako Google, Amazon, Meta, Microsoft či Tesla nás nadále budou chlácholit marketingovou omáčkou, kterak nás
                            právě teď vedou do budoucnosti.
                        </p>
                    </div>
                </div>
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="4" />
                    <SubchapterHeading
                        id="4"
                        chapterNumber="5.4"
                        chapterTitle="Bring it On aneb Digitalizace práce jako výzva"
                        setShown={shownHandler}
                        shown={shown}
                    />
                </div>
                <div className={`mb-12 ${shown.includes('4') ? "block" : "hidden"}`}>
                    <SideImage side="right" mainImageId={5} />
                    <p className="mb-8">
                        Toto nesmírné a stále zrychlující tempo změn, které jsme nastínili, však nevyřešíme tím, že se ho pokusíme pouze zastavit.
                        Abychom se dokázali v tomto procesu orientovat, <span className="green">musíme přijmout výzvy</span> a příležitosti
                        technologických změn a digitalizace.
                    </p>
                    <iframe
                        width={windowSize.isMobile ? "100%" : "560"}
                        height="315"
                        src="https://www.youtube.com/embed/0_qShAZg2Zw?si=0Prlgyfp9p5edCLY"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="mb-8 mx-auto rounded"
                    ></iframe>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Snažit se vrátit do minulosti by bylo jako boj s větrnými mlýny – zeptejte se Amišů, jak se jim daří
                            simulovat 18. století v moderních kulisách.
                        </p>
                        <iframe
                            width={windowSize.isMobile ? "100%" : "560"}
                            height="315"
                            src="https://www.youtube.com/embed/aknI9s01NV0?si=FhriXMdjUmPApcsV"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="mb-8 mx-auto rounded"
                        ></iframe>
                    </div>
                    <p className="mb-4">
                        Pokud chceme dál hájit svá práva coby pracujících i občanů, musíme se přizpůsobit novým podmínkám a hledat
                        nové formy kolektivního boje za spravedlnost.
                    </p>
                    <p className="mb-4">
                        Příkladem mohou být odbory finančního sektoru v Irsku, které vyjednaly, že jejich zaměstnavatelé nemohou
                        (na základě zákonů týkajících se soukromí a lidských práv zaměstnanců) dále obchodovat s údaji svých zaměstnanců.
                    </p>
                    <p className="mb-4">
                        Můžeme ale hledět ještě dál za horizont a kromě řešení podobně “konkrétních” problémů si dovolit i obecnější úvahy.
                    </p>
                    <p className="mb-8">
                        Ve světě, kde mnoho profesí bude plně automatizováno, je načase ptát se na podobu budoucího pracovního uspořádání.
                        Jedním z témat by například mohlo být, zda není na místě uvažovat o kratším pracovním dni pro všechny zaměstnance
                        při zachování či dokonce zvýšení současné hladiny mezd. Pokud díky automatizaci spousta práce zmizí, nač hned uměle
                        hledat jinou – co takhle rozdělit si spravedlivě pozitiva v podobě <span className="green">volného času a finančního blahobytu</span>?
                    </p>
                    <Image
                        src="/images/chapters/future/23.jpg"
                        width={500}
                        height={200}
                        alt="obr 23"
                        className="mb-8 mx-auto rounded"
                    />
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            To se může zdát jako nesplnitelný cíl, historicky to však možné je. V polovině 19. století lidé v Evropě pracovali
                            týdně zhruba 70 hodin, v meziválečném období to bylo 48 hodin a od konce 60. let pracujeme zhruba 40 hodin týdně.
                            Stroje nám holt umožňují, abychom pracovali méně. Prosazení požadavku snížení pracovní doby by bylo konečně benefitem
                            průmyslu 4.0, který by byl jasně dostupný všem. Mluvíme o svobodnější společnosti – a co jiného je lepším ukazatelem
                            míry svobody člověka, než množství volného času?
                        </p>
                    </div>
                    <p className="mb-4">
                        Nyní je prostě už jasné, že technologičtí giganti, kteří jsou hlavními tahouny průmyslu 4.0, budou generovat stále více
                        zisků. Musíme se dále zasazovat o to, aby <span className="green">část těchto zisku byla přerozdělena</span> a užita
                        pro veřejné účely, například pro financování zaměstnanců v péči, školství, zdravotnictví a tak dále.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Bylo by hezké, kdyby platilo, že se o to postarají sami filantropicky orientovaní miliardáři, či že bohatství
                            samo “prokape” (<Link href="https://cs.wikipedia.org/wiki/Trickle-down_economics" target="_blank" className="underline">trickle-down</Link>)
                            do nižších pater. Historie však mnohokrát ukázala, že lidé hájí zájmy, příslušející primárně jejich skupině – ne vždy
                            nutně ze zlých úmyslů, ale mnohdy problémy kompletně odlišné sociální či kulturní skupiny prostě přesahují jejich
                            představivost a zkušenosti.
                        </p>
                        <Image
                            src="/images/chapters/future/24.jpg"
                            width={500}
                            height={200}
                            alt="obr 24"
                            className="mb-8 mx-auto rounded"
                        />
                    </div>
                    <p className="mb-4">
                        A co tedy dělat?
                    </p>
                    <p className="mb-8">
                        Musíme kupříkladu dbát na udržení solidarity a kolektivní akceschopnosti v době, kdy se práce na dálku (remote work)
                        stává standardem a zaměstnanci se již nepotkávají organicky na pracovišti.
                    </p>
                    <Image
                        src="/images/chapters/future/25.png"
                        width={500}
                        height={200}
                        alt="obr 25"
                        className="mb-8 mx-auto rounded"
                    />
                    <p className="mb-4">
                        Tak to přeci známe již z 19. století.
                    </p>
                    <p className="mb-4">
                        My máme ale tu výhodu, že vlivem dlouhé tradice sociálního dialogu bylo již vydobyto mnoho sociálních práv, která by
                        se následkem změn měla ještě zlepšovat, nikoliv redukovat. Jinak by se nejednalo o společenský pokrok, ale pouhou sadu
                        technologických inovací, které by měly silně negativní důsledky hlavně na zranitelnější <span className="green">(méně vzdělanou,
                            méně movitou, starší) část populace</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            Ne všechny změny musí být ze sociálního hlediska negativní – technologický pokrok třeba zlepšuje možnosti pracovního
                            zapojení pro osoby se zdravotním postižením, zejména díky možnostem práce na dálku, ale i díky zlepšujícímu se veřejném
                            prostoru, příznivějšímu pro pohyb těchto osob.
                        </p>
                        <p className="mb-4">
                            I tak budou ale nadále lidé s postižením či omezením čelit konkurenci osob bez tohoto hendikepu a budou se muset vyrovnávat
                            s měnícími se požadavky na znalosti a dovednosti. I nadále bude třeba podporovat rozvoj chráněného pracovního trhu,
                            speciální poradenství a pracovní rehabilitaci. A máloco z toho se stane samo od sebe.
                        </p>
                        <p className="mb-4">
                            Stejně tak se dá říct, že digitalizace může mít dobrý dopad na fyzické zdraví lidí (skrze snižování fyzické namáhavosti
                            práce, zlepšování hygienických parametrů a snižování úrazovosti a nemocí z povolání).
                        </p>
                        <p className="mb-8">
                            Není ale jasné, jaké budou dopady pracovních změn na psychické zdraví. Jaká opatření budou přijímána, aby se zabránilo
                            přemíře stresu z neustálého pracovního zapojení? Psychické dopady nových pracovních podmínek, ale i nových kolektivů,
                            jejichž součástí budou i roboti, jsou zatím velkou neznámou.
                        </p>
                        <Image
                            src="/images/chapters/future/26.jpg"
                            width={400}
                            height={200}
                            alt="obr 26"
                            className="mb-8 mx-auto rounded"
                        />
                    </div>
                </div>
                <div className="mt-24 text-center">
                    <Link
                        className={`${toggleMode === Mode.FUN ? "btn-primary-large-green" : "btn-primary-large"}`}
                        href={Path.TRANSFORMATION}
                    >
                        <span className="text-white">Pokračovat</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default FuturePage;
