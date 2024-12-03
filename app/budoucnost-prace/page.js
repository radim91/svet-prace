"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { ToggleModeContext } from "@/context/ToggleModeContext";
import Mode from "@/enum/mode";
import Link from "next/link";
import CollapseButton from "@/components/UI/CollapseButton";
import Path from "@/enum/path";

const FuturePage = () => {
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
                    5. <span className="ms-2">Budoucnost práce</span>
                </h1>
                <h2 className="text-3xl mt-8 font-semibold text-center">
                    Chytrá, nebo vychytralá?
                </h2>
            </div>
            <div className="heading-image mt-12">
                <Image
                    src="/images/chapters/future/future.svg"
                    width={300}
                    height={300}
                    alt="Budoucnost"
                />
            </div>
            <div className="pb-48 mx-auto mt-12 content lg:w-1/2">
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
                    si nemůžeme být jistí ničím, ale můžeme se řídit tím, co nám dějiny zatím ukázaly i 
                    důkladným zkoumaním toho, co se nám už v přítomnosti děje.
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
                    className="rounded mx-auto mb-8"
                />
                <p className="mb-12 text-center">
                    Je možné, že se někdy v budoucnosti bude někdo chtít vrátit do dnešního dne a zabránit 
                    vám, abyste si přečetli tato slova?
                </p>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="1" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">5.1</span>Future Shock
                        <br/>aneb Čtvrtá průmyslová revoluce
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('1') ? "block" : "hidden"}`}>
                    <div className="absolute left-0 -mt-24 transform scale-x-[-1]">
                        <Image
                            src="/images/chapters/future/future.svg"
                            width={200}
                            height={200}
                            alt="Budoucnost"
                        />
                    </div>
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
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4 text-center">
                        Divoké vize robotů z doby Karla Čapka už dávno překonala... i obyčejná lednička.
                    </p>
                    <p className="mb-8">
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
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/i3TzAfMLQ5w?si=ABpbTfY_HaAuDPzv" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="rounded mx-auto mb-8"
                        ></iframe>
                        <p className="mb-4">
                            Ehm, ano – sérii Fast and Furious bychom bez druhé průmyslové revoluce dozajista neměli.
                        </p>
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
                        width="560" 
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
                            className="rounded mx-auto mb-8"
                        />
                        <p className="mb-4 text-center">
                            Smartphony dokonce změnily i způsob, jakým trávíme čas na záchodě.
                        </p>
                        <p className="mb-4">
                            Přístroje, které před dekádou ještě spousta z nás nevlastnila (a před dvěmi dekádami 
                            o nich možná ani neslyšela), dnes tvoří tak samozřejmou součást naší každodenosti, 
                            že si život bez nich již neumíme představit.
                        </p>
                    </div>
                    <p className="mb-4">
                        Procesy digitalizace, automatizace a rozvoj umělé inteligence pravděpodobně vytvoří situaci, 
                        kdy mnohé z věcí, které zatím děláme sami, bude plně plánováno, vykonáváno i vyhodnocováno 
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
                            Ale nejprve malé kalendarium, které nám umožní seřadit si pojmy na časové lince a lépe jim porozumět…
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
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="2" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">5.2</span>Automatic for the People:
                        <br/>Současné trendy a pojmy
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('2') ? "block" : "hidden"}`}>
                    <div className="absolute right-0 -mt-24">
                        <Image
                            src="/images/chapters/future/future.svg"
                            width={200}
                            height={200}
                            alt="Budoucnost"
                        />
                    </div>
                    <p className="mb-4">
                        Silnice plné aut bez řidičů, domácnosti vybavené 3D tiskárnami, schopnými vytisknout libovolný produkt, 
                        nebo stroje zabývající se samy vědeckým výzkumem. To nejsou výjevy ze sci-fi, ale fenomény, které se 
                        možná <span className="green">už v blízké budoucnosti</span> stanou součástí našeho světa.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Už teď máme díky extrémní akceleraci vývoje AI (artificial intelligence - umělé inteligence) věci, 
                            které ještě pouhé dva roky zpátky vypadaly nemožně – perfektní překlady z mnoha jazyků něhem sekundy, 
                            videa generovaná z pouhého nápadu, fotky, ze kterých jedným kliknutím cokoli vymažeme, přidáme, nebo 
                            předěláme do jiného stylu, až děsivě dokonalé nápodoby jakýchkoli hlasů, AI hlasové asistenty, kteří 
                            jsou schopní reálně vyřešit celou řadu problému volajících na infolinkách…
                        </p>
                        <Image
                            src="/images/chapters/future/11.png"
                            alt="obr 11" 
                            width={500}
                            height={600}
                            className="rounded mx-auto mb-8"
                        />
                        <p className="mb-4 text-center">
                            Naštěstí zatím naše technologické výdobytky neprojevují podobné záměry jako Skynet v sérii filmů Terminator...
                        </p>
                    </div>
                    <p className="mb-4">
                        Čtvrtá průmyslová revoluce či průmysl 4.0 je zatím poslední stádium vývoje vztahu člověka a 
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
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4 text-center">
                        Pamatujete, když vrcholem digitality byly takzvané “digitálky”?
                    </p>
                    <p className="mb-4">
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
                        většího lidského zásahu. V automatizované výrobě již dnes není třeba přiliš velké fyzické ani intelektuální 
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
                        obrovská</span>, že není tak snadné dohlédnout, co všechno zahrnuje, kdo všechno k ní má přistup a co by se s tím mohlo stát. 
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            Když jste si v dávných dobách předpláceli tištěné noviny, také měl někdo přehled o vaší adrese a o tom, co vás 
                            zajímá (Literární noviny nebo Kůň a pes?). Jenže nikdo už nemohl – tak jako dnes, díky smartpohonům – vědět, 
                            kde a kdy ty noviny čtete, jaký článek vás zaujal, jaký jste přeskočili, na kterou reklamu reagujuete... Taky 
                            nebylo ty vaše data tak snadné uchovávat ani porovnávat s jinými, natož někomu prodat. Což se dnes ve velkém 
                            děje – data mají hodnotu zlata a touží po nich “reklamky”, stejně jako pilitičtí stratégové i obří technologické 
                            korporace, nebo celé vlády.
                        </p>
                    </div>
                    <p className="mb-4">
                        Samozřejmě ne každé využití dat je jejich zneužitím – data z velkého počtu mobilů v nějaké oblasti můžou například 
                        i prostřednictvím obyčejné GPSky přispět k plynulému provozu a dokonce i předcházení nehod.
                    </p>
                    <p className="mb-4">
                        Ale jsou tu i jiné situace. Pomineme-li všechny varianty, kde shromážďování vašich dat slouží k nějakému narušení 
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
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="3" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">5.3</span>What's Cookin’
                        <br/>aneb Přínosy a rizika společnosti 4.0
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('3') ? "block" : "hidden"}`}>
                    <div className="absolute left-0 -mt-24 transform scale-x-[-1]">
                        <Image
                            src="/images/chapters/future/future.svg"
                            width={200}
                            height={200}
                            alt="Budoucnost"
                        />
                    </div>
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
                        <Link href="https://willrobotstakemyjob.com/" target="_blank">Mnoho povolání zanikne</Link> – podle odhadu expertů až 
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
                </div>
            </div>
        </>
    );
};

export default FuturePage;
