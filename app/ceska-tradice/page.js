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

const TraditionPage = () => {
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
                    3. <span className="ms-2">Česká tradice</span>
                </h1>
                <h2 className="text-3xl mt-8 font-semibold text-center">
                    od kováře Jecha po zaplněný Václavák
                </h2>
            </div>
            <div className="heading-image mt-12">
                <Image
                    src="/images/chapters/tradition/tradition.svg"
                    width={300}
                    height={300}
                    alt="Tradice"
                />
            </div>
            <div className="pb-48 mx-auto mt-12 content lg:w-1/2">
                <p className="mb-8">
                    O nás Češích se říká, že máme <span className="green">zlaté ručičky</span>. 
                    Myslí se tím, že jsme skvělí v mnoha pracovních oborech. 
                </p>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/PI7-f4rlwzM?si=oehsRDpwKVx6MPnD" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="rounded mx-auto mb-8"
                    ></iframe>
                </div>
                <p className="mb-4">
                    Nás ale spíš zajímá, jak jsme na tom v průběhu historie byli se schopností ozvat se za svá pracovní práva,
                    když bylo potřeba. A taky, jak jsme na tom dnes.
                </p>
                <p className="mb-4">
                    Jako asi ve všem – je to ambivalentní. Jinak řečeno, 
                    Češi mohou být na svou tradici odborů, aktivní dělnické třídy nebo studentských i občanských protestů právem hrdí. 
                    Ale stejně tak si musí setsakramentsky dávat pozor, aby nebylo Česku v jednadvacátém století nadále
                    přezdíváno “<Link href="https://www.advojka.cz/archiv/2016/17/od-montovny-k-montovne-jdem" target="_blank" className="underline">montovna Evropy</Link>”. 
                </p>
                <p className="mb-8">
                    Jak? Inu, jak radí všechny moderní poučky a příručky, od manažerských po vztahové – komunikovat. 
                    A občas pěkně nahlas.
                </p>
                <Image
                    src="/images/chapters/tradition/00.jpg"
                    alt="obr 0" 
                    width={400}
                    height={600}
                    className="rounded mx-auto mb-12"
                />
                <div className="mt-4 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="0" />
                    <SubchapterHeading
                        id="0"
                        chapterNumber="3.1"
                        chapterTitle="Wind of Change aneb Změny společnosti a počátek odborů"
                        setShown={shownHandler}
                        shown={shown}
                    />
                </div>
                <div className={`mb-12 ${shown.includes('0') ? "block" : "hidden"}`}>
                    <SideImage side="left" mainImageId={3} />
                    <div className="flex justify-center mt-8">
                        <div className="w-1/2">
                            <Image 
                                src="/images/chapters/tradition/01.png"
                                alt="obr 1" 
                                width={1125}
                                height={633}
                                className="rounded-l w-full"
                            />
                        </div>
                        <div className="w-1/2">
                            <Image 
                                src="/images/chapters/tradition/02.webp"
                                width={1125}
                                height={633}
                                alt="obr 2" 
                                className="rounded-r w-full"
                            />
                        </div>
                    </div>
                    <p className="mt-8 mb-4">
                        Stejně jako zbytek světa se během první poloviny 19.století{" "}
                        <span className="green">území dnešní České republiky</span>{" "}
                        rapidně změnilo. Průmyslová revoluce nás neminula – naopak, v rámci střední Evropy jsme
                        patřili k těm nejvíce zasaženým industrializací. Malé řemeslné dílny a koňské povozy
                        nahradily velké výrobní haly a železnice. Lidé z venkova se hrnuli za prací do měst. 
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Česká republika ani Česko se nám tehdy neříkalo. Byli jsme České země a patřili jsme
                            k habsburské říší (a.k.a. Rakousku-Uhersku). Na tomto území táhnoucím se od severní
                            Itálie až po západní Ukrajinu vládli skoro 4 století vousatí Rakušané (s čestnou výjimkou
                            Marie-Terezie), kteří sídlili ve Vídni. Říše se rozpadla po první světové válce v roce
                            1918, kdy mimo jiné vzniklo Československo v čele se slavným Tomášem Garriguem Masarykem.
                        </p>
                        <Image
                            src="/images/chapters/tradition/03.jpg"
                            width={400}
                            height={600}
                            alt="obr 3"
                            className="rounded mx-auto mb-8"
                        />
                    </div>
                    <p className="mb-4">
                        Podobně jako <span className="green">v pubertě</span>, kdy se lidem strašně rychle změní
                        tělo, ale mozek nestíhá držet tempo, doslova brutální změny společnosti a ekonomiky
                        nedoprovázely odpovídající změny v oblasti politické. Stát se nestíhal změnit.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/tradition/04.gif"
                            width={400}
                            height={250}
                            alt="obr 4"
                            className="rounded mx-auto mb-8"
                        />
                    </div>
                    <p className="mb-4">
                        Panovník měl pořád neomezenou moc, parlament ani volby neexistovaly, šlechta mohla své
                        poddané nutit k neplacené práci na svých pozemcích a slova jako svoboda, demokracie nebo
                        lidská práva se teprve dostávala do slovníku, ale mluvit o nich veřejně bylo úplně zakázáno,
                        na což dohlížela i <span className="green">tajná policie</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Většina operací tajné služby nevypadala jako ve světě Jamese Bonda. Kníže Metternich,
                            který měl v Rakousku pod palcem kdeco, trval především na tom, aby si mohl přečíst veškerou
                            poštu, která říší projde – což bylo opravdu hodně, vzhledem k tomu, že zde byl poštovní uzel
                            Evropy. Kolik nebezpečných anarchistických či jiných mailů si v reálu před spaním přečetl,
                            se nás neptejte, ale držet “nebezpečné živly” zkrátka se mu celkem dařilo.
                        </p>
                        <Image
                            src="/images/chapters/tradition/05.jpg"
                            width={400}
                            height={600}
                            alt="obr 5"
                            className="rounded mx-auto"
                        />
                        <ImageDesc
                            description="Naštvanost lidí se ale nedala držet na úzdě navždy."
                        />
                        <p className="mt-4 mb-4">
                            Podnikatele štvalo, že měli často větší majetky šlechta, ale nemohli ovlivňovat chod státu a
                            sedět ve vysokých úřadech. Dělníci byli frustrovaní z podmínek, ve kterých žili. A nikdo si
                            nemohl stěžovat, hlavně ne veřejně (v novinách), protože všude vládla tvrdá cenzura.
                        </p>
                    </div>
                    <p className="mb-8">
                        A tak logicky vypukla revoluce. Shodou okolností nejen u nás, ale prakticky v celé Evropě, kterou
                        v letech 1848–1849 proletěla doslova vlna různých povstání.
                    </p>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/5P_bnP_yn_E?si=vr78kN4x6SKtqRSv" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="mb-8 rounded mx-auto"
                    ></iframe>
                    <p className="mb-4">
                        Bylo to období politických bouří a pouličních protestů. Na našem území šlo ale úplně o první
                        moderní revoluci!
                    </p>
                    <p className="mb-4">
                        A úplně poprvé se tu taky řešily dnes už samozřejmé věci: že všichni jsou si před zákony rovni,
                        že vůle občanů je víc než vůle panovníka a že jeho moc má být omezena ústavou a dalšími zákony,
                        nebo že si občané mají volit své zástupce, kteří se pak budou věnovat přijímání zákonů a chodu státu. 
                    </p>
                    <p className="mb-8">
                        Speciálně u nás, protože jsme neměli vlastní národní stát, se řešil taky problém nezávislosti a
                        svrchovanosti vlastního národa (rozuměj: aby to za nás neřídil nikdo jiný odněkud z Vídně).
                    </p>
                    <Image
                        src="/images/chapters/tradition/06.png"
                        width={560}
                        height={600}
                        alt="obr 6"
                        className="rounded mx-auto mb-8"
                    />
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/FJt7gNi3Nr4?si=4BR1Y9LBHyVG1zrd" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="rounded mx-auto"
                    ></iframe>
                    <ImageDesc
                        description="V rámci této revoluce se z poddaných se stali občané."
                    />
                    <p className="mt-4 mb-4">
                        Na našem území bylo definitivně zrušeno poddanství i povinnost roboty (nucené a neplacené práce pro
                        vrchnost) a taky byla třeba poprvé založena ministerstva.
                    </p>
                    <p className="mb-8">
                        Šlechtě to vzalo spoustu práv, ale také povinností (už se nemusela starat o většinu občanů nebo fungování
                        věcí veřejných – to byla starost státu). Staré časy (tedy feudalismus) skončily. Roztočila se ruleta{" "}
                        <Link href="https://cs.wikipedia.org/wiki/Moderna" target="_blank" className="underline">moderny</Link> a hlavními výherci
                        byli protentokrát rolníci, státní úředníci a také podnikatelé.
                    </p>
                    <Image
                        src="/images/chapters/tradition/07.png"
                        width={600}
                        height={600}
                        alt="obr 7"
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        V době revoluce se taky poprvé na našem území formuloval moderní odborový program. Do té doby veřejnost o
                        dělníky příliš nestála. Teď mohli vystoupit na veřejnost se svými požadavky. Ale když říkáme dělníci,
                        myslím tím bohužel opravdu jen dělníky. Dělnice měly <span className="green">pořád smůlu</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/6-Hc0nqJUi4?si=nNLTVRODAKWwebQ9" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="mb-8 mt-4 rounded mx-auto"
                        ></iframe>
                        <p className="mb-4">
                            To nejlepší, na co to mohly ženy v 19.století dotáhnout, byly “dcery národa”. O opravdu samostatné a
                            rovnocenné pozice musely ještě nějaký ten pátek bojovat...
                        </p>
                    </div>
                    <Image
                        src="/images/chapters/tradition/08.svg"
                        width={800}
                        height={600}
                        alt="obr 8"
                        className="rounded mx-auto mb-12"
                    />
                </div>
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="1" />
                    <SubchapterHeading
                        id="1"
                        chapterNumber="3.1.1"
                        chapterTitle="Intermezzo: NeoAbsolutismus Strikes Back"
                        setShown={shownHandler}
                        shown={shown}
                    />
                </div>
                <div className={`mb-12 ${shown.includes('1') ? "block" : "hidden"}`}>
                    <SideImage side="right" mainImageId={3} />
                    <Image
                        src="/images/chapters/tradition/09.jpg"
                        width={800}
                        height={600}
                        alt="obr 9"
                        className="rounded mx-auto mt-8"
                    />
                    <ImageDesc
                        description="Vítězství revoluce netrvalo dlouho."
                    />
                    <p className="mt-4 mb-4">
                        V padesátých letech 19.století u nás nastal takzvaný neoabsolutismus.
                    </p>
                    <p className="mb-4">
                        Ústava garantující omezení moci i parlament byly opět zrušeny a lidem
                        bylo znovu zakázáno “kecat do politiky” nebo protestovat.
                    </p>
                    <p className="mb-4">
                        Na druhou stranu, “true feudalismus” se úplně nevrátil. Státní správá už byla modernizovaná
                        a poddanství zůstalo zrušeno. A především – naplno se rozjel <span className="green">kapitalismus</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Každý den se pokládaly metry železnic, zakládály banky a akciové společnosti. Elity státu
                            (nejmocnější šlechtické rody a nejvyšší úředníci) vysílaly jasný signál: můžete zbohatnout,
                            ale do politiky nám nemluvte.
                        </p>
                        <Image
                            src="/images/chapters/tradition/10.jpg"
                            width={400}
                            height={600}
                            alt="obr 10"
                            className="rounded mx-auto mb-8"
                        />
                    </div>
                    <p className="mb-12">
                        V představě, že nové ekonomické elity nebudou kromě peněz chtít i moc, se ale neoabsolutismus
                        přepočítal. Po deseti letech padnul a vrátil se parlament. Vláda jednoho muže definitvně
                        zamířila do historie.
                    </p>
                </div>
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="2" />
                    <SubchapterHeading
                        id="2"
                        chapterNumber="3.2"
                        chapterTitle="Power to The People: Postupná demokratizace"
                        setShown={shownHandler}
                        shown={shown}
                    />
                </div>
                <div className={`mb-12 ${shown.includes('2') ? "block" : "hidden"}`}>
                    <SideImage side="left" mainImageId={3} />
                    <p className="mt-8 mb-4">
                        Po roce 1860 mohla demokracii a občanská práva nejdřív užívat jen úzká elita movitých mužů. V
                        prvních přímých volbách do vídeňského parlamentu roku 1873 mohlo například volit pouze 6 % 
                        dospělého obyvatelstva.
                    </p>
                    <p className="mb-4">
                        V následujících desetiletích se ale společnost stále rychleji demokratizovala a čím dál
                        tím víc lidí bylo integrováno.
                    </p>
                    <p className="mb-4">
                        Jedni z prvních na řadě byli dělníci a dělnice: ještě při revoluci 1848 se na ně nahlíželo 
                        jako na nebezpečnou lůzu, co nemá co ztratit. Konečně ale začalo všem docházet, že dělnictva
                        bude přibývat – stojí na něm totiž úspěch průmyslu. A tudíž bohatství všech. Rozšíření práv 
                        i na ně bylo <span className="green">nevyhnutelné</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/tradition/11.jpg"
                            width={600}
                            height={600}
                            alt="obr 11"
                            className="rounded mx-auto mt-4 mb-8"
                        />
                        <p className="mb-4">
                            Pro začátek bylo dělníkům a dělnicím dovoleno zakládat spolky a vydávat noviny.
                            Zní to jako málo? Po letech cenzury to byla skutečná výhra.
                        </p>
                    </div>
                    <p className="mb-4">
                        Pohled společnosti na dělníky se <span className="green">otočil o 180 stupňů</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/tradition/12.png"
                            width={400}
                            height={600}
                            alt="obr 12"
                            className="rounded mx-auto mt-4"
                        />
                        <ImageDesc
                            description="Slavný obraz podobizna kováře Jecha od Karla Purkyněho"
                        />
                        <p className="mt-4 mb-4">
                            Znáte pojem zeitgeist? Ne, nemyslíme ten konspirační dokument, ale německé slovo,
                            které znamená “duch doby”. Jde o přesvědčení, že myšlenky a představy, které jsou
                            v dané době nejsilnější, se promítají do všeho, nebo (pop)kultury. Tak by se dalo
                            nahlížet na obraz Karla Purkyněho “Podobizna kováře Jecha” z roku 1860. Říkáte si,
                            co je sakra zajímavého na obrázku dělníka? No hlavně to, že vidíme dělníka při četbě,
                            neboli intelektuální činnosti – a to poprvé v dějinách českého výtvarného umění.
                            Je to vlastně doklad proměny myšlení lidí – a jejich názoru na manuálně pracující.
                        </p>
                    </div>
                    <p className="mb-4">
                        Stále ale ještě nevznikl zákon, který by umožnil existenci odborů, legalizoval
                        kolektivní smlouvy, nebo dovolil legálně stávkovat.
                    </p>
                    <p className="mb-8">
                        Což neznamená, že by se dělnictvo drželo zkrátka…
                    </p>
                    <Image
                        src="/images/chapters/tradition/13.svg"
                        width={400}
                        height={600}
                        alt="obr 13"
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        140. Ano, 140 – zhruba tolik stávek proběhlo na našem území jen mezi lety 1869 a 1873.
                        A to přesto, že snažit se o zlepšení podmínek na pracovišti pořád znamenalo{" "}
                        <span className="green">riskovat vězení</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/tradition/14.svg"
                            width={400}
                            height={600}
                            alt="obr 14"
                            className="rounded mx-auto mt-4 mb-8"
                        />
                        <p className="mb-4">
                            Slova sazeče Jana Bavorského, hájícího se za účast na nelegální stávce, mluví sama
                            za sebe... Co jiného než pocit trapnosti a nespravedlnosti by měla cítit empatická
                            lidská bytost, když se dozví, že za prosbu o důstojnou mzdu se má chodit do vězení?
                        </p>
                    </div>
                    <p className="mb-4">
                        Stávkování a neustálý nátlak se vyplatily. 7. dubna 1870 je vídeňským parlamentem přijatý
                        koaliční zákon. Přiznává zaměstnancům právo na zakládání “koalic”, což v podstatě znamená
                        odborů. Legalizovány jsou i stávky. 
                    </p>
                    <p className="mb-8">
                        Je to zásadní milník v dějinách humanizace práce. Odbory působící na území dnešní České
                        republiky slaví právě toto datum jako počátek své legální činnosti.
                    </p>
                    <Image
                        src="/images/chapters/tradition/15.jpg"
                        width={400}
                        height={600}
                        alt="obr 15"
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-8">
                        Cílem prvních odborových spolků nebylo vybudovat harmonický a rovnostářský svět pro všechny,
                        ale spíše ubránit postavení nejlépe postavených dělníků a řemeslníků, které ohrožovala
                        mechanizace – i tím, že přiváděla do pracovního procesu spoustu nevyučených, dětí a žen.
                    </p>
                    <Image
                        src="/images/chapters/tradition/16.png"
                        width={400}
                        height={600}
                        alt="obr 16"
                        className="rounded mx-auto mb-8"
                    />
                    <p className="mb-4">
                        Dnes si to umíme těžko představit, ale té v době byly pro mnoho dělníků zvyšující se počty
                        žen v oboru známkou jeho degradace. I proto výdělečné práci žen bránily a tuto agendu
                        převzaly i jejich odborové organizace.
                    </p>
                    <p className="mb-4">
                        První odbory tak bohužel bojovaly nejen za práva zaměstnanců, ale často i proti těm hůře
                        postaveným, které braly jako svou konkurenci.
                    </p>
                    <p className="mb-4">
                        Většímu rozvoji dělnického a odborového hnutí také bránila policejní perzekuce,
                        typická pro sedmdesátá a osmdesátá léta 19. století.
                    </p>
                    <p className="mb-8">
                        Na jaře 1873 pak přišel šok. Naštěstí. Proč naštěstí?
                    </p>
                    <div className="flex justify-center">
                        <div className="w-1/2">
                            <Image 
                                src="/images/chapters/tradition/17.png"
                                alt="obr 1" 
                                width={1125}
                                height={633}
                                className="rounded-l w-full"
                            />
                        </div>
                        <div className="w-1/2">
                            <Image 
                                src="/images/chapters/tradition/18.png"
                                width={1125}
                                height={633}
                                alt="obr 2" 
                                className="rounded-r w-full"
                            />
                        </div>
                    </div>
                    <ImageDesc
                        description="Krach burzy ve Vídni nebo o 135 let později na Wall Street — historie se opakuje a společnost
                        se málokdy poučí na dlouho."
                    />
                    <p className="mt-4 mb-4">
                        Krach vídeňské burzy spustil do té doby největší světovou hospodářskou krizi. Balonek přefouklý 
                        kolotočem půjček, úvěrů a peněz existujících jen na papíře prasknul. Následkem krize zkrachovalo
                        mnoho společností, spousta milionářů přišla na mizinu, zavíraly se podniky a tisícovky lidí
                        byly rázem bez práce.
                    </p>
                    <p className="mb-4">
                        To nezní moc dobře, že? Jenže hospodářská krize byla tak silná, že otočila smýšlení lidí o funkci
                        státu. Neoabsolutistický stát přál kapitalismu bez přívlastků, o lidi v nouzi se moc nestaral.
                        Po společenské katastrofě roku 1873 ale mnoho politiků i ekonomů argumentovalo, že má stát
                        začít usměrňovat hospodářské i společenské vztahy.
                    </p>
                    <p className="mb-8">
                        Následkem toho se habsburské Rakousko stalo jedním ze světových průkopníků sociálního zákonodárství.
                        Vznikl úřad živnostenských inspektorů dohlížejících na bezpečnost práce, omezovala se pracovní
                        doba, úplně byla zakázána dětská práce a dokonce byla uzákoněna i státní podpora pro zdravotní
                        a úrazové pojištění.
                    </p>
                    <Image
                        src="/images/chapters/tradition/19.webp"
                        width={600}
                        height={600}
                        alt="obr 19"
                        className="rounded mx-auto mb-8"
                    />
                </div>
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="3" />
                    <SubchapterHeading
                        id="3"
                        chapterNumber="3.3"
                        chapterTitle="It's a Big, Big world aneb Masová společnost a nová odborová strategie"
                        setShown={shownHandler}
                        shown={shown}
                    />
                </div>
                <div className={`mb-12 ${shown.includes('3') ? "block" : "hidden"}`}>
                    <SideImage side="right" mainImageId={3} />
                    <div className="flex justify-center mt-8">
                        <div className="w-1/2">
                            <Image 
                                src="/images/chapters/tradition/20.png"
                                alt="obr 1" 
                                width={1125}
                                height={633}
                                className="rounded-l w-full"
                            />
                        </div>
                        <div className="w-1/2">
                            <Image 
                                src="/images/chapters/tradition/21.jpg"
                                width={1125}
                                height={633}
                                alt="obr 2" 
                                className="rounded-r w-full"
                            />
                        </div>
                    </div>
                    <ImageDesc
                        description="Doba kolem roku 1900 je si mnohem bližší s tou naší, než s dobou roku 1800 – Václavák
                        se koneckonců taky moc nezměnil"
                    />
                    <p className="mt-4 mb-4">
                        Na přelomu 19. a 20. století byla česká společnost <span className="green">úplně jiná</span> než na počátku 19. století.
                    </p>
                    <p className={`transition-all duration-500 ease-in-out overflow-hidden green mb-4 ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        Většina lidí už žila ve městech, veřejné osvětlení a byty (aspoň vyšších vrstev) byly poháněny elektřinou, noviny každodenně
                        přinášely zprávy z parlamentu i o skandálech celebrit, ulicemi jezdily tramvaje a první auta a lidé mohli komunikovat pomocí
                        telefonu nebo navštěvovat kina a fotbalové zápasy.
                    </p>
                    <p className="mb-4">
                        Život už moc nepřipomínal svět rolnických poddaných, králů “z boží milost”, pomalého tempa výroby a starých privilegií z
                        doby okolo roku 1800. Žilo se ve společnosti vrcholně moderní, která se už tolik nelišila <span className="green">od naší současné</span>.
                    </p>
                    <p className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        V letech mezi 1890 až 1914 proběhla jedna z největších urbanizačních vln (= přesunů do měst) v dějinách. Do velkých měst přibyla
                        více než třetina obyvatel, někde se počet lidí dokonce až zdvojnásobil. S takovým tempem růstu by v roce 2049 měla Praha zhruba
                        tolik obyvatel jako má teď Berlín. Dovedete si představit, kolik by muselo vzniknout domů, tramvajových trarí, hospod a škol, aby se to zvládlo?
                    </p>
                    <p className="mb-8">
                        Ve čtvrtstoletí mezi rokem 1890 a vypuknutím první světové války (1914) se politika definitivně stává celospolečenským fenoménem.
                        Mluvit do toho, jak bude společnost a stát fungovat už chtěli opravdu všichni. A poprvé v historii cítili, že na to mají právo.
                        Vyvrcholil tím demokratizační proces, který začal revolucí roku 1848.
                    </p>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/0BqxArM3Vwk?si=n31pwjjtH6QbCCdB" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="rounded mx-auto mb-8"
                    ></iframe>
                    <p className="mb-4">
                        Vznikaly <span className="green">politické strany</span> pro různé části populace – podnikatele, sedláky, katolíky,
                        dělníky, rolníky, státní úředníky atd. – a v roce 1907 získali všichni muži starší 24 let právo volit a být volen do parlamentu.
                    </p>
                    <p className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        Tehdejší politické strany už trochu připomínaly ty naše. Existovala pravice a levice, socialisté, konzervativci i liberálové.
                        O kus vzdálenější by nám ale bylo tehdejší dělení na strany zastupující české a německé zájmy – až do takzvaného odsunu po roce
                        1945 bylo obyvatelstvo u nás rozděleno na Čechy (zhruba ⅔) a Němce (⅓ obyvatel). A na přelomu 19. a 20. století byla česká
                        politika vztahem mezi oběma skupinami silně určována.
                    </p>
                    <p className="mb-4">
                        <span className="green">Ženy</span> se volebního práva dočkaly až po roce 1918 se vznikem Československé republiky.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <Image 
                            src="/images/chapters/tradition/22.svg"
                            alt="obr 3" 
                            width={600}
                            height={633}
                            className="mt-4 mb-8 mx-auto"
                        />
                        <p className="mb-4">
                            Tohle je Františka Plamínková. Můžeme jí poděkovat za zrušení celibátu pro učitelky a prosazení hlasovacího práva pro ženy
                            mnohem dříve než jinde ve světě (Švýcarsko 1976? Styďte se, pánové!) Františka byla povahou bojovnice, která se nezalekla
                            ani Hitlera a jeho kohorty a zaplatila za to v roce 1942 svým životem. Františka je opravdová hrdinka. I ty buď jako Františka!
                        </p>
                    </div>
                    <p className="mb-4">
                        O zrod masové politiky se silně zasloužilo i dělnické hnutí. Od konce 19. století přestává být angažovanost odborech nebo ve
                        (hlavně socialistické) straně záležitostí pár desítek dělníků a stává se to respektovanou činností desetitisíců. Kromě politiky
                        se záležitostí všech stává i kultura a občanská společnost – vznikají knihovny pro dělnictvo, divadla, či sportovní a pěvecké spolky.
                    </p>
                    <Image
                        src="/images/chapters/tradition/23.png"
                        alt="obr 4" 
                        width={600}
                        height={633}
                        className="mt-4 mx-auto"
                    />
                    <ImageDesc
                        description="Ne vždycky to šlo hladce – tato pohlednice vznikla jako reakce na vylučování socialistických dělníků ze Sokola."
                    />
                    <p className="mt-4 mb-4">
                        S nově nabitým sebevědomím vycházeli dělníci demonstrovat ještě častěji – třeba za 8hodinovou pracovní dobu.
                        To byl předmět <span className="green">prvomájových demonstrací</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="flex mb-8">
                            <div className="w-2/5">
                                <Image
                                    src="/images/chapters/tradition/24.png"
                                    alt="obr 5" 
                                    width={600}
                                    height={633}
                                    className="mt-4 mb-8 mx-auto"
                                />
                            </div>
                            <div className="w-3/5">
                                <Image
                                    src="/images/chapters/tradition/25.png"
                                    alt="obr 6" 
                                    width={600}
                                    height={633}
                                    className="mt-12 mb-8 mx-auto"
                                />
                            </div>
                        </div>
                        <p className="mb-4">
                            Máte “prvomájový průvod” spojený s nepříjemnou představu pionýrů z minulého režimu? Nejste sami. Ve
                            skutečnosti je ale původ akce v Chicagu,  kde na začátku května 1886 stávkovalo několik tisíc dělníků
                            za omezení pracovní doby na 8 hodin práce denně bez ztráty mzdy. Během následných protestů bylo několik
                            dělníků zabito a několik dalších neprávem popraveno. Na jejich památku se od roku 1890 slavil svátek
                            práce a s hlavním požadavkem 8hodinové pracovní doby – a to v každém větším evropském městě.
                        </p>
                    </div>
                    <p className="mb-8">
                        V době masové politiky se změnila i strategie odborů. Už to neměly být exkluzivní spolky nejlépe
                        postavených dělníků, ale masové organizace pro všechny, včetně nekvalifikovaných dělníků a dělnic.
                    </p>
                    <Image
                        src="/images/chapters/tradition/26.png"
                        alt="obr 8" 
                        width={300}
                        height={333}
                        className="mb-4 mx-auto"
                    />
                    <p className="mb-8 text-center">
                        Tato změna strategie s sebou přinesla i zrod odborových centrál.
                    </p>
                    <Image
                        src="/images/chapters/tradition/27.png"
                        alt="obr 9" 
                        width={300}
                        height={333}
                        className="mb-8 mx-auto"
                    />
                    <p className="mb-8">
                        Odoborová centrála znamená, že se dělníci a dělnice přestali sdružovat jen v rámci oboru (třeba kovodělníci),
                        města, nebo podniku, ale úplně napříč vším. Těmto “deštníkovým organizacím” se mělo říkat odborové centrály.
                        Misí bylo skrze vzájemnou solidaritu a sdílenou know-how dosáhnout nějlepších výsledků jednání se zaměstnavateli i státem.
                    </p>
                    <div className="flex mb-2">
                        <div className="w-1/4">
                            <Image
                                src="/images/chapters/tradition/28.svg"
                                alt="obr 10" 
                                width={600}
                                height={333}
                                className="mb-8 mx-auto w-full"
                            />
                        </div>
                        <div className="w-3/4 ms-8">
                            <p>
                                <span className="fellix-bold me-2">1878</span> založení Českoslovanské sociálně demokratické strany dělnické – první české strany orientující se na dělnictvo <br/>
                                <span className="fellix-bold me-2">1893</span> Vznik Říšské odborové komise, první odborové centrály v habsburské monarchii <br/>
                                <span className="fellix-bold me-2">1897</span> Vznik Odborového sdružení českoslovanského (OSČ), první ryze české odborové centrály (vymezovala se vůči Říšské centrále, která nezastupovala adekvátně český hlas) <br/>
                                <span className="fellix-bold me-2">1907</span> V habsburském Rakousku uzákoněno všeobecné a rovné hlasovací volební právo pro muže: od té doby se obyčejní pracující mohou na našem území podílet na volbách<br/>
                            </p>
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="w-3/4">
                            <p className="mt-12">
                                “Odborové sdružení jest zprostředkovatelem, prostřednictvím jehož silnější odbory slabší mravně i hmotně podporují,
                                odborové sdružení pracuje a napomáhá k zakládání odborových organizací tam, kde tyto dosaváde nestávají a působí k
                                tomu, aby všechno organizované dělnictvo v boji hospodářském společné postupovalo a vzájemně se podporovalo.”<br/><br/>
                                Ze stanov OSČ (1897)
                            </p>
                        </div>
                        <div className="w-1/4">
                            <Image
                                src="/images/chapters/tradition/30.svg"
                                alt="obr 13" 
                                width={600}
                                height={333}
                                className="mx-auto w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="4" />
                    <SubchapterHeading
                        id="4"
                        chapterNumber="3.4"
                        chapterTitle="And Justice For All aneb Za sociální spravedlnost a demokracii"
                        setShown={shownHandler}
                        shown={shown}
                    />
                </div>
                <div className={`mb-12 ${shown.includes('4') ? "block" : "hidden"}`}>
                    <SideImage side="left" mainImageId={3} />
                    <p className="mt-8 mb-8">
                        Začátek dvacátého století byl v Evropě naplněn optimismem, že všechno směřuje k lepšímu. Pak ale přišla první světová válka.
                    </p>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/nIAYtHiCjN8?si=8OIDr85VrEXKY2vH" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="mx-auto rounded mb-8"
                    ></iframe>
                    <p className="mb-4">
                        Sto let Evropa nepoznala velkou válku. Byl to naprostý šok.
                        Doposavad <Link href={Path.FEARLESS}>nejničivější konflikt v dějinách</Link>.
                    </p>
                    <p className="mb-4">
                        Válka přerušila veškeré demokratické tendence, poslance vystřídali generálové, vrátily se fenomény jako hladomor nebo epidemie.
                        Částečně se navrátila i neslavná dětská práce. Muži bojovali za císaře pána, a tak to holt musely odedřít ženy a děti.
                    </p>
                    <p className="mb-4">
                        Rakousko-Uhersko patřilo v první světové válce mezi poražené. Jeho <span className="green">území se rozpadlo na spoustu nových států</span>.
                        Jedním z nich byla i Československá republika, a.k.a. První republika. Vyhlášena byla 28. října 1918.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Mapa Evropy před a po první světové válce. Všimněte si území Rakouska Uherska.
                        </p>
                        <div className="flex mb-8">
                            <div className="w-1/2">
                                <Image
                                    src="/images/chapters/tradition/31.png"
                                    alt="obr 14" 
                                    width={300}
                                    height={333}
                                    className="rounded-l w-full"
                                />
                            </div>
                            <div className="w-1/2">
                                <Image
                                    src="/images/chapters/tradition/32.png"
                                    alt="obr 15" 
                                    width={300}
                                    height={333}
                                    className="rounded-r w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <div className="w-1/3">
                            <Image
                                src="/images/chapters/tradition/33.png"
                                alt="obr 14" 
                                width={300}
                                height={333}
                                className="rounded-l w-full"
                            />
                        </div>
                        <div className="w-2/3 mt-12">
                            <p className="ms-8 mb-4">
                                Nová republika chtěla být sociálnější a spravedlivější. Z toho důvodu (zejména zpočátku) umožnila odborům zasahovat do mnoha
                                oblastí sociální péče a ochrany dělnictva. Narostl počet kolektivních smluv: jen roku 1920 jich bylo uzavřeno 1259 smluv a
                                pokryly téměř milion zaměstnanců!  Československo bylo dokonce mezi devíti státy, které se podílely na vypracování
                                ústavy Mezinárodní organizace práce.
                            </p>
                            <p className="ms-8">
                                Největší odborovou ústřednou zůstalo OSČ,  pouze vyměnilo název “českoslovanské” na “československé”.
                            </p>
                        </div>
                    </div>
                    <Image
                        src="/images/chapters/tradition/34.png"
                        alt="obr 15" 
                        width={500}
                        height={333}
                        className="mx-auto"
                    />
                    <ImageDesc
                        description="Rudolf Tayerle, generální tajemník OSČ a socialistický poslanec, zavražděný nacisty v koncentračním táboře"
                    />
                    <p className="mt-4 mb-8">
                        V éře první republiky začaly také ůst počty odborářů a odborářek z nedělnického prostředí. Přidávali se lidé z úřadů i služeb a mimo jiné i umělci.
                    </p>
                    <p className="mb-4 text-center fellix-semibold text-2xl">
                        TOP 5 ZÁKONŮ PRVNÍ REPUBLIKY <br/>
                        (Z HLEDISKA SVĚTA PRÁCE)
                    </p>
                    <Image
                        src="/images/chapters/tradition/29.png"
                        alt="obr 10" 
                        width={600}
                        height={333}
                        className="mb-8 mx-auto"
                    />
                    <p className="mb-8">
                        Demokratické a sociální ambice první Československé republiky byly bohužel přerušeny globální hospodářskou <Link href={Path.CHANGES} className="underline">krizí</Link>{" "}
                        z přelomu 20. a 30. let, která byla jednou z důležitých příčin celoevropského rozpadu důvěry v demokracii a počátku druhé světové války.
                    </p>
                    <Image
                        src="/images/chapters/tradition/35.jpg"
                        alt="obr 11" 
                        width={400}
                        height={333}
                        className="mb-12 mx-auto"
                    />
                </div>
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="5" />
                    <SubchapterHeading
                        id="5"
                        chapterNumber="3.5"
                        chapterTitle="Darkest Hour aneb Práce a odbory v nejtemnější době lidství"
                        setShown={shownHandler}
                        shown={shown}
                    />
                </div>
                <div className={`mb-12 ${shown.includes('5') ? "block" : "hidden"}`}>
                    <SideImage side="right" mainImageId={3} />
                    <p className="mt-8 mb-8">
                        V roce 1933 vyhrála v Německu volby nacistická strana (NSDAP) v čele s Adolfem Hitlerem. Pustili se do demontáže
                        demokratické republiky a kam to všechno dohnali už tušíme.
                    </p>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/mBTGEvwZ0ns?si=-GYexO2P5x9LvoqC" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="mx-auto"
                    ></iframe>
                    <ImageDesc
                        description="Kdo nezvedal pravici, tomu šlo v hitlerovském Německu doslova o život..."
                    />
                    <p className="mt-4 mb-4">
                        Ale jak se vlastně dostali nacisté k moci? 
                    </p>
                    <p className="mb-8">
                        Pomohla jim k tomu právě <span className="green">hospodářská krize</span> a pocit ponížení po prohrané první světové válce.
                        Hitler sliboval lidem všemocný lék: obnovení národní hrdosti a nadvládu árijské rasy. Šikovně
                        ukazoval prstem na všechny, kvůli kterým se mají Němci špatně a které je třeba rozdrtit, aby
                        bylo možné vytvořit velkou německou říši. Československo bylo první na řadě.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <Image
                            src="/images/chapters/tradition/36.png"
                            alt="obr 12" 
                            width={400}
                            height={333}
                            className="mb-8 rounded mx-auto"
                        />
                        <p className="mb-4">
                            Hitler a nacisté se pokoušeli oslovit především dělnictvo, zasažené krizí. (NSDAP znamená mimochodem v češtině Národně
                            sociální německá dělnická strana.) Na tomto volebním plakátu z posledních svobodných voleb v březnu 1933 nacisté slibovali
                            dělníkům “práci a chleba”, zatímco socialisté a komunisté jim prý mohli dát pouze “bídu a hlad”.
                        </p>
                        <p className="mb-4">
                            Co je na tom nejdůležitější? Kdykoli nastane velká krize, má společnost dvě možnosti – poučit se a zlepšit situaci všech,
                            nebo se propadnout do chudoby a zahájit bratrovražedný boj, ze kterého nezřídka vychází vítězně ti, co mluví nejvíc nenávistně.
                        </p>
                    </div>
                    <p className="mb-4">
                        Nacisté využili toho, že se čeští Němci po vzniku Československa v roce 1918 stali z habsburského “národa number one” druhořadou
                        menšinou. Hitler jim nabízel velkolepý život v říši všech Němců. Pohraniční oblasti Československa, kde žilo německé obyvatelstvo,
                        na to slyšely. A evropské mocnosti, vystrašené po první světové válce, agresivnímu Hitlerovi všemožně ustupovaly,
                        až mu <span className="green">ustoupily úplně</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-4">
                            Na konci září 1938 byla vydána Mnichovská dohoda, kterou příhraniční oblasti v Čechách a na Moravě připadly německé Třetí říši.
                            Tím začala takzvaná Druhá republika, která ale trvala jen několik měsíců.
                        </p>
                        <p className="mb-8">
                            To byl ale teprve začátek. V březnu 1939 přišel úplný konec Československa. Slovensko se oodpojilo a vyhlásilo samostatný Slovenský
                            štát, přátelský k Hitlerovi. Na české území vstoupila německá armáda a 16. března byl vyhlášen Protektorát Čechy a Morava, okupovaný
                            stát podléhající přímé kontrole Třetí říše.
                        </p>
                        <Image
                            src="/images/chapters/tradition/37.png"
                            alt="obr 13"
                            width={600}
                            height={333}
                            className="mb-8 mx-auto"
                        />
                    </div>
                    <p className="mb-4">
                        Nacisté měli nadvládu našim územím v podobě Protektorátu až do osvobození v květnu 1945. Nacistická továrna na smrt během tohoto období vyhladila
                        většinu českých Židů a Romů. Tisíce Čechů, <span className="green">kteří se postavili režimu</span>,
                        skončilo svůj život v koncentračních táborech nebo na popravištích. O život příšlo zhruba 350 000 tisíc obyvatel Československa (z toho 270 000
                        Židů). Období Protektorátu je jednoznačně nejčernějším obdobím českých dějin.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/3YM3AYZaTZ0?si=CTV2MgH8_Og1Ni9V"
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="mt-4 mb-8 mx-auto rounded"
                        ></iframe>
                        <p className="mb-4">
                            Bohužel to v realitě nefunguje jako ve filmu a žádný z desítek tisíc zavražděných neměl takové štěstí jako Brad Pitt a jeho jednotka Hanebných
                            panchartů, kterým se ve stejnojmenném Tarantinově filmu podařilo přepsat dějiny a zastavit nacistické běsnění o pár let dříve.
                        </p>
                    </div>
                    <p className="mb-4">
                        Cílem nacistů nebylo (aspoň ne hned) nás všechny povraždit a do armády jsme se jim jako neárijský národ nehodili.
                        Protektorát potřeboval především <span className="green">sílu a výkon českých továren</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Zejména šlo o strategické obory jako byly zbrojovky, strojírenské továrny nebo automobilky. Na české podniky uvalena německá správa – český management
                            byl sice ponechán ve vedení podniků, fakticky je ale vedli němečtí dozorci a techničtí odborníci. Židovské podniky byly kompletně arizovány – vyvlastněny
                            původním vlastníkům a převedeny na majitele “árijského původu”.
                        </p>
                        <div className="flex mb-4">
                            <div className="w-1/2">
                                <Image
                                    src="/images/chapters/tradition/38.png"
                                    alt="obr 14"
                                    width={300}
                                    height={333}
                                    className="mb-8 mx-auto rounded"
                                />
                            </div>
                            <div className="w-1/2">
                                <Image
                                    src="/images/chapters/tradition/39.webp"
                                    alt="obr 15"
                                    width={297}
                                    height={333}
                                    className="mb-8 mx-auto rounded"
                                />
                            </div>
                        </div>
                        <p className="mb-4">
                            Aby zvítězili ve své “válce proti dobru” potřebovali Němci kovy a výrobní materiály stejně nutně jako marvelovský
                            padouch Thanos potřeboval “kameny nekonečna”.
                        </p>
                    </div>
                    <p className="mb-4">
                        Jelikož samotné boje neprobíhaly na území Protektorátu, nacistická okupační správa se pokoušela udržovat dojem
                        běžného života. Výkonnost dělníků stimulovali metodou “cukru a biče”. 
                    </p>
                    <p className="mb-4">
                        Těm, co to “moc neřešili” mohlo být docela dobře – protektorátní správa například organizovala podnikové dovolené
                        v nově zřízených rekreačních objektech a pro desetitisíce dělníků to byla vůbec první skutečná dovolená. V podnicích
                        působily orchestry a pořádaly se filmové večery. Běda ale tomu, kdo kladl odpor, nebo válečnou výrobu sabotoval,
                        zpomaloval a podobně. Za to hrozily tvrdé tresty na škále od vězení, přes nucené práce, koncentrační tábory, až po trest smrti.
                    </p>
                    <p className="mb-4">
                        Svobodné odbory nacistům také nevoněly – a tak je zakázali a místo toho stanovili Národní odborovou ústřednu zaměstnaneckou
                        (NOÚZ). Jejím účelem byl dohled nad dodržováním norem válečné výroby a boj proti odboji v jednotlivých podnicích.
                    </p>
                    <p className="mb-8">
                        To neznamená, že to odboroví vůdci vzdávali – naopak, bojovali dál a často je to stálo život.
                    </p>
                    <Image
                        src="/images/chapters/tradition/40.png"
                        alt="obr 16"
                        width={800}
                        height={333}
                        className="mb-8 mx-auto rounded"
                    />
                </div>
                <div className="mt-8 mb-4 relative">
                    <CollapseButton shown={shown} setShown={shownHandler} id="6" />
                    <SubchapterHeading
                        id="6"
                        chapterNumber="3.6"
                        chapterTitle="Bread and Roses aneb Vítězství pracující třídy?"
                        setShown={shownHandler}
                        shown={shown}
                    />
                </div>
                <div className={`mb-12 ${shown.includes('6') ? "block" : "hidden"}`}>
                    <SideImage side="left" mainImageId={3} />
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/4BI1cun-1GM?si=8KQCMEHeDYztd2-Q" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="mt-8 rounded mx-auto mb-8"
                    ></iframe>
                    <p className="mb-4">
                        Nacistická říše byla ve střední Evropě poražena na jaře 1945. Obrovskou roli v tom hrála i vojenská síla komunistického
                        Sovětského svazu, předchůdce současného Ruska. Vděčnost vůči Sovětskému svazu pomohla této říši šířit ve střední Evropě
                        svůj vliv – a to i u nás. Sověti osvobodili i Prahu a Československo si zapsali na svůj pomyslný “wishlist”.
                    </p>
                    <p className="mb-8">
                        Po roce 1945 se navíc plně neobnovila demokratická politická scéna jako před válkou. Hlavním hráčem se stala Komunistická
                        strana Československa (KSČ) a ta měla po sovětském vzoru jasně monopolní tendence – vítěz holt bere vše.
                    </p>
                    <Image
                        src="/images/chapters/tradition/41.png"
                        alt="obr 17"
                        width={600}
                        height={333}
                        className="mb-8 mx-auto rounded"
                    />
                    <p className="mb-4">
                        Na jaře 1946 pak komunisté s přehledem vyhráli volby. V únoru 1948 komunisté definitivně převzali veškerou moc ve státě a
                        začali s destrukcí parlamentní demokracie. Na cestě k absolutní moci jim pomohla i podpora Sovětského svazu. 
                    </p>
                    <p className="mb-4">
                        Na dlouhých 40 let se ustavila vláda jedné strany. Volby se sice konaly, ale stalo se z nich divadlo, které jen udržovalo
                        zdání demokracie. Nebyli jsme v tom samozřejmě sami. Svět se rozdělil na západní a východní blok a do toho východního,
                        sovětského, spadaly desítky států, více či méně pod nadvládou Moskvy. Začala takzvaná <span className="green">studená válka</span>.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                        <p>
                            Vysvětlit téměř čtyři desítky let trvající konflikt na ploše odstavce není možné – zahrnuje tisíce lokálních (jako
                            rozdělený Berlín, kde uprostřed města vyrostla zeď, která dělila dvě nesmiřitelné říše a často se celé rodiny roky
                            neviděly) i globálních (jako „kubánská krize“, kdy byl svět pět minut od atomové války a potenciálního celoplanetárního
                            zničení) příběhů. Možná právě příběhy dokáží komplexitu rozděleného svět vystihnout nejlépe a proto stojí za to pustit
                            si některý z filmů, které tuto dobu vystihují – <Link href="https://screenrant.com/cold-war-movies-films-setting-ranked/" className="underline">tady je žebříček top 25</Link>.
                        </p>
                    </div>
                    <p className="mb-4">
                        Oficiálně u nás vládnul socialismus. Ve sféře práce to znamenalo zrušení soukromých podniků. Konkurenci podnikatelů měl
                        vystřídat centrální plánování státu. Vedoucí činovníci KSČ (komunistické strany) označovali nastolení socialismu pod
                        jejich vedením za dokončení snah dělnického hnutí a definitivní vítězství obyčejných pracujících.
                    </p>
                    <p className="mb-4">
                        Těch se ale samozřejmě nikdo na nic neptal.
                    </p>
                    <p className="mb-4">
                        Socialistický stát se sám prohlásil za garanta dobrých pracovních podmínek a <span className="green">pro jistotu</span>{" "}
                        – podobně jako v případě organizací žen – ochromil veškeré občanské i odborové aktivity zdola.
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Tuto politiku užíval český socialistický stát rád – navenek se tvářil jako dobrý rodič, který chce pro své ovečky jen to
                            nejlepší a trestá je, jen když nejsou poslušné. “K čemu byste potřebovali odbory, miláčci? Strana už vše zařídila za vás.”
                            Ve skutečnosti byla jeho dobrota asi tak nevinná, jako atmosféra sálající z videoklipu Aphexe Twina “Come to Daddy”.
                        </p>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/TZ827lkktYs?si=CyePtv7vfl_u-CsZ" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="mx-auto mb-8 rounded"
                        ></iframe>
                    </div>
                    <p className="mb-8">
                        Svobodný rozvoj odborového hnutí byl znemožněn. Jediným centrálním odborovým svazem se stalo ROH - Revoluční odborové hnutí.
                    </p>
                    <Image
                        src="/images/chapters/tradition/42.png"
                        alt="obr 18"
                        width={400}
                        height={333}
                        className="mb-12 mx-auto rounded"
                    />
                    <div className="flex">
                        <div className="w-1/2">
                            <Image
                                src="/images/chapters/tradition/43.png"
                                alt="obr 19"
                                width={300}
                                height={333}
                                className="mx-auto rounded"
                            />
                        </div>
                        <div className="w-1/2">
                            <Image
                                src="/images/chapters/tradition/44.png"
                                alt="obr 20"
                                width={282}
                                height={333}
                                className="mx-auto rounded"
                            />
                        </div>
                    </div>
                    <ImageDesc
                        description="Estetika socialistického realismu (jak se jí říkalo) se do paměti mnoha generací v kombinaci s neupřímými slogany vepsala
                        jako něco falešného, až parodického. Jak působí všechny ty nadšené kombajnistky a slévači na vás?"
                    />
                    <p className="mt-4 mb-4">
                        <Link href="https://cs.wikipedia.org/wiki/Pra%C5%BEsk%C3%A9_jaro" target="_blank" className="underline">V roce 1968</Link> došlo k celé společnosti k jakémusi
                        uvolnění – kulturnímu, politickému, ekonomickému. Zdálo se, že takzvaný socialismus by se mohl změnit v ten
                        skutečný – a naslouchat potřebám občanů.
                    </p>
                    <p className="mb-8">
                        K vlastní činnosti se probudily i odbory. Návrh programu ROH z jara 1968 hovořil o “nové odborové politice”, v jejímž rámci
                        by odbory mohly být opět nezávislé na státu a straně. Z nadvlády jedné strany byla společnost unavená – cílem reformních
                        snah bylo mimo jiné aby byly v jednotlivých podnicích založeny podnikové rady pracujících, které by se podílely na chodu
                        podniků. V podstatě by tak sami zaměstnanci řídili “firmy”, pro které pracovali.
                    </p>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/FR-kWa5xQns?si=cfBS5uVuGbqJUzGf" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="mb-8 rounded mx-auto"
                    ></iframe>
                    <p className="mb-4">
                        Namísto toho potlačil režim – s pomocí ruské armády – podobné snahy silou. V následujících letech nastalo období
                        takzvané <span className="green">normalizace</span>. Zaměstnanci zápas o znovuzískání svobody a vlastních odborových
                        organizací tentokrát prohráli. V odborech – stejně jako ve zbytku společnosti – na počátku 70. let probíhaly čistky
                    </p>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden green ${toggleMode === Mode.FUN ? "opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="mb-8">
                            Co bylo reálnou politickou náplní období normalizace si můžete snadno vygooglit. S trochou nadsázky lze tuto dobu
                            ale shrnout jako období morálního a kulturního úpadku, snahy o potlačení všech nadějí, vzestupu toho nejhoršího z
                            české popmusic, nárůstu udavačství, vzniku mentality “kdo nekrade, okrádá rodinu” a podobných lahůdek, které patří
                            k tomu horšímu z pomyslné “české povahy”.
                        </p>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/qekkOm_Py2Y?si=85i3b_oVau7yWSdo"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="mb-8 mx-auto rounded"
                        ></iframe>
                    </div>
                    <p className="mb-4">
                        Jak slábla (ekonomická i politická) síla Sovětského svazu, začalo být v mnoha zemích – včetně Československa – jasné,
                        že doba vlády jedné strany je u konce. Vlna změna dospěla i k nám a vypukla <Link href="https://cs.wikipedia.org/wiki/Sametov%C3%A1_revoluce" target="_blank" className="underline">Sametová revoluce</Link>.
                    </p>
                    <p className="mb-8">
                        Odbory se rozhodly ji podpořit vlastní strategií – generální stávkou, která byla vyhlášena na 27. Listopadu 1989 od
                        12 do 14 hodin. Tři čtvrtiny všech zaměstnanců v Československu na dvě hodiny přestaly pracovat na podporu šestibodového
                        programu studentů a Občanského fóra. Od tohoto dne již bylo definitivně jasné, že vláda komunistické strany padne.
                    </p>
                    <Image
                        src="/images/chapters/tradition/45.png"
                        alt="obr 21"
                        width={600}
                        height={333}
                        className="mx-auto rounded"
                    />
                    <ImageDesc
                        description="Neprotestovalo se jen v Praze – stávka byla skutečně generální, zde například v Hořicích."
                    />
                </div>
                <div className="mt-24 text-center">
                    <Link
                        className="btn-primary-large"
                        href={Path.VELVET}
                    >
                        <span className="text-white">Pokračovat</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default TraditionPage;
