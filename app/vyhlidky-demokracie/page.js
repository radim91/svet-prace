"use client";

import Image from "next/image";
import SideImage from "@/components/UI/SideImage";
import Mode from "@/enum/mode";
import { useContext, useState } from "react";
import { ToggleModeContext } from "@/context/ToggleModeContext";
import Link from "next/link";
import CollapseButton from "@/components/UI/CollapseButton";
import Path from "@/enum/path";

const DemocracyPage = () => {
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
                    7. <span className="ms-2">Vyhlídky demokracie</span>
                </h1>
                <h2 className="text-3xl mt-8 font-semibold text-center">Impérium vrací úder?</h2>
            </div>
            <div className="heading-image mt-12">
                <Image
                    src="/images/chapters/democracy/democracy.svg"
                    width={300}
                    height={300}
                    alt="Demokracie"
                />
            </div>
            <div className="pb-48 mx-auto mt-12 content lg:w-1/2">
                <div className="flex justify-center mb-8">
                    <div className="w-1/2">
                        <Image 
                            src="/images/chapters/democracy/01.jpg"
                            alt="obr 1" 
                            width={1125}
                            height={633}
                            className="rounded-l w-full"
                        />
                    </div>
                    <div className="w-1/2">
                        <Image 
                            src="/images/chapters/democracy/02.webp"
                            width={1125}
                            height={633}
                            alt="obr 2" 
                            className="rounded-r w-full"
                        />
                    </div>
                </div>
                <p className="text-center mb-4">
                    Pod pojmem demokracie si leckdy představíme rozdílné věci, ale všechny její podoby spojuje pojem 
                    svobody – i kdyby to měla být svoboda hádat se vulgárně sám se sebou na internetu.
                </p>
                <p className="mb-4">
                    Demokracie je… jedním z nejvíce skloňovaných slovíček na světě.
                    Co je jeho obsahem? Oficiálně jde o systém vlády, který staví na principech svobody, rovnosti
                    a právního státu. 
                </p>
                <p className="mb-4">
                    Úplně nejdůležitější na demokracii je, že zapojuje všechny – nebo by aspoň měla. Všichni se mohou 
                    podílet na rozhodování o tom, “co s námi bude”. A k tomu je zásadní, aby byli lidé aktivní a informovaní.
                </p>
                <p className="mb-8">
                    A jelikož práce je obrovskou součástí našich životů, je pochopitelně i obrovskou součástí fungování – 
                    nebo nefungování – demokracie. Pokud lidé nemohou spoluurčovat, čemu se budou věnovat a za jakých podmínek, 
                    nejsou ani svobodní, ani rovní si s druhými. 
                </p>
                <video
                    controls
                    width="560"
                    height="300"
                    className="rounded mb-8 mx-auto"
                >
                    <source src="/images/chapters/democracy/03.mp4" />
                </video>
                <p className="mb-4 text-center">
                    My říkáme s kým, kdy a za kolik!
                </p>
                <p className="mb-4">
                    A ještě ke všemu jim pak <span className="green">nezbývá čas a energie</span> se 
                    o něčem informovat nebo se do čehokoli zapojovat.
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                    <Image 
                        src="/images/chapters/democracy/04.jpg"
                        alt="obr 4"
                        width={600}
                        height={300}
                        className="rounded mb-8 mt-4 mx-auto"
                    />
                    <p className="mb-4">
                        <Link href="https://denikalarm.cz/serialy/hrdinove-kapitalisticke-prace/" target="_blank">Sérii reportáží</Link> o tom,
                        jak se v našem zdánlivě “nejlepším ze všech světů” žije těm opravdu chudým a pracovně vykořisťovaným a jak vzdálení od
                        vší demokracie si připadají, napsala Saša Uhlová, která v přestrojení vyzkoušela na vlastní kůži různé druhy “podřadných” 
                        prací na farmě, v třídírně odpadu, nebo masokombinátu. Tyto články si získaly takovou slávu, že vznikla i “západní” verze, 
                        kde se Saša pro změnu vydala testovat kvalitu pracovních podmínek v Německu, Anglii i jinde – a tyto reportáže 
                        otisknul slavný <Link href="https://www.theguardian.com/profile/sa-a-uhlov-" target="_blank">britský Guardian</Link>.
                    </p>
                </div>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/4lQ_MjU4QHw?si=65MceMTLv3TzQMDm" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="rounded mb-8 mt-8 mx-auto"
                />
                <p className="mb-4 text-center">
                    Z přemíry práce nám klidně může... trochu hrábnout.
                </p>
                <p className="mb-8">
                    Že je boj za pracovní podmínky a za občanskou i lidskou svobodu jednoznačně propojený, jsme si ukázali hned v několika kapitolách.
                    Proto nás asi nepřekvapí, že s proměnami světa práce v posledních dekádách – a ne vždy ideálními – přichází i obrovské výzvy pro
                    demokracii. Stojíme tak před otázkou, zda nám “impérium vráti úder” a my si necháme vzít všechna pracně vydobytá práva, nebo se
                    naopak “probudí síla” a my budeme žít ve světě ještě demokratičtějším, než dříve.
                </p>
                <Image
                    src="/images/chapters/democracy/05.webp"
                    alt="obr 5"
                    width={600}
                    height={300}
                    className="rounded mb-8 mt-4 mx-auto"
                />
                <p className="mb-8">
                    Netřeba snad dodávat, že k zápasu za  svobodu a demokraci zásadním způsobem přispívají odbory – a tomu jak (spoiler alert: 
                    sociální dialog!), se právě mrkneme na zoubek.
                </p>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="1" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">7.1</span>Get the Balance Right
                        <br/>aneb Odbory jako pilíř demokratické společnosti
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('1') ? "block" : "hidden"}`}>
                    <SideImage side="left" mainImageId={7} />
                    <p className="mb-8">
                        Takže ještě jednou a naposled. Proč odbory? 
                    </p>
                    <Image
                        src="/images/chapters/democracy/06.gif"
                        alt="obr 6"
                        width={500}
                        height={300}
                        className="rounded mb-8 mt-4 mx-auto"
                    />
                    <p className="mb-4">
                        Protože na pomyslné houpačce pracovních práv je váha zaměstnavatele, majitele, či zadavatele práce jako váha slona.
                        A jdyž si slon sedne na sedátko, vy už s tou houpačkou nepohnete. Síla odborů (a všech příbuzných demokratických 
                        institucí) je ve schopnosti spojovat jinak zdánlivě neslyšitelné hlasy do jedné obří, mocné symfonie.
                    </p>
                    <p className="mb-8">
                        A ta už je sakra slyšet – i mezi slony.
                    </p>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/-8h_v_our_Q?si=s74PE5BuM8ME7lJR" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="mb-8 rounded mx-auto"
                    ></iframe>
                    <p className="mb-4 text-center">
                        Tisíc Spartaků je víc než jeden – slavná scéna z filmu Spartakus ukazuje sílu doslovného pojetí 
                        motta “všichni za jednoho”!
                    </p>
                    <p className="mb-4">
                        Právě proto jsou odbory právem považovány za jeden z hlavních pilířů demokratické společnosti. Poskytují platformu,
                        na které zaměstnanci mohou sdružovat své síly a hájit svá práva a zájmy. A tento proces nejen – jak už jsme řekli –
                        zvyšuje vyjednávací sílu jednotlivých pracovníků, ale také přispívá k 
                        vytváření <span className="green">spravedlivějšího pracovního prostředí</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            Nerovnost samozřejmě nezpůsobují jen zaměstnavatelé a “ti nahoře”, může být přítomná i na pracovišti. Odbory řeší 
                            i její horizontální rozvrstvení – žádnému zaměstnanci či zaměstnankyni by se nemělo dostávat horšího zacházení 
                            kvůli barvě pleti, věku, názoru nebo třeba kvůli tomu, že se nelíbí panu vedoucímu.
                        </p>
                    </div>
                    <p className="mb-8">
                        Odbory tak napomáhají snižovat sociální nerovnosti a podporují rovnost příležitostí na pracovišti. 
                        A navíc přispívají k celkovému demokratickému procesu tím, že zapojují zaměstnavatele a vládu do dialogu o
                        důležitých pracovních otázkách. Tento třístranný dialog... 
                    </p>
                    <Image
                        src="/images/chapters/democracy/07.png"
                        width={500}
                        height={500}
                        alt="obr 7"
                        className="rounded mb-8 mx-auto"
                    />
                    <p className="mb-4">
                        ...Umožňuje harmonizaci ekonomických a sociálních politik (rozuměj = rovnováha peněz a vztahů, čímž se zajišťuje,
                        že zájmy všech stran jsou brány v úvahu. Odbory tak nejsou jen ochránci práv pracovníků – neřeší, jednoduše řečeno, 
                        jenom jak vysoká bude výplata prodavaček v Albertu, ale jak bude nastavená celá státní politika ohledně práce a 
                        příbuzných témat. Vyjednávají o tom, jak společnost vnímá práci, odpočinek, materiální zabezpečení i hodnotu 
                        různých profesí a jak bude přistupovat k rozdílným problémům a krizím. Existuje totiž tisíc způsobů, jak se 
                        postavit k nezaměstnanosti nebo například k monopolizaci nějakého odvětví – a ne každý z nich bude mít pro 
                        společnost stejný přínos.
                    </p>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/jBEA65zdgKw?si=t4xhvoXIR29IPQQU" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="mb-8 rounded mx-auto"
                    ></iframe>
                    <p className="mb-4 text-center">
                        “Nejsi přece tak naivní, aby sis myslel, že žijeme v demokracii, kamaráde, no ne? Tohle je volnej trh – a ty seš 
                        jeho součástí,” říká Gordon Gekko v ikonickém filmu Wall Street. Bude o podobě demokracie rozhodovat on (a jemu 
                        podobní), nebo tisíce zaměstnanců, které chtěl ve filmu připravit svou spekulací o práci?
                    </p>
                    <p className="mb-8">
                        A v neposlední řadě, tím, že se velká většina potenciálních pracovních, ale tím pádem i společenských konfliktů 
                        díky sociálnímu dialogu přesouvá do roviny <span className="green">vyjednávání</span>, přispívají odbory k udržení sociální harmonie a stability. 
                        Jejich jednání minimalizuje riziko sociálních nepokojů a stávkových akcí, které by mohly destabilizovat společnost 
                        – jak už jsme v historii také mnohokrát viděli.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/9TyxxLHfBwE?si=3qlzZE2nk0PNxAfW" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="mb-8 rounded mx-auto"
                        ></iframe>
                        <p className="text-center mb-4">
                            Ne každý umí vyjednávat tak přesvědčivě jako Bruce Willis…
                        </p>
                        <p className="mb-4">
                            Odbory mohou být stabilizačním prvkem dokonce i v už destabilizované společnosti – významným příkladem je třeba jejich role 
                            během Arabského jara, konkrétně v Tunisku. Tamní odborová organizace UGTT (Union Générale Tunisienne du Travail) sehrála 
                            klíčovou roli při organizování demonstrací a vyjednávání s vládou, což vedlo k pádu autoritářského režimu a nastolení demokracie. 
                        </p>
                        <p className="mb-4">
                            Vidíte? Demokratické změny, tam, kde mohla být klidně občanská válka, i díky zkušenostem a schopnostem 
                            odborářů jednat i v momentech absolutní krize.
                        </p>
                    </div>
                </div>
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="2" />
                    <h3 className="text-center text-2xl blue mb-4">
                        <span className="me-8">7.2</span>We Are The World
                        <br/>aneb Sociální dialog v době globální
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('2') ? "block" : "hidden"}`}>
                    <SideImage side="right" mainImageId={7} />
                    <video
                        controls
                        width="560"
                        height="300"
                        className="mb-8 mt-8 rounded mx-auto"
                    >
                        <source
                            src="/images/chapters/democracy/07.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <p className="mb-4 text-center">
                        Slova a ideje mohou skutečně měnit svět
                    </p>
                    <p className="mb-4">
                        Odbory – a vůbec všichni pracující – čelí v dnešní době řadě výzev. Většina z nich je spojená s globalizací a s ní spojenými 
                        technologickými změnami a flexibilizací trhu práce. Spoustu z nich už jsme probrali v kapitole o budoucnosti práce.
                    </p>
                    <p className="mb-4">
                        Změnily se ale také role všech zúčastněných. V <span className="green">globálním světě</span> globální hráči, jejichž moc je až pohádková – často 
                        větší než celých států. Vyjednávání s někým, pro koho není problém vzít celou továrnu – nebo dvě, nebo dvě stě – a přesunout 
                        je nejen ze státu do státu, ale z kontinentu do kontinentu, nemá logicky úplně stejnou podobu jako dřív.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            <Link href=" https://en.wikipedia.org/wiki/Globalization" target="_blank">Globalizace</Link> tu samozřejmě byla už dříve,
                            jejími prvními projevy byly kupříkladu kolonizace a moderní mezinárodní obchod, nicméně obě velké války a následná 
                            čtyřicetiletá existence železné opony značně blokovaly celoplanetární ekonomické ambice všemožných korporací. Od 
                            devadesátých let však nastal jejich absolutní boom, zrychlený neoliberálními ideologiemi i technologiemi včele s 
                            internetem a přesunem ekonomiky “do digitálu”. Moc, kterou mají firmy jako Amazon, Apple, Nestlé, Nvidia, Tencent, 
                            Alphabet atd. je nesrovnatelná s čímkoli dříve, a to navzdory tomu, že se svět po zdánlivém období “bez hranic” opět 
                            polarizuje s narůstem vlivu dříve chudších mocností jako Indie nebo Čína.
                        </p>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/LbmYA5rYOVc?si=2ClfIr0H4vh7027W" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="mx-auto mb-8 rounded"
                        ></iframe>
                        <p className="mb-4 text-center">
                            Mezi první nadnárodní korporace patřila zakzvaná Východoindická společnost – takhle je zpodobněná 
                            v pozoruhodném seriálu Taboo
                        </p>
                    </div>
                    <p className="mb-8">
                        K tomu, aby byly odbory takříkajíc “konkurenceschopné” i na globální rovině, zásadně přispívají organizace jako MOP.
                    </p>
                    <Image
                        src="/images/chapters/democracy/08.gif"
                        width={500}
                        height={300}
                        alt="obr8"
                        className="mx-auto mb-8 rounded"
                    />
                    <p className="mb-4 text-center">
                        Ano, <Link href={Path.FEARLESS}>staří známí z MOP</Link>! 
                    </p>
                    <p className="mb-8">
                        Pro připomenutí, MOP je jednou z nejvýznamnějších institucí, která podporuje a prosazuje sociální dialog na celosvětové 
                        úrovni. Založena byla v roce 1919 jako součást Versailleské mírové smlouvy po první světové válce, čili už je to pěkná 
                        babička – ale nepřestává se vyvíjet a adaptovat se na aktuální problémy. 
                    </p>
                    <Image
                        src="/images/chapters/democracy/09.jpg"
                        width={500}
                        height={300}
                        alt="obr 9"
                        className="mx-auto mb-8 rounded"
                    />
                </div>
            </div>
        </>
    );
};

export default DemocracyPage;
