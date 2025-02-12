"use client";

import Image from "next/image";
import SideImage from "@/components/UI/SideImage";
import Mode from "@/enum/mode";
import { useContext, useState } from "react";
import { ToggleModeContext } from "@/context/ToggleModeContext";
import Link from "next/link";
import CollapseButton from "@/components/UI/CollapseButton";
import Path from "@/enum/path";
import ImageDesc from "@/components/UI/ImageDesc";

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
                {/* <div className="flex justify-center mb-8"> */}
                {/*     <div className="w-1/2"> */}
                {/*         <Image  */}
                {/*             src="/images/chapters/democracy/01.jpg" */}
                {/*             alt="obr 1"  */}
                {/*             width={1125} */}
                {/*             height={633} */}
                {/*             className="rounded-l w-full" */}
                {/*         /> */}
                {/*     </div> */}
                {/*     <div className="w-1/2"> */}
                {/*         <Image  */}
                {/*             src="/images/chapters/democracy/02.webp" */}
                {/*             width={1125} */}
                {/*             height={633} */}
                {/*             alt="obr 2"  */}
                {/*             className="rounded-r w-full" */}
                {/*         /> */}
                {/*     </div> */}
                {/* </div> */}
                {/* <p className="text-center mb-4"> */}
                {/*     Pod pojmem demokracie si leckdy představíme rozdílné věci, ale všechny její podoby spojuje pojem  */}
                {/*     svobody – i kdyby to měla být svoboda hádat se vulgárně sám se sebou na internetu. */}
                {/* </p> */}
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
                    className="rounded mx-auto"
                >
                    <source src="/images/chapters/democracy/03.mp4" />
                </video>
                <ImageDesc
                    description="My říkáme s kým, kdy a za kolik!"
                />
                <p className="mt-4 mb-4">
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
                        <Link href="https://denikalarm.cz/serialy/hrdinove-kapitalisticke-prace/" target="_blank" className="underline">Sérii reportáží</Link> o tom,
                        jak se v našem zdánlivě “nejlepším ze všech světů” žije těm opravdu chudým a pracovně vykořisťovaným a jak vzdálení od
                        vší demokracie si připadají, napsala Saša Uhlová, která v přestrojení vyzkoušela na vlastní kůži různé druhy “podřadných” 
                        prací na farmě, v třídírně odpadu, nebo masokombinátu. Tyto články si získaly takovou slávu, že vznikla i “západní” verze, 
                        kde se Saša pro změnu vydala testovat kvalitu pracovních podmínek v Německu, Anglii i jinde – a tyto reportáže 
                        otisknul slavný <Link href="https://www.theguardian.com/profile/sa-a-uhlov-" target="_blank" className="underline">britský Guardian</Link>.
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
                    className="rounded mt-8 mx-auto"
                />
                <ImageDesc
                    description="Z přemíry práce nám klidně může... trochu hrábnout."
                />
                <p className="mt-4 mb-8">
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
                <div className="mt-12 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="1" />
                    <h3 className="text-left text-3xl blue mb-4 flex">
                        <div className="subchapter-nr-width">
                            <span className="me-8">7.1</span>
                        </div>
                        <div>
                            Get the Balance Right aneb Odbory jako pilíř demokratické společnosti
                        </div>
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
                        className="rounded mx-auto"
                    ></iframe>
                    <ImageDesc
                        description="Tisíc Spartaků je víc než jeden – slavná scéna z filmu Spartakus ukazuje sílu doslovného pojetí 
                        motta “všichni za jednoho”!"
                    />
                    <p className="mt-4 mb-4">
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
                        width={400}
                        height={500}
                        alt="obr 7"
                        className="rounded mb-8 mx-auto"
                    />
                    <p className="mb-8">
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
                        className="rounded mx-auto"
                    ></iframe>
                    <ImageDesc
                        description="“Nejsi přece tak naivní, aby sis myslel, že žijeme v demokracii, kamaráde, no ne? Tohle je volnej trh – a ty seš 
                        jeho součástí,” říká Gordon Gekko v ikonickém filmu Wall Street. Bude o podobě demokracie rozhodovat on (a jemu 
                        podobní), nebo tisíce zaměstnanců, které chtěl ve filmu připravit svou spekulací o práci?"
                    />
                    <p className="mt-4 mb-8">
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
                            className="rounded mx-auto"
                        ></iframe>
                        <ImageDesc
                            description="Ne každý umí vyjednávat tak přesvědčivě jako Bruce Willis…"
                        />
                        <p className="mt-4 mb-4">
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
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="2" />
                    <h3 className="text-left text-3xl blue mb-4 flex">
                        <div className="subchapter-nr-width">
                            <span className="me-8">7.2</span>
                        </div>
                        <div>
                            We Are The World aneb Sociální dialog v době globální
                        </div>
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('2') ? "block" : "hidden"}`}>
                    <SideImage side="right" mainImageId={7} />
                    <video
                        controls
                        width="560"
                        height="300"
                        className="mt-8 rounded mx-auto"
                    >
                        <source
                            src="/images/chapters/democracy/07.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <ImageDesc
                        description="Slova a ideje mohou skutečně měnit svět"
                    />
                    <p className="mt-4 mb-4">
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
                            <Link href=" https://en.wikipedia.org/wiki/Globalization" target="_blank" className="underline">Globalizace</Link> tu samozřejmě byla už dříve,
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
                            className="mx-auto rounded"
                        ></iframe>
                        <ImageDesc
                            description="Mezi první nadnárodní korporace patřila zakzvaná Východoindická společnost – takhle je zpodobněná 
                            v pozoruhodném seriálu Taboo."
                        />
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
                        Ano, <Link href={Path.FEARLESS} className="underline">staří známí z MOP</Link>! 
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
                    <p className="mb-4">
                        A co teda MOP dělá? 
                    </p>
                    <p className="mb-4">
                        Pomáhá stanovovat mezinárodně platné standardy práce – vypracovává a vydává řadu konvencí a doporučení. Tyto dokumenty 
                        jsou základními nástroji pro ochranu práv zaměstnanců a podporu spravedlivých pracovních podmínek na globální úrovni.
                    </p>
                    <p className="mb-4">
                        Podporuje lokální organizace v rozvoji tripartitního modelu sociálního dialogu v různých zemích a regionech. Poskytuje 
                        platformu pro dialog mezi sociálními partnery, usnadňuje výměnu zkušeností a osvědčených postupů a poskytuje technickou 
                        a odbornou pomoc při implementaci mezinárodních pracovněprávních standardů.
                    </p>
                    <p className="mb-4">
                        Rychle se vyvíjející technologie a společenské změny přinášejí další a další výzvy – a to i v legislativní rovině. 
                        Svět stále hledá cestu, jak se vyrovnávat s globálními problémy globální cestou – jelikož na celoplanetární hráče 
                        jsou mnohdy státní či řekněme celoevropské regule málo. To se jasně projevuje kupříkladu v boji s klimatickou krizí 
                        a jejími následky, ale také <span className="green">ve fenoménu daňových rájů, outsourcingu</span> a podobně.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            Mysli globálně, jednej lokálně, říkalo se donedávna – a má to samozřejmě smysl, protože kde jinde mpže člověk 
                            doopravud jednat, než na svém pomyslném dvorku (městě, státu) – čili tam, kam jaksi jeho ruka dosáhne? Jenže 
                            ne vždy něco takového stačí. Můžete mít rozumně nastavené zákony “doma”, ale když firma, která u vás prodává 
                            všechny ty skvělé počítače, auta, tenisky a hračky vyrábí v zemích třetího světa a daní v Irsku nebo na Kypru, 
                            jaký máte na její činnost vlastně vliv? Můžete zakázat zastaralé spalovací motory a škodlivé chemikálie ve 
                            vlastní zemi, ale pokud bude zbytek světa dělat něco jiného a přidá k tomu něco jako <Link href="https://cs.wikipedia.org/wiki/Hydraulick%C3%A9_%C5%A1t%C4%9Bpen%C3%AD" target="_blank" className="underline">frakování</Link>,
                            budete mít holt smůlu. Proto je čím dál tím důležitější hledat cesty, jak ovlivňovat svět i globálně – zakládáním 
                            mezinárodních spojenectví, nebo třeba tlakem na lokální politiky, aby se o globální standardy zasazovali. 
                        </p>
                    </div>
                    <p className="mb-8">
                        Ne vždy je pak jediným modelem pomyslný “boj” – tripartitní model nejenže zajišťuje participaci všech klíčových aktérů 
                        v rozhodovacích procesech, ale také přispívá k vyváženému a inkluzivnímu rozvoji pracovního trhu. V tomto smyslu je 
                        výhodný pro všechny zúčastněné – umožňuje vytváření pracovních podmínek, které jsou spravedlivé a přizpůsobené potřebám 
                        všech stran, což vede k vyšší produktivitě, nižší fluktuaci zaměstnanců a lepšímu pracovním klimatu.
                    </p>
                    <Image
                        src="/images/chapters/democracy/11.gif"
                        width={500}
                        height={500}
                        alt="obr 11"
                        className="mx-auto rounded mb-8"
                    />
                </div>
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="3" />
                    <h3 className="text-left text-3xl blue mb-4 flex">
                        <div className="subchapter-nr-width">
                            <span className="me-8">7.3</span>
                        </div>
                        <div>
                            Get up, Stand Up aneb Aktivní účast na ochraně demokracie
                        </div>
                    </h3>
                </div>
                <div className={`mb-12 ${shown.includes('3') ? "block" : "hidden"}`}>
                    <SideImage side="left" mainImageId={7} />
                    <Image
                        src="/images/chapters/democracy/12.jpg"
                        width={400}
                        height={500}
                        alt="obr 12"
                        className="mx-auto rounded mt-8"
                    />
                    <ImageDesc
                        description="Je to opravdu tak složité, jak se někdy zdá?"
                    />
                    <p className="mt-4 mb-4">
                        Naše webová stránka vám představila historii lidské práce – a ať už byl náhled na ni zběžný (ty první tisíce let), 
                        nebo podrobný (nedávné stovky a desítky let), vždy ukazoval jednu a tutéž věc.
                    </p>
                    <p className="mb-4">
                        Historie (nejen) práce není ani černá, ani bílá. Není pravda, že by se vše jen zhoršovalo a konstantně směřovalo od 
                        desíti k pěti. Stejně tak však neplatí, že si stačí počkat a “bude líp”.
                    </p>
                    <p className="mb-4">
                        Tím, co rozhoduje, je aktivita nás všech. Jako jedinců, ale především jako kolektivu. Ať už odborů, nebo třeba školní 
                        třídy. Ve dvou se to lépe táhne, jeden za všechny, všichni za jednoho, víc hlav víc ví – a tak dále. 
                    </p>
                    <p className="mb-8">
                        Naše doba je nejspíše ta nejvíce individualistická v celé historii lidstva. Čelíme osamění, roztříštění společnosti, 
                        rozpadu společných zájmů, ztrátě sdíleného fyzického prostoru, kulturním válkám ve virtuálním prostoru, ale také 
                        duševnímu strádání, i reálným fyzickým tlakům, a taky nedostatku času a někdy i nudě.
                    </p>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/KHbzSif78qQ?si=0LgBjyO3eFiYQqQ0" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="mx-auto rounded"
                    ></iframe>
                    <ImageDesc
                        description="Nenechte nikoho, aby vám říkal, co přesně máte dělat – ani nás! :)"
                    />
                    <p className="mt-4 mb-8">
                        Ale přiznejme si, že mnohdy se nám nechce přiložit ruku ke kolektivnímu dílu i z mnohem přízemnějšího a prozaičtějšího 
                        důvodu – stydíme se. Nánosy minulosti, ať už děsivé přízemnosti normalizačního komunismu, nebo liberální výchovy k čistě 
                        osobní svobodě a boji jen sám za sebe (vzpomeňmě na paní Thatcherovou a její tvrzení, že společnost neexistuje), způsobily, 
                        že angažovat se nám mnohdy přijde trapné. Nechceme být “svazáci” nebo odboroví “nemakačenkové”, nechceme být “šílenci, 
                        co se lepí k silnicím” nebo vyřvávají bláznivá hesla. 
                    </p>
                    <video
                        controls
                        width={560}
                        height={315}
                        className="mx-auto rounded"
                    >
                        <source
                            src="/images/chapters/democracy/13.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <ImageDesc
                        description="Politika skutečně není dvakrát zábavná..."
                    />
                    <p className="mt-4 mb-4">
                        Jenže demokracie není otázkou vkusu, nebo názoru. Vypadat dobře, tvářit se cool a na vše mít nekonformní názor, který 
                        “nejde s většinou” nám nepomůže zařídit si důstojnou mzdu, dostupné bydlení, nezdemolovanou planetu, nebo životní 
                        jistoty, když nám zrovna nebude hej.
                    </p>
                    <p className="mb-8">
                        Není třeba zbytečně strašit, že “teď nebo nikdy” – lidstvo svou existenci obhrožuje permanentně a příroda také uměla 
                        vytáhnout růžky i dříve než v jednadvacátém století (než tu byl covid, už jsme znali lahůdky jako španělská chřipka, 
                        lepra, mor, pravé neštovice nebo cholera). Jako byly vždy hrozby, byly – a jsou – také vždy příležitosti. Před jednou 
                        z nich stojíme právě teď. Jsme jednou z nejvzdělanějších generací v historii lidstva – je pro nás relativně snadné 
                        vypracovat webovku jako je tato a shrnout pár století do vtipného příběhu. Nechybí nám informace a data – a nechybí 
                        nám ani možnosti. Máme technologie, které ještě nedávno nebyly ani představitelné. Zároveň tyto technologie nejsou 
                        plně v našich rukou a naše nerovná společnost, ovládaná zájmy nejbohatších – a prokazatelně nejchamtivějších – nemá 
                        vždy zájem na tom, aby nám, nám všem, bylo v našich každodenních životech opravdu dobře a svobodně.
                    </p>
                    <Image
                        src="/images/chapters/democracy/14.jpg"
                        alt="obr 14"
                        width={400}
                        height={315}
                        className="mx-auto rounded"
                    />
                    <ImageDesc
                        description="Nakonec je už pár tisíc let v pozadí spousty komplikovaných problémů to samé…"
                    />
                    <p className="mt-4 mb-4">
                        A co jiného je demokracie, než boj za právo, aby každý přinejmenším dostal šanci mít se dobře a svobodně?
                    </p>
                    <p className="mb-8">
                        Máme úžasnou šanci vybudovat možná nejsvobodnější společnost, jaká tu kdy byla, 
                        s <Link href="https://cs.wikipedia.org/wiki/Z%C3%A1kladn%C3%AD_nepodm%C3%ADn%C4%9Bn%C3%BD_p%C5%99%C3%ADjem" target="_blank" className="underline">nepodmíněným příjmem</Link>, 
                        či zkráceným pracovním týdnem a spoustou volného času věnovat se tomu, k čemu nás srdce volá. 
                    </p>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/vJHkTtvnUqA?si=LHetdDHHotPPG5o5" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="rounded mx-auto"
                    ></iframe>
                    <ImageDesc
                        description="Nejslavnější “pep talk” všech dob v podání zestárlého boxera Rockyho Balboy nám připomíná, že nestačí rozdávat tvrdé 
                        rány, ale taky něco vydržet… Třeba tu trochu diskomfortu při společném organizování se."
                    />
                    <p className="mt-4 mb-4">
                        Chceme ji propásnout? Nebo ji uchopit “pevně za pačesy”? To je jen na nás.
                    </p>
                    <p className="mb-8">
                        A k tomu nám dopomáhej…………… Naše vlastní, společná PRÁCE!
                    </p>
                </div>
            </div>
        </>
    );
};

export default DemocracyPage;
